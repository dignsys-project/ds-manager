import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';

import { map } from 'rxjs/operators';
import { isNullOrUndefined } from 'util';
import { SaturnNetwork } from '../../commons/saturn-network';
import {
  GetDepartmentNodeResponse,
  PostDepartmentNodeResponse,
  PostDepartmentNodeRequest,
  PutDepartmentNodeResponse,
  PutDepartmentNodeRequest,
  GetDepartmentByIdResponse,
  DeleteDepartmentNodeResponse,
  GetDepartmentConnectorLowersResponse,
} from '../../protocols/prometheus_pb';
import { DepartmentNodeElement } from '../../models/department-node-element';
import { environment } from 'src/environments/environment';
import { PrometheusService } from 'src/app/services/prometheus.service';

@Injectable()
export class DepartmentsService extends SaturnNetwork {
  private readonly URL: string = 'department/node';
  private readonly DEPARTMENT_URL: string = 'department';

  constructor(httpClient: HttpClient, prometheusService: PrometheusService) {
    super(httpClient, prometheusService.address);
  }

  public requestGetDepartmentNodes(): Observable<GetDepartmentNodeResponse> {
    return this.sendGet(this.URL, null).pipe(
      map((bytes) => GetDepartmentNodeResponse.deserializeBinary(bytes))
    );
  }

  public requestDeleteDepartmentNode(
    departmentNodeId: number
  ): Observable<DeleteDepartmentNodeResponse> {
    return this.sendDelete(`${this.URL}/${departmentNodeId}`).pipe(
      map((bytes) => DeleteDepartmentNodeResponse.deserializeBinary(bytes))
    );
  }

  public requestGetDepartmentById(
    departmentId: number
  ): Observable<GetDepartmentByIdResponse> {
    return this.sendGet(`${this.DEPARTMENT_URL}/${departmentId}`, null).pipe(
      map((bytes) => GetDepartmentByIdResponse.deserializeBinary(bytes))
    );
  }

  public requestPostDepartmentNode(
    name: string,
    parentDepartmentNodeId: number
  ): Observable<PostDepartmentNodeResponse> {
    const message = new PostDepartmentNodeRequest();
    message.setParentdepartmentnodeid(parentDepartmentNodeId);
    message.setDepartmentname(name);
    return this.sendPost(this.URL, null, message).pipe(
      map((bytes) => PostDepartmentNodeResponse.deserializeBinary(bytes))
    );
  }

  public requestPutDepartmentNode(
    departmentNodeId: number,
    parentDepartmentNode: DepartmentNodeElement
  ): Observable<PutDepartmentNodeResponse> {
    const request = new PutDepartmentNodeRequest();
    if (!isNullOrUndefined(parentDepartmentNode)) {
      request.setParentdepartmentnodeid(parentDepartmentNode.id);
    } else {
      request.setParentdepartmentnodeid(-1);
    }

    return this.sendPut(`${this.URL}/${departmentNodeId}`, null, request).pipe(
      map((bytes) => PutDepartmentNodeResponse.deserializeBinary(bytes))
    );
  }
}
