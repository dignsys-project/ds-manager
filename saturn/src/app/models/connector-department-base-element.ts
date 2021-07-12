import { ConnectorBaseElement } from './connector-base-element';
import { DepartmentBaseElement } from './department-base-element';
import { ConnectorDepartmentBase } from '../protocols/common_pb';

export class ConnectorDepartmentBaseElement {
  connectorBase: ConnectorBaseElement;
  departmentBase: DepartmentBaseElement;

  public get isemergency(): boolean {
    return this.connectorBase?.isEmergency;
  }

  public get connectorName(): string {
    return this.connectorBase.name;
  }

  public get departmentName(): string {
    return this.departmentBase.name;
  }

  public fromMessage(message: ConnectorDepartmentBase) {
    if (message.hasConnectorbase()) {
      this.connectorBase = ConnectorBaseElement.fromMessageBase(
        message.getConnectorbase()
      );
    }

    if (message.hasDepartmentbase()) {
      this.departmentBase = DepartmentBaseElement.fromMessageBase(
        message.getDepartmentbase()
      );
    }
  }

  public static fromMessage(
    message: ConnectorDepartmentBase
  ): ConnectorDepartmentBaseElement {
    const element = new ConnectorDepartmentBaseElement();
    element.fromMessage(message);
    return element;
  }
}
