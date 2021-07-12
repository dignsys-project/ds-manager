import { SaturnNetwork } from '../commons/saturn-network';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {
  PostConnectorScheduleResponse,
  PostConnectorScheduleRequest,
  DeleteConnectorScheduleResponse,
} from '../protocols/prometheus_pb';
import { map } from 'rxjs/internal/operators/map';
import { Injectable } from '@angular/core';
import { PrometheusService } from './prometheus.service';

@Injectable()
export class ConnectorScheduleService extends SaturnNetwork {
  constructor(httpClient: HttpClient, prometheusService: PrometheusService) {
    super(httpClient, prometheusService.address);
  }

  private makeRoute(connectorId: number, connectorScheduleId?: number) {
    return connectorScheduleId
      ? `connector/${connectorId}/schedule/${connectorScheduleId}`
      : `connector/${connectorId}/schedule`;
  }

  public requestPostScheduleScene(
    connectorId: number,
    scheduleSceneId: number
  ): Observable<PostConnectorScheduleResponse> {
    const request = new PostConnectorScheduleRequest();
    request.setSchedulesceneid(scheduleSceneId);
    return this.sendPost(this.makeRoute(connectorId), null, request).pipe(
      map((bytes) => PostConnectorScheduleResponse.deserializeBinary(bytes))
    );
  }

  public requestDeleteConnectorScheduleScene(
    connectorId: number,
    connectorScheduleId: number
  ): Observable<DeleteConnectorScheduleResponse> {
    return this.sendDelete(
      this.makeRoute(connectorId, connectorScheduleId),
      null
    ).pipe(
      map((bytes) => DeleteConnectorScheduleResponse.deserializeBinary(bytes))
    );
  }
}
