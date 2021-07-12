import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { SceneBaseElement } from 'src/app/models/scene-base-element';
import { ConnectorDepartmentBaseElement } from 'src/app/models/connector-department-base-element';
import { ConnectorBaseElement } from 'src/app/models/connector-base-element';
import { ActivatedRoute } from '@angular/router';
import { DepartmentsConnectorsService } from 'src/app/services/departments-connectors.service';
import { DepartmentsHeaderService } from '../departments-header.service';
import { isNullOrUndefined } from 'util';
import { take } from 'rxjs/operators';
import { CommonExtensions } from 'src/app/commons/common-extensions';
import { Location } from '@angular/common';
import { ScheduleSceneElement } from 'src/app/models/scene-schedule-element';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ConnectorScheduleService } from 'src/app/services/connector-schedule.service';
import {
  ComponentsCommonDialogComponent,
  DIALOG_KIND,
} from 'src/app/components/components-common-dialog/components-common-dialog.component';

@Component({
  selector: 'app-departments-schedule',
  templateUrl: './departments-schedule.component.html',
  styleUrls: ['./departments-schedule.component.scss'],
})
export class DepartmentsScheduleComponent implements OnInit {
  private m_DepartmentId: number;

  isLinear = true;
  connectorsForm: FormControl;
  scheduleSceneForm: FormControl;

  sceneBaseElements: Array<SceneBaseElement>;

  connectorDepartmentElements: Array<ConnectorDepartmentBaseElement>;

  selectedSceneBaseElement: SceneBaseElement;

  isProcess: boolean = false;
  processPercent: number = 0;

  itemsCount: number = 0;

  get selectedConnectorsCount(): number {
    if (!this.connectorFormValid) {
      return 0;
    }

    const connectors = this.connectorsForm.value as Array<ConnectorBaseElement>;

    return connectors?.length;
  }

  get scheduleSceneName(): string {
    if (!this.scheduleSceneFormValid) {
      return '';
    }

    const scheduleSceneElement = this.scheduleSceneForm
      .value as ScheduleSceneElement;

    return scheduleSceneElement?.name;
  }

  get connectorFormValid(): boolean {
    return this.connectorsForm.valid;
  }

  get scheduleSceneFormValid(): boolean {
    return this.scheduleSceneForm.valid;
  }

  get departmentId(): number {
    return this.m_DepartmentId;
  }

  constructor(
    private activatedRoute: ActivatedRoute,
    private location: Location,
    private service: DepartmentsConnectorsService,
    private headerService: DepartmentsHeaderService,
    private connectorScheduleService: ConnectorScheduleService,
    private dialog: MatDialog,
    private snackbar: MatSnackBar
  ) {
    // create form controls
    this.connectorsForm = new FormControl('', [Validators.required]);
    this.scheduleSceneForm = new FormControl('', [Validators.required]);

    // enable the button that goes to previous page
    this.headerService.enabledBack$.next(true);

    // get current department id
    this.activatedRoute.params.subscribe((params) => {
      // 'departmentId';
      this.m_DepartmentId = params.departmentId;

      if (isNullOrUndefined(this.m_DepartmentId) || 0 >= this.m_DepartmentId) {
        this.location.back();

        return;
      }

      // request members on department
      this.service
        .requestGetConnectorsLowersByDepartmentId(this.m_DepartmentId)
        .pipe(take(1))
        .subscribe((response) => {
          if (CommonExtensions.isSuccess(response.getCommon())) {
            const elements = response
              .getConnectordepartmentbasesList()
              .map((x) => ConnectorDepartmentBaseElement.fromMessage(x));

            const sortedElements = new Array<ConnectorDepartmentBaseElement>();

            // order current department id
            sortedElements.push(
              ...elements.filter(
                (x) => x.departmentBase.id == this.m_DepartmentId
              )
            );

            // set title name
            if (sortedElements.length > 0) {
              this.headerService.title$.next(
                `조직 관리 : ${sortedElements[0].departmentName} 스케줄 씬 추가`
              );
            }

            // order other department id
            sortedElements.push(
              ...elements.filter(
                (x) => x.departmentBase.id != this.m_DepartmentId
              )
            );

            this.connectorDepartmentElements = sortedElements;
          }
        });
    });
  }

  ngOnInit() {}

  async onClickedScheduleScene() {
    const connectors = this.connectorsForm.value as Array<
      ConnectorDepartmentBaseElement
    >;
    const scheduleSceneElement = this.scheduleSceneForm
      .value as ScheduleSceneElement;

    let bSuccess: boolean = false;
    try {
      bSuccess = await ComponentsCommonDialogComponent.create(
        this.dialog,
        '디바이스 스케줄 추가',
        DIALOG_KIND.DIALOG_KIND_DEFAULT,
        `${connectors.length}의 디바이스에 스케줄 씬 추가.`,
        null,
        true
      )
        .afterClosed()
        .toPromise();
    } catch (error) {
      console.error(error);
    }

    if (!bSuccess) {
      this.snackbar.open('추가가 취소되었습니다.', '확인', {
        duration: 2000,
        horizontalPosition: 'center',
        verticalPosition: 'top',
      });

      return;
    }

    // initialize process percent for mat-progress-bar
    this.processPercent = 0;

    // initialize is process for is processing
    this.isProcess = true;

    // container for the connectors that will be failed
    const failureConnectors: Array<ConnectorDepartmentBaseElement> = new Array<
      ConnectorDepartmentBaseElement
    >();

    for (let i = 0; i < connectors.length; i++) {
      const connector = connectors[i];

      try {
        // POST connector/{CONNECTOR_ID}/schedule to prometheus.
        const response = await this.connectorScheduleService
          .requestPostScheduleScene(
            connector.connectorBase.connectorId,
            scheduleSceneElement.id
          )
          .pipe(take(1))
          .toPromise();
        if (CommonExtensions.isSuccess(response.getCommon())) {
          // success
        } else if (CommonExtensions.isDatabaseRestrict(response.getCommon())) {
          // 이미 디바이스에 있는 경우
        } else {
          failureConnectors.push(connector);
        }
      } catch (error) {
        failureConnectors.push(connector);
      }

      // calculate process percent
      this.processPercent = ((i + 1) / connectors.length) * 100;
    }

    this.isProcess = false;
    if (failureConnectors.length <= 0) {
      // open snack bar for success
      const dismiss = await this.snackbar
        .open('추가가 완료되었습니다.', '확인', {
          duration: 2000,
          horizontalPosition: 'center',
          verticalPosition: 'top',
        })
        .afterDismissed()
        .toPromise();

      this.location.back();
    } else {
      this.connectorsForm.setValue(failureConnectors);
    }
  }

  onSelectedComponentsConnectorDepartmentTable(
    elements: Array<ConnectorDepartmentBaseElement>
  ) {
    this.connectorsForm.setValue(elements);
  }

  onAddComponentsConnectorSchedules(element: ScheduleSceneElement) {
    this.scheduleSceneForm.setValue(element);
  }
}
