import { createTokenForExternalReference } from '@angular/compiler/src/identifiers';
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
import { BehaviorSubject, fromEvent, Observable } from 'rxjs';
import { map, startWith, takeWhile } from 'rxjs/operators';
import { ResourceElement } from 'src/app/models/resource-element';
import { SceneBaseElement } from 'src/app/models/scene-base-element';
import { ResourceService } from 'src/app/services/resource.service';

@Component({
  selector: 'app-components-scenes-list-v2',
  templateUrl: './components-scenes-list-v2.component.html',
  styleUrls: ['./components-scenes-list-v2.component.scss'],
})
export class ComponentsScenesListV2Component implements OnInit, OnDestroy {
  private _isProcess: boolean = false;

  @ViewChild('SCENE_LIST')
  sceneList: ElementRef<HTMLUListElement>;

  searchControl: FormControl;

  /**
   * Scene base elements
   */
  @Input()
  set elements(elements: Array<SceneBaseElement>) {
    this._elements = elements;

    this._selectedElements.splice(0, this._selectedElements.length);

    this.filteredAndSortScenes(undefined);

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
  selected: EventEmitter<Array<SceneBaseElement>> = new EventEmitter<
    Array<SceneBaseElement>
  >();

  get isProcess(): boolean {
    return this._isProcess;
  }

  private _subscribe: boolean = true;

  private _elements: Array<SceneBaseElement>;

  private _hoverSceneId: number;

  private _selectedElements: Array<SceneBaseElement>;

  private _sourceIndex: number = undefined;

  private _type: 'detail' | 'normal' = 'detail';

  private _useControl: boolean = false;
  private _useShift: boolean = false;

  private get isMultiple(): boolean {
    return this.kind == 'multiple';
  }

  get hasElements(): boolean {
    return this.hasElements;
  }

  get isNormal(): boolean {
    return this._type == 'normal';
  }

  get isDetail(): boolean {
    return !this.isNormal;
  }

  get elements(): Array<SceneBaseElement> {
    return this._elements;
  }

  get selectedItemCount(): number {
    return this._selectedElements?.length;
  }

  get selectedElements(): Array<number> {
    return this._selectedElements.map((x) => x.sceneId);
  }

  isSortName: boolean = false;
  isSortCreated: boolean = false;
  isSortUpdated: boolean = true;

  filteredScenes$: Observable<Array<SceneBaseElement>>;

  filteredSceneNames$: Observable<Array<string>>;

  private _filteredSceneNames$: BehaviorSubject<
    Array<string>
  > = new BehaviorSubject<Array<string>>([]);

  private _filteredScenes$: BehaviorSubject<
    Array<SceneBaseElement>
  > = new BehaviorSubject<Array<SceneBaseElement>>([]);

  private _filteredValue: string;

  constructor(private resourceService: ResourceService) {
    this.filteredSceneNames$ = this._filteredSceneNames$.asObservable();

    this.filteredScenes$ = this._filteredScenes$.asObservable();

    // create form contorl
    this.searchControl = new FormControl('', [Validators.maxLength(50)]);

    // subscibe for search control
    this.searchControl.valueChanges
      .pipe(takeWhile(() => this._subscribe))
      .pipe(startWith(''))
      .subscribe((value) => {
        if (value?.length >= 50) {
          return;
        }

        this.filteredAndSortScenes(value);
        this._filteredValue = value;
      });

    this._selectedElements = new Array<SceneBaseElement>();

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
      .pipe(takeWhile(() => this._subscribe))
      .subscribe((x: KeyboardEvent) => {
        switch (x.code.toLocaleLowerCase()) {
          case 'shiftleft':
          case 'shiftright':
            if (this._useShift) {
              this._useShift = false;
              this._sourceIndex = undefined;
            }

            break;
          case 'controlleft':
          case 'controlright':
            if (this._useControl) {
              this._useControl = false;
            }

            break;
        }
      });
  }
  ngOnDestroy(): void {
    this._subscribe = false;
  }

  ngOnInit(): void {}

  isHoverItem(element: SceneBaseElement): boolean {
    return this._hoverSceneId == element.sceneId;
  }

  isSelectedItem(element: SceneBaseElement): boolean {
    return (
      -1 !=
      this._selectedElements.findIndex((x) => x.sceneId == element.sceneId)
    );
  }

  private filteredAndSortScenes(name: string | undefined): void {
    let elements = this._filteredScenes(name);

    if (undefined != elements) {
      elements = this._sortScenes(elements);
    }

    this._filteredScenes$.next(elements);
    this._filteredSceneNames$.next(elements?.map((x) => x.name));
  }

  private _sortScenes(
    elements: Array<SceneBaseElement>
  ): Array<SceneBaseElement> {
    if (undefined == elements) {
      return elements;
    }

    if (this.isSortName) {
      elements = elements.sort((lhs: SceneBaseElement, rhs: SceneBaseElement) =>
        lhs.name.localeCompare(rhs.name)
      );
    } else {
      elements = elements.sort((lhs: SceneBaseElement, rhs: SceneBaseElement) =>
        rhs.name.localeCompare(lhs.name)
      );
    }

    if (this.isSortCreated) {
      elements = elements.sort((lhs: SceneBaseElement, rhs: SceneBaseElement) =>
        lhs.createdSeconds > rhs.createdSeconds ? -1 : 1
      );
    }

    if (this.isSortUpdated) {
      elements = elements.sort((lhs: SceneBaseElement, rhs: SceneBaseElement) =>
        lhs.updatedSeconds > rhs.updatedSeconds ? -1 : 1
      );
    }

    /*
    elements = elements.sort((lhs: SceneBaseElement, rhs: SceneBaseElement) => {
      return this.isSortName
        ? lhs.name.localeCompare(rhs.name)
        : rhs.name.localeCompare(lhs.name);
    });

    elements = elements.sort((lhs: SceneBaseElement, rhs: SceneBaseElement) => {
      let createdSeconds = lhs.createdSeconds > rhs.createdSeconds;
      if (this.isSortCreated) {
        createdSeconds = !createdSeconds;
      }
      return createdSeconds ? -1 : 1;
    });

    elements = elements.sort((lhs: SceneBaseElement, rhs: SceneBaseElement) => {
      let updatedSeconds = lhs.updatedSeconds > rhs.updatedSeconds;
      if (this.isSortUpdated) {
        updatedSeconds = !updatedSeconds;
      }
      return updatedSeconds ? -1 : 1;
    });
    */

    return elements;
  }

  private _filteredScenes(name: string | undefined): Array<SceneBaseElement> {
    if (undefined == name) {
      return this._elements;
    }
    const filterName = name.toLowerCase();

    return this._elements?.filter(
      (x) => 0 == x.name.toLowerCase().indexOf(filterName)
    );
  }

  onPressedSortNames() {
    this.isSortName = !this.isSortName;

    this.filteredAndSortScenes(this._filteredValue);
  }

  onPressedSortCreated() {
    this.isSortCreated = !this.isSortCreated;
    this.filteredAndSortScenes(this._filteredValue);
  }

  onPressedSortUpdated() {
    this.isSortUpdated = !this.isSortUpdated;
    this.filteredAndSortScenes(this._filteredValue);
  }

  /**
   *
   * @param event
   */
  onDropListDropped(event: any) {}

  /**
   * On clicked scene base element
   * @param element : SceneBaseElement
   */
  onClickedSceneItem(element: SceneBaseElement) {
    let index = this._selectedElements.findIndex(
      (x) => x.sceneId == element.sceneId
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
            (x) => x.sceneId == lastElement.sceneId
          );
        }
      }
    }

    if (this._useShift) {
      // find dest index
      const destIndex = this._elements.findIndex(
        (x) => x.sceneId == element.sceneId
      );

      let min = this._sourceIndex > destIndex ? destIndex : this._sourceIndex;
      let max = this._sourceIndex > destIndex ? this._sourceIndex : destIndex;

      this._selectedElements.splice(0, this._selectedElements.length);

      index = -1;

      this._elements.forEach((value: SceneBaseElement, index: number) => {
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
    if (classList.contains('d-items')) {
      classList.remove('d-items');
    }

    if (!classList.contains('n-items')) {
      classList.add('n-items');
    }

    this._type = 'normal';
  }

  // On clicked scenes-container__menus normal
  onClickedListNormal() {
    const classList = this.sceneList.nativeElement.classList;
    if (classList.contains('n-items')) {
      classList.remove('n-items');
    }
    if (!classList.contains('d-items')) {
      classList.add('d-items');
    }

    this._type = 'detail';
  }

  // On clicked scene base element
  onClickedSceneBaseElement(element: SceneBaseElement) {}

  havePreviewResource(element: SceneBaseElement): boolean {
    return undefined != element?.resource?.previewResource;
  }

  getPreviewResourceLocation(element: ResourceElement): string {
    return this.resourceService.getPreviewResourceAddress(
      element.previewResource
    );
  }

  // On mouse enter scene base element
  onMouseEnter(element: SceneBaseElement) {
    this._hoverSceneId = element.sceneId;
  }

  // On mouse leave scene base element
  onMouseLeave(element: SceneBaseElement) {
    this._hoverSceneId = undefined;
  }
}
