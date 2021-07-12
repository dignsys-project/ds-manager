import { Component, OnInit } from '@angular/core';
import {
  SchedulesContentService,
  ESCHEDULE_MENU_STATUS,
} from '../schedules-content.service';
import { ScheduleElement } from 'src/app/models/schedule-element';
import { Location } from '@angular/common';
import { MatDialog } from '@angular/material/dialog';
import {
  ComponentsCommonDialogComponent,
  DIALOG_KIND,
} from 'src/app/components/components-common-dialog/components-common-dialog.component';
import { ScheduleService } from 'src/app/services/schedules.service';
import { take } from 'rxjs/operators';
import { CommonExtensions } from 'src/app/commons/common-extensions';
import { MatSnackBar } from '@angular/material/snack-bar';
import { isNullOrUndefined } from 'util';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-schedules-schedules-add',
  templateUrl: './schedules-schedules-add.component.html',
  styleUrls: ['./schedules-schedules-add.component.scss'],
})
export class SchedulesSchedulesAddComponent implements OnInit {
  element: ScheduleElement;

  isProcess: boolean;

  dataSource: MatTableDataSource<ScheduleElement>;

  get isUpdateMode(): boolean {
    return this.element?.id > 0;
  }

  constructor(
    private contentService: SchedulesContentService,
    private service: ScheduleService,
    private location: Location,
    private dialog: MatDialog,
    private snackbar: MatSnackBar
  ) {
    this.contentService.menu$.next(ESCHEDULE_MENU_STATUS.SCHEDULE_BACK);

    this.dataSource = new MatTableDataSource<ScheduleElement>([]);

    // update schedule
    if (this.contentService.scheduleId > 0) {
      this.contentService.title$.next('스케줄 수정');
      this.service
        .requestGetScheduleById(this.contentService.scheduleId)
        .pipe(take(1))
        .subscribe((response) => {
          if (CommonExtensions.isSuccess(response.getCommon())) {
            this.element = ScheduleElement.fromMessage(response.getSchedule());
            this.isProcess = false;
          } else {
            this.location.back();
          }
        });
    } else {
      this.contentService.title$.next('스케줄 추가');
      // add schedule
      this.element = new ScheduleElement();
      this.isProcess = false;
    }
  }

  ngOnInit(): void {
    this.contentService.scheduleId = 0;
  }

  async onClickedCreateSchedule() {
    this.isProcess = true;
    const bContinue = await ComponentsCommonDialogComponent.create(
      this.dialog,
      this.isUpdateMode ? '스케줄을 수정' : '스케줄을 추가',
      DIALOG_KIND.DIALOG_KIND_DEFAULT,
      `${this.element.name} ${
        this.isUpdateMode
          ? '스케줄을 수정하시겠습니까?'
          : '스케줄을 추가하시겠습니까?'
      }`,
      null,
      true
    )
      .afterClosed()
      .toPromise();

    if (bContinue !== true) {
      this.isProcess = false;
      return;
    }

    if (this.isUpdateMode) {
      await this.requestUpdateSchedule();
    } else {
      await this.requestCreateSchedule();
    }

    this.isProcess = false;
  }

  async requestCreateSchedule() {
    const response = await this.service
      .requestPostSchedule(this.element)
      .pipe(take(1))
      .toPromise();
    if (CommonExtensions.isSuccess(response.getCommon())) {
      const e = await this.snackbar
        .open('스케줄이 등록되었습니다.', '확인', {
          duration: 2000,
          horizontalPosition: 'center',
          verticalPosition: 'top',
        })
        .afterDismissed()
        .toPromise();

      // success
      this.location.back();
    } else if (CommonExtensions.isDuplicated(response.getCommon())) {
      // duplicated
      ComponentsCommonDialogComponent.create(
        this.dialog,
        '중복된 이름',
        DIALOG_KIND.DIALOG_KIND_WARNING,
        `${this.element.name} 스케줄의 이름이 있습니다.`
      );
    } else {
      // failed
      ComponentsCommonDialogComponent.create(
        this.dialog,
        '실패',
        DIALOG_KIND.DIALOG_KIND_ERROR,
        `알수 없는 에러가 발생하였습니다.`,
        ['잠시 후 다시 이용 바랍니다.']
      );
    }
  }

  // request update schedule
  async requestUpdateSchedule() {
    const response = await this.service
      .requestPutSchedule(this.element.id, this.element)
      .pipe(take(1))
      .toPromise();

    if (CommonExtensions.isSuccess(response.getCommon())) {
      const e = await this.snackbar
        .open('스케줄이 수정되었습니다.', '확인', {
          duration: 2000,
          horizontalPosition: 'center',
          verticalPosition: 'top',
        })
        .afterDismissed()
        .toPromise();

      // success
      this.location.back();
    } else if (CommonExtensions.isDuplicated(response.getCommon())) {
      // duplicated
      ComponentsCommonDialogComponent.create(
        this.dialog,
        '중복된 이름',
        DIALOG_KIND.DIALOG_KIND_WARNING,
        `${this.element.name} 스케줄의 이름이 있습니다.`
      );
    } else {
      // failed
      ComponentsCommonDialogComponent.create(
        this.dialog,
        '실패',
        DIALOG_KIND.DIALOG_KIND_ERROR,
        `알수 없는 에러가 발생하였습니다.`,
        ['잠시 후 다시 이용 바랍니다.']
      );
    }
  }

  async onClickedCancel() {
    const bContinue = await ComponentsCommonDialogComponent.create(
      this.dialog,
      '스케줄 추가 취소',
      DIALOG_KIND.DIALOG_KIND_DEFAULT,
      `스케줄을 추가를 취소 하시겠습니까?`,
      null,
      true
    )
      .afterClosed()
      .toPromise();
    if (bContinue !== true) {
      return;
    }

    this.location.back();
  }
}
