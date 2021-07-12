import { Injectable } from '@angular/core';
import { IPosition } from 'src/app/common/position';
import { CanvasExtensions } from 'src/app/commons/canvas-extensions';
import { AbstractSceneCommon } from 'src/app/components/components-scene/abstract-scene-common';
import { ComponentsSceneCanvasComponent } from 'src/app/components/components-scene/components-scene-canvas/components-scene-canvas.component';

@Injectable()
export class ScenesCreateCopyPasteService {
  private _common: AbstractSceneCommon;

  public isUse: boolean = false;

  private _basePosition: IPosition;

  constructor() {}

  public copySceneCommon(common: AbstractSceneCommon) {
    this._common = common;
    if (undefined != common) {
      this._basePosition = common.position;
    }
  }

  public async pasteSceneCommonAsync(canvas: AbstractSceneCommon) {
    const common = this._common;

    if (undefined == common || !common.isComponents()) {
      return;
    }

    const canvasComponent = canvas as ComponentsSceneCanvasComponent;

    const basePosition = this._basePosition;

    const position = CanvasExtensions.calculatePositionByBound(
      basePosition,
      common.size,
      canvas
    );

    await canvasComponent.copyComponentAsync(common, position);

    this._basePosition = position;
  }
}
