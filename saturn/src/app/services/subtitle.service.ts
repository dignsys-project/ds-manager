import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { SaturnNetwork } from '../commons/saturn-network';
import { GetSubtitleRssResponse } from '../protocols/prometheus_pb';
import { PrometheusService } from './prometheus.service';

@Injectable({
  providedIn: 'root',
})
export class SubtitleService extends SaturnNetwork {
  constructor(httpClient: HttpClient, prometheusService: PrometheusService) {
    super(httpClient, prometheusService.address);
  }

  public requestGetRss(address: string): Observable<GetSubtitleRssResponse> {
    const queries = new Map<string, any>();
    queries.set('address', encodeURIComponent(address));
    return this.sendGet('subtitle/rss', queries).pipe(
      map((bytes) => GetSubtitleRssResponse.deserializeBinary(bytes))
    );
  }
}
