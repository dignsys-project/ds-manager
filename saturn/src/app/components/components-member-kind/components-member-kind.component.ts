import { Component, OnInit, Input } from '@angular/core';
import { MEMBER_KINDMap, MEMBER_KIND } from 'src/app/protocols/common_pb';

@Component({
  selector: 'app-components-member-kind',
  templateUrl: './components-member-kind.component.html',
  styleUrls: ['./components-member-kind.component.scss'],
})
export class ComponentsMemberKindComponent implements OnInit {
  @Input()
  memberKind: MEMBER_KINDMap[keyof MEMBER_KINDMap];

  colors: Array<string> = [
    '#F6D430',
    '8BA5C8',
    '#2D59A1',
    '#5FB27C',
    '#E35845',
  ];

  isMember = (kind: MEMBER_KINDMap[keyof MEMBER_KINDMap]) =>
    kind === MEMBER_KIND.MEMBER_KIND_NORMAL;
  isAdmin = (kind: MEMBER_KINDMap[keyof MEMBER_KINDMap]) =>
    kind === MEMBER_KIND.MEMBER_KIND_ADMIN;
  isManager = (kind: MEMBER_KINDMap[keyof MEMBER_KINDMap]) =>
    kind === MEMBER_KIND.MEMBER_KIND_MANAGER;
  isTester = (kind: MEMBER_KINDMap[keyof MEMBER_KINDMap]) =>
    kind === MEMBER_KIND.MEMBER_KIND_TEST;

  constructor() {}

  ngOnInit(): void {}

  getName(): string {
    switch (this.memberKind) {
      case MEMBER_KIND.MEMBER_KIND_NORMAL:
        return '비 승인 멤버';
      case MEMBER_KIND.MEMBER_KIND_ADMIN:
        return '슈퍼 관리자';
      case MEMBER_KIND.MEMBER_KIND_MANAGER:
        return '관리자';
      case MEMBER_KIND.MEMBER_KIND_TEST:
        return '테스터';
    }
    return '';
  }
}
