import { DepartmentElement } from './department-element';
import { MemberDepartment } from '../protocols/common_pb';
import { DepartmentBaseElement } from './department-base-element';

export class MemberDepartmentElement {
  id: number;
  department: DepartmentBaseElement;

  fromMessage(message: MemberDepartment) {
    this.id = message.getId();
    this.department = DepartmentBaseElement.fromMessageBase(
      message.getDepartmentbase()
    );
  }

  public static fromMessage(
    message: MemberDepartment
  ): MemberDepartmentElement {
    const element = new MemberDepartmentElement();
    element.fromMessage(message);
    return element;
  }
}
