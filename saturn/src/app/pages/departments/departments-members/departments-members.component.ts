import { Component, OnInit } from '@angular/core';
import { trigger, transition, style, animate } from '@angular/animations';
import { DepartmentElement } from 'src/app/models/department-element';
import { ActivatedRoute, Router } from '@angular/router';
import { AppService } from 'src/app/app.service';
import { MatDialog } from '@angular/material/dialog';
import { takeWhile, filter, take } from 'rxjs/operators';
import { isNullOrUndefined } from 'util';
import { CommonExtensions } from 'src/app/commons/common-extensions';
import {
  ComponentsCommonDialogComponent,
  DIALOG_KIND,
} from 'src/app/components/components-common-dialog/components-common-dialog.component';
import {
  Department,
  ConnectorBase,
  Member,
  MemberBase,
} from 'src/app/protocols/common_pb';
import { DepartmentsMembersService } from './departments-members.service';
import { MemberElement } from 'src/app/models/member-element';
import { MemberBaseElement } from 'src/app/models/member-base-element';
import { PermissionService } from 'src/app/services/permission.service';
import { DepartmentsHeaderService } from '../departments-header.service';
import { DepartmentBaseElement } from 'src/app/models/department-base-element';

@Component({
  selector: 'app-departments-members',
  templateUrl: './departments-members.component.html',
  styleUrls: ['./departments-members.component.scss'],
  providers: [DepartmentsMembersService],
  animations: [
    trigger('live', [
      transition(':enter', [
        style({ opacity: 0, transform: 'scale(0.1)' }),
        animate('300ms', style({ opacity: 1, transform: 'scale(1)' })),
      ]),
      // transition(':leave', [animate('100ms', style({ opacity: 0 }))]),
    ]),
    trigger('appear', [
      transition(':enter', [
        style({ opacity: 0 }),
        animate('300ms', style({ opacity: 1 })),
      ]),
      transition(':leave', [animate('100ms', style({ opacity: 0 }))]),
    ]),
  ],
})
export class DepartmentsMembersComponent implements OnInit {
  private m_DepartmentId: number;
  private m_bSubscribe: boolean = true;
  private isDarkMode: boolean = false;

  department: DepartmentElement;

  members: Array<MemberBaseElement>;

  private m_DeadBeatMembers: Array<MemberBaseElement>;

  isDeadbeatsMode: boolean = false;

  selectedMemberElements: Array<MemberBaseElement>;

  isProcess: boolean = false;

  get hasSelectedMembers(): boolean {
    return this.selectedMemberElements?.length > 0;
  }

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private headerService: DepartmentsHeaderService,
    private appService: AppService,
    private dialog: MatDialog,
    private service: DepartmentsMembersService
  ) {
    this.headerService.enabledBack$.next(true);

    this.appService.isDarkMode$
      .pipe(takeWhile(() => this.m_bSubscribe))
      .subscribe((isDarkMode) => (this.isDarkMode = isDarkMode));

    this.activatedRoute.params.subscribe((params) => {
      this.m_DepartmentId = params.departmentId;
      if (isNullOrUndefined(this.m_DepartmentId) || 0 >= this.m_DepartmentId) {
        this.router.navigate(['/departments']);
        return;
      }

      this.service
        .requestGetDepartmentMembers(this.m_DepartmentId)
        .pipe(takeWhile(() => this.m_bSubscribe))
        .subscribe((response) => {
          if (CommonExtensions.isSuccess(response.getCommon())) {
            this.setDepartmentMembers(
              response.getDepartment(),
              response.getMemberbasesList()
            );
            this.headerService.title$.next(
              `${this.department.name} 조직 멤버 관리`
            );
          }
        });
    });
  }

  ngOnDestroy(): void {
    this.m_bSubscribe = false;
    this.headerService.enabledBack$.next(false);
  }

  ngOnInit(): void {}

  onClickedAddDeadbeats() {
    this.isDeadbeatsMode = true;
    this.selectedMemberElements = null;

    this.changeMemberTableItems();
  }

  onClickedCancleDeadbeats() {
    this.isDeadbeatsMode = false;
    this.selectedMemberElements = null;

    this.changeMemberTableItems();
  }

  onClickedMoveConnectors() {
    this.router.navigate(['/departments/members']);
  }

  onMemberTableClicked(element: MemberBaseElement) {}

  onMemberTableSelected(elements: Array<MemberBaseElement>) {
    this.selectedMemberElements = elements;
  }

  async onClickedAddConnectorToDepartment() {
    const bContinue = await ComponentsCommonDialogComponent.create(
      this.dialog,
      '조직에 멤버 추가',
      DIALOG_KIND.DIALOG_KIND_DEFAULT,
      '조직에 추가하시겠습니까?',
      this.selectedMemberElements.map((x) => x.email),
      true
    )
      .afterClosed()
      .pipe(filter((bContinue) => bContinue))
      .toPromise();

    const items = this.selectedMemberElements;

    for (const item of items) {
      const response = await this.service
        .requestPostDepartmentMember(this.m_DepartmentId, item.id)
        .pipe(take(1))
        .toPromise();

      if (CommonExtensions.isSuccess(response.getCommon())) {
        this.setDepartmentMembers(
          response.getDepartment(),
          response.getMemberbasesList()
        );
      } else if (CommonExtensions.isRefresh(response.getCommon())) {
        window.location.reload();
      }

      this.onClickedCancleDeadbeats();
    }
  }

  async onClickedConnectorsDelete() {
    const items = this.selectedMemberElements;

    const bContinue = await ComponentsCommonDialogComponent.create(
      this.dialog,
      '조직의 멤버 제거',
      DIALOG_KIND.DIALOG_KIND_DEFAULT,
      `${items.length} 개의 멤버를 제거하시겠습니까?`,
      items.map((x) => x.email),
      true
    )
      .afterClosed()
      .toPromise();

    if (isNullOrUndefined(bContinue) || !bContinue) {
      return;
    }

    for (const item of items) {
      const response = await this.service
        .requestDeleteDepartmentMember(this.m_DepartmentId, item.id)
        .pipe(take(1))
        .toPromise();

      if (CommonExtensions.isSuccess(response.getCommon())) {
        this.setDepartmentMembers(
          response.getDepartment(),
          response.getMemberbasesList()
        );
      } else if (CommonExtensions.isRefresh(response.getCommon())) {
        window.location.reload();
      }
    }
  }

  private changeMemberTableItems() {
    if (this.isDeadbeatsMode) {
      this.members = this.m_DeadBeatMembers;
    } else {
      this.members = this.department.memberBases;
    }
  }

  private setDepartmentMembers(
    department: Department,
    members: Array<MemberBase>
  ) {
    this.department = DepartmentElement.fromMessage(department);
    this.m_DeadBeatMembers = members.map((x) =>
      MemberBaseElement.fromMessageBase(x)
    );
    this.changeMemberTableItems();
  }
}
