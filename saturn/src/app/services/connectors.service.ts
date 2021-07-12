import { SaturnNetwork } from 'src/app/commons/saturn-network';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable, BehaviorSubject } from 'rxjs';
import {
  GetConnectorResponse,
  GetConnectorsResponse,
  PostConnectorResponse,
  PostConnectorRequest,
  PutConnectorResponse,
  PutConnectorRequest,
  DeleteConnectorResponse,
  PutConnectorNameResponse,
  PutConnectorNameRequest,
  PutConnectorEmergencyResponse,
  PutConnectorEmergencyRequest,
} from 'src/app/protocols/prometheus_pb';
import { map } from 'rxjs/operators';
import { ConnectorBaseElement } from 'src/app/models/connector-base-element';
import { CONNECTOR_REGISTER_KINDMap } from 'src/app/protocols/common_pb';
import { PrometheusService } from './prometheus.service';
import { connect } from 'http2';
import { ConnectionPositionPair } from '@angular/cdk/overlay';

@Injectable()
export class ConnectorsService extends SaturnNetwork {
  selectedElements$: BehaviorSubject<
    Array<ConnectorBaseElement>
  > = new BehaviorSubject<Array<ConnectorBaseElement>>([]);

  deletedElements$: BehaviorSubject<
    Array<ConnectorBaseElement>
  > = new BehaviorSubject<Array<ConnectorBaseElement>>([]);

  isProcess$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

  constructor(httpClient: HttpClient, prometheusService: PrometheusService) {
    super(httpClient, prometheusService.address);
  }

  public requestGetConnectors(): Observable<GetConnectorsResponse> {
    return this.sendGet('connector', null).pipe(
      map((bytes) => GetConnectorsResponse.deserializeBinary(bytes))
    );
  }

  public requestGetConnectorById(
    connectorId: number
  ): Observable<GetConnectorResponse> {
    return this.sendGet(`connector/${connectorId}`, null).pipe(
      map((bytes) => GetConnectorResponse.deserializeBinary(bytes))
    );
  }

  public requestPutConnector(
    connectorId: number,
    kind: CONNECTOR_REGISTER_KINDMap[keyof CONNECTOR_REGISTER_KINDMap]
  ): Observable<PutConnectorResponse> {
    // request message
    const message = new PutConnectorRequest();
    message.setKind(kind);

    // send put
    return this.sendPut(`connector/${connectorId}`, null, message).pipe(
      map((bytes) => PutConnectorResponse.deserializeBinary(bytes))
    );
  }

  public requestPutConnectorName(
    connectorId: number,
    name: string
  ): Observable<PutConnectorNameResponse> {
    const message = new PutConnectorNameRequest();
    message.setName(name);

    // send put
    return this.sendPut(`connector/${connectorId}/name`, null, message).pipe(
      map((bytes) => PutConnectorNameResponse.deserializeBinary(bytes))
    );
  }

  public requestDeleteConnector(
    connectorId: number
  ): Observable<DeleteConnectorResponse> {
    const queries = new Map<string, any>();
    queries.set('id', connectorId);
    return this.sendDelete('connector', queries).pipe(
      map((bytes) => DeleteConnectorResponse.deserializeBinary(bytes))
    );
  }

  public requestPostConnector(
    name: string,
    deviceId: string
  ): Observable<PostConnectorResponse> {
    const message = new PostConnectorRequest();
    message.setName(name);
    message.setDeviceid(deviceId);

    return this.sendPost('connector', null, message).pipe(
      map((bytes) => PostConnectorResponse.deserializeBinary(bytes))
    );
  }
}
