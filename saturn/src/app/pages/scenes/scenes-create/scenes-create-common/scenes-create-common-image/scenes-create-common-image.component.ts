import {
  Component,
  OnInit,
  Input,
  EventEmitter,
  ElementRef,
} from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { SCENE_RESOURCE_KIND } from 'src/app/protocols/common_pb';
import { ScenePartImageElement } from 'src/app/models/scene-part-image-element';
import { AbstractSceneCommon } from 'src/app/components/components-scene/abstract-scene-common';
import { ComponentsResourcesDialogV2Component } from 'src/app/components/components-resources-dialog-v2/components-resources-dialog-v2.component';

@Component({
  selector: 'app-scenes-create-common-image',
  templateUrl: './scenes-create-common-image.component.html',
  styleUrls: ['./scenes-create-common-image.component.scss'],
})
export class ScenesCreateCommonImageComponent implements OnInit {
  @Input()
  common: AbstractSceneCommon;

  get element(): ScenePartImageElement {
    return this.common?.imageElement;
  }

  get isReadOnly(): boolean {
    return this.common?.isGenerated;
  }

  get haveResource(): boolean {
    return (
      undefined != this.element?.resource &&
      this.element?.resource?.resourceId > 0
    );
  }

  constructor(private dialog: MatDialog, public elementRef: ElementRef) {}

  ngOnInit(): void {}

  onClickedSelectImage() {
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
