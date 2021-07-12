import { ResourceElement } from './resource-element';
import { SceneBaseElement } from './scene-base-element';
import { ScenePartVideo } from '../protocols/common_pb';
import { isNullOrUndefined } from 'util';

export class ScenePartVideoElement {
  public resource: ResourceElement;
  public repeated: boolean;
  public played: boolean;
  public nextScene: SceneBaseElement;

  public toMessage(): ScenePartVideo {
    const message = new ScenePartVideo();
    if (!isNullOrUndefined(this.resource) && this.resource?.resourceId > 0) {
      message.setResource(this.resource.toMessage());
    }

    message.setRepeated(this.repeated);
    if (!this.repeated && !isNullOrUndefined(this.nextScene)) {
      message.setSceneid(this.nextScene.sceneId);
    }

    message.setPlayed(this.played);
    return message;
  }

  public fromMessage(message: ScenePartVideo) {
    if (message.hasResource()) {
      this.resource = ResourceElement.fromMessage(message.getResource());
    }

    this.repeated = message.getRepeated();

    // TODO : set scene id

    this.played = message.getPlayed();
  }
}
