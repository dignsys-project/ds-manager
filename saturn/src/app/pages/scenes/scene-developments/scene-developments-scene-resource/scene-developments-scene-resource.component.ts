import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { take, tap } from 'rxjs/operators';
import {
  ComponentsCommonDialogComponent,
  DIALOG_KIND,
} from 'src/app/components/components-common-dialog/components-common-dialog.component';
import { ComponentsResourcesDialogV2Component } from 'src/app/components/components-resources-dialog-v2/components-resources-dialog-v2.component';
import { ComponentsScenesDialogV2Component } from 'src/app/components/components-scenes-dialog-v2/components-scenes-dialog-v2.component';
import { ResourceElement } from 'src/app/models/resource-element';
import { SceneBaseElement } from 'src/app/models/scene-base-element';
import { SCENE_RESOURCE_KIND } from 'src/app/protocols/common_pb';

@Component({
  selector: 'app-scene-developments-scene-resource',
  templateUrl: './scene-developments-scene-resource.component.html',
  styleUrls: ['./scene-developments-scene-resource.component.scss'],
})
export class SceneDevelopmentsSceneResourceComponent implements OnInit {
  selectedElements: Array<ResourceElement>;

  selectedScenes: Array<SceneBaseElement>;

  constructor(private dialog: MatDialog) {}

  ngOnInit(): void {}

  onClickedOpenComponentsResourceDialogV2() {
    ComponentsResourcesDialogV2Component.create(
      this.dialog,
      SCENE_RESOURCE_KIND.SCENE_RESOURCE_KIND_DEFAULT
    )
      .afterClosed()
      .pipe(take(1))
      .subscribe((elements) => (this.selectedElements = elements));
  }

  onClickedOpenComponentsSceneDialogV2() {
    ComponentsScenesDialogV2Component.create(this.dialog)
      .afterClosed()
      .pipe(take(1))
      .subscribe((elements) => {
        this.selectedScenes = elements;
      });
  }

  async onClickedCommonDialog() {
    try {
      await ComponentsCommonDialogComponent.create(
        this.dialog,
        '테스트 공통 다이얼로그',
        DIALOG_KIND.DIALOG_KIND_WARNING,
        '콘텐츠 없음'
      )
        .afterClosed()
        .toPromise();
    } catch (error) {
      console.error(error);
    }
  }
}
