import { Component, OnInit, Input } from '@angular/core';
import { MemberPermissionElement } from 'src/app/models/member-permission-element';
import { AppService } from 'src/app/app.service';
import {
  MEMBER_PERMISSION_KIND,
  MEMBER_PERMISSION_KINDMap,
} from 'src/app/protocols/common_pb';

@Component({
  selector: 'app-components-member-permission',
  templateUrl: './components-member-permission.component.html',
  styleUrls: ['./components-member-permission.component.scss'],
})
export class ComponentsMemberPermissionComponent implements OnInit {
  @Input()
  permission: MEMBER_PERMISSION_KINDMap[keyof MEMBER_PERMISSION_KINDMap];

  @Input()
  set kind(value: string) {
    this.m_Kind = value;
  }

  get isIcon(): boolean {
    return this.m_Kind === 'icon';
  }

  private m_Kind: string;

  isDarkMode: boolean;

  constructor(private appService: AppService) {
    this.appService.isDarkMode$.subscribe(
      (isDarkMode) => (this.isDarkMode = isDarkMode)
    );
  }

  public getPermissionName(): string {
    switch (this.permission) {
      case MEMBER_PERMISSION_KIND.MEMBER_PERMISSION_KIND_MONITOR:
        return '모니터링';
      case MEMBER_PERMISSION_KIND.MEMBER_PERMISSION_KIND_SCENE_SELECT:
        return '씬 보기';
      case MEMBER_PERMISSION_KIND.MEMBER_PERMISSION_KIND_SCENE_UPDATE:
        return '씬 수정';
      case MEMBER_PERMISSION_KIND.MEMBER_PERMISSION_KIND_SCENE_DELETE:
        return '씬 삭제';
      case MEMBER_PERMISSION_KIND.MEMBER_PERMISSION_KIND_MEMBER_SELECT:
        return '멤버 보기';
      case MEMBER_PERMISSION_KIND.MEMBER_PERMISSION_KIND_MEMBER_UPDATE:
        return '멤버 수정';
      case MEMBER_PERMISSION_KIND.MEMBER_PERMISSION_KIND_MEMBER_DELETE:
        return '멤버 삭제';
      case MEMBER_PERMISSION_KIND.MEMBER_PERMISSION_KIND_CONNECT_SELECT:
        return '디바이스 보기';
      case MEMBER_PERMISSION_KIND.MEMBER_PERMISSION_KIND_CONNECT_UPDATE:
        return '디바이스 수정';
      case MEMBER_PERMISSION_KIND.MEMBER_PERMISSION_KIND_CONNECT_DELETE:
        return '비다이스 삭제';
    }
  }

  getIconName(): string {
    switch (this.permission) {
      case MEMBER_PERMISSION_KIND.MEMBER_PERMISSION_KIND_MONITOR:
        return 'important_devices'; // 모니터링
      case MEMBER_PERMISSION_KIND.MEMBER_PERMISSION_KIND_SCENE_SELECT:
      case MEMBER_PERMISSION_KIND.MEMBER_PERMISSION_KIND_SCENE_UPDATE:
      case MEMBER_PERMISSION_KIND.MEMBER_PERMISSION_KIND_SCENE_DELETE:
        return 'view_quilt'; // 씬 관리

      case MEMBER_PERMISSION_KIND.MEMBER_PERMISSION_KIND_MEMBER_SELECT:
      case MEMBER_PERMISSION_KIND.MEMBER_PERMISSION_KIND_MEMBER_UPDATE:
      case MEMBER_PERMISSION_KIND.MEMBER_PERMISSION_KIND_MEMBER_DELETE:
        return 'supervisor_account'; // 멤버 관리 및 조직 관리

      case MEMBER_PERMISSION_KIND.MEMBER_PERMISSION_KIND_CONNECT_SELECT:
      case MEMBER_PERMISSION_KIND.MEMBER_PERMISSION_KIND_CONNECT_UPDATE:
      case MEMBER_PERMISSION_KIND.MEMBER_PERMISSION_KIND_CONNECT_DELETE:
        return 'cloud_upload'; // 배포 관리
    }
  }

  getIconColor(): string {
    switch (this.permission) {
      case MEMBER_PERMISSION_KIND.MEMBER_PERMISSION_KIND_MONITOR:
      case MEMBER_PERMISSION_KIND.MEMBER_PERMISSION_KIND_SCENE_SELECT:
      case MEMBER_PERMISSION_KIND.MEMBER_PERMISSION_KIND_MEMBER_SELECT:
      case MEMBER_PERMISSION_KIND.MEMBER_PERMISSION_KIND_CONNECT_SELECT:
        return 'primary';
      case MEMBER_PERMISSION_KIND.MEMBER_PERMISSION_KIND_SCENE_UPDATE:
      case MEMBER_PERMISSION_KIND.MEMBER_PERMISSION_KIND_MEMBER_UPDATE:
      case MEMBER_PERMISSION_KIND.MEMBER_PERMISSION_KIND_CONNECT_UPDATE:
        return 'accent';
      case MEMBER_PERMISSION_KIND.MEMBER_PERMISSION_KIND_SCENE_DELETE:
      case MEMBER_PERMISSION_KIND.MEMBER_PERMISSION_KIND_MEMBER_DELETE:
      case MEMBER_PERMISSION_KIND.MEMBER_PERMISSION_KIND_CONNECT_DELETE:
        return 'warn'; // 배포 관리
    }
  }

  ngOnInit(): void {}
}
