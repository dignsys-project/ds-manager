import { Component, OnInit, Input } from '@angular/core';
import { AbstractSceneCommon } from 'src/app/components/components-scene/abstract-scene-common';
import { ScenePartClockElement } from 'src/app/models/scene-part-clock-element';
import { ScenePartTextElement } from 'src/app/models/scene-part-text-element';
import { MatDialog } from '@angular/material/dialog';
import { SCENE_RESOURCE_KIND } from 'src/app/protocols/common_pb';
import { CommonExtensions } from 'src/app/commons/common-extensions';
import { MatCheckboxChange } from '@angular/material/checkbox';
import { ComponentsResourcesDialogV2Component } from 'src/app/components/components-resources-dialog-v2/components-resources-dialog-v2.component';

@Component({
  selector: 'app-scenes-create-common-clock',
  templateUrl: './scenes-create-common-clock.component.html',
  styleUrls: ['./scenes-create-common-clock.component.scss'],
})
export class ScenesCreateCommonClockComponent implements OnInit {
  @Input()
  common: AbstractSceneCommon;

  get element(): ScenePartClockElement {
    return this.common?.clockElement;
  }

  get elementText(): ScenePartTextElement {
    return this.common?.clockElement?.textElement;
  }

  get elementDateText(): ScenePartTextElement {
    return this.common?.clockElement?.dateElement;
  }

  get useDate(): boolean {
    return (
      this.element?.useDate &&
      !CommonExtensions.isNullOrUndefined(this.element?.dateElement)
    );
  }

  constructor(private dialog: MatDialog) {}

  ngOnInit(): void {}

  onChangedDateCheckbox(event: MatCheckboxChange) {
    this.element.useDate = event.checked;
  }

  onchangedWeekCheckbox(event: MatCheckboxChange) {
    this.element.useWeek = event.checked;
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
}
