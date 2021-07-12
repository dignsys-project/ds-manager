import { Component, OnDestroy, OnInit } from '@angular/core';
import { ScenesCreateService } from '../../scenes-create.service';
import { AbstractSceneCommon } from 'src/app/components/components-scene/abstract-scene-common';
import { BehaviorSubject, Observable } from 'rxjs';
import { map, takeWhile } from 'rxjs/operators';
import { MatSelectionListChange } from '@angular/material/list';
import { FormControl } from '@angular/forms';
import { SceneBaseElement } from 'src/app/models/scene-base-element';
import { SCENE_COMPONENTS_KIND } from 'src/app/protocols/common_pb';
import { MatAutocompleteSelectedEvent } from '@angular/material/autocomplete';

class SceneElement {
  public get name(): string {
    return this.sceneBaseElement?.name;
  }
  constructor(
    public sceneBaseElement: SceneBaseElement,
    public component: AbstractSceneCommon
  ) {}
}

@Component({
  selector: 'app-scenes-create-components',
  templateUrl: './scenes-create-components.component.html',
  styleUrls: ['./scenes-create-components.component.scss'],
})
export class ScenesCreateComponentsComponent implements OnInit, OnDestroy {
  searchFormControl: FormControl;

  isEditMode: boolean = false;

  private _sceneElements: Array<SceneElement> = [];

  private _subscribe: boolean = true;

  get sceneElements(): Array<SceneElement> {
    return this._sceneElements;
  }

  filteredSceneElements$: Observable<Array<SceneElement>>;

  private _filteredSceneElementsSubject: BehaviorSubject<
    Array<SceneElement>
  > = new BehaviorSubject<Array<SceneElement>>([]);

  get elements(): Array<AbstractSceneCommon> {
    return this.scenesCreateService.elements.filter((x) => !x.isGenerated);
  }

  constructor(private scenesCreateService: ScenesCreateService) {
    this.searchFormControl = new FormControl();

    this.searchFormControl.valueChanges
      .pipe(takeWhile(() => this._subscribe))
      .subscribe((value: any) => {
        if (typeof value == 'string') {
          var v = value as string;
          const elements = this._filter(v);

          this._filteredSceneElementsSubject.next(elements);
        } else {
        }
      });

    this.filteredSceneElements$ = this._filteredSceneElementsSubject.asObservable();
  }
  ngOnDestroy(): void {
    this._subscribe = false;
  }

  ngOnInit(): void {
    this.scenesCreateService.elements
      .filter((x) => !x.isGenerated)
      .map((element) => {
        switch (element.kind) {
          case SCENE_COMPONENTS_KIND.SCENE_COMPONENTS_KIND_SCENE:
            {
              const sceneBaseElement = element.dispatchSceneElement?.scene;
              if (undefined != sceneBaseElement) {
                this._sceneElements.push(
                  new SceneElement(sceneBaseElement, element)
                );
              }
            }

            break;
          case SCENE_COMPONENTS_KIND.SCENE_COMPONENTS_KIND_BUTTON:
            {
              const sceneBaseElement = element?.buttonElement?.nextScene;
              if (undefined != sceneBaseElement) {
                this._sceneElements.push(
                  new SceneElement(sceneBaseElement, element)
                );
              }
            }
            break;
        }
      });

    this._filteredSceneElementsSubject.next(this._sceneElements);
  }

  isSelected(element: AbstractSceneCommon): Observable<boolean> {
    return this.scenesCreateService.selected$.pipe(
      map((x) => x.id === element.id)
    );
  }

  /**
   * on option selected mat-autocomplete
   */
  onOptionSelect(event: MatAutocompleteSelectedEvent) {
    const element = event?.option?.value as SceneElement;
    if (undefined == element) {
      return;
    }

    this.scenesCreateService.select(element.component);
    this.searchFormControl.setValue('');
  }

  onSelectionListChanged(event: MatSelectionListChange) {
    const selectedSceneCommon = event.option.value as AbstractSceneCommon;
    this.scenesCreateService.select(selectedSceneCommon);
  }

  private _filter(value: string): Array<SceneElement> {
    if (undefined == value || 0 >= value?.length) {
      return this._sceneElements;
    }
    const filterValue = value.toLowerCase();

    return this._sceneElements?.filter((e) =>
      e.name.toLowerCase().includes(filterValue)
    );
  }
}
