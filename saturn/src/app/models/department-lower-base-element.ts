import { DepartmentLowerBase } from '../protocols/common_pb';
import { CommonExtensions } from '../commons/common-extensions';
import { DepartmentBaseElement } from './department-base-element';

export class DepartmentLowerBaseElement {
  public departmentLowerId: number;
  public departmentBase: DepartmentBaseElement;
  public createdDate: Date;

  public fromMessage(message: DepartmentLowerBase) {
    this.departmentLowerId = message.getId();
    this.departmentBase = DepartmentBaseElement.fromMessageBase(
      message.getLowerdepartmentbase()
    );
    this.createdDate = CommonExtensions.utcSecondsToDate(
      message.getCreatedseconds()
    );
  }

  public static fromMessage(
    message: DepartmentLowerBase
  ): DepartmentLowerBaseElement {
    const element = new DepartmentLowerBaseElement();
    element.fromMessage(message);
    return element;
  }
}
