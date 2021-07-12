import {
  MEMBER_KIND,
  MEMBER_KINDMap,
  MEMBER_PERMISSION_KINDMap,
} from '../protocols/common_pb';

export class PermissionElement {
  memberKind: MEMBER_KINDMap[keyof MEMBER_KINDMap];
  permissions: Array<
    MEMBER_PERMISSION_KINDMap[keyof MEMBER_PERMISSION_KINDMap]
  > = new Array<MEMBER_PERMISSION_KINDMap[keyof MEMBER_PERMISSION_KINDMap]>();

  public isInclude(
    kind: MEMBER_PERMISSION_KINDMap[keyof MEMBER_PERMISSION_KINDMap]
  ): boolean {
    if (this.memberKind == MEMBER_KIND.MEMBER_KIND_ADMIN) {
      return true;
    }

    return (
      undefined != this.permissions &&
      this.permissions?.length > 0 &&
      this.permissions.includes(kind)
    );
  }

  public static fromMessage(
    kind: MEMBER_KINDMap[keyof MEMBER_KINDMap],
    permissions: Array<
      MEMBER_PERMISSION_KINDMap[keyof MEMBER_PERMISSION_KINDMap]
    >
  ): PermissionElement {
    const element = new PermissionElement();
    element.memberKind = kind;
    element.permissions = permissions;
    return element;
  }
}
