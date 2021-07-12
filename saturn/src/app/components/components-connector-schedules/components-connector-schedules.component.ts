import {
  Component,
  OnInit,
  Input,
  ViewChild,
  Output,
  EventEmitter,
} from '@angular/core';
import { ConnectorScheduleSceneElement } from 'src/app/models/connector-schedule-scene-element';
import { isNullOrUndefined } from 'util';
import { ScheduleSceneElement } from 'src/app/models/scene-schedule-element';
import { ScheduleService } from 'src/app/services/schedules.service';
import { ConnectorScheduleService } from 'src/app/services/connector-schedule.service';
import { MatTableDataSource } from '@angular/material/table';
import { PaginatorElement } from 'src/app/models/paginator-element';
import { PageEvent } from '@angular/material/paginator';
import { take, filter } from 'rxjs/operators';
import { CommonExtensions } from 'src/app/commons/common-extensions';
import { MatRadioChange } from '@angular/material/radio';
import { ScheduleElement } from 'src/app/models/schedule-element';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Location } from '@angular/common';
import { Router } from '@angular/router';
import { ScheduleScene } from 'src/app/protocols/common_pb';
import {
  ComponentsCommonDialogComponent,
  DIALOG_KIND,
} from '../components-common-dialog/components-common-dialog.component';
import { ComponentsConnectorSchedulesContainerComponent } from '../components-connector-schedules-container/components-connector-schedules-container.component';

@Component({
  selector: 'app-components-connector-schedules',
  templateUrl: './components-connector-schedules.component.html',
  styleUrls: ['./components-connector-schedules.component.scss'],
})
export class ComponentsConnectorSchedulesComponent implements OnInit {
  private m_Elements: Array<ConnectorScheduleSceneElement>;

  @ViewChild(ComponentsConnectorSchedulesContainerComponent, { static: false })
  container: ComponentsConnectorSchedulesContainerComponent;

  @Input()
  connectorId: number;

  @Input()
  set elements(elements: Array<ConnectorScheduleSceneElement>) {
    this.m_Elements = elements;
  }
  get elements(): Array<ConnectorScheduleSceneElement> {
    return this.m_Elements;
  }

  @Input()
  canAdd: boolean = false;

  @Output()
  add: EventEmitter<ScheduleSceneElement> = new EventEmitter<
    ScheduleSceneElement
  >();

  @Input()
  set listMode(isListMode: boolean) {
    this.isListMode = false;

    if (this.isScheduleSceneListMode) {
      this.requestGetScheduleScenes(this.indexScheduleScene);
    }
  }

  isProcess: boolean = false;

  selectedItem: ConnectorScheduleSceneElement;

  isListMode: boolean = true;

  isScheduleSceneListMode: boolean = true;

  createScheduleScene: ScheduleSceneElement = new ScheduleSceneElement();

  dataSourceScheduleScenes: MatTableDataSource<ScheduleSceneElement>;
  paginatorScheduleScenes: PaginatorElement;
  displayedColumnsScheduleScenes: Array<string> = [
    'select',
    'schedule',
    'scene',
  ];

  indexScheduleScene: number = 0;

  get hasSchedules(): boolean {
    return !isNullOrUndefined(this.elements) && this.elements.length > 0;
  }

  get hasScheduleScenes(): boolean {
    return this.dataSourceScheduleScenes?.data?.length > 0;
  }

  get hasSelectedItems(): boolean {
    return !isNullOrUndefined(this.selectedItem) && this.selectedItem.id > 0;
  }

  haveConnectorScheduleScenes(scheduleSceneId: number): boolean {
    if (!this.hasSchedules) {
      return false;
    }

    return (
      -1 !==
      this.elements.findIndex((x) => x.scheduleScene.id === scheduleSceneId)
    );
  }

  constructor(
    private scheduleService: ScheduleService,
    private service: ConnectorScheduleService,
    private location: Location,
    private router: Router,
    private dialog: MatDialog,
    private snackbar: MatSnackBar
  ) {
    // TODO : for connector schedules

    // for schedule scenes
    this.dataSourceScheduleScenes = new MatTableDataSource<
      ScheduleSceneElement
    >([]);
    this.paginatorScheduleScenes = new PaginatorElement(5);
  }

  ngOnInit(): void {}

  // 선택된 스케줄 삭제
  async onClickedRemoveConnectorSchedules() {
    if (!this.hasSelectedItems) {
      return;
    }

    const item = this.selectedItem;
    const bContinune = await ComponentsCommonDialogComponent.create(
      this.dialog,
      '디바이스 스캐줄 삭제',
      DIALOG_KIND.DIALOG_KIND_WARNING,
      `디바이스 스캐줄을 삭제하시겠습니까?`,
      [`${item.scheduleScene.name}`, '스케줄이 디바이스에서', '삭제 됩니다.'],
      true
    )
      .afterClosed()
      .pipe(filter((x) => true === x))
      .toPromise();

    if (true !== bContinune) {
      return;
    }

    const response = await this.service
      .requestDeleteConnectorScheduleScene(this.connectorId, item.id)
      .pipe(take(1))
      .toPromise();
    if (CommonExtensions.isSuccess(response.getCommon())) {
      const index = this.elements.findIndex((x) => x.id === item.id);
      if (-1 !== index) {
        const elements = this.elements;
        elements.splice(index, 1);
        this.elements = elements;
        if (!isNullOrUndefined(this.container)) {
          this.container.dataSource.data = this.elements;
        }

        this.selectedItem = null;
        this.snackbar.open('디바이스에서 스캐줄이 제거 되었습니다.', '확인', {
          duration: 2000,
          horizontalPosition: 'center',
          verticalPosition: 'top',
        });
      }
    }
  }

  onClickedConnectorScheduleAdd() {
    this.isListMode = !this.isListMode;

    if (this.isScheduleSceneListMode) {
      this.requestGetScheduleScenes(this.indexScheduleScene);
    }
  }

  // 스케줄 씬 추가
  onClickedScheduleSceneAdd() {
    this.isScheduleSceneListMode = !this.isScheduleSceneListMode;
    if (!this.isScheduleSceneListMode) {
      this.router.navigate(['/schedules/scenes/add']);
      return;
    }

    this.createScheduleScene = new ScheduleSceneElement();

    if (this.isScheduleSceneListMode) {
      this.requestGetScheduleScenes(this.indexScheduleScene);
    }
  }

  onPaginatorPageScheduleScene(page: PageEvent) {
    this.requestGetScheduleScenes(page.pageIndex);
    this.indexScheduleScene = page.pageIndex;
  }

  onRadioGroupChangedScheduleScene(event: MatRadioChange) {
    const selectElement = event.value as ScheduleSceneElement;
    if (!isNullOrUndefined(selectElement)) {
      this.createScheduleScene = selectElement;
      this.isScheduleSceneListMode = false;

      if (this.canAdd) {
        this.add.next(selectElement);
      }
    }
  }

  // components-schedule이 변경되었을 경우
  onComponentsScheduleSceneChangeSchedule(scheduleElement: ScheduleElement) {
    this.createScheduleScene = new ScheduleSceneElement();
    this.isScheduleSceneListMode = true;
  }

  // selected components-connector-schedule-container
  onSelectComponentsConnectorSchedulesContainer(
    item: ConnectorScheduleSceneElement
  ) {
    this.selectedItem = item;
  }

  onClickedConnectorScheduleCreate() {
    if (isNullOrUndefined(this.createScheduleScene)) {
      return;
    }

    if (this.canAdd) {
      this.add.next(this.createScheduleScene);

      return;
    }

    const scheduleSceneId = this.createScheduleScene.id;
    if (0 < scheduleSceneId) {
      this.service
        .requestPostScheduleScene(this.connectorId, scheduleSceneId)
        .pipe(take(1))
        .subscribe((response) => {
          if (CommonExtensions.isSuccess(response.getCommon())) {
            this.elements.push(
              ConnectorScheduleSceneElement.fromMessage(
                response.getConnectorschedulescene()
              )
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
                setTimeout(() => {
                  this.isListMode = true;
                  this.isScheduleSceneListMode = true;
                  this.createScheduleScene = new ScheduleSceneElement();
                }, 0);
              });
          }
        });
    } else {
    }
  }

  onClickedCancel() {
    this.isListMode = true;
    this.isScheduleSceneListMode = true;
    this.createScheduleScene = new ScheduleSceneElement();
  }

  private requestGetScheduleScenes(index: number) {
    // request get schedule scene
    this.scheduleService
      .requestGetScheduleScene(index, this.paginatorScheduleScenes.size)
      .pipe(take(1))
      .subscribe((response) => {
        if (CommonExtensions.isSuccess(response.getCommon())) {
          this.dataSourceScheduleScenes.data = response
            .getSchedulescenesList()
            .map((x) => ScheduleSceneElement.fromMessage(x));

          this.paginatorScheduleScenes.fromMessage(response.getPaginator());
        }
      });
  }
}
