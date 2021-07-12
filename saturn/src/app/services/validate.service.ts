import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Message } from 'google-protobuf';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { SaturnNetwork } from '../commons/saturn-network';
import { ResourceElement } from '../models/resource-element';
import { SceneBlueprint } from '../protocols/common_pb';
import {
  GetValidateResourceByResourceIdResponse,
  GetValidateResourceResponse,
  GetValidateSceneResponse,
} from '../protocols/prometheus_pb';
import { PrometheusService } from './prometheus.service';

@Injectable({
  providedIn: 'root',
})
export class ValidateService extends SaturnNetwork {
  constructor(httpClient: HttpClient, prometheusService: PrometheusService) {
    super(httpClient, prometheusService.address);
  }

  /**
   * {PROMETHEUS_ADDRESS}/validate/scene
   * @param from
   * @param size
   */
  public requestGetScenes(
    from: number,
    size: number
  ): Observable<GetValidateSceneResponse> {
    const queries = new Map<string, number>();
    queries.set('from', from);
    queries.set('size', size);

    return this.sendGet('validate/scene', queries).pipe(
      map((bytes) => GetValidateSceneResponse.deserializeBinary(bytes))
    );
  }

  /**
   * {PROMETHEUS_ADDRESS}/validate/resource
   * @param from
   * @param size
   */
  public requestGetResource(
    from: number,
    size: number
  ): Observable<GetValidateResourceResponse> {
    const queries = new Map<string, number>();
    queries.set('from', from);
    queries.set('size', size);

    return this.sendGet('validate/resource', queries).pipe(
      map((bytes) => GetValidateResourceResponse.deserializeBinary(bytes))
    );
  }

  public requestGetResourceByResourceId(
    resourceId: number,
    from: number,
    size: number = 10
  ): Observable<GetValidateResourceByResourceIdResponse> {
    const queries = new Map<string, number>();
    queries.set('from', from);
    queries.set('size', size);
    return this.sendGet(`validate/resource/${resourceId}`, queries).pipe(
      map((bytes) =>
        GetValidateResourceByResourceIdResponse.deserializeBinary(bytes)
      )
    );
  }
}
