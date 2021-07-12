import { Component, OnInit } from '@angular/core';
import {
  SchedulesContentService,
  ESCHEDULE_MENU_STATUS,
} from '../schedules-content.service';
import { MatTableDataSource } from '@angular/material/table';
import { ScheduleSceneElement } from 'src/app/models/scene-schedule-element';
import { PaginatorElement } from 'src/app/models/paginator-element';
import { ScheduleService } from 'src/app/services/schedules.service';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { take, filter } from 'rxjs/operators';
import { CommonExtensions } from 'src/app/commons/common-extensions';
import { ScheduleElement } from 'src/app/models/schedule-element';
import { isNullOrUndefined } from 'util';
import { PageEvent } from '@angular/material/paginator';
import { MatSnackBar } from '@angular/material/snack-bar';
import {
  ComponentsCommonDialogComponent,
  DIALOG_KIND,
} from 'src/app/components/components-common-dialog/components-common-dialog.component';

@Component({
  selector: 'app-schedules-scenes',
  templateUrl: './schedules-scenes.component.html',
  styleUrls: ['./schedules-scenes.component.scss'],
})
export class SchedulesScenesComponent implements OnInit {
  private m_SelectedScheduleSceneId: number;

  dataSource: MatTableDataSource<ScheduleSceneElement>;
  displayedColumns: string[] = ['id', 'schedule', 'scene'];
  paginator: PaginatorElement;

  isProcess: boolean = false;

  isHover(element: ScheduleSceneElement): boolean {
    return element.id === this.m_SelectedScheduleSceneId;
  }

  get hasScheduleScenes(): boolean {
    return !(this.paginator.index === 0 && this.dataSource.data.length <= 0);
  }

  constructor(
    private contentService: SchedulesContentService,
    private service: ScheduleService,
    private router: Router,
    private dialog: MatDialog,
    private snackbar: MatSnackBar
  ) {
    this.contentService.title$.next('스케줄 씬 관리');
    this.contentService.menu$.next(ESCHEDULE_MENU_STATUS.SCHEDULE_SCENE_ADD);

    this.dataSource = new MatTableDataSource<ScheduleSceneElement>([]);
    this.paginator = new PaginatorElement(10);
  }

  ngOnInit(): void {
    this.requestGetScheduleScenes(0);
  }

  onPaginatorPage(page: PageEvent) {
    this.requestGetScheduleScenes(page.pageIndex);
  }

  onMouseEnterScheduleScene(element: ScheduleSceneElement) {
    this.m_SelectedScheduleSceneId = element.id;
  }

  onMouseLeaveScheduleScene(element: ScheduleSceneElement) {
    this.m_SelectedScheduleSceneId = 0;
  }

  onClickedCreateSchedule() {
    this.router.navigate(['schedules/scenes/add']);
  }

  onClickedUpdate(element: ScheduleSceneElement) {
    this.contentService.scheduleSceneId = element.id;
    this.router.navigate(['schedules/scenes/add']);
  }

  onClickedDelete(element: ScheduleSceneElement) {
    ComponentsCommonDialogComponent.create(
      this.dialog,
      '스케줄 씬 삭제',
      DIALOG_KIND.DIALOG_KIND_WARNING,
      `${element.name}를 삭제하시겠습니까?`,
      ['디바이스에 연결되어 있는 경우 삭제 할 수 없습니다.'],
      true
    )
      .afterClosed()
      .pipe(filter((bContinue) => true === bContinue))
      .subscribe(() => {
        this.isProcess = true;
        this.service
          .requestDeleteScheduleScene(element.id)
          .pipe(take(1))
          .subscribe(
            (response) => {
              if (CommonExtensions.isSuccess(response.getCommon())) {
                this.snackbar.open('스케줄 씬이 삭제 되었습니다.', '확인', {
                  duration: 2000,
                  horizontalPosition: 'center',
                  verticalPosition: 'top',
                });

                const elements = this.dataSource.data;
                const index = elements.findIndex((x) => x.id == element.id);
                if (-1 != index) {
                  elements.splice(index, 1);
                  this.dataSource.data = elements;
                }
              } else if (CommonExtensions.isPermission(response.getCommon())) {
                this.snackbar.open('권한이 없습니다.', '확인', {
                  duration: 2000,
                  horizontalPosition: 'center',
                  verticalPosition: 'top',
                });
              } else if (
                CommonExtensions.isDatabaseRestrict(response.getCommon())
              ) {
                ComponentsCommonDialogComponent.create(
                  this.dialog,
                  '이미 사용 중',
                  DIALOG_KIND.DIALOG_KIND_WARNING,
                  `${element.name}이 이미 사용 중입니다.`,
                  ['디바이스에 연결되어 있는 경우 삭제 할 수 없습니다.']
                );
              }

              this.isProcess = false;
            },
            (error) => (this.isProcess = false)
          );
      });
  }

  private requestGetScheduleScenes(index: number) {
    this.service
      .requestGetScheduleScene(index, this.paginator.size)
      .pipe(take(1))
      .subscribe((response) => {
        if (CommonExtensions.isSuccess(response.getCommon())) {
          this.paginator.fromMessage(response.getPaginator());

          this.dataSource.data = response
            .getSchedulescenesList()
            .map((x) => ScheduleSceneElement.fromMessage(x));
        }
      });
  }
}
