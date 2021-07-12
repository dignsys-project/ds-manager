import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { MemberElement } from 'src/app/models/member-element';
import {
  MEMBER_KIND,
  MEMBER_PERMISSION_KIND,
  MEMBER_PERMISSION_KINDMap,
} from 'src/app/protocols/common_pb';
import { PermissionService } from 'src/app/services/permission.service';
import { takeWhile, take, filter } from 'rxjs/operators';
import { PermissionElement } from 'src/app/models/permission-element';
import { MatDialog } from '@angular/material/dialog';
import { ComponentsPermissionDialogComponent } from '../components-permission-dialog/components-permission-dialog.component';
import { MemberPermissionService } from 'src/app/services/member-permission.service';
import { CommonExtensions } from 'src/app/commons/common-extensions';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Location } from '@angular/common';
import { Observable } from 'rxjs';
import { timeStamp } from 'console';

@Component({
  selector: 'app-components-member-item',
  templateUrl: './components-member-item.component.html',
  styleUrls: ['./components-member-item.component.scss'],
})
export class ComponentsMemberItemComponent implements OnInit, OnDestroy {
  @Input()
  set element(element: MemberElement) {
    this.m_Element = element;
  }

  get element(): MemberElement {
    return this.m_Element;
  }

  private m_Element: MemberElement;

  private m_bSubscribe: boolean = true;

  permissionElement: PermissionElement;

  isProcess: boolean = false;

  isAdministrator = () =>
    this.m_Element?.kind === MEMBER_KIND.MEMBER_KIND_ADMIN;

  get havePermission(): boolean {
    if (undefined == this.permissionElement) {
      return false;
    }

    return this.permissionElement?.isInclude(
      MEMBER_PERMISSION_KIND.MEMBER_PERMISSION_KIND_MEMBER_UPDATE
    );
  }

  constructor(
    private permissionService: PermissionService,
    private dialog: MatDialog,
    private memberPermissionService: MemberPermissionService,
    private snackbar: MatSnackBar,
    private location: Location
  ) {
    this.permissionService.element$
      .pipe(takeWhile(() => this.m_bSubscribe))
      .subscribe((element) => {
        this.permissionElement = element;
      });
  }

  ngOnDestroy(): void {
    this.m_bSubscribe = false;
  }

  ngOnInit(): void {}

  scenePermissions(
    permissions: Array<
      MEMBER_PERMISSION_KINDMap[keyof MEMBER_PERMISSION_KINDMap]
    >
  ): Array<MEMBER_PERMISSION_KINDMap[keyof MEMBER_PERMISSION_KINDMap]> {
    const scenePermissions = permissions.filter(
      (x) =>
        x == MEMBER_PERMISSION_KIND.MEMBER_PERMISSION_KIND_SCENE_SELECT ||
        x == MEMBER_PERMISSION_KIND.MEMBER_PERMISSION_KIND_SCENE_UPDATE ||
        x == MEMBER_PERMISSION_KIND.MEMBER_PERMISSION_KIND_SCENE_DELETE
    );

    return scenePermissions;
  }

  connectorPermissions(
    permissions: Array<
      MEMBER_PERMISSION_KINDMap[keyof MEMBER_PERMISSION_KINDMap]
    >
  ): Array<MEMBER_PERMISSION_KINDMap[keyof MEMBER_PERMISSION_KINDMap]> {
    const connectorPermissions = permissions.filter(
      (x) =>
        x == MEMBER_PERMISSION_KIND.MEMBER_PERMISSION_KIND_CONNECT_SELECT ||
        x == MEMBER_PERMISSION_KIND.MEMBER_PERMISSION_KIND_CONNECT_UPDATE ||
        x == MEMBER_PERMISSION_KIND.MEMBER_PERMISSION_KIND_CONNECT_DELETE
    );

    return connectorPermissions;
  }

  memberPermissions(
    permissions: Array<
      MEMBER_PERMISSION_KINDMap[keyof MEMBER_PERMISSION_KINDMap]
    >
  ): Array<MEMBER_PERMISSION_KINDMap[keyof MEMBER_PERMISSION_KINDMap]> {
    const memberPermissions = permissions.filter(
      (x) =>
        x == MEMBER_PERMISSION_KIND.MEMBER_PERMISSION_KIND_MEMBER_SELECT ||
        x == MEMBER_PERMISSION_KIND.MEMBER_PERMISSION_KIND_MEMBER_UPDATE ||
        x == MEMBER_PERMISSION_KIND.MEMBER_PERMISSION_KIND_MEMBER_DELETE
    );

    return memberPermissions;
  }

  monitorPermissions(
    permissions: Array<
      MEMBER_PERMISSION_KINDMap[keyof MEMBER_PERMISSION_KINDMap]
    >
  ): Array<MEMBER_PERMISSION_KINDMap[keyof MEMBER_PERMISSION_KINDMap]> {
    const memberPermissions = permissions.filter(
      (x) => x == MEMBER_PERMISSION_KIND.MEMBER_PERMISSION_KIND_MONITOR
    );

    return memberPermissions;
  }

  // clicked change member permissions
  async onClickedChangeMemberPermissions() {
    const permissions = await ComponentsPermissionDialogComponent.create(
      this.dialog,
      this.element.permissions,
      true
    )
      .afterClosed()
      .pipe(take(1))
      .toPromise();

    this.isProcess = true;

    if (permissions?.length > 0) {
      try {
        // request put permissions
        const response = await this.memberPermissionService
          .requestPutPermissions(this.element.id, permissions)
          .pipe(take(1))
          .toPromise();
        if (CommonExtensions.isSuccess(response.getCommon())) {
          this.element.fromMessage(response.getMember());

          this.snackbar.open('권한이 변경 되었습니다.', '확인', {
            duration: 2000,
            horizontalPosition: 'center',
            verticalPosition: 'top',
          });
          window.location.reload();
        }
      } catch (error) {
        console.error(error);

        this.snackbar.open('권한이 변경 실패되었습니다.', '확인', {
          duration: 2000,
          horizontalPosition: 'center',
          verticalPosition: 'top',
        });
      }
    } else {
      try {
        // request delete permissions
        const response = await this.memberPermissionService
          .requestDeletePermissions(this.element.id)
          .pipe(take(1))
          .toPromise();
        if (CommonExtensions.isSuccess(response.getCommon())) {
          this.element.fromMessage(response.getMember());

          this.snackbar.open('권한이 변경 되었습니다.', '확인', {
            duration: 2000,
            horizontalPosition: 'center',
            verticalPosition: 'top',
          });
        }
        window.location.reload();
      } catch (error) {
        console.error(error);

        this.snackbar.open('권한이 변경 실패되었습니다.', '확인', {
          duration: 2000,
          horizontalPosition: 'center',
          verticalPosition: 'top',
        });
      }
    }

    this.isProcess = false;
  }
}
