import { SaturnNetwork } from 'src/app/commons/saturn-network';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {
  PutConnectorEmergencyResponse,
  PutConnectorEmergencyRequest,
  PutConnectorEmergencySceneResponse,
  PutConnectorEmergencySceneRequest,
} from 'src/app/protocols/prometheus_pb';
import { map } from 'rxjs/operators';
import { PrometheusService } from './prometheus.service';

@Injectable({ providedIn: 'root' })
export class ConnectorEmergencyService extends SaturnNetwork {
  constructor(httpClient: HttpClient, prometheusService: PrometheusService) {
    super(httpClient, prometheusService.address);
  }

  public requestPutConnectorEmergency(
    connectorId: number,
    isEmergency: boolean
  ): Observable<PutConnectorEmergencyResponse> {
    const request = new PutConnectorEmergencyRequest();
    request.setConnectorid(connectorId);
    request.setIsemergency(isEmergency);

    return this.sendPut(
      `connector/${connectorId}/emergency`,
      undefined,
      request
    ).pipe(
      map((bytes) => PutConnectorEmergencyResponse.deserializeBinary(bytes))
    );
  }

  public requestPutConnectorEmergencyScene(
    connectorId: number,
    sceneId: number,
    isEmergency: boolean
  ): Observable<PutConnectorEmergencySceneResponse> {
    const request = new PutConnectorEmergencySceneRequest();
    request.setIsemergency(isEmergency);
    request.setSceneid(sceneId);

    return this.sendPut(
      `connector/${connectorId}/emergency/${sceneId}`,
      undefined,
      request
    ).pipe(
      map((bytes) =>
        PutConnectorEmergencySceneResponse.deserializeBinary(bytes)
      )
    );
  }
}
