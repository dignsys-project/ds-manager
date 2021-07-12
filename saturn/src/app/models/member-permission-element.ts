import {
  MEMBER_PERMISSION_KINDMap,
  MemberPermission,
  MEMBER_PERMISSION_KIND,
} from '../protocols/common_pb';

export class MemberPermissionElement {
  id: number;
  permission: MEMBER_PERMISSION_KINDMap[keyof MEMBER_PERMISSION_KINDMap];

  fromMessage(message: MemberPermission) {
    this.id = message.getId();
    this.permission = message.getPermission();
  }

  public static fromMessage(
    message: MemberPermission
  ): MemberPermissionElement {
    const element = new MemberPermissionElement();
    element.fromMessage(message);

    return element;
  }
}
