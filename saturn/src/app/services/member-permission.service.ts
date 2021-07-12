import { Injectable } from '@angular/core';
import { MEMBER_PERMISSION_KINDMap } from '../protocols/common_pb';
import { Observable } from 'rxjs';
import {
  PutMemberPermissionResponse,
  PutMemberPermissionRequest,
  DeleteMemberPermissionResponse,
} from '../protocols/prometheus_pb';
import { SaturnNetwork } from '../commons/saturn-network';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { PrometheusService } from './prometheus.service';

@Injectable({ providedIn: 'root' })
export class MemberPermissionService extends SaturnNetwork {
  constructor(httpClient: HttpClient, prometheusService: PrometheusService) {
    super(httpClient, prometheusService.address);
  }

  requestPutPermissions(
    memberId: number,
    permissions: Array<
      MEMBER_PERMISSION_KINDMap[keyof MEMBER_PERMISSION_KINDMap]
    >
  ): Observable<PutMemberPermissionResponse> {
    const request = new PutMemberPermissionRequest();
    request.setPermissionsList(permissions);
    return this.sendPut(`member/${memberId}/permission`, null, request).pipe(
      map((bytes) => PutMemberPermissionResponse.deserializeBinary(bytes))
    );
  }

  requestDeletePermissions(
    memberId: number
  ): Observable<DeleteMemberPermissionResponse> {
    return this.sendDelete(`member/${memberId}/permission`).pipe(
      map((bytes) => DeleteMemberPermissionResponse.deserializeBinary(bytes))
    );
  }
}
