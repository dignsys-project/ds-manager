import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { SaturnNetwork } from '../commons/saturn-network';
import { GetSceneNavigationResponse } from '../protocols/prometheus_pb';
import { PrometheusService } from './prometheus.service';

@Injectable({
  providedIn: 'root',
})
export class SceneNavigationService extends SaturnNetwork {
  constructor(httpClient: HttpClient, prometheusService: PrometheusService) {
    super(httpClient, prometheusService.address);
  }

  public requestGetSceneNavigation(
    connectedSceneId: number
  ): Observable<GetSceneNavigationResponse> {
    return this.sendGet(`scene/${connectedSceneId}/navigation`).pipe(
      map((bytes) => GetSceneNavigationResponse.deserializeBinary(bytes))
    );
  }
}
