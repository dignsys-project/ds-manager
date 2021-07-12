import {
  Component,
  ElementRef,
  EventEmitter,
  Input,
  OnDestroy,
  OnInit,
  Output,
  ViewChild,
} from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { element } from 'protractor';
import { BehaviorSubject, fromEvent, Observable } from 'rxjs';
import { filter, startWith, takeWhile } from 'rxjs/operators';
import { ResourceElement } from 'src/app/models/resource-element';
import { ResourceService } from 'src/app/services/resource.service';

@Component({
  selector: 'app-components-resources-list-v2',
  templateUrl: './components-resources-list-v2.component.html',
  styleUrls: ['./components-resources-list-v2.component.scss'],
})
export class ComponentsResourcesListV2Component implements OnInit, OnDestroy {
  private _isProcess: boolean = false;

  private _filteredResourceNames$: BehaviorSubject<
    Array<string>
  > = new BehaviorSubject<Array<string>>([]);

  private _filteredResources$: BehaviorSubject<
    Array<ResourceElement>
  > = new BehaviorSubject<Array<ResourceElement>>([]);

  private _filteredValue: string;

  @ViewChild('SCENE_LIST')
  sceneList: ElementRef<HTMLUListElement>;

  searchControl: FormControl;

  filteredResources$: Observable<Array<ResourceElement>>;
  filteredResourceNames$: Observable<Array<string>>;

  /**
   * Scene base elements
   */
  @Input()
  set elements(elements: Array<ResourceElement>) {
    this._elements = elements;

    console.debug(elements.length);

    this._selectedElements.splice(0, this._selectedElements.length);

    this.filteredAndSortResources(undefined);

    if (undefined != this.searchControl) {
      this.searchControl.setValue('');
    }
  }

  /**
   * 다중 선태 가능 여부
   */
  @Input()
  kind: 'multiple' | 'single' = 'multiple';

  /**
   * drag and drop disable
   */
  @Input()
  dragDisabled: boolean = true;

  /**
   * isProcess for overlay
   */
  @Input()
  set isProcess(isProcess: boolean) {
    this._isProcess = isProcess;
  }

  @Output()
  selected: EventEmitter<Array<ResourceElement>> = new EventEmitter<
    Array<ResourceElement>
  >();

  get isProcess(): boolean {
    return this._isProcess;
  }

  private _subscribe: boolean = true;

  private _elements: Array<ResourceElement>;

  private _hoverResourceId: number;

  private _selectedElements: Array<ResourceElement>;

  private _sourceIndex: number = undefined;

  private _type: 'detail' | 'normal' = 'detail';

  private _useControl: boolean = false;
  private _useShift: boolean = false;

  private get isMultiple(): boolean {
    return this.kind == 'multiple';
  }

  get hasElements(): boolean {
    return this.elements?.length > 0;
  }

  get isNormal(): boolean {
    return this._type == 'normal';
  }

  get isDetail(): boolean {
    return !this.isNormal;
  }

  get elements(): Array<ResourceElement> {
    return this._elements;
  }

  get selectedItemCount(): number {
    return this._selectedElements?.length;
  }

  get selectedElements(): Array<number> {
    return this._selectedElements.map((x) => x.resourceId);
  }

  constructor(private resourceService: ResourceService) {
    this.filteredResourceNames$ = this._filteredResourceNames$.asObservable();
    this.filteredResources$ = this._filteredResources$.asObservable();

    // create form control
    this.searchControl = new FormControl('', [Validators.maxLength(50)]);

    // subscribe for search control
    this.searchControl.valueChanges
      .pipe(takeWhile(() => this._subscribe))
      .pipe(startWith(''))
      .subscribe((value: string) => {
        if (value?.length > 50) {
          return;
        }

        this.filteredAndSortResources(value?.length <= 0 ? undefined : value);
        this._filteredValue = value;
      });

    this._selectedElements = new Array<ResourceElement>();

    fromEvent(document, 'keydown')
      .pipe(takeWhile(() => this._subscribe))
      .subscribe((x: KeyboardEvent) => {
        switch (x.code.toLocaleLowerCase()) {
          case 'shiftleft':
          case 'shiftright':
            if (!this._useControl) {
              this._useShift = true;
            }

            break;
          case 'controlleft':
          case 'controlright':
            if (!this._useShift) {
              this._useControl = true;
            }
            break;
        }
      });

    fromEvent(document, 'keyup')
      .pipe(
        takeWhile(() => this._subscribe && (this._useControl || this._useShift))
      )

      .subscribe((x: KeyboardEvent) => {
        switch (x.code.toLocaleLowerCase()) {
          case 'shiftleft':
          case 'shiftright':
            this._useShift = false;
            this._sourceIndex = undefined;
            break;
          case 'controlleft':
          case 'controlright':
            this._useControl = false;
            break;
        }
      });
  }

  ngOnDestroy(): void {
    this._subscribe = false;
  }

  ngOnInit(): void {}

  isHoverItem(element: ResourceElement): boolean {
    return this._hoverResourceId == element.resourceId;
  }

  isSelectedItem(element: ResourceElement): boolean {
    return (
      -1 !=
      this._selectedElements.findIndex(
        (x) => x.resourceId == element.resourceId
      )
    );
  }

  havePreviewResource(item: ResourceElement): boolean {
    return undefined != item?.previewResource;
  }

  /**
   *
   * @param event
   */
  onDropListDropped(event: any) {}

  /**
   * On clicked scene base element
   * @param element : ResourceElement
   */
  onClickedResourceItem(element: ResourceElement) {
    let index = this._selectedElements.findIndex(
      (x) => x.resourceId == element.resourceId
    );

    // base clicked
    if (!this._useControl && !this._useShift) {
      this._selectedElements.splice(0, this._selectedElements.length);
    }

    if (this._useShift && undefined == this._sourceIndex) {
      this._sourceIndex = 0;

      if (this._selectedElements.length > 0) {
        const lastElement = this._selectedElements[
          this._selectedElements.length - 1
        ];
        if (null != lastElement) {
          this._sourceIndex = this._elements.findIndex(
            (x) => x.resourceId == lastElement.resourceId
          );
        }
      }
    }

    if (this._useShift) {
      // find dest index
      const destIndex = this._elements.findIndex(
        (x) => x.resourceId == element.resourceId
      );

      let min = this._sourceIndex > destIndex ? destIndex : this._sourceIndex;
      let max = this._sourceIndex > destIndex ? this._sourceIndex : destIndex;

      this._selectedElements.splice(0, this._selectedElements.length);

      index = -1;

      this._elements.forEach((value: ResourceElement, index: number) => {
        if ((index > min && index < max) || index == this._sourceIndex) {
          this._selectedElements.push(value);
        }
      });
    }

    // control clicked
    if (-1 != index) {
      this._selectedElements.splice(index, 1);
    } else {
      this._selectedElements.push(element);
    }

    this.selected.next(this._selectedElements);
  }

  // On clicked scenes-container__menus detail
  onClickedListDetail() {
    const classList = this.sceneList.nativeElement.classList;
    if (classList.contains('n-items')) {
      classList.remove('n-items');
    }

    if (!classList.contains('d-items')) {
      classList.add('d-items');
    }

    this._type = 'detail';
  }

  // On clicked scenes-container__menus normal
  onClickedListNormal() {
    const classList = this.sceneList.nativeElement.classList;
    if (classList.contains('d-items')) {
      classList.remove('d-items');
    }
    if (!classList.contains('n-items')) {
      classList.add('n-items');
    }

    this._type = 'normal';
  }

  getPreviewResourceLocation(element: ResourceElement): string {
    if (element == undefined) {
      return '';
    }

    if (undefined == element.previewResource) {
      return '';
    }

    return this.resourceService.getPreviewResourceAddress(
      element.previewResource
    );
  }

  getIconResourceLocation(): string {
    return 'assets/pdf-preview.svg';
  }

  // On mouse enter scene base element
  onMouseEnter(element: ResourceElement) {
    this._hoverResourceId = element.resourceId;
  }

  // On mouse leave scene base element
  onMouseLeave(element: ResourceElement) {
    this._hoverResourceId = undefined;
  }

  private filteredAndSortResources(name: string | undefined): void {
    let elements = this._filteredResources(name);
    if (undefined != elements) {
      // TODO : sort elements
    }

    const names = elements?.map((x) => x.name);

    this._filteredResources$.next(elements);
    this._filteredResourceNames$.next(elements?.map((x) => x.name));
  }

  private _filteredResources(name: string | undefined): Array<ResourceElement> {
    if (undefined == name) {
      return this._elements;
    }

    const filterName = name.toLowerCase();

    return this._elements?.filter(
      (x) => 0 == x.name.toLowerCase().indexOf(filterName)
    );
  }
}
