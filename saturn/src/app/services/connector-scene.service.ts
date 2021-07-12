import { SaturnNetwork } from 'src/app/commons/saturn-network';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {
  PutConnectorSceneResponse,
  DeleteConnectorSceneResponse,
  PutConnectorSceneEmergencyResponse,
  DeleteConnectorSceneEmergencyResponse,
} from 'src/app/protocols/prometheus_pb';
import { map } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { PrometheusService } from './prometheus.service';

@Injectable({ providedIn: 'root' })
export class ConnectorSceneService extends SaturnNetwork {
  constructor(httpClient: HttpClient, prometheusService: PrometheusService) {
    super(httpClient, prometheusService.address);
  }

  public requestPutConnectorScene(
    connectorId: number,
    sceneId: number
  ): Observable<PutConnectorSceneResponse> {
    return this.sendPut(`connector/${connectorId}/scene/${sceneId}`).pipe(
      map((bytes) => PutConnectorSceneResponse.deserializeBinary(bytes))
    );
  }

  public requestDeleteConnectorScene(
    connectorId: number
  ): Observable<DeleteConnectorSceneResponse> {
    return this.sendDelete(`connector/${connectorId}/scene`, null).pipe(
      map((bytes) => DeleteConnectorSceneResponse.deserializeBinary(bytes))
    );
  }

  public requestPutConnectorSceneEmergency(
    connectorId: number,
    sceneId: number
  ): Observable<PutConnectorSceneEmergencyResponse> {
    return this.sendPut(
      `connector/${connectorId}/scene/${sceneId}/emergency`
    ).pipe(
      map((bytes) =>
        PutConnectorSceneEmergencyResponse.deserializeBinary(bytes)
      )
    );
  }

  public requestDeleteConnectorSceneEmergency(
    connectorId: number
  ): Observable<DeleteConnectorSceneEmergencyResponse> {
    return this.sendDelete(`connector/${connectorId}/scene/emergency`).pipe(
      map((bytes) =>
        DeleteConnectorSceneEmergencyResponse.deserializeBinary(bytes)
      )
    );
  }
}
