import { Injectable } from '@angular/core';
import { SaturnNetwork } from './commons/saturn-network';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { GetVersionRequiredResponse } from './protocols/prometheus_pb';
import { map } from 'rxjs/operators';
import { PrometheusService } from './services/prometheus.service';

@Injectable({
  providedIn: 'root',
})
export class VersionService extends SaturnNetwork {
  constructor(httpClient: HttpClient, prometheusService: PrometheusService) {
    super(httpClient, prometheusService.address);
  }

  public requestGetVersionRequired(): Observable<GetVersionRequiredResponse> {
    return this.sendGet('required', null).pipe(
      map((bytes) => GetVersionRequiredResponse.deserializeBinary(bytes))
    );
  }
}
