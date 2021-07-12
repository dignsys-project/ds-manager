import { SaturnNetwork } from 'src/app/commons/saturn-network';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {
  GetDepartmentConnectorsResponse,
  PostDepartmentConnectorResponse,
  PostDepartmentConnectorRequest,
  DeleteDepartmentConnectorResponse,
  GetDepartmentConnectorLowersResponse,
} from 'src/app/protocols/prometheus_pb';
import { map } from 'rxjs/operators';
import { PrometheusService } from './prometheus.service';

@Injectable({ providedIn: 'root' })
export class DepartmentsConnectorsService extends SaturnNetwork {
  constructor(httpClient: HttpClient, prometheusService: PrometheusService) {
    super(httpClient, prometheusService.address);
  }

  public requestGetDepartmentConnectors(
    departmentId: number
  ): Observable<GetDepartmentConnectorsResponse> {
    return this.sendGet(`department/connector/${departmentId}`, null).pipe(
      map((bytes) => GetDepartmentConnectorsResponse.deserializeBinary(bytes))
    );
  }

  public requestGetConnectorsLowersByDepartmentId(
    departmentId: number
  ): Observable<GetDepartmentConnectorLowersResponse> {
    return this.sendGet(`department/connector/lowers/${departmentId}`).pipe(
      map((bytes) =>
        GetDepartmentConnectorLowersResponse.deserializeBinary(bytes)
      )
    );
  }

  public requestPostDepartmentConnector(
    departmentId: number,
    connectorId: number
  ): Observable<PostDepartmentConnectorResponse> {
    const message = new PostDepartmentConnectorRequest();
    message.setDepartmentid(departmentId);
    message.setConnectorid(connectorId);

    return this.sendPost('department/connector', null, message).pipe(
      map((bytes) => PostDepartmentConnectorResponse.deserializeBinary(bytes))
    );
  }

  public requestDeleteDepartmentConnector(
    departmentid: number,
    connectorId: number
  ): Observable<DeleteDepartmentConnectorResponse> {
    const queries = new Map<string, any>();
    queries.set('id', connectorId);

    return this.sendDelete(
      `department/connector/${departmentid}`,
      queries
    ).pipe(
      map((bytes) => DeleteDepartmentConnectorResponse.deserializeBinary(bytes))
    );
  }
}
