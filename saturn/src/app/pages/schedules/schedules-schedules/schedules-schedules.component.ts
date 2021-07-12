import { Component, OnInit } from '@angular/core';
import {
  SchedulesContentService,
  ESCHEDULE_MENU_STATUS,
} from '../schedules-content.service';
import { ScheduleService } from 'src/app/services/schedules.service';
import { take, filter } from 'rxjs/operators';
import { CommonExtensions } from 'src/app/commons/common-extensions';
import { MatTableDataSource } from '@angular/material/table';
import { ScheduleElement } from 'src/app/models/schedule-element';
import { isNullOrUndefined } from 'util';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import {
  ComponentsCommonDialogComponent,
  DIALOG_KIND,
} from 'src/app/components/components-common-dialog/components-common-dialog.component';
import { PaginatorElement } from 'src/app/models/paginator-element';
import { PageEvent } from '@angular/material/paginator';

@Component({
  selector: 'app-schedules-schedules',
  templateUrl: './schedules-schedules.component.html',
  styleUrls: ['./schedules-schedules.component.scss'],
})
export class SchedulesSchedulesComponent implements OnInit {
  dataSource: MatTableDataSource<ScheduleElement>;
  displayedColumns: string[] = ['id', 'content'];
  paginator: PaginatorElement;

  public get hasScheduleScenes(): boolean {
    return this.dataSource?.data?.length > 0;
  }

  constructor(
    private contentService: SchedulesContentService,
    private service: ScheduleService,
    private router: Router,
    private dialog: MatDialog
  ) {
    this.contentService.title$.next('스케줄 관리');
    this.contentService.menu$.next(ESCHEDULE_MENU_STATUS.SCHEDULE_ADD);

    this.dataSource = new MatTableDataSource<ScheduleElement>([]);
    this.paginator = new PaginatorElement(10);
  }

  ngOnInit(): void {
    this.requestGetSchedules(0);
  }

  private requestGetSchedules(index: number) {
    this.service
      .requestGetSchedule(index, this.paginator.size)
      .pipe(take(1))
      .subscribe((response) => {
        if (CommonExtensions.isSuccess(response.getCommon())) {
          this.paginator.fromMessage(response.getPaginator());

          this.dataSource.data = response
            .getSchedulesList()
            .map((x) => ScheduleElement.fromMessage(x));
        }
      });
  }

  onClickedCreateScheduleScene() {
    this.router.navigate(['schedules/schedules/add']);
  }

  onPaginatorPage(page: PageEvent) {
    this.requestGetSchedules(page.pageIndex);
  }

  onUpdateFromSchedule(scheduleId: number) {
    if (isNullOrUndefined(scheduleId) || 0 >= scheduleId) {
      return;
    }
    this.contentService.scheduleId = scheduleId;

    this.router.navigate(['schedules/schedules/add']);
  }

  onDeleteFromSchedule(schedule: ScheduleElement) {
    // create delete dialog
    ComponentsCommonDialogComponent.create(
      this.dialog,
      '스케줄 삭제',
      DIALOG_KIND.DIALOG_KIND_WARNING,
      `[${schedule.name}] 삭제하시겠습니까?`,
      ['삭제할 경우 복구할 수 없습니다.'],
      true
    )
      .afterClosed()
      .pipe(filter((x) => true === x))
      .subscribe(() => {
        // request schedule delete
        this.service
          .requestDeleteSchedule(schedule.id)
          .pipe(take(1))
          .subscribe((response) => {
            if (CommonExtensions.isSuccess(response.getCommon())) {
              const rows = this.dataSource.data;
              const index = rows.findIndex((x) => x.id === schedule.id);
              if (-1 !== index) {
                rows.splice(index, 1);

                this.dataSource.data = rows;
              }
            } else if (
              CommonExtensions.isDatabaseRestrict(response.getCommon())
            ) {
              ComponentsCommonDialogComponent.create(
                this.dialog,
                '삭제 실패',
                DIALOG_KIND.DIALOG_KIND_ERROR,
                `사용 중인 스케줄을 삭제할 수 없습니다.`
              );
            }
          });
      });
  }
}
