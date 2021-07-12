import { ResourceElement } from './resource-element';
import { Scene, SceneBase } from '../protocols/common_pb';
import { SceneBaseElement } from './scene-base-element';

export class SceneElement extends SceneBaseElement {
  public fromMessage(message: Scene) {
    this.fromMessageBase(message.getBase());
  }

  public static fromMessage(message: Scene): SceneElement {
    var element = new SceneElement();
    element.fromMessage(message);

    return element;
  }
}
