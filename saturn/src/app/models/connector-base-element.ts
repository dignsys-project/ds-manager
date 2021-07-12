import { CommonExtensions } from '../commons/common-extensions';
import {
  ConnectorBase,
  CONNECTOR_REGISTER_KINDMap,
} from '../protocols/common_pb';
import { ResourceElement } from './resource-element';

export class ConnectorBaseElement {
  public connectorId: number;
  public name: string;
  public deviceId: string;
  public created: Date;
  public kind: CONNECTOR_REGISTER_KINDMap[keyof CONNECTOR_REGISTER_KINDMap];
  public updated: Date;
  public resource?: ResourceElement;

  public emergencySceneId: number;
  public isEmergency: boolean;

  public updatedSeconds: number = 0;

  public fromMessageBase(message: ConnectorBase) {
    this.connectorId = message.getConnectorid();
    this.name = message.getName();
    this.deviceId = message.getDeviceid();

    if (0 < message.getCreatedseconds()) {
      this.created = CommonExtensions.utcSecondsToDate(
        message.getCreatedseconds()
      );
    }
    this.kind = message.getKind();

    if (message.hasResource()) {
      this.resource = ResourceElement.fromMessage(message.getResource());
    }

    if (0 < message.getUpdatedseconds()) {
      this.updated = CommonExtensions.utcSecondsToDate(
        message.getUpdatedseconds()
      );
    }
    this.updatedSeconds = message.getUpdatedseconds();

    this.emergencySceneId = message.getEmergencysceneid();
    this.isEmergency = message.getIsemergency();
  }

  public static fromMessageBase(message: ConnectorBase): ConnectorBaseElement {
    const element = new ConnectorBaseElement();
    element.fromMessageBase(message);
    return element;
  }
}
