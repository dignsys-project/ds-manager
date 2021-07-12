import { Component, OnInit, ViewChild } from '@angular/core';
import {
  FormGroup,
  FormBuilder,
  Validators,
  FormControl,
} from '@angular/forms';
import { ScenesService } from '../../../services/scenes.service';
import { take, map } from 'rxjs/operators';
import { CommonExtensions } from 'src/app/commons/common-extensions';
import { SceneBaseElement } from 'src/app/models/scene-base-element';
import { isNullOrUndefined } from 'util';
import { ComponentsScenesComponent } from 'src/app/components/components-scenes/components-scenes.component';
import { DepartmentsHeaderService } from '../departments-header.service';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { DepartmentsService } from '../departments.service';
import { DepartmentsConnectorsService } from '../../../services/departments-connectors.service';
import { ConnectorDepartmentBaseElement } from 'src/app/models/connector-department-base-element';
import { ConnectorBaseElement } from 'src/app/models/connector-base-element';
import {
  ComponentsCommonDialogComponent,
  DIALOG_KIND,
} from 'src/app/components/components-common-dialog/components-common-dialog.component';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ConnectorSceneService } from 'src/app/services/connector-scene.service';

@Component({
  selector: 'app-departments-scene',
  templateUrl: './departments-scene.component.html',
  styleUrls: ['./departments-scene.component.scss'],
})
export class DepartmentsSceneComponent implements OnInit {
  @ViewChild(ComponentsScenesComponent, { static: true })
  private m_ComponentsScenesComponent: ComponentsScenesComponent;

  isLinear = true;
  connectorsForm: FormControl;
  sceneForm: FormControl;

  sceneBaseElements: Array<SceneBaseElement>;

  connectorDepartmentElements: Array<ConnectorDepartmentBaseElement>;

  selectedSceneBaseElement: SceneBaseElement;

  isProcess: boolean = false;
  processPercent: number = 0;

  itemsCount: number = 0;

  private m_DepartmentId: number;

  get selectedConnectorsCount(): number {
    if (!this.connectorFormValid) {
      return 0;
    }

    const connectors = this.connectorsForm.value as Array<ConnectorBaseElement>;

    return connectors?.length;
  }

  get connectorFormValid(): boolean {
    return this.connectorsForm.valid;
  }

  get sceneFormValid(): boolean {
    return this.sceneForm.valid;
  }

  get departmentId(): number {
    return this.m_DepartmentId;
  }

  constructor(
    private activatedRoute: ActivatedRoute,
    private location: Location,
    private scenesService: ScenesService,
    private service: DepartmentsConnectorsService,
    private headerService: DepartmentsHeaderService,
    private connectorSceneService: ConnectorSceneService,
    private dialog: MatDialog,
    private snackbar: MatSnackBar
  ) {
    // create form controls
    this.connectorsForm = new FormControl('', [Validators.required]);
    this.sceneForm = new FormControl('', [Validators.required]);

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
          // set title name
          this.headerService.enabledBack$.next(true);
          this.headerService.title$.pipe(take(1)).subscribe((title) => {
            this.headerService.title$.next(`${title} 씬 추가`);
          });

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

  async onClickedScene() {
    const connectors = this.connectorsForm.value as Array<
      ConnectorDepartmentBaseElement
    >;
    const sceneBaseElement = this.sceneForm.value as SceneBaseElement;

    let bSuccess: boolean = false;
    try {
      bSuccess = await ComponentsCommonDialogComponent.create(
        this.dialog,
        '디바이스의 씬 변경',
        DIALOG_KIND.DIALOG_KIND_DEFAULT,
        `${connectors.length}의 디바이스에 씬 변경.`,
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
        const response = await this.connectorSceneService
          .requestPutConnectorScene(
            connector.connectorBase.connectorId,
            sceneBaseElement.sceneId
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

  // on selected connector-department-base-element
  onSelectedComponentsConnectorDepartmentTable(
    elements: Array<ConnectorDepartmentBaseElement>
  ) {
    this.connectorsForm.setValue(elements);
  }

  onSelectedComponentsScenesV2(elements: Array<SceneBaseElement>) {
    if (elements?.length > 0) {
      const element = elements[0];

      this.sceneForm.setValue(element);
      this.selectedSceneBaseElement = element;
    }
  }
}
