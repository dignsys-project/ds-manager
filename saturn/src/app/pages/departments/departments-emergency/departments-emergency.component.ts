import { Location } from '@angular/common';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { take, takeWhile } from 'rxjs/operators';
import { CommonExtensions } from 'src/app/commons/common-extensions';
import {
  IEmergencyElement,
  PUT_PROCESS_KIND,
} from 'src/app/components/components-connectors-scene-stepper/components-connectors-scene-stepper.component';
import { ConnectorBaseElement } from 'src/app/models/connector-base-element';
import { ConnectorDepartmentBaseElement } from 'src/app/models/connector-department-base-element';
import { ConnectorEmergencyService } from 'src/app/services/connector-emergency.service';
import { DepartmentsConnectorsService } from 'src/app/services/departments-connectors.service';
import { DepartmentsHeaderService } from '../departments-header.service';

@Component({
  selector: 'app-departments-emergency',
  templateUrl: './departments-emergency.component.html',
  styleUrls: ['./departments-emergency.component.scss'],
})
export class DepartmentsEmergencyComponent implements OnInit, OnDestroy {
  elements: Array<ConnectorDepartmentBaseElement>;

  private _departmentId: number;

  private _isSubscribe: boolean = true;

  isEmergency: boolean = false;

  isProcess: boolean = false;

  get departmentId(): number {
    return this._departmentId;
  }

  constructor(
    private activatedRoute: ActivatedRoute,
    private location: Location,
    private headerService: DepartmentsHeaderService,
    private departmentConnectorsService: DepartmentsConnectorsService,
    private connectorEmergencyService: ConnectorEmergencyService
  ) {
    // set title name
    this.headerService.enabledBack$.next(true);
    this.headerService.title$.pipe(take(1)).subscribe((title) => {
      this.headerService.title$.next(
        `${title} ${this.isEmergency ? '긴급 버튼' : '긴급 종료'}`
      );
    });

    this.activatedRoute.queryParams
      .pipe(takeWhile(() => this._isSubscribe))
      .subscribe((params) => {
        this.isEmergency = params.emergency == 'true' ? true : false;

        if (undefined == this.isEmergency) {
          this.location.back();
        }
      });

    // get current department id
    this.activatedRoute.params.subscribe((params) => {
      // 'departmentId';
      this._departmentId = params.departmentId;

      if (undefined == this._departmentId || 0 >= this._departmentId) {
        this.location.back();

        return;
      }
    });
  }
  ngOnDestroy(): void {
    this._isSubscribe = false;
  }

  async ngOnInit(): Promise<any> {
    await this.requestConnectorsFromDepartmentId(this._departmentId);
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
    } catch (error) {
      console.error(error);
    }
  }

  async onDoIt(element: IEmergencyElement) {
    this.isProcess = true;
    for (const connector of element.connectors) {
      try {
        connector.kind = PUT_PROCESS_KIND.PUT_PROCESS_KIND_STARTED;

        const connectorId = connector.connector.connectorBase.connectorId;

        if (element.isEmergency) {
          const response = await this.connectorEmergencyService
            .requestPutConnectorEmergencyScene(
              connectorId,
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
        } else {
          const response = await this.connectorEmergencyService
            .requestPutConnectorEmergency(connectorId, element.isEmergency)
            .pipe(take(1))
            .toPromise();

          if (CommonExtensions.isSuccess(response.getCommon())) {
            connector.kind = PUT_PROCESS_KIND.PUT_PROCESS_KIND_COMPLETED;

            connector.connector.connectorBase.isEmergency = element.isEmergency;
          }
        }
      } catch (error) {
        console.error(error);
      }
    }

    this.isProcess = false;
  }
}
