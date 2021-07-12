import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { SaturnNetwork } from '../commons/saturn-network';
import { SCENE_RESOURCE_KINDMap } from '../protocols/common_pb';
import { GetResourceFolderResourcesResponse } from '../protocols/prometheus_pb';
import { PrometheusService } from './prometheus.service';

@Injectable({
  providedIn: 'root',
})
export class ResourceFolderService extends SaturnNetwork {
  constructor(httpClient: HttpClient, prometheusService: PrometheusService) {
    super(httpClient, prometheusService.address);
  }

  public requestGetResources(
    departmentResourceFolderId: number,
    from: number,
    size: number,
    kind?: SCENE_RESOURCE_KINDMap[keyof SCENE_RESOURCE_KINDMap]
  ): Observable<GetResourceFolderResourcesResponse> {
    const queries = new Map<string, any>();
    queries.set('from', from);
    queries.set('size', size);
    if (undefined != kind) {
      queries.set('kind', kind);
    }

    return this.sendGet(
      `resource/folder/${departmentResourceFolderId}/resource`,
      queries
    ).pipe(
      map((bytes) =>
        GetResourceFolderResourcesResponse.deserializeBinary(bytes)
      )
    );
  }
}
