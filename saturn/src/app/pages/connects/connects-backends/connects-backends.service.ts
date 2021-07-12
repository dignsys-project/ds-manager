import { Injectable } from '@angular/core';
import { SaturnNetwork } from 'src/app/commons/saturn-network';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { GetVersionResponse } from 'src/app/protocols/common_pb';
import { map } from 'rxjs/operators';
import { PrometheusService } from 'src/app/services/prometheus.service';

@Injectable()
export class ConnectsBackendsService extends SaturnNetwork {
  constructor(httpClient: HttpClient, prometheusService: PrometheusService) {
    super(httpClient, prometheusService.address);
  }

  public requestGetVersion(): Observable<GetVersionResponse> {
    const queries = new Map<string, any>();
    queries.set('pretty', false);
    return this.sendGet(null, queries).pipe(
      map((bytes) => GetVersionResponse.deserializeBinary(bytes))
    );
  }

  public requestGetVersionPrometheus(): Observable<any> {
    return this.Get(null, null);
  }
}
