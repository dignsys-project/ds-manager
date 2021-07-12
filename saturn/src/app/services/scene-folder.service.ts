import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { SaturnNetwork } from '../commons/saturn-network';
import { PreviewResourceElement } from '../models/preview-resource-element';
import { SceneBlueprint } from '../protocols/common_pb';
import {
  GetSceneFolderScenesResponse,
  PostSceneRequest,
} from '../protocols/prometheus_pb';
import { PrometheusService } from './prometheus.service';

@Injectable({
  providedIn: 'root',
})
export class SceneFolderService extends SaturnNetwork {
  constructor(httpClient: HttpClient, prometheusService: PrometheusService) {
    super(httpClient, prometheusService.address);
  }

  public requestGetScenes(
    departmentSceneFolderId: number,
    from: number,
    size: number
  ): Observable<GetSceneFolderScenesResponse> {
    const queries = new Map<string, any>();
    queries.set('from', from);
    queries.set('size', size);

    return this.sendGet(
      `scene/folder/${departmentSceneFolderId}/scene`,
      queries
    ).pipe(
      map((bytes) => GetSceneFolderScenesResponse.deserializeBinary(bytes))
    );
  }
}
