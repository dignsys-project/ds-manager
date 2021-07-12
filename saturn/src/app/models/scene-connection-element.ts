import { SceneConnection } from '../protocols/common_pb';
import { SceneBaseElement } from './scene-base-element';

export class SceneConnectionElement {
  public sceneBase: SceneBaseElement;

  public fromMessage(message: SceneConnection) {
    if (message.hasConnectedscenebase()) {
      this.sceneBase = SceneBaseElement.fromMessageBase(
        message.getConnectedscenebase()
      );
    }
  }

  public static fromMessage(message: SceneConnection): SceneConnectionElement {
    const element = new SceneConnectionElement();
    element.fromMessage(message);
    return element;
  }
}
