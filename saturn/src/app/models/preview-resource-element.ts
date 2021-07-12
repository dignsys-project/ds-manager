import { PreviewResource } from '../protocols/common_pb';

export class PreviewResourceElement {
  previewResourceId: number;
  location: string;

  toMessage(): PreviewResource {
    const message = new PreviewResource();
    message.setPreviewresourceid(this.previewResourceId);
    message.setLocation(this.location);

    return message;
  }

  fromMessage(message: PreviewResource) {
    this.previewResourceId = message.getPreviewresourceid();
    this.location = message.getLocation();
  }

  public static fromMessage(message: PreviewResource): PreviewResourceElement {
    const element = new PreviewResourceElement();
    element.fromMessage(message);
    return element;
  }
}
