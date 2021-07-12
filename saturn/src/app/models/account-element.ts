import {
  MEMBER_PERMISSION_KINDMap,
  MEMBER_REGISTER_KINDMap,
  MEMBER_KINDMap,
} from '../protocols/common_pb';

export class AccountElement {
  constructor(token: string) {
    this.token = token;
  }

  id: number;
  email: string;
  kind: MEMBER_KINDMap[keyof MEMBER_KINDMap];
  permissions: Array<
    MEMBER_PERMISSION_KINDMap[keyof MEMBER_PERMISSION_KINDMap]
  > = new Array<MEMBER_PERMISSION_KINDMap[keyof MEMBER_PERMISSION_KINDMap]>();
  register: MEMBER_REGISTER_KINDMap;
  token: string;

  expirationDate: Date;
  isExpired: boolean;
}
