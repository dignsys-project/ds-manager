import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ScheduleSceneElement } from 'src/app/models/scene-schedule-element';
import { ScheduleElement } from 'src/app/models/schedule-element';
import { ScheduleService } from 'src/app/services/schedules.service';
import { take } from 'rxjs/operators';
import { CommonExtensions } from 'src/app/commons/common-extensions';
import { PaginatorElement } from 'src/app/models/paginator-element';
import { PageEvent } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { MatRadioChange } from '@angular/material/radio';
import { isNullOrUndefined } from 'util';
import { SceneBaseElement } from 'src/app/models/scene-base-element';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-components-schedule-scene',
  templateUrl: './components-schedule-scene.component.html',
  styleUrls: ['./components-schedule-scene.component.scss'],
})
export class ComponentsScheduleSceneComponent implements OnInit {
  private m_bReadScheduleScene: boolean = false;
  private m_Element: ScheduleSceneElement;

  // 스케줄 리스트 선택 모드
  isScheduleListMode: boolean = false;

  // 스케줄을 읽기 모드로만 사용하도록 설정
  isReadSchedule: boolean = false;

  // 씬이 설정 가능하도록 설정
  isReadScene: boolean = false;

  paginator: PaginatorElement;
  dataSource: MatTableDataSource<ScheduleElement>;
  displayedColumns: Array<string> = ['select', 'schedule'];

  nameControl: FormControl;

  @Input()
  readSchedule: boolean = false;

  @Input()
  set element(value: ScheduleSceneElement) {
    this.m_Element = value;
    if (!isNullOrUndefined(value) && value.name) {
      this.nameControl.setValue(value.name);
    }
  }
  get element(): ScheduleSceneElement {
    return this.m_Element;
  }

  @Input()
  set read(value: boolean) {
    this.m_bReadScheduleScene = value;
    this.isReadSchedule = value;
    this.isReadScene = value;
    if (value) {
      this.nameControl.disable();
    } else {
      this.nameControl.enable();
    }
  }

  @Output()
  changeSchedule: EventEmitter<ScheduleElement> = new EventEmitter<
    ScheduleElement
  >();

  get read(): boolean {
    return this.m_bReadScheduleScene;
  }

  get isValidSchedule(): boolean {
    return (
      !isNullOrUndefined(this.element) &&
      !isNullOrUndefined(this.element.schedule) &&
      this.element.schedule.isValidate
    );
  }

  get isValidScene(): boolean {
    return (
      !isNullOrUndefined(this.element) &&
      !isNullOrUndefined(this.element.sceneBase) &&
      this.element.sceneBase.isValidate
    );
  }

  constructor(private service: ScheduleService) {
    this.nameControl = new FormControl('', [
      Validators.required,
      Validators.maxLength(30),
    ]);
    this.nameControl.valueChanges.subscribe((x) => (this.element.name = x));

    this.dataSource = new MatTableDataSource<ScheduleElement>([]);
    this.paginator = new PaginatorElement(5);
  }

  ngOnInit(): void {
    // this.onClickedChangeScheduleMode();
  }

  onRadioGroupChanged(event: MatRadioChange) {
    const selectElement = event.value as ScheduleElement;
    if (!isNullOrUndefined(selectElement)) {
      this.element.schedule = selectElement;
      this.isReadSchedule = true;
      this.isScheduleListMode = false;

      this.changeSchedule.emit(this.element.schedule);
    }
  }

  onClickedRemoveSchedule() {
    this.element.schedule = new ScheduleElement();
    this.isReadSchedule = false;
    this.changeSchedule.emit(this.element.schedule);
  }

  onPaginatorPage(page: PageEvent) {
    this.requestGetSchedules(page.pageIndex);
  }

  onComponentsScenePreviewChanged(element: SceneBaseElement) {
    this.element.sceneBase = element;
  }

  onClickedChangeScheduleMode() {
    this.isScheduleListMode = !this.isScheduleListMode;
    if (this.isScheduleListMode) {
      this.requestGetSchedules(0);
    } else {
      this.isReadSchedule = false;
    }
  }

  private requestGetSchedules(index: number) {
    this.service
      .requestGetSchedule(index, this.paginator.size)
      .pipe(take(1))
      .subscribe((response) => {
        if (CommonExtensions.isSuccess(response.getCommon())) {
          this.dataSource.data = response
            .getSchedulesList()
            .map((x) => ScheduleElement.fromMessage(x));

          this.paginator.fromMessage(response.getPaginator());
        }
      });
  }
}
