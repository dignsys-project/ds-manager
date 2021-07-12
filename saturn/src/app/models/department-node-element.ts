import { DepartmentElement } from './department-element';
import { DepartmentNode, DepartmentNodeBase } from '../protocols/common_pb';

export class DepartmentNodeBaseElement {
  id: number;
  order: number;
  parentDepartmentNodeId: number;

  fromMessageBase(message: DepartmentNodeBase) {
    this.id = message.getId();
    this.order = message.getOrder();
    this.parentDepartmentNodeId = message.getParentdepartmentnodeid();
  }

  public static fromMessageBase(
    message: DepartmentNodeBase
  ): DepartmentNodeBaseElement {
    const element = new DepartmentNodeBaseElement();
    element.fromMessageBase(message);
    return element;
  }
}
export class DepartmentNodeElement extends DepartmentNodeBaseElement {
  department: DepartmentElement;

  public name(): string {
    return this.department?.name;
  }

  fromMessage(message: DepartmentNode) {
    this.fromMessageBase(message.getBase());
    this.department = DepartmentElement.fromMessage(message.getDepartment());
  }

  public static fromMessage(message: DepartmentNode): DepartmentNodeElement {
    const element = new DepartmentNodeElement();
    element.fromMessage(message);
    return element;
  }
}
