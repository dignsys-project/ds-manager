import { ResourceElement } from './resource-element';
import { ScenePartDocument } from '../protocols/common_pb';
import { isNullOrUndefined } from 'util';

export class ScenePartDocumentElement {
  public resource: ResourceElement;

  public toMessage(): ScenePartDocument {
    const message = new ScenePartDocument();

    if (!isNullOrUndefined(this.resource) && this.resource?.resourceId > 0) {
      message.setResource(this.resource.toMessage());
    }

    return message;
  }

  public fromMessage(message: ScenePartDocument) {
    if (message.hasResource()) {
      this.resource = ResourceElement.fromMessage(message.getResource());
    }
  }
}
