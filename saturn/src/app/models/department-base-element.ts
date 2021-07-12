import { DepartmentBase } from '../protocols/common_pb';
import { CommonExtensions } from '../commons/common-extensions';

export class DepartmentBaseElement {
  id: number;
  name: string;
  created: Date;

  fromMessageBase(message: DepartmentBase) {
    this.id = message.getId();
    this.name = message.getName();
    this.created = CommonExtensions.utcSecondsToDate(
      message.getCreatedseconds()
    );
  }

  public static fromMessageBase(
    message: DepartmentBase
  ): DepartmentBaseElement {
    const element = new DepartmentBaseElement();
    element.fromMessageBase(message);
    return element;
  }
}
