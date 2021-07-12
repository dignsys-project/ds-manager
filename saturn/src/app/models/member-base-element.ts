import {
  MEMBER_KINDMap,
  MEMBER_REGISTER_KINDMap,
  MemberBase,
} from '../protocols/common_pb';
import { CommonExtensions } from '../commons/common-extensions';

export class MemberBaseElement {
  id: number;
  uuid: string;
  email: string;
  kind: MEMBER_KINDMap[keyof MEMBER_KINDMap];
  registerKind: MEMBER_REGISTER_KINDMap[keyof MEMBER_REGISTER_KINDMap];
  createdSeconds: Date;
  lastConnectedSeconds: Date;

  fromMessageBase(message: MemberBase) {
    this.id = message.getId();
    this.uuid = message.getUuid();
    this.email = message.getEmail();
    this.kind = message.getMemberkind();
    this.registerKind = message.getRegisterkind();
    this.createdSeconds = CommonExtensions.utcSecondsToDate(
      message.getCreatedseconds()
    );
    this.lastConnectedSeconds = CommonExtensions.utcSecondsToDate(
      message.getLastconnectedseconds()
    );
  }

  public static fromMessageBase(message: MemberBase): MemberBaseElement {
    const memberBase = new MemberBaseElement();
    memberBase.fromMessageBase(message);
    return memberBase;
  }
}
