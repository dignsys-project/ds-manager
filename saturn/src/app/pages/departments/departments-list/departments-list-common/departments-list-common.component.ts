import { Component, OnInit, OnDestroy } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';
import { MatDialog } from '@angular/material/dialog';
import { isNullOrUndefined, isNull } from 'util';
import { Router } from '@angular/router';
import { DepartmentsListService } from '../departments-list.service';
import { DepartmentNodeElement } from 'src/app/models/department-node-element';
import {
  ComponentsCommonDialogComponent,
  DIALOG_KIND,
} from 'src/app/components/components-common-dialog/components-common-dialog.component';
import { DepartmentsService } from '../../departments.service';
import { take } from 'rxjs/operators';
import { CommonExtensions } from 'src/app/commons/common-extensions';
import { DepartmentsHeaderService } from '../../departments-header.service';

export interface ISelectDepartmentNodeElement {
  node: DepartmentNodeElement;
  canDeleted: boolean;
}

@Component({
  selector: 'app-departments-list-common-common',
  templateUrl: './departments-list-common.component.html',
  styleUrls: ['./departments-list-common.component.scss'],
})
export class DepartmentsListCommonComponent implements OnInit, OnDestroy {
  selectedElement$: BehaviorSubject<ISelectDepartmentNodeElement>;

  isProcess: boolean = false;

  constructor(
    private service: DepartmentsService,
    private headerService: DepartmentsHeaderService,
    private departmentsListService: DepartmentsListService,
    private dialog: MatDialog,
    private router: Router
  ) {
    this.selectedElement$ = this.departmentsListService.selected$;

    this.headerService.title$.next('조직 관리');
  }
  ngOnDestroy(): void {}

  ngOnInit(): void {}

  async onClickedDelete() {
    const element: ISelectDepartmentNodeElement = this.selectedElement$.value;
    if (isNullOrUndefined(element?.node)) {
      return;
    }

    const departmentId = element?.node?.department?.id;
    if (isNullOrUndefined(departmentId) || 0 >= departmentId) {
      return;
    }

    const bSuccess = await ComponentsCommonDialogComponent.create(
      this.dialog,
      '조직 삭제',
      DIALOG_KIND.DIALOG_KIND_WARNING,
      `${element?.node?.name()} 를 삭제하시겠습니까?`,
      [
        '삭제하면 복구 할 수 업습니다.',
        '삭제한 그룹에 속한 사용자들은',
        '조직이 없는 상태로 이동 됩니다.',
      ],
      true
    )
      .afterClosed()
      .toPromise();

    if (!bSuccess) return;

    try {
      this.isProcess = true;
      const response = await this.service
        .requestDeleteDepartmentNode(element.node.id)
        .pipe(take(1))
        .toPromise();

      if (CommonExtensions.isSuccess(response.getCommon())) {
        this.departmentsListService.deleted$.next(element?.node);
        this.departmentsListService.selected$.next(null);
      }
    } catch (error) {
      await ComponentsCommonDialogComponent.create(
        this.dialog,
        '조직 삭제',
        DIALOG_KIND.DIALOG_KIND_ERROR,
        '조직 삭제가 실패하였습니다.',
        ['정보 갱신 후 사용 바랍니다.']
      )
        .afterClosed()
        .toPromise();
    }

    this.isProcess = false;
  }

  onClickedDepartmentItem() {
    const selectedElement = this.selectedElement$.value;
    if (
      !isNullOrUndefined(selectedElement) &&
      !isNullOrUndefined(selectedElement.node)
    ) {
      const departmentId = selectedElement.node.department.id;
      this.router.navigate([`/departments/item/${departmentId}`]);
    }
  }

  onClickedDepartmentsMembers() {
    const selectedElement = this.selectedElement$.value;
    if (
      !isNullOrUndefined(selectedElement) &&
      !isNullOrUndefined(selectedElement.node)
    ) {
      const departmentId = selectedElement.node.department.id;
      this.router.navigate([`/departments/members/${departmentId}`]);
    }
  }

  onClickedDepartmentsDevices() {
    const selectedElement = this.selectedElement$.value;
    if (
      !isNullOrUndefined(selectedElement) &&
      !isNullOrUndefined(selectedElement.node)
    ) {
      const departmentId = selectedElement.node.department.id;
      this.router.navigate([`/departments/connectors/${departmentId}`]);
    }
  }
}
