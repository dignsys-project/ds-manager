import { Component, OnInit, Inject } from '@angular/core';
import {
  MatDialogRef,
  MAT_DIALOG_DATA,
  MatDialog,
} from '@angular/material/dialog';
import {
  MEMBER_PERMISSION_KINDMap,
  MEMBER_PERMISSION_KIND,
} from 'src/app/protocols/common_pb';

export interface IComponentsPermissionDialogData {
  excludes: Array<MEMBER_PERMISSION_KINDMap[keyof MEMBER_PERMISSION_KINDMap]>;
  haveCancel?: boolean;
}

interface IPermissionDescription {
  permission: MEMBER_PERMISSION_KINDMap[keyof MEMBER_PERMISSION_KINDMap];
  description: string;
  isChecked: boolean;
  isDisabled: boolean;
}

@Component({
  selector: 'app-components-permission-dialog',
  templateUrl: './components-permission-dialog.component.html',
  styleUrls: ['./components-permission-dialog.component.scss'],
})
export class ComponentsPermissionDialogComponent implements OnInit {
  permissions: Array<IPermissionDescription>;

  constructor(
    public reference: MatDialogRef<ComponentsPermissionDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: IComponentsPermissionDialogData
  ) {
    this.permissions = [
      <IPermissionDescription>{
        permission: MEMBER_PERMISSION_KIND.MEMBER_PERMISSION_KIND_SCENE_SELECT,
        description: '씬의 대한 보기 권한 입니다.',
        isChecked: false,
        isDisabled: false,
      },
      <IPermissionDescription>{
        permission: MEMBER_PERMISSION_KIND.MEMBER_PERMISSION_KIND_SCENE_UPDATE,
        description: '씬을 수정 할 수 있습니다.',
        isChecked: false,
        isDisabled: false,
      },
      <IPermissionDescription>{
        permission: MEMBER_PERMISSION_KIND.MEMBER_PERMISSION_KIND_SCENE_DELETE,
        description: '씬을 삭제 할 수 있습니다.',
        isChecked: false,
        isDisabled: false,
      },
      <IPermissionDescription>{
        permission:
          MEMBER_PERMISSION_KIND.MEMBER_PERMISSION_KIND_CONNECT_SELECT,
        description: '디바이스의 목록을 볼 수 있습니다.',
        isChecked: false,
        isDisabled: false,
      },
      <IPermissionDescription>{
        permission:
          MEMBER_PERMISSION_KIND.MEMBER_PERMISSION_KIND_CONNECT_UPDATE,
        description: '디바이스의 대한 승인, 거절, 씬 할당 할 수 있습니다.',
        isChecked: false,
        isDisabled: false,
      },
      <IPermissionDescription>{
        permission:
          MEMBER_PERMISSION_KIND.MEMBER_PERMISSION_KIND_CONNECT_DELETE,
        description: '디바이스를 삭제 할 수 있습니다.',
        isChecked: false,
        isDisabled: false,
      },
      <IPermissionDescription>{
        permission: MEMBER_PERMISSION_KIND.MEMBER_PERMISSION_KIND_MEMBER_SELECT,
        description: '멤버들의 목록을 볼 수 있습니다.',
        isChecked: false,
        isDisabled: false,
      },
      <IPermissionDescription>{
        permission: MEMBER_PERMISSION_KIND.MEMBER_PERMISSION_KIND_MEMBER_UPDATE,
        description: '멤버들의 정보를 업데이트 할 수 있습니다.',
        isChecked: false,
        isDisabled: false,
      },
      <IPermissionDescription>{
        permission: MEMBER_PERMISSION_KIND.MEMBER_PERMISSION_KIND_MEMBER_DELETE,
        description:
          '멤버를 삭제할 수 있습니다. 슈퍼관리자는 삭제 할 수 없습니다.',
        isChecked: false,
        isDisabled: false,
      },
      <IPermissionDescription>{
        permission: MEMBER_PERMISSION_KIND.MEMBER_PERMISSION_KIND_MONITOR,
        description: '디바이스 및 서버의 정보를 확인 할 수 있습니다.',
        isChecked: false,
        isDisabled: false,
      },
    ];

    this.permissions.map(
      (x) => (x.isChecked = this.data.excludes.includes(x.permission))
    );
  }

  ngOnInit(): void {}

  public static create(
    dialog: MatDialog,
    permissions: Array<
      MEMBER_PERMISSION_KINDMap[keyof MEMBER_PERMISSION_KINDMap]
    >,
    haveCancel?: boolean
  ): MatDialogRef<
    ComponentsPermissionDialogComponent,
    Array<MEMBER_PERMISSION_KINDMap[keyof MEMBER_PERMISSION_KINDMap]>
  > {
    return dialog.open(ComponentsPermissionDialogComponent, {
      data: <IComponentsPermissionDialogData>{
        excludes: permissions,
        haveCancel: haveCancel ?? false,
      },
    });
  }

  onClickedConfirm() {
    this.reference.close(
      this.permissions.filter((x) => x.isChecked).map((x) => x.permission)
    );
  }

  onClickedCancel() {
    this.reference.close(null);
  }
}
