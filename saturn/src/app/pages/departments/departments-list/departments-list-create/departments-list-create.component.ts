import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { takeWhile, take } from 'rxjs/operators';
import { isNullOrUndefined } from 'util';
import { Router } from '@angular/router';
import { DepartmentNodeElement } from 'src/app/models/department-node-element';
import { DepartmentElement } from 'src/app/models/department-element';
import { CommonExtensions } from 'src/app/commons/common-extensions';
import {
  ComponentsCommonDialogComponent,
  DIALOG_KIND,
} from 'src/app/components/components-common-dialog/components-common-dialog.component';
import { MatDialog } from '@angular/material/dialog';
import { DepartmentsListService } from '../departments-list.service';
import { DepartmentsService } from 'src/app/pages/departments/departments.service';
import { PostDepartmentNodeResponse } from 'src/app/protocols/prometheus_pb';
import { Location } from '@angular/common';

@Component({
  selector: 'app-departments-list-create',
  templateUrl: './departments-list-create.component.html',
  styleUrls: ['./departments-list-create.component.scss'],
})
export class DepartmentsListCreateComponent implements OnInit, OnDestroy {
  selectedElement?: DepartmentNodeElement;

  nameControl: FormControl;
  parentControl: FormControl;

  isProcess: boolean = false;

  private isSubscribe: boolean = true;

  private m_Elements: Array<DepartmentNodeElement>;

  constructor(
    private memberDepartmentService: DepartmentsListService,
    private router: Router,
    private service: DepartmentsService,
    private dialog: MatDialog,
    private location: Location
  ) {
    this.memberDepartmentService.elements$
      .pipe(takeWhile(() => this.isSubscribe))
      .subscribe((elements) => (this.m_Elements = elements));

    this.memberDepartmentService.enableGoBackItem$.next(true);
    this.memberDepartmentService.selected$
      .pipe(takeWhile(() => this.isSubscribe))
      .subscribe((x) => {
        if (isNullOrUndefined(x) || isNullOrUndefined(x.node)) {
          this.parentControl = null;
          this.selectedElement = null;
        } else {
          this.parentControl = new FormControl(x.node?.name());
          this.selectedElement = x.node;
          this.parentControl.disable();
        }
      });

    this.nameControl = new FormControl('', [
      Validators.required,
      Validators.maxLength(20),
    ]);
  }
  ngOnDestroy(): void {
    this.memberDepartmentService.enableGoBackItem$.next(false);
    this.isSubscribe = false;
  }

  ngOnInit(): void {}

  async onClickedCreateDepartments() {
    this.isProcess = true;
    this.nameControl.disable();

    // to prometheus
    const name = this.nameControl.value as string;
    const parentDepartmentNodeId = this.selectedElement?.id;

    if (
      -1 !==
      this.m_Elements.findIndex(
        (x) => x.name().toLowerCase() === name.toLowerCase()
      )
    ) {
      await ComponentsCommonDialogComponent.create(
        this.dialog,
        '중복된 이름이 존재 합니다.',
        DIALOG_KIND.DIALOG_KIND_WARNING,
        `${name} 조직이 이미 존재 합니다.`
      )
        .afterClosed()
        .toPromise();

      this.nameControl.enable();
      this.isProcess = false;
      return;
    }

    let response: PostDepartmentNodeResponse = null;
    try {
      response = await this.service
        .requestPostDepartmentNode(name, parentDepartmentNodeId)
        .pipe(take(1))
        .toPromise();
    } catch (error) {
      await ComponentsCommonDialogComponent.create(
        this.dialog,
        '조직 생성이 실패 하였습니다.',
        DIALOG_KIND.DIALOG_KIND_ERROR,
        '정보 갱신 후 사용 바랍니다.'
      )
        .afterClosed()
        .toPromise();

      this.nameControl.enable();
      this.isProcess = false;

      return;
    }

    if (!CommonExtensions.isSuccess(response.getCommon())) {
      await ComponentsCommonDialogComponent.create(
        this.dialog,
        '조직 생성이 실패 하였습니다.',
        DIALOG_KIND.DIALOG_KIND_ERROR,
        '정보 갱신 후 사용 바랍니다.'
      )
        .afterClosed()
        .toPromise();

      this.nameControl.enable();
      this.isProcess = false;
      return;
    }

    const element = DepartmentNodeElement.fromMessage(response.getNode());
    this.memberDepartmentService.created$.next(element);

    this.nameControl.setValue('');
    this.nameControl.enable();
    this.isProcess = false;

    this.location.back();
  }
}
