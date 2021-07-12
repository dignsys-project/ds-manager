import { PreviewResourceElement } from './preview-resource-element';
import {
  SCENE_RESOURCE_KINDMap,
  Resource,
  SCENE_RESOURCE_KIND,
} from '../protocols/common_pb';
import { CommonExtensions } from '../commons/common-extensions';
import { ResourceExtensions } from '../commons/resource-extensions';

export class ResourceElement {
  resourceId: number;
  kind: SCENE_RESOURCE_KINDMap[keyof SCENE_RESOURCE_KINDMap];
  location: string;
  name: string;
  hash: string;
  previewResource?: PreviewResourceElement;
  size: number;
  createdDate: Date;
  updatedDate: Date;
  duration: number;

  private _created: number = 0;
  private _updated: number = 0;

  get isSameCreated(): boolean {
    return 0 == this._created - this._updated;
  }

  get isDefinedPreview(): boolean {
    return ResourceExtensions.isKindHaveDefinedPreview(this.kind);
  }

  get getDefinedPreviewLocation(): string {
    return ResourceExtensions.kind2DefiendPreviewLocation(this.kind);
  }

  get getIconName(): string {
    return ResourceExtensions.kind2IconName(this.kind);
  }

  public toMessage(): Resource {
    const message = new Resource();
    message.setResourceid(this.resourceId);
    message.setKind(this.kind);
    message.setLocation(this.location);
    message.setName(this.name);
    message.setHash(this.hash);
    message.setSize(this.size);
    if (undefined != this.previewResource) {
      message.setPreviewresource(this.previewResource.toMessage());
    }

    return message;
  }

  fromMessage(message: Resource) {
    this.resourceId = message.getResourceid();
    this.kind = message.getKind();
    this.location = message.getLocation();
    this.name = message.getName();
    this.hash = message.getHash();
    this.size = message.getSize();
    if (message.hasPreviewresource()) {
      this.previewResource = PreviewResourceElement.fromMessage(
        message.getPreviewresource()
      );
    }
    if (message.getCreated() >= 0) {
      this._created = message.getCreated();
      this.createdDate = CommonExtensions.utcSecondsToDate(this._created);
    }

    if (message.getUpdated() >= 0) {
      this._updated = message.getUpdated();
      this.updatedDate = CommonExtensions.utcSecondsToDate(this._updated);
    }

    this.duration = message.getDuration();
  }

  public static fromMessage(message: Resource): ResourceElement {
    const element = new ResourceElement();
    element.fromMessage(message);
    return element;
  }
}
