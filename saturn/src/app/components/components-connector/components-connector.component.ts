import { Component, OnInit, Input } from '@angular/core';
import { ConnectorElement } from 'src/app/models/connector-element';
import { MatDialog } from '@angular/material/dialog';
import { take } from 'rxjs/operators';
import { ConnectorSceneService } from '../../services/connector-scene.service';
import { CommonExtensions } from 'src/app/commons/common-extensions';
import { SceneElement } from 'src/app/models/scene-element';
import {
  ComponentsCommonDialogComponent,
  DIALOG_KIND,
} from '../components-common-dialog/components-common-dialog.component';
import { SceneBaseElement } from 'src/app/models/scene-base-element';
import { ScheduleSceneElement } from 'src/app/models/scene-schedule-element';
import { ConnectorScheduleService } from 'src/app/services/connector-schedule.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ConnectorsService } from 'src/app/services/connectors.service';
import { ComponentsCommonNameDialogComponent } from '../components-common-name-dialog/components-common-name-dialog.component';
import { ConnectorEmergencyService } from 'src/app/services/connector-emergency.service';

@Component({
  selector: 'app-components-connector',
  templateUrl: './components-connector.component.html',
  styleUrls: ['./components-connector.component.scss'],
})
export class ComponentsConnectorComponent implements OnInit {
  private m_Element: ConnectorElement;

  @Input()
  set element(element: ConnectorElement) {
    this.m_Element = element;
  }
  get element(): ConnectorElement {
    return this.m_Element;
  }

  @Input()
  readOnly: boolean = false;

  isProcess: boolean = false;

  constructor(
    private dialog: MatDialog,
    private service: ConnectorSceneService,
    private connectorService: ConnectorsService,
    private connectorScheduleService: ConnectorScheduleService,
    private connectorEmergencyService: ConnectorEmergencyService,
    private snackbar: MatSnackBar
  ) {}

  ngOnInit(): void {}

  async onClickedChangeEmergency(element: ConnectorElement) {
    const bContinue = await ComponentsCommonDialogComponent.create(
      this.dialog,
      '긴급 상태 변경',
      DIALOG_KIND.DIALOG_KIND_WARNING,
      element.isEmergency
        ? '긴급 상태를 종료하시겠습니까?'
        : '긴급 상태를 시작하겠습니까?',
      undefined,
      true
    )
      .afterClosed()
      .toPromise();

    if (bContinue != true) {
      return;
    }

    this.isProcess = true;
    try {
      const response = await this.connectorEmergencyService
        .requestPutConnectorEmergency(element.connectorId, !element.isEmergency)
        .pipe(take(1))
        .toPromise();

      if (CommonExtensions.isSuccess(response.getCommon())) {
        this.m_Element.isEmergency = !element.isEmergency;

        // open snackbar
        this.snackbar.open('긴급 상태가 변경되었습니다.', '확인', {
          duration: 2000,
          horizontalPosition: 'center',
          verticalPosition: 'top',
        });
      }
    } catch (error) {
      console.error(error);
    }

    this.isProcess = false;
  }

  onComponentsSceneItemChanged(element: SceneBaseElement) {
    if (undefined == element) {
      // 설정이 안되어 있는 경우
      if (undefined == this.element.scene) {
        return;
      }

      const response = this.service
        .requestDeleteConnectorScene(this.element.connectorId)
        .pipe(take(1))
        .subscribe((response) => {
          if (CommonExtensions.isSuccess(response.getCommon())) {
            this.element.scene = null;
          }
        });
    } else {
      this.service
        .requestPutConnectorScene(this.element.connectorId, element.sceneId)
        .pipe(take(1))
        .subscribe((response) => {
          if (CommonExtensions.isSuccess(response.getCommon())) {
            this.element.scene = SceneElement.fromMessage(response.getScene());
          }
        });
    }
  }

  onChangedComponentsSceneItemForEmergency(element: SceneBaseElement) {
    if (undefined == element) {
      // 설정이 안되어 있는 경우
      if (undefined == this.element.scene) {
        return;
      }

      const response = this.service
        .requestDeleteConnectorSceneEmergency(this.element.connectorId)
        .pipe(take(1))
        .subscribe((response) => {
          if (CommonExtensions.isSuccess(response.getCommon())) {
            this.element.emergencyScene = null;
            this.element.emergencySceneId = undefined;
          }
        });
    } else {
      this.service
        .requestPutConnectorSceneEmergency(
          this.element.connectorId,
          element.sceneId
        )
        .pipe(take(1))
        .subscribe((response) => {
          if (CommonExtensions.isSuccess(response.getCommon())) {
            const sceneElement = SceneElement.fromMessage(response.getScene());
            if (undefined != sceneElement) {
              this.element.emergencySceneId = sceneElement.sceneId;
              this.element.emergencyScene = sceneElement;
            }
          }
        });
    }
  }

  onAddComponentsConnectorComponent(createScheduleScene: ScheduleSceneElement) {
    if (undefined != createScheduleScene) {
      return;
    }

    const scheduleSceneId = createScheduleScene.id;
    if (0 < scheduleSceneId) {
      this.connectorScheduleService
        .requestPostScheduleScene(this.element.connectorId, scheduleSceneId)
        .pipe(take(1))
        .subscribe((response) => {
          if (CommonExtensions.isSuccess(response.getCommon())) {
            // open snackbar
            this.snackbar
              .open('스케줄 씬이 등록되었습니다.', '확인', {
                duration: 2000,
                horizontalPosition: 'center',
                verticalPosition: 'top',
              })
              .afterDismissed()
              .pipe(take(1))
              .subscribe(() => {});
          }
        });
    } else {
    }
  }

  // on clicked change connector name
  async onClickedConnectorNameChange() {
    const changedName = await ComponentsCommonNameDialogComponent.create(
      this.dialog,
      '디바이스 이름 변경',
      50,
      this.element.name,
      true
    )
      .afterClosed()
      .pipe(take(1))
      .toPromise();

    if (undefined == changedName) {
      return;
    }

    this.isProcess = false;
    try {
      const response = await this.connectorService
        .requestPutConnectorName(this.element.connectorId, changedName)
        .pipe(take(1))
        .toPromise();

      if (CommonExtensions.isSuccess(response.getCommon())) {
        this.element = ConnectorElement.fromMessage(response.getConnector());

        this.snackbar
          .open('디바이스 이름이 변경되었습니다.', '확인', {
            duration: 2000,
            horizontalPosition: 'center',
            verticalPosition: 'top',
          })
          .afterDismissed()
          .pipe(take(1));
      }
    } catch (error) {
      console.error(error);
    }

    this.isProcess = false;
  }
}
