import { isNgTemplate } from '@angular/compiler';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { take } from 'rxjs/operators';
import {
  ComponentsCommonDialogComponent,
  DIALOG_KIND,
} from 'src/app/components/components-common-dialog/components-common-dialog.component';
import { ComponentsResourcesDialogV2Component } from 'src/app/components/components-resources-dialog-v2/components-resources-dialog-v2.component';
import { AbstractSceneCommon } from 'src/app/components/components-scene/abstract-scene-common';
import {
  ISlideImageElement,
  ScenePartSlideImageElement,
} from 'src/app/models/scene-part-slide-image-element';
import { SCENE_RESOURCE_KIND } from 'src/app/protocols/common_pb';

@Component({
  selector: 'app-scenes-create-common-slide-image',
  templateUrl: './scenes-create-common-slide-image.component.html',
  styleUrls: ['./scenes-create-common-slide-image.component.scss'],
})
export class ScenesCreateCommonSlideImageComponent implements OnInit {
  private _common: AbstractSceneCommon;

  @Output()
  added: EventEmitter<void> = new EventEmitter<void>();

  @Input()
  set common(common: AbstractSceneCommon) {
    this._common = common;
  }
  get common(): AbstractSceneCommon {
    return this._common;
  }

  get element(): ScenePartSlideImageElement {
    return this.common?.slideImageElement;
  }

  constructor(private dialog: MatDialog) {}

  ngOnInit(): void {}

  haveResource(slideImage: ISlideImageElement) {
    return (
      undefined != slideImage?.resource && slideImage?.resource?.resourceId > 0
    );
  }

  onClickedSlideImageAdd() {
    let elements = this.element.elements;
    if (elements?.length <= 0) {
      elements = new Array<ISlideImageElement>();
    }

    elements.push(<ISlideImageElement>{
      resource: undefined,
      seconds: 1,
    });

    this._common.slideImageElement.elements = elements;

    this.added.next();
  }

  async onClickedSlideImageRemove(item: ISlideImageElement, index: number) {
    const bContinue = await ComponentsCommonDialogComponent.create(
      this.dialog,
      '슬라이드 장면 삭제',
      DIALOG_KIND.DIALOG_KIND_WARNING,
      '해당 장면을 삭제하시겠습니까?',
      undefined,
      true
    )
      .afterClosed()
      .pipe(take(1))
      .toPromise();

    if (true != bContinue) {
      return;
    }

    this.element.elements.splice(index, 1);
  }

  onClickedSlideImageResource(item: ISlideImageElement) {
    ComponentsResourcesDialogV2Component.create(
      this.dialog,
      SCENE_RESOURCE_KIND.SCENE_RESOURCE_KIND_IMAGE
    )
      .afterClosed()
      .subscribe((elements) => {
        if (elements?.length >= 1) {
          item.resource = elements[0];
          elements.splice(0, 1);
          elements.forEach((x) =>
            this._common.slideImageElement.elements.push(<ISlideImageElement>{
              resource: x,
              seconds: 1,
            })
          );
        } else {
          item.resource = undefined;
        }
      });
  }
}
