import { Component, OnInit } from '@angular/core';
import { promise } from 'protractor';
import { take } from 'rxjs/operators';
import { CommonExtensions } from 'src/app/commons/common-extensions';
import {
  IConnectorEmergency,
  IEmergencyElement,
  PUT_PROCESS_KIND,
} from 'src/app/components/components-connectors-scene-stepper/components-connectors-scene-stepper.component';
import { ConnectorBaseElement } from 'src/app/models/connector-base-element';
import { ConnectorDepartmentBaseElement } from 'src/app/models/connector-department-base-element';
import { DepartmentBaseElement } from 'src/app/models/department-base-element';
import { DepartmentNodeElement } from 'src/app/models/department-node-element';
import { DepartmentsListService } from 'src/app/pages/departments/departments-list/departments-list.service';
import { DepartmentsService } from 'src/app/pages/departments/departments.service';
import { ConnectorEmergencyService } from 'src/app/services/connector-emergency.service';
import { ConnectorsService } from 'src/app/services/connectors.service';
import { DepartmentsConnectorsService } from 'src/app/services/departments-connectors.service';

@Component({
  selector: 'app-scene-developments-connector-scene-stepper',
  templateUrl: './scene-developments-connector-scene-stepper.component.html',
  styleUrls: ['./scene-developments-connector-scene-stepper.component.scss'],
})
export class SceneDevelopmentsConnectorSceneStepperComponent implements OnInit {
  elements: Array<ConnectorDepartmentBaseElement>;
  departmentId: number;

  isProcess: boolean = false;

  isEmergency: boolean = true;

  constructor(
    private departmentsListService: DepartmentsListService,
    private service: DepartmentsService,
    private departmentConnectorsService: DepartmentsConnectorsService,
    private connectorsService: ConnectorEmergencyService
  ) {}

  async ngOnInit(): Promise<any> {
    await this.requestGetDepartmentNodesAsync();
  }

  onClickedChangeEmergency() {
    this.isEmergency = !this.isEmergency;
  }

  private async requestGetDepartmentNodesAsync(): Promise<any> {
    try {
      const response = await this.service
        .requestGetDepartmentNodes()
        .pipe(take(1))
        .toPromise();

      if (CommonExtensions.isSuccess(response.getCommon())) {
        this.departmentsListService.elements$.next(
          response
            .getNodesList()
            .map((x) => DepartmentNodeElement.fromMessage(x))
        );
      }
    } catch (error) {
      console.error(error);
    }
  }

  async onSelectedComponentsDepartmentsTreeV2(
    departmentBaseElement: DepartmentBaseElement
  ) {
    if (undefined != departmentBaseElement) {
      await this.requestConnectorsFromDepartmentId(departmentBaseElement.id);
    } else {
      this.elements = undefined;
    }

    this.departmentId =
      departmentBaseElement != undefined ? departmentBaseElement.id : undefined;
  }

  private async requestConnectorsFromDepartmentId(
    departmentId: number
  ): Promise<any> {
    try {
      const response = await this.departmentConnectorsService
        .requestGetConnectorsLowersByDepartmentId(departmentId)
        .pipe(take(1))
        .toPromise();
      if (CommonExtensions.isSuccess(response.getCommon())) {
        this.elements = response
          .getConnectordepartmentbasesList()
          .map((x) => ConnectorDepartmentBaseElement.fromMessage(x));
      }
    } catch (error) {}
  }

  async onDoIt(element: IEmergencyElement) {
    this.isProcess = true;
    for (const connector of element.connectors) {
      try {
        connector.kind = PUT_PROCESS_KIND.PUT_PROCESS_KIND_STARTED;
        const response = await this.connectorsService
          .requestPutConnectorEmergencyScene(
            connector.connector.connectorBase.connectorId,
            element.sceneId,
            element.isEmergency
          )
          .pipe(take(1))
          .toPromise();

        if (CommonExtensions.isSuccess(response.getCommon())) {
          connector.kind = PUT_PROCESS_KIND.PUT_PROCESS_KIND_COMPLETED;

          connector.connector.connectorBase = ConnectorBaseElement.fromMessageBase(
            response.getConnectorbase()
          );
        }
      } catch (error) {
        console.error(error);
      }
    }

    this.isProcess = false;
  }
}
