import { SaturnNetwork } from 'src/app/commons/saturn-network';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import {
  GetDepartmentMemberResponse,
  PostDepartmentMemberRequest,
  DeleteDepartmentMemberResponse,
  PostDepartmentMemberResponse,
} from 'src/app/protocols/prometheus_pb';
import { map } from 'rxjs/operators';
import { PrometheusService } from 'src/app/services/prometheus.service';

@Injectable()
export class DepartmentsMembersService extends SaturnNetwork {
  constructor(httpClient: HttpClient, prometheusService: PrometheusService) {
    super(httpClient, prometheusService.address);
  }

  public requestGetDepartmentMembers(
    departmentId: number
  ): Observable<GetDepartmentMemberResponse> {
    return this.sendGet(`department/member/${departmentId}`, null).pipe(
      map((bytes) => GetDepartmentMemberResponse.deserializeBinary(bytes))
    );
  }

  public requestPostDepartmentMember(
    departmentId: number,
    memberId: number
  ): Observable<PostDepartmentMemberResponse> {
    const message = new PostDepartmentMemberRequest();
    message.setDepartmentid(departmentId);
    message.setMemberid(memberId);

    return this.sendPost('department/member', null, message).pipe(
      map((bytes) => PostDepartmentMemberResponse.deserializeBinary(bytes))
    );
  }

  public requestDeleteDepartmentMember(
    departmentid: number,
    memberId: number
  ): Observable<DeleteDepartmentMemberResponse> {
    const queries = new Map<string, any>();
    queries.set('id', memberId);

    return this.sendDelete(`department/member/${departmentid}`, queries).pipe(
      map((bytes) => DeleteDepartmentMemberResponse.deserializeBinary(bytes))
    );
  }
}
