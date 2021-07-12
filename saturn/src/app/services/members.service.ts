import { Injectable } from '@angular/core';
import { SaturnNetwork } from 'src/app/commons/saturn-network';
import { HttpClient } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';
import {
  GetMemberResponse,
  DeleteMemberResponse,
  GetMemberByIdResponse,
  PutMemberKindResponse,
} from 'src/app/protocols/prometheus_pb';
import { map } from 'rxjs/operators';
import { MemberElement } from 'src/app/models/member-element';
import { environment } from 'src/environments/environment';
import { MEMBER_KINDMap } from '../protocols/common_pb';
import { PrometheusService } from './prometheus.service';

@Injectable()
export class MembersService extends SaturnNetwork {
  isProcess$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

  constructor(httpClient: HttpClient, prometheusService: PrometheusService) {
    super(httpClient, prometheusService.address);
  }

  public requestGetMember(): Observable<GetMemberResponse> {
    return this.sendGet('member', null).pipe(
      map((bytes) => GetMemberResponse.deserializeBinary(bytes))
    );
  }

  public requestPutMemberKind(
    otherMemberId: number,
    kind: MEMBER_KINDMap[keyof MEMBER_KINDMap]
  ): Observable<PutMemberKindResponse> {
    return this.sendPut(`member/${otherMemberId}/kind/${kind}`).pipe(
      map((bytes) => PutMemberKindResponse.deserializeBinary(bytes))
    );
  }

  public requestGetMemberById(
    memberId: number
  ): Observable<GetMemberByIdResponse> {
    return this.sendGet(`member/${memberId}`, null).pipe(
      map((bytes) => GetMemberByIdResponse.deserializeBinary(bytes))
    );
  }

  public requestDeleteMember(uuid: string): Observable<DeleteMemberResponse> {
    return this.sendDelete(
      'member',
      new Map<string, any>([['id', uuid]])
    ).pipe(map((bytes) => DeleteMemberResponse.deserializeBinary(bytes)));
  }
}
