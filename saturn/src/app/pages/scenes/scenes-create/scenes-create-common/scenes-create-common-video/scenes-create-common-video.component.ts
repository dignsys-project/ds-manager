import { Component, OnInit, Input } from '@angular/core';
import { ResourceElement } from 'src/app/models/resource-element';
import { ScenesService } from '../../../../../services/scenes.service';
import { MatDialog } from '@angular/material/dialog';
import { SCENE_RESOURCE_KIND } from 'src/app/protocols/common_pb';
import { take } from 'rxjs/operators';
import { ScenePartVideoElement } from 'src/app/models/scene-part-video-element';
import { ComponentsScenesDialogV2Component } from 'src/app/components/components-scenes-dialog-v2/components-scenes-dialog-v2.component';
import { ComponentsResourcesDialogV2Component } from 'src/app/components/components-resources-dialog-v2/components-resources-dialog-v2.component';
import { SceneBaseElement } from 'src/app/models/scene-base-element';

@Component({
  selector: 'app-scenes-create-common-video',
  templateUrl: './scenes-create-common-video.component.html',
  styleUrls: ['./scenes-create-common-video.component.scss'],
})
export class ScenesCreateCommonVideoComponent implements OnInit {
  @Input()
  element: ScenePartVideoElement;

  get haveNextScene(): boolean {
    return undefined != this.element.nextScene;
  }

  get haveResource(): boolean {
    return undefined != this.element.resource;
  }

  get nextSceneName(): string {
    return this.haveNextScene ? this.element.nextScene.name : '';
  }

  constructor(private dialog: MatDialog) {}

  ngOnInit(): void {}

  async onClickedSelectVideo() {
    let resourceElement: ResourceElement;
    const elements = await ComponentsResourcesDialogV2Component.create(
      this.dialog,
      SCENE_RESOURCE_KIND.SCENE_RESOURCE_KIND_VIDEO
    )
      .afterClosed()
      .toPromise();

    if (elements?.length > 0) {
      resourceElement = elements[0];
    } else {
      resourceElement = undefined;
    }

    this.element.resource = resourceElement;
  }

  onClickedSelectScene() {
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

  onComponentsSceneItemChanged(element: SceneBaseElement) {
    this.element.nextScene = element;
  }
}
