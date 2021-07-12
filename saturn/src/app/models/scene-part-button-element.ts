import { ScenePartTextElement } from './scene-part-text-element';
import { ResourceElement } from './resource-element';
import { SceneBaseElement } from './scene-base-element';
import { ScenePartButton } from '../protocols/common_pb';
import { isNullOrUndefined } from 'util';

export class ScenePartButtonElement {
  constructor() {
    this.textElement = new ScenePartTextElement();
  }
  public textElement: ScenePartTextElement;
  public resource: ResourceElement;
  public nextScene: SceneBaseElement;

  public toMessage(): ScenePartButton {
    const message = new ScenePartButton();
    if (!isNullOrUndefined(this.textElement)) {
      message.setText(this.textElement.toMessage());
    }

    if (!isNullOrUndefined(this.resource) && this.resource?.resourceId > 0) {
      message.setResource(this.resource.toMessage());
    }

    if (!isNullOrUndefined(this.nextScene)) {
      message.setSceneid(this.nextScene.sceneId);
    }

    return message;
  }

  public fromMessage(message: ScenePartButton, sceneBase: SceneBaseElement) {
    if (message.hasText()) {
      this.textElement.fromMessage(message.getText());
    }

    if (message.hasResource()) {
      this.resource = ResourceElement.fromMessage(message.getResource());
    }

    this.nextScene = sceneBase;
  }
}
