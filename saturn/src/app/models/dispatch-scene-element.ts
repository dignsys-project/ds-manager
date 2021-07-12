import { DispatchScene } from '../protocols/common_pb';
import { SceneBaseElement } from './scene-base-element';

export class DispatchSceneElement {
  public isUsed: boolean = false;
  public isTouched: boolean = false;
  public seconds: number = 0;
  public sceneId: number = 0;

  public scene: SceneBaseElement;

  public fromMessage(message: DispatchScene) {
    this.isUsed = message.getIsused();
    this.isTouched = message.getIstouched();
    this.seconds = message.getSeconds();
    this.sceneId = message.getSceneid();
  }

  public toMessage(): DispatchScene {
    const message = new DispatchScene();
    message.setIsused(this.isUsed);
    message.setIstouched(this.isTouched);
    message.setSeconds(this.seconds);
    message.setSceneid(this.sceneId);

    return message;
  }

  public static fromMessage(message: DispatchScene): DispatchSceneElement {
    const element = new DispatchSceneElement();
    element.fromMessage(message);
    return element;
  }
}
