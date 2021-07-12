import { SaturnNetwork } from '../commons/saturn-network';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { ScheduleElement } from '../models/schedule-element';
import { Observable } from 'rxjs';
import {
  PostConnectorScheduleResponse,
  PostConnectorScheduleRequest,
  PostScheduleResponse,
  PostScheduleRequest,
  PutScheduleResponse,
  DeleteScheduleResponse,
  GetScheduleResponse,
  GetScheduleByIdResponse,
  PutScheduleRequest,
  GetScheduleSceneByIdResponse,
  PostScheduleSceneResponse,
  PostScheduleSceneRequest,
  GetScheduleSceneResponse,
  PutScheduleSceneResponse,
  PutScheduleSceneRequest,
  DeleteScheduleSceneResponse,
} from '../protocols/prometheus_pb';
import { map } from 'rxjs/internal/operators/map';
import { Injectable } from '@angular/core';
import { PrometheusService } from './prometheus.service';

@Injectable()
export class ScheduleService extends SaturnNetwork {
  constructor(httpClient: HttpClient, prometheusService: PrometheusService) {
    super(httpClient, prometheusService.address);
  }

  // get schedules
  public requestGetSchedule(
    from: number,
    size: number
  ): Observable<GetScheduleResponse> {
    const queries = new Map<string, any>();
    queries.set('from', from);
    queries.set('size', size);
    return this.sendGet(`schedule`, queries).pipe(
      map((bytes) => GetScheduleResponse.deserializeBinary(bytes))
    );
  }

  // get schedule by schedule id
  public requestGetScheduleById(
    scheduleId: number
  ): Observable<GetScheduleByIdResponse> {
    return this.sendGet(`schedule/${scheduleId}`).pipe(
      map((bytes) => GetScheduleByIdResponse.deserializeBinary(bytes))
    );
  }

  // create schedule
  public requestPostSchedule(
    element: ScheduleElement
  ): Observable<PostScheduleResponse> {
    const request = new PostScheduleRequest();
    request.setSchedule(element.toMessage());

    return this.sendPost(`schedule`, null, request).pipe(
      map((bytes) => PostScheduleResponse.deserializeBinary(bytes))
    );
  }

  // update schedule
  public requestPutSchedule(
    scheduleId: number,
    element: ScheduleElement
  ): Observable<PutScheduleResponse> {
    const request = new PutScheduleRequest();
    request.setSchedule(element.toMessage());

    return this.sendPut(`schedule/${scheduleId}`, null, request).pipe(
      map((bytes) => PutScheduleResponse.deserializeBinary(bytes))
    );
  }
  // delete schedule
  public requestDeleteSchedule(
    scheduleId: number
  ): Observable<DeleteScheduleResponse> {
    return this.sendDelete(`schedule/${scheduleId}`, null).pipe(
      map((bytes) => DeleteScheduleResponse.deserializeBinary(bytes))
    );
  }

  // get schedules
  public requestGetScheduleScene(
    from: number,
    size: number
  ): Observable<GetScheduleSceneResponse> {
    const queries = new Map<string, any>();
    queries.set('from', from);
    queries.set('size', size);
    return this.sendGet(`schedule/scene`, queries).pipe(
      map((bytes) => GetScheduleSceneResponse.deserializeBinary(bytes))
    );
  }

  // get scheduleScene by scheduleSceneId
  public requestGetScheduleSceneById(
    scheduleSceneId: number
  ): Observable<GetScheduleSceneByIdResponse> {
    return this.sendGet(`schedule/scene/${scheduleSceneId}`, null).pipe(
      map((bytes) => GetScheduleSceneByIdResponse.deserializeBinary(bytes))
    );
  }

  // post create scheduleScene
  public requestPostScheduleScene(
    name: string,
    scheduleId: number,
    sceneId: number
  ): Observable<PostScheduleSceneResponse> {
    const request = new PostScheduleSceneRequest();
    request.setName(name);
    request.setSceneid(sceneId);

    return this.sendPost(`schedule/${scheduleId}/scene`, null, request).pipe(
      map((bytes) => PostScheduleSceneResponse.deserializeBinary(bytes))
    );
  }

  // update schedule
  public requestPutScheduleScene(
    scheduleSceneId: number,
    name: string,
    scheduleId: number,
    sceneId: number
  ): Observable<PutScheduleSceneResponse> {
    const request = new PutScheduleSceneRequest();
    request.setName(name);
    request.setScheduleid(scheduleId);
    request.setSceneid(sceneId);

    return this.sendPut(
      `schedule/scene/${scheduleSceneId}`,
      null,
      request
    ).pipe(map((bytes) => PutScheduleSceneResponse.deserializeBinary(bytes)));
  }
  // delete schedule
  public requestDeleteScheduleScene(
    scheduleSceneId: number
  ): Observable<DeleteScheduleSceneResponse> {
    return this.sendDelete(`schedule/scene/${scheduleSceneId}`, null).pipe(
      map((bytes) => DeleteScheduleSceneResponse.deserializeBinary(bytes))
    );
  }
}
