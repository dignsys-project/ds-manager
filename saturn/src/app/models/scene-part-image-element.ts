import { ResourceElement } from './resource-element';
import { ScenePartImage } from '../protocols/common_pb';
import { isNullOrUndefined } from 'util';
import { ScenePartTextElement } from './scene-part-text-element';

export class ScenePartImageElement {
  public textElement: ScenePartTextElement;
  public resource: ResourceElement;

  public animationKind: 'none' | 'coordinate' | 'source' = 'none';

  constructor() {
    this.textElement = new ScenePartTextElement();
  }

  public toMessage(): ScenePartImage {
    const message = new ScenePartImage();

    if (undefined != this.resource && this.resource?.resourceId > 0) {
      message.setResource(this.resource.toMessage());
    }

    return message;
  }

  public fromMessage(message: ScenePartImage) {
    if (message.hasResource()) {
      this.resource = ResourceElement.fromMessage(message.getResource());
    }

    if (message.hasText()) {
      this.textElement = ScenePartTextElement.fromMessage(message.getText());
    }
  }
}
