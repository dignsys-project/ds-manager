import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { SceneBaseElement } from 'src/app/models/scene-base-element';
import { MatDialog } from '@angular/material/dialog';
import { ResourceElement } from 'src/app/models/resource-element';
import { ResourceService } from 'src/app/services/resource.service';
import {
  ComponentsCommonDialogComponent,
  DIALOG_KIND,
} from '../components-common-dialog/components-common-dialog.component';
import { filter, take } from 'rxjs/operators';
import { ComponentsScenesDialogV2Component } from '../components-scenes-dialog-v2/components-scenes-dialog-v2.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-components-scene-item',
  templateUrl: './components-scene-item.component.html',
  styleUrls: ['./components-scene-item.component.scss'],
})
export class ComponentsSceneItemComponent implements OnInit {
  private _element: SceneBaseElement;

  @Input()
  disabledRemove: boolean = false;

  @Input()
  set element(element: SceneBaseElement) {
    this._element = element;
  }
  get element(): SceneBaseElement {
    return this._element;
  }

  // 씬을 읽기 모드
  @Input()
  read: boolean = false;

  // 씬이 변경되었을 경우 처리
  @Output()
  change: EventEmitter<SceneBaseElement> = new EventEmitter<SceneBaseElement>();

  @Input()
  preview: boolean = true;

  isHover: boolean = false;

  get haveElement(): boolean {
    return undefined != this.element;
  }

  constructor(
    private dialog: MatDialog,
    private resourceService: ResourceService,
    private router: Router
  ) {}

  ngOnInit(): void {}

  havePreview(element: ResourceElement): boolean {
    return undefined != element?.previewResource;
  }

  getPreviewResourceLocation(element: ResourceElement): string {
    return this.resourceService.getPreviewResourceAddress(
      element.previewResource
    );
  }

  onClickedChangeScene() {
    if (this.read) {
      return;
    }

    ComponentsScenesDialogV2Component.create(this.dialog)
      .afterClosed()
      .pipe(take(1))
      .subscribe((elements) => {
        let element: SceneBaseElement;
        if (elements?.length > 0) {
          element = elements[0];
        } else {
          element = undefined;
        }

        this.change.emit(element);
      });
  }

  onClickedRemoveScene() {
    if (this.read) {
      return;
    }
    ComponentsCommonDialogComponent.create(
      this.dialog,
      '설정된 씬 제거',
      DIALOG_KIND.DIALOG_KIND_WARNING,
      `${this.element.name} 씬을 제거 하시겠습니까?`,
      undefined,
      true
    )
      .afterClosed()
      .pipe(filter((x) => true == x))
      .subscribe((bContinue) => {
        this.element = undefined;

        this.change.emit(undefined);
      });
  }

  onClickedModifiedScene(sceneId: number) {
    const url = this.router.createUrlTree(['/scenes/create'], {
      queryParams: { sceneId: sceneId, isDuplicated: false },
    });
    const URI = `#${url.toString()}`;

    window.open(URI, '_blank');
  }

  onClickedPreviewScene(sceneId: number) {
    const url = this.router.createUrlTree(['/scenes/scene', sceneId]);

    const URI = `#${url.toString()}`;

    window.open(URI, '_blank');
  }

  onClickedNavigation(sceneId: number) {
    const url = this.router.createUrlTree([
      '/scenes/scene-navigation',
      sceneId,
    ]);

    const URI = `#${url.toString()}`;

    window.open(URI, '_blank');
  }

  onNameEnter(event: any) {
    if (this.read) {
      return;
    }
    this.isHover = true;
  }

  onNameLeave(event: any) {
    if (this.read) {
      return;
    }
    this.isHover = false;
  }
}
