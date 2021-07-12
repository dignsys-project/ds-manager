import { ScenePartSlideImage } from '../protocols/common_pb';
import { ResourceElement } from './resource-element';

export interface ISlideImageElement {
  resource: ResourceElement;
  seconds: number;
}

export class ScenePartSlideImageElement {
  elements: Array<ISlideImageElement>;

  constructor() {
    this.elements = new Array<ISlideImageElement>();
  }

  public toMessage(): ScenePartSlideImage {
    const message = new ScenePartSlideImage();

    this.elements
      ?.filter((x) => undefined != x.resource)
      .forEach((x) => {
        const slideImage = new ScenePartSlideImage.SlideImage();
        slideImage.setResource(x.resource.toMessage());
        slideImage.setSeconds(x.seconds != undefined ? x.seconds : 1);
        message.addSlideimages(slideImage);
      });

    return message;
  }

  public fromMessage(message: ScenePartSlideImage) {
    this.elements = message.getSlideimagesList().map(
      (x) =>
        <ISlideImageElement>{
          resource: x.hasResource()
            ? ResourceElement.fromMessage(x.getResource())
            : undefined,
          seconds: x.getSeconds(),
        }
    );
  }
}
