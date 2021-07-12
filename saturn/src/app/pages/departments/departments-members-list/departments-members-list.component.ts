import { Component, OnInit, OnDestroy } from '@angular/core';
import { MemberElement } from 'src/app/models/member-element';
import { AccountsService } from '../../../services/accounts.service';
import { MatDialog } from '@angular/material/dialog';
import { takeWhile, take } from 'rxjs/operators';
import {
  ComponentsCommonDialogComponent,
  DIALOG_KIND,
} from 'src/app/components/components-common-dialog/components-common-dialog.component';
import { CommonExtensions } from 'src/app/commons/common-extensions';
import { MEMBER_KIND } from 'src/app/protocols/common_pb';
import { MembersService } from '../../../services/members.service';
import { DepartmentsService } from '../departments.service';
import { Router } from '@angular/router';
import { ComponentsMemberTableService } from 'src/app/components/components-member-table/components-member-table.service';
import { MemberBaseElement } from 'src/app/models/member-base-element';
import { PermissionService } from 'src/app/services/permission.service';
import { PermissionElement } from 'src/app/models/permission-element';
import { MatSnackBar } from '@angular/material/snack-bar';
import { DepartmentsHeaderService } from '../departments-header.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-departments-members-list',
  templateUrl: './departments-members-list.component.html',
  styleUrls: ['./departments-members-list.component.scss'],
})
export class DepartmentsMembersListComponent implements OnInit, OnDestroy {
  isProcess: boolean = false;

  elements: Array<MemberBaseElement>;
  selectedElements: Array<MemberBaseElement>;

  permissionElement: PermissionElement;

  private m_bSubscribe: boolean = true;

  get isDevelopment(): boolean {
    return false == environment.production;
  }

  get hasSelectedMembers(): boolean {
    return (
      this.selectedElements?.length > 0 &&
      this.selectedElements.filter(
        (x) => x.kind === MEMBER_KIND.MEMBER_KIND_ADMIN
      )?.length <= 0
    );
  }

  get hasNeedApprovalMembers(): boolean {
    if (!this.hasSelectedMembers) {
      return false;
    }

    const memberElements = this.getNormarMembers();

    return memberElements?.length > 0;
  }

  constructor(
    private accountsService: AccountsService,
    private service: MembersService,
    private headerService: DepartmentsHeaderService,
    private componentsMemberTableService: ComponentsMemberTableService,
    private router: Router,
    private dialog: MatDialog,
    private permissionService: PermissionService,
    private snackbar: MatSnackBar
  ) {
    this.headerService.title$.next('멤버 목록');

    this.permissionService.element$
      .pipe(takeWhile(() => this.m_bSubscribe))
      .subscribe((element) => (this.permissionElement = element));
  }

  ngOnInit(): void {
    this.requestGetMembers();
  }

  ngOnDestroy(): void {
    this.m_bSubscribe = false;
  }

  private getNormarMembers(): Array<MemberBaseElement> {
    return this.selectedElements.filter(
      (x) =>
        !(
          x.kind === MEMBER_KIND.MEMBER_KIND_ADMIN ||
          x.kind === MEMBER_KIND.MEMBER_KIND_MANAGER
        )
    );
  }

  async onClickedConfirm() {
    const memberElements = this.getNormarMembers();
    if (0 <= memberElements.length) {
      const bSuccess = await ComponentsCommonDialogComponent.create(
        this.dialog,
        '계정 승인 요청',
        DIALOG_KIND.DIALOG_KIND_DEFAULT,
        `${memberElements.length}의 멤버들을 승인하시겠습니까?`,
        null,
        true
      )
        .afterClosed()
        .toPromise();

      if (!bSuccess) return;

      this.service.isProcess$.next(true);

      this.isProcess = true;
      for (var element of memberElements) {
        const response = await this.service
          .requestPutMemberKind(element.id, MEMBER_KIND.MEMBER_KIND_MANAGER)
          .pipe(take(1))
          .toPromise();

        if (CommonExtensions.isSuccess(response.getCommon())) {
          element.fromMessageBase(response.getMemberbase());
        }
      }

      this.isProcess = false;
      this.service.isProcess$.next(false);

      this.snackbar.open('멤버 승인이 완료되었습니다.', '확인', {
        duration: 2000,
        horizontalPosition: 'center',
        verticalPosition: 'top',
      });

      return;
    }

    const bSuccess = await ComponentsCommonDialogComponent.create(
      this.dialog,
      '계정 승인 요청',
      DIALOG_KIND.DIALOG_KIND_DEFAULT,
      '테스트 계정을 추가하시겠습니까?',
      null,
      true
    )
      .afterClosed()
      .toPromise();
  }

  async onClickedCreateTestMember() {
    const bSuccess = await ComponentsCommonDialogComponent.create(
      this.dialog,
      '테스트 계정 추가',
      DIALOG_KIND.DIALOG_KIND_DEFAULT,
      '테스트 계정을 추가하시겠습니까?',
      null,
      true
    )
      .afterClosed()
      .toPromise();

    if (!bSuccess) return;

    this.service.isProcess$.next(true);
    this.isProcess = true;
    for (let i = 0; i < 30; i++) {
      const response = await this.accountsService
        .requestPostAccount(
          `${CommonExtensions.MakeRandomToken(10)}@test.com`,
          CommonExtensions.MakeRandomToken(16),
          'MEMBER_KIND_TEST'
        )
        .pipe(take(1))
        .toPromise();

      if (CommonExtensions.isSuccess(response.getCommon())) {
        this.requestGetMembers();
      }
    }

    this.isProcess = false;
    this.service.isProcess$.next(false);
  }

  async onClickedDeleteMember() {
    const items = this.selectedElements.filter(
      (x) => x.kind !== MEMBER_KIND.MEMBER_KIND_ADMIN
    );
    const bSuccess = await ComponentsCommonDialogComponent.create(
      this.dialog,
      '계정 삭제',
      DIALOG_KIND.DIALOG_KIND_DEFAULT,
      `${items?.length} 개의 계정을 삭제하시겠습니까?`,
      items.map((x) => x.email),
      true
    )
      .afterClosed()
      .toPromise();

    if (!bSuccess) return;

    const deletedElement = new Array<MemberBaseElement>();

    this.isProcess = true;
    this.service.isProcess$.next(true);

    for (let member of items) {
      const response = await this.service
        .requestDeleteMember(member.uuid)
        .pipe(take(1))
        .toPromise();
      if (CommonExtensions.isSuccess(response.getCommon())) {
        deletedElement.push(member);
      }
    }

    this.componentsMemberTableService.deletedElements$.next(deletedElement);

    this.isProcess = false;

    deletedElement.forEach((x) => {
      const index = this.selectedElements.findIndex((se) => se.id == x.id);
      if (-1 != index) {
        this.selectedElements.splice(index, 1);
      }
    });
    this.service.isProcess$.next(false);

    this.snackbar.open('멤버 삭제가 완료되었습니다.', '확인', {
      duration: 2000,
      horizontalPosition: 'center',
      verticalPosition: 'top',
    });
  }

  requestGetMembers() {
    this.service
      .requestGetMember()
      .pipe(take(1))
      .subscribe((response) => {
        if (CommonExtensions.isSuccess(response.getCommon())) {
          this.elements = response
            .getMemberbasesList()
            .map((x) => MemberBaseElement.fromMessageBase(x));
        }
      });
  }

  onMemberTableSelected(elements: Array<MemberBaseElement>) {
    this.selectedElements = elements;
  }

  onMemberTableClicked(element: MemberBaseElement) {
    if (0 >= element.id) {
      return;
    }
    this.router.navigate([`/departments/member/${element.id}`]);
  }
}
