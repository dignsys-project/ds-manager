import { Guid } from 'guid-typescript';
import { ScenePartTextElement } from './scene-part-text-element';
import { ResourceElement } from './resource-element';
import { AbstractSceneCommon } from '../components/components-scene/abstract-scene-common';
import { ScenePartCoordinate, ScenePartCommon } from '../protocols/common_pb';
import { AbstractSceneComponent } from '../components/abstract-scene-component';
import { CommonExtensions } from '../commons/common-extensions';
import { IPosition } from '../common/position';
import { ISize } from '../common/size';

export class ScenePartCoordinateElement {
  public ownerCommonId: Guid;

  public textElement: ScenePartTextElement;

  public resource: ResourceElement;
  public coordinateResource: ResourceElement;

  public sourceDatabaseId: number;
  public sourceResource: ResourceElement;
  public sourceSize: ISize;
  public sourcePosition: IPosition;

  public destinationDatabaseId: number;
  public destinationResource: ResourceElement;
  public destinationSize: ISize;
  public destinationPosition: IPosition;

  public scenePartImage: AbstractSceneCommon;

  //////////////////// generated start
  public routeSceneCoordinateImageComponent: AbstractSceneComponent;

  public routeSceneSourceImageComponent: AbstractSceneComponent;

  public routeSceneDestinationImageComponent: AbstractSceneComponent;
  ///////////////////// generated end

  public groupId: number = -1;

  public get haveScenePart(): boolean {
    return (
      !CommonExtensions.isNullOrUndefined(this.scenePartImage) &&
      !this.scenePartImage.id.isEmpty()
    );
  }

  public get haveCoordinateResource(): boolean {
    return !CommonExtensions.isNullOrUndefined(this.coordinateResource);
  }

  public get haveSourceResource(): boolean {
    return !CommonExtensions.isNullOrUndefined(this.sourceResource);
  }
  public get haveDestinationResource(): boolean {
    return !CommonExtensions.isNullOrUndefined(this.destinationResource);
  }

  public get haveCoordinateComponent(): boolean {
    return !CommonExtensions.isNullOrUndefined(
      this.routeSceneCoordinateImageComponent
    );
  }

  public get isCreatedSource(): boolean {
    return !CommonExtensions.isNullOrUndefined(
      this.routeSceneSourceImageComponent
    );
  }

  public get isCreatedDestination(): boolean {
    return !CommonExtensions.isNullOrUndefined(
      this.routeSceneDestinationImageComponent
    );
  }

  constructor(commonId: Guid) {
    this.ownerCommonId = commonId;
    this.textElement = new ScenePartTextElement();
  }

  public toMessage(): ScenePartCoordinate {
    const message = new ScenePartCoordinate();

    // set text
    message.setText(this.textElement.toMessage());

    // set resource
    if (this.resource?.resourceId > 0) {
      message.setResource(this.resource.toMessage());
    }

    // set coordinate resource
    if (undefined != this.coordinateResource) {
      message.setCoordinaterresource(this.coordinateResource.toMessage());
    }

    // set source resource
    if (this.sourceResource?.resourceId > 0) {
      message.setSourceresource(this.sourceResource.toMessage());

      let position: IPosition = undefined;
      if (undefined != this.routeSceneSourceImageComponent) {
        position = this.routeSceneSourceImageComponent?.position;
      } else {
        position = this.sourcePosition;
      }

      if (undefined != position) {
        const message_position = new ScenePartCommon.Position();
        message_position.setX(position.x);
        message_position.setY(position.y);
        message.setSourceposition(message_position);
      }

      let size: ISize = undefined;
      if (undefined != this.routeSceneDestinationImageComponent) {
        size = this.routeSceneDestinationImageComponent?.size;
      } else {
        size = this.sourceSize;
      }

      if (undefined != size) {
        const message_size = new ScenePartCommon.Size();
        message_size.setWidth(size.width);
        message_size.setHeight(size.height);
        message.setSourcesize(message_size);
      }
    }

    // set destination resource
    if (this.destinationResource?.resourceId > 0) {
      message.setDestinationresource(this.destinationResource.toMessage());

      let position: IPosition = undefined;
      if (undefined != this.routeSceneDestinationImageComponent) {
        position = this.routeSceneDestinationImageComponent?.position;
      } else {
        position = this.destinationPosition;
      }

      if (undefined != position) {
        const message_position = new ScenePartCommon.Position();
        message_position.setX(position.x);
        message_position.setY(position.y);
        message.setDestinationposition(message_position);
      }

      let size: ISize = undefined;
      if (undefined != this.routeSceneDestinationImageComponent) {
        size = this.routeSceneDestinationImageComponent?.size;
      } else {
        size = this.destinationSize;
      }

      if (undefined != size) {
        const message_size = new ScenePartCommon.Size();
        message_size.setWidth(size.width);
        message_size.setHeight(size.height);
        message.setDestinationsize(message_size);
      }
    }

    // set scene part image
    if (undefined != this.scenePartImage) {
      message.setScenepartimageid(this.scenePartImage.id.toString());
    }

    // set group id
    message.setGroupid(this.groupId);

    return message;
  }

  public fromMessage(
    message: ScenePartCoordinate,
    scenePartImage: AbstractSceneCommon
  ) {
    // set text
    if (message.hasText()) {
      this.textElement.fromMessage(message.getText());
    }
    // set resource
    if (message.hasResource()) {
      this.resource = ResourceElement.fromMessage(message.getResource());
    }
    // set coordinate resource
    if (message.hasCoordinaterresource()) {
      this.coordinateResource = ResourceElement.fromMessage(
        message.getCoordinaterresource()
      );
    }

    // set source resource
    if (message.hasSourceresource()) {
      this.sourceResource = ResourceElement.fromMessage(
        message.getSourceresource()
      );

      this.sourceDatabaseId = this.sourceResource?.resourceId;

      if (message.hasSourcesize()) {
        const message_size = message.getSourcesize();
        this.sourceSize = {
          width: message_size.getWidth(),
          height: message_size.getHeight(),
        };
      }

      if (message.hasSourceposition()) {
        const message_position = message.getSourceposition();
        this.sourcePosition = {
          x: message_position.getX(),
          y: message_position.getY(),
        };
      }
    }

    // set destination resource
    if (message.hasDestinationresource()) {
      this.destinationDatabaseId = this.destinationResource?.resourceId;
      this.destinationResource = ResourceElement.fromMessage(
        message.getDestinationresource()
      );

      if (message.hasDestinationsize()) {
        const message_size = message.getDestinationsize();
        this.destinationSize = {
          width: message_size.getWidth(),
          height: message_size.getHeight(),
        };
      }

      if (message.hasDestinationposition()) {
        const message_position = message.getDestinationposition();
        this.destinationPosition = {
          x: message_position.getX(),
          y: message_position.getY(),
        };
      }
    }

    // set scene part image
    this.scenePartImage = scenePartImage;

    // set group id
    this.groupId = message.getGroupid();
  }
}
