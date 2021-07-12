import { MemberBaseElement } from './member-base-element';
import {
  MEMBER_RECORD_KINDMap,
  MemberRecordBlueprint,
  MemberRecord,
} from '../protocols/common_pb';
import { CommonExtensions } from '../commons/common-extensions';

export class MemberRecordElement {
  public memberRecordId: number;
  public memberBase: MemberBaseElement;
  public kind: MEMBER_RECORD_KINDMap[keyof MEMBER_RECORD_KINDMap];
  public blueprint: MemberRecordBlueprint;
  public behaviorSeconds: Date;

  public get year(): number {
    return this.behaviorSeconds?.getFullYear();
  }

  public get date(): string {
    return undefined != this.behaviorSeconds
      ? `${this.behaviorSeconds.getMonth()} / ${this.behaviorSeconds.getDay()}`
      : '';
  }

  public fromMessage(message: MemberRecord) {
    this.memberRecordId = message.getMemberrecordid();
    if (message.hasMemberbase()) {
      MemberBaseElement.fromMessageBase(message.getMemberbase());
    }
    this.kind = message.getKind();

    if (message.hasBlueprint()) {
      this.blueprint = message.getBlueprint();
    }

    this.behaviorSeconds = CommonExtensions.utcSecondsToDate(
      message.getBehaviorseconds()
    );
  }

  public static fromMessage(message: MemberRecord): MemberRecordElement {
    const element = new MemberRecordElement();
    element.fromMessage(message);
    return element;
  }
}
