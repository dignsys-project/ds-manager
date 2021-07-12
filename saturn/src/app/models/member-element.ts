import {
  MEMBER_KINDMap,
  MEMBER_REGISTER_KINDMap,
  Member,
  MemberBase,
  DepartmentBase,
  MEMBER_PERMISSION_KINDMap,
} from '../protocols/common_pb';
import { CommonExtensions } from '../commons/common-extensions';
import { MemberPermissionElement } from './member-permission-element';
import { MemberDepartmentElement } from './member-department-element';
import { isNullOrUndefined } from 'util';
import { MemberBaseElement } from './member-base-element';
import { DepartmentBaseElement } from './department-base-element';

export class MemberElement extends MemberBaseElement {
  departmentBases: Array<DepartmentBaseElement>;
  permissions: Array<
    MEMBER_PERMISSION_KINDMap[keyof MEMBER_PERMISSION_KINDMap]
  >;

  get hasDepartments(): boolean {
    return this.departmentBases?.length > 0;
  }

  public isDepartmentMember(departmentId: number): boolean {
    if (isNullOrUndefined(this.departmentBases)) {
      return false;
    }

    return -1 !== this.departmentBases.findIndex((x) => x.id === departmentId);
  }

  fromMessage(message: Member) {
    this.fromMessageBase(message.getBase());
    this.departmentBases = message
      .getDepartmentbasesList()
      .map((x) => DepartmentBaseElement.fromMessageBase(x));
    this.permissions = message.getPermissionsList().sort((x) => x);
  }

  public static fromMessage(message: Member): MemberElement {
    const member = new MemberElement();
    member.fromMessage(message);
    return member;
  }
}
