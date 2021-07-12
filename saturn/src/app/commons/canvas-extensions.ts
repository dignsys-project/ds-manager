import { IPosition } from '../common/position';
import { ISize } from '../common/size';
import { AbstractSceneCommon } from '../components/components-scene/abstract-scene-common';

export class CanvasExtensions {
  public static calculatePositionByBound(
    position: IPosition,
    size: ISize,
    canvas: AbstractSceneCommon
  ): IPosition {
    let x = position.x + 20;
    let y = position.y + 20;

    const width = x + size.width;
    const height = y + size.height;

    return { x: x, y: y };
  }
}
