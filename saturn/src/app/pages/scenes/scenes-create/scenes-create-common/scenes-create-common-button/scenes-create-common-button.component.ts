import { Component, OnInit, Input } from '@angular/core';
import { ResourceService } from '../../../../../services/resource.service';
import { MatDialog } from '@angular/material/dialog';
import { SCENE_RESOURCE_KIND } from 'src/app/protocols/common_pb';
import { take } from 'rxjs/operators';
import { ScenePartButtonElement } from 'src/app/models/scene-part-button-element';
import { ComponentsScenesDialogV2Component } from 'src/app/components/components-scenes-dialog-v2/components-scenes-dialog-v2.component';
import { ComponentsResourcesDialogV2Component } from 'src/app/components/components-resources-dialog-v2/components-resources-dialog-v2.component';
import { SceneElement } from 'src/app/models/scene-element';
import { SceneBaseElement } from 'src/app/models/scene-base-element';

@Component({
  selector: 'app-scenes-create-common-button',
  templateUrl: './scenes-create-common-button.component.html',
  styleUrls: ['./scenes-create-common-button.component.scss'],
})
export class ScenesCreateCommonButtonComponent implements OnInit {
  @Input()
  element: ScenePartButtonElement;

  constructor(
    private dialog: MatDialog,
    private resourceService: ResourceService
  ) {}

  ngOnInit(): void {}

  get nextScene(): SceneBaseElement {
    return this.element?.nextScene;
  }

  get haveNextScene(): boolean {
    return undefined != this.element?.nextScene;
  }
  get haveResource(): boolean {
    return undefined != this.element?.resource;
  }

  get haveProviewResource(): boolean {
    return undefined != this.element?.resource?.previewResource;
  }

  get nextSceneName(): string {
    return this.haveNextScene ? this.element.nextScene.name : '';
  }

  getPreviewLocation(): string {
    return this.resourceService.getPreviewResourceAddress(
      this.element.resource.previewResource
    );
  }

  onClickedSelectResource() {
    ComponentsResourcesDialogV2Component.create(
      this.dialog,
      SCENE_RESOURCE_KIND.SCENE_RESOURCE_KIND_IMAGE
    )
      .afterClosed()
      .subscribe((element) => {
        if (element?.length >= 1) {
          this.element.resource = element[0];
        } else {
          this.element.resource = undefined;
        }
      });
  }

  onChangedComponentsSceneItem(sceneBaseElement: SceneBaseElement) {
    this.element.nextScene = sceneBaseElement;
  }

  onClickedSelectNextScene() {
    ComponentsScenesDialogV2Component.create(this.dialog)
      .afterClosed()
      .pipe(take(1))
      .subscribe((elements) => {
        if (elements?.length > 0) {
          this.element.nextScene = elements[0];
        } else {
          this.element.nextScene = undefined;
        }
      });
  }

  onClickedRemoveNextScene() {
    this.element.nextScene = null;
  }
}
