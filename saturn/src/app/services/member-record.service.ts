import { Injectable } from '@angular/core';
import { SaturnNetwork } from '../commons/saturn-network';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { GetMemberRecordResponse } from '../protocols/prometheus_pb';
import { map } from 'rxjs/operators';
import { PrometheusService } from './prometheus.service';

@Injectable()
export class MemberRecordService extends SaturnNetwork {
  constructor(httpClient: HttpClient, prometheusService: PrometheusService) {
    super(httpClient, prometheusService.address);
  }

  requestGetMemberRecords(
    from: number,
    size: number
  ): Observable<GetMemberRecordResponse> {
    const queries = new Map<string, number>();
    queries.set('from', from);
    queries.set('size', size);

    return this.sendGet('member/record', queries).pipe(
      map((bytes) => GetMemberRecordResponse.deserializeBinary(bytes))
    );
  }

  requestGetMemberRecordsBymemberId(
    memberId: number,
    from: number,
    size: number
  ): Observable<GetMemberRecordResponse> {
    const queries = new Map<string, number>();
    queries.set('from', from);
    queries.set('size', size);

    return this.sendGet(`member/${memberId}/record`, queries).pipe(
      map((bytes) => GetMemberRecordResponse.deserializeBinary(bytes))
    );
  }
}
