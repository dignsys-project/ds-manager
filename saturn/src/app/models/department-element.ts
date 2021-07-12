import { Department, DepartmentBase } from '../protocols/common_pb';
import { CommonExtensions } from '../commons/common-extensions';
import { MemberBaseElement } from './member-base-element';
import { ConnectorBaseElement } from './connector-base-element';
import { isNullOrUndefined } from 'util';
import { DepartmentLowerBaseElement } from './department-lower-base-element';
import { DepartmentBaseElement } from './department-base-element';

export class DepartmentElement extends DepartmentBaseElement {
  memberBases: Array<MemberBaseElement>;
  connectorBases: Array<ConnectorBaseElement>;
  departmentLowerBases: Array<DepartmentLowerBaseElement>;

  get lowers(): Array<DepartmentBaseElement> {
    return this.departmentLowerBases.map((x) => x.departmentBase);
  }

  fromMessage(message: Department) {
    this.fromMessageBase(message.getBase());

    this.memberBases = message
      .getMemberbasesList()
      .map((x) => MemberBaseElement.fromMessageBase(x));

    this.connectorBases = message
      .getConnectorbasesList()
      .map((x) => ConnectorBaseElement.fromMessageBase(x));

    this.departmentLowerBases = message
      .getDepartmentlowersList()
      .map((x) => DepartmentLowerBaseElement.fromMessage(x));
  }

  public get connectorsCount(): number {
    return this.connectorBases?.length ?? 0;
  }

  public get membersCount(): number {
    return this.memberBases?.length ?? 0;
  }

  public get hasConnectors(): boolean {
    return this.connectorsCount > 0;
  }

  public get hasMembers(): boolean {
    return this.membersCount > 0;
  }

  public static fromMessage(message: Department): DepartmentElement {
    const element = new DepartmentElement();
    element.fromMessage(message);
    return element;
  }
}
