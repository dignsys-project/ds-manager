import { Injectable, Sanitizer } from '@angular/core';
import { SaturnNetwork } from 'src/app/commons/saturn-network';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

// enceladus.proto
import {
  PostResourceResponse,
  PostPreviewResourceResponse,
} from 'src/app/protocols/enceladus_pb';

// prometheus.proto
import {
  GetResourceResponse,
  GetResourcesResponse,
  PutResourceResponse,
} from '../protocols/prometheus_pb';

import { map } from 'rxjs/operators';
import { PreviewResourceElement } from 'src/app/models/preview-resource-element';
import { ResourceElement } from 'src/app/models/resource-element';
import { SCENE_RESOURCE_KINDMap } from 'src/app/protocols/common_pb';
import { PrometheusService } from 'src/app/services/prometheus.service';

@Injectable({ providedIn: 'root' })
export class ResourceService extends SaturnNetwork {
  constructor(httpClient: HttpClient, promethusService: PrometheusService) {
    super(httpClient, promethusService.address);
  }

  public getConnectorScreenCaptureAddress(deviceId: string): string {
    return `${this.address}/Resources/connectors/${deviceId}.png`;
  }

  public getPreviewResourceAddress(element: PreviewResourceElement): string {
    if (undefined == element) {
      return ``;
    }
    return `${this.address}/${element.location}`;
  }

  public getResourceAddress(element: ResourceElement): string {
    if (undefined == element) {
      return ``;
    }

    return `${this.address}/${element.location}`;
  }

  /**
   *
   * @param departmentId department Id
   * @param departmentFolderId department folder Id
   * @param resourceId  resource Id
   */
  public requestGetResource(
    departmentId: number,
    departmentFolderId: number,
    resourceId: number
  ): Observable<GetResourceResponse> {
    return this.sendGet(
      `resource/${departmentId}/${departmentFolderId}/${resourceId}`
    ).pipe(map((bytes) => GetResourceResponse.deserializeBinary(bytes)));
  }

  /**
   *
   * @param kind SCENE_RESOURCE_KIND from common.protos
   * @param from from index
   * @param size item size
   */
  public requestGetExcludeResources(
    kind: SCENE_RESOURCE_KINDMap[keyof SCENE_RESOURCE_KINDMap],
    from: number,
    size: number
  ) {
    const queries: Map<string, any> = new Map<string, any>();

    queries.set('from', from);
    queries.set('size', size);
    if (undefined != kind) {
      queries.set('kind', kind);
    }
    return this.sendGet('resource', queries).pipe(
      map((bytes) => GetResourcesResponse.deserializeBinary(bytes))
    );
  }

  public requestPostResourceV2(
    departmentId: number,
    departmentResourceFolderId: number,
    file: File,
    onProgress: (current: number) => void,
    onCompleted: (res: string) => void,
    previewResourceId?: number
  ): Observable<PostResourceResponse> {
    const queries = new Map<string, any>();
    if (undefined != previewResourceId) {
      queries.set('previewResourceId', previewResourceId);
    }

    return this.upload(
      `resource/${departmentId}/${departmentResourceFolderId}`,
      queries,
      onProgress,
      onCompleted,
      file
    ).pipe(map((bytes) => PostResourceResponse.deserializeBinary(bytes)));
  }

  public requestPutResource(
    departmentId: number,
    departmentResourceFolderId: number,
    resourceId: number,
    file: File,
    onProgress: (current: number) => void,
    onCompleted: (res: string) => void,
    previewResourceId?: number
  ): Observable<PutResourceResponse> {
    const queries = new Map<string, any>();

    if (undefined != previewResourceId) {
      queries.set('previewResourceId', previewResourceId ?? 0);
    }

    return this.uploadPut(
      `resource/${departmentId}/${departmentResourceFolderId}/${resourceId}`,
      queries,
      onProgress,
      onCompleted,
      file
    ).pipe(map((bytes) => PutResourceResponse.deserializeBinary(bytes)));
  }

  public requestPostPreviewResource(
    file: File,
    onProgress: (current: number) => void,
    onCompleted: (res: string) => void
  ): Observable<PostPreviewResourceResponse> {
    return this.upload(
      'previewresource',
      null,
      onProgress,
      onCompleted,
      file
    ).pipe(
      map((bytes) => PostPreviewResourceResponse.deserializeBinary(bytes))
    );
  }
}
