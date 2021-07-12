import { Component, OnInit } from '@angular/core';
import { ConnectorElement } from 'src/app/models/connector-element';
import { ConnectorsService } from '../../../services/connectors.service';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { CommonExtensions } from 'src/app/commons/common-extensions';
import { take } from 'rxjs/operators';
import { DepartmentsHeaderService } from '../departments-header.service';
import { PermissionService } from 'src/app/services/permission.service';

@Component({
  selector: 'app-departments-connector',
  templateUrl: './departments-connector.component.html',
  styleUrls: ['./departments-connector.component.scss'],
})
export class DepartmentsConnectorComponent implements OnInit {
  element: ConnectorElement;

  // TODO : Permission added.
  bReadOnly: boolean = false;

  private _connectorId: number;

  constructor(
    private service: ConnectorsService,
    private activatedRoute: ActivatedRoute,
    private headerService: DepartmentsHeaderService,
    private location: Location,
    private permission: PermissionService
  ) {
    this.activatedRoute.params.subscribe((params) => {
      const connectorId = params.connectorId as number;
      if (undefined == connectorId) {
        this.location.back();

        return;
      }

      this._connectorId = connectorId;
    });
  }

  async ngOnInit(): Promise<any> {
    try {
      const response = await this.service
        .requestGetConnectorById(this._connectorId)
        .pipe(take(1))
        .toPromise();

      if (CommonExtensions.isSuccess(response.getCommon())) {
        this.element = ConnectorElement.fromMessage(response.getConnector());

        this.headerService.title$.next(`${this.element.name} 디바이스 정보`);
      }
    } catch (error) {
      console.error(error);
    }
  }

  onClickedArrowBack() {
    this.location.back();
  }
}
