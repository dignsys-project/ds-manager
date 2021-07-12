import { Component, OnInit, OnDestroy } from '@angular/core';
import {
  SchedulesContentService,
  ESCHEDULE_MENU_STATUS,
} from '../schedules-content.service';
import { ScheduleService } from 'src/app/services/schedules.service';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Location } from '@angular/common';
import { take, map } from 'rxjs/operators';
import { CommonExtensions } from 'src/app/commons/common-extensions';
import { ScheduleSceneElement } from 'src/app/models/scene-schedule-element';
import { ScheduleElement } from 'src/app/models/schedule-element';
import { isNullOrUndefined } from 'util';
import {
  ComponentsCommonDialogComponent,
  DIALOG_KIND,
} from 'src/app/components/components-common-dialog/components-common-dialog.component';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-schedules-scenes-add',
  templateUrl: './schedules-scenes-add.component.html',
  styleUrls: ['./schedules-scenes-add.component.scss'],
})
export class SchedulesScenesAddComponent implements OnInit, OnDestroy {
  element: ScheduleSceneElement;
  private m_bProcess: boolean = false;

  isReadScheduleScene: boolean = false;

  get isProcess(): boolean {
    return this.isReadScheduleScene || this.m_bProcess;
  }

  get isUpdateMode(): boolean {
    return !isNullOrUndefined(this.element) && this.element.id > 0;
  }

  constructor(
    private contentService: SchedulesContentService,
    private service: ScheduleService,
    private location: Location,
    private dialog: MatDialog,
    private snackbar: MatSnackBar
  ) {
    this.contentService.menu$.next(ESCHEDULE_MENU_STATUS.SCHEDULE_SCENE_BACK);

    // update schedule
    const scheduleSceneId = this.contentService.scheduleSceneId;

    if (scheduleSceneId > 0) {
      this.contentService.title$.next('스케줄 씬 수정');
      this.service
        .requestGetScheduleSceneById(scheduleSceneId)
        .pipe(take(1))
        .subscribe((response) => {
          if (CommonExtensions.isSuccess(response.getCommon())) {
            this.element = ScheduleSceneElement.fromMessage(
              response.getSchedulescene()
            );

            // this.isReadScheduleScene = true;
            this.m_bProcess = false;
          } else {
            this.location.back();
          }
        });
    } else {
      this.contentService.title$.next('스케줄 씬 추가');
      // add schedule
      this.element = new ScheduleSceneElement();
      this.element.schedule = new ScheduleElement();
      this.m_bProcess = false;
    }
  }
  ngOnDestroy(): void {
    this.contentService.scheduleSceneId = 0;
  }

  ngOnInit(): void {}

  onClickedCancel() {
    this.location.back();
  }

  // 스케줄 씬 추가.
  onClickedCreateScheduleScene() {
    if (this.element.id > 0) {
      // update
      this.updateScheduleScene(this.element);
    } else {
      // create
      this.createScheduleScene(this.element);
    }

    this.isReadScheduleScene = true;
  }

  private createScheduleScene(scheduleSceneElement: ScheduleSceneElement) {
    let scheduleElement = scheduleSceneElement.schedule;
    const sceneElement = scheduleSceneElement.sceneBase;

    // create schedule scene
    if (0 < scheduleElement.id) {
      this.requestCreateScheduleScene(
        scheduleSceneElement.name,
        scheduleElement.id,
        sceneElement.sceneId
      );
    } else {
      this.requestCreateSchedule(scheduleElement)
        .pipe(take(1))
        .subscribe((createdScheduleElement) => {
          if (!isNullOrUndefined(createdScheduleElement)) {
            this.element.schedule = createdScheduleElement;
            this.requestCreateScheduleScene(
              scheduleSceneElement.name,
              createdScheduleElement.id,
              sceneElement.sceneId
            );
          }
        });
    }
  }

  private requestCreateSchedule(
    scheduleElement: ScheduleElement
  ): Observable<ScheduleElement> {
    // request create schedule
    return this.service.requestPostSchedule(scheduleElement).pipe(
      map((response) => {
        let createdScheduleElement: ScheduleElement = null;
        if (CommonExtensions.isSuccess(response.getCommon())) {
          createdScheduleElement = ScheduleElement.fromMessage(
            response.getSchedule()
          );
        } else if (CommonExtensions.isDuplicated(response.getCommon())) {
          // duplicated
          ComponentsCommonDialogComponent.create(
            this.dialog,
            '중복된 이름',
            DIALOG_KIND.DIALOG_KIND_WARNING,
            `${scheduleElement.name} 스케줄의 이름이 있습니다.`
          );

          this.isReadScheduleScene = false;
        } else {
          // failed
          ComponentsCommonDialogComponent.create(
            this.dialog,
            '실패',
            DIALOG_KIND.DIALOG_KIND_ERROR,
            `알수 없는 에러가 발생하였습니다.`,
            ['잠시 후 다시 이용 바랍니다.']
          );
          this.isReadScheduleScene = false;
        }

        return createdScheduleElement;
      })
    );
  }

  private requestCreateScheduleScene(
    name: string,
    scheduleId: number,
    sceneId: number
  ) {
    this.service
      .requestPostScheduleScene(name, scheduleId, sceneId)
      .pipe(take(1))
      .subscribe((response) => {
        if (CommonExtensions.isSuccess(response.getCommon())) {
          // create created schedule scene
          this.element = ScheduleSceneElement.fromMessage(
            response.getSchedulescene()
          );

          // open snackbar
          this.snackbar
            .open('스케줄 씬이 등록되었습니다.', '확인', {
              duration: 2000,
              horizontalPosition: 'center',
              verticalPosition: 'top',
            })
            .afterDismissed()
            .pipe(take(1))
            .subscribe(() => {
              // success
              this.location.back();
            });
        } else if (CommonExtensions.isDuplicated(response.getCommon())) {
          // duplicated
          ComponentsCommonDialogComponent.create(
            this.dialog,
            '중복된 이름',
            DIALOG_KIND.DIALOG_KIND_WARNING,
            `${name} 스케줄 씬 의 이름이 있습니다.`
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
      });
  }

  private updateScheduleScene(scheduleSceneElement: ScheduleSceneElement) {
    let scheduleElement = scheduleSceneElement.schedule;
    const sceneElement = scheduleSceneElement.sceneBase;

    // create schedule scene
    if (0 < scheduleElement.id) {
      this.requestUpdateScheduleScene(
        scheduleSceneElement.id,
        scheduleSceneElement.name,
        scheduleElement.id,
        sceneElement.sceneId
      );
    } else {
      this.requestCreateSchedule(scheduleElement)
        .pipe(take(1))
        .subscribe((createdScheduleElement) => {
          if (!isNullOrUndefined(createdScheduleElement)) {
            this.requestUpdateScheduleScene(
              scheduleSceneElement.id,
              scheduleSceneElement.name,
              createdScheduleElement.id,
              sceneElement.sceneId
            );
          }
        });
    }
  }

  private requestUpdateScheduleScene(
    scheduleSceneId: number,
    name: string,
    scheduleId: number,
    sceneId: number
  ) {
    this.service
      .requestPutScheduleScene(scheduleSceneId, name, scheduleId, sceneId)
      .pipe(take(1))
      .subscribe((response) => {
        if (CommonExtensions.isSuccess(response.getCommon())) {
          // create created schedule scene
          this.element = ScheduleSceneElement.fromMessage(
            response.getSchedulescene()
          );

          // open snackbar
          this.snackbar
            .open('스케줄 씬이 수정되었습니다.', '확인', {
              duration: 2000,
              horizontalPosition: 'center',
              verticalPosition: 'top',
            })
            .afterDismissed()
            .pipe(take(1))
            .subscribe(() => {
              // success
              this.location.back();
            });
        } else if (CommonExtensions.isDuplicated(response.getCommon())) {
          // duplicated
          ComponentsCommonDialogComponent.create(
            this.dialog,
            '중복된 이름',
            DIALOG_KIND.DIALOG_KIND_WARNING,
            `${name} 스케줄 씬 의 이름이 있습니다.`
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

        this.isReadScheduleScene = false;
      });
  }
}
