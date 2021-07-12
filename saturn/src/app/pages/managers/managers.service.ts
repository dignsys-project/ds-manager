import { Injectable } from '@angular/core';
import { SaturnNetwork } from 'src/app/commons/saturn-network';
import { GetVersionResponse } from 'src/app/protocols/common_pb';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { PrometheusService } from 'src/app/services/prometheus.service';

@Injectable()
export class ManagersService extends SaturnNetwork {
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
}
