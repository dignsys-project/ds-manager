import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { PreviewResourceElement } from 'src/app/models/preview-resource-element';
import {
  PostSceneResponse,
  PostSceneRequest,
  GetSceneByIdResponse,
  GetSceneByIdBlueprintResponse,
  GetSceneResponse,
  DeleteSceneResponse,
  PutSceneResponse,
  PutSceneRequest,
  GetSceneByIdBlueprintV2Response,
} from 'src/app/protocols/prometheus_pb';
import { SaturnNetwork } from 'src/app/commons/saturn-network';
import { HttpClient } from '@angular/common/http';
import { SceneBlueprint } from 'src/app/protocols/common_pb';
import { PrometheusService } from 'src/app/services/prometheus.service';

@Injectable({ providedIn: 'root' })
export class ScenesService extends SaturnNetwork {
  constructor(httpClient: HttpClient, prometheusService: PrometheusService) {
    super(httpClient, prometheusService.address);
  }

  /**
   * request modifiy scene
   * @deprecated
   * @param sceneId scene id
   * @param name  new scene name
   * @param sceneBlueprint new scene blueprint
   * @param element preview resource element
   */
  public requestPutScene(
    sceneId: number,
    name: string,
    sceneBlueprint: SceneBlueprint,
    element: PreviewResourceElement
  ): Observable<PutSceneResponse> {
    const request = new PutSceneRequest();
    request.setSceneid(sceneId);
    request.setName(name);
    request.setSceneblueprint(sceneBlueprint);
    request.setPreviewresource(element.toMessage());

    return this.sendPut('scene', null, request).pipe(
      map((bytes) => PutSceneResponse.deserializeBinary(bytes))
    );
  }

  /**
   * request update scene
   * @param departmentId department id
   * @param departmentSceneFolderId department scene folder id
   * @param sceneId scene id
   * @param name new scene name
   * @param sceneBlueprint new scene blueprint
   * @param element new preview resource element
   */
  public requestPutSceneV2(
    sceneId: number,
    name: string,
    sceneBlueprint: SceneBlueprint,
    element: PreviewResourceElement
  ): Observable<PutSceneResponse> {
    const request = new PutSceneRequest();
    request.setSceneid(sceneId);
    request.setName(name);
    request.setSceneblueprint(sceneBlueprint);
    request.setPreviewresource(element.toMessage());

    return this.sendPut(`scene/${sceneId}`, null, request).pipe(
      map((bytes) => PutSceneResponse.deserializeBinary(bytes))
    );
  }

  // request create scene
  public requestPostSceneV2(
    departmentId: number,
    departmentSceneFolderId: number,
    name: string,
    sceneBlueprint?: SceneBlueprint,
    element?: PreviewResourceElement,
    isTemporary?: boolean
  ): Observable<PostSceneResponse> {
    // make request message
    const request = new PostSceneRequest();
    request.setName(name);

    if (undefined != sceneBlueprint) {
      request.setSceneblueprint(sceneBlueprint);
    }

    if (undefined != element) {
      request.setPreviewresource(element.toMessage());
    }

    if (isTemporary == true) {
      request.setIstemporary(true);
    }

    return this.sendPost(
      `scene/${departmentId}/${departmentSceneFolderId}`,
      null,
      request
    ).pipe(map((bytes) => PostSceneResponse.deserializeBinary(bytes)));
  }

  // request delete scene
  public requestDeleteSceneV2(
    departmentId: number,
    departmentSceneFolderId: number,
    sceneId: number
  ): Observable<DeleteSceneResponse> {
    return this.sendDelete(
      `scene/${departmentId}/${departmentSceneFolderId}/${sceneId}`
    ).pipe(map((bytes) => DeleteSceneResponse.deserializeBinary(bytes)));
  }

  public requestGetScenebySceneId(
    sceneId: number
  ): Observable<GetSceneByIdResponse> {
    return this.sendGet(`scene/${sceneId}`, null).pipe(
      map((bytes) => GetSceneByIdResponse.deserializeBinary(bytes))
    );
  }

  /**
   * @deprecated instead of requestGetSceneBlueprintV2
   */
  public requestGetSceneBySceneIdBlueprint(
    sceneId: number
  ): Observable<GetSceneByIdBlueprintResponse> {
    return this.sendGet(`scene/${sceneId}/blueprint`, null).pipe(
      map((bytes) => GetSceneByIdBlueprintResponse.deserializeBinary(bytes))
    );
  }

  public requestGetSceneBlueprintV2(
    sceneId: number
  ): Observable<GetSceneByIdBlueprintV2Response> {
    return this.sendGet(`scene/v2/${sceneId}/blueprint`, null).pipe(
      map((bytes) => GetSceneByIdBlueprintV2Response.deserializeBinary(bytes))
    );
  }

  public requestGetScene(
    from: number,
    size: number = 10
  ): Observable<GetSceneResponse> {
    const queries = new Map<string, any>();
    queries.set('from', from);
    queries.set('size', size);
    return this.sendGet('scene', queries).pipe(
      map((bytes) => GetSceneResponse.deserializeBinary(bytes))
    );
  }

  public requsetGetExcludeScene(
    from: number,
    size: number
  ): Observable<GetSceneResponse> {
    const queries = new Map<string, any>();
    queries.set('from', from);
    queries.set('size', size);
    return this.sendGet('scene', queries).pipe(
      map((bytes) => GetSceneResponse.deserializeBinary(bytes))
    );
  }

  /**
   * @deprecated
   * @param sceneId
   */
  public requestDeleteScene(sceneId: number): Observable<DeleteSceneResponse> {
    return this.sendDelete(`scene/${sceneId}`).pipe(
      map((bytes) => DeleteSceneResponse.deserializeBinary(bytes))
    );
  }
}
