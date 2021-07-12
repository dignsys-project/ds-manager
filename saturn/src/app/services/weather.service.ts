import { SaturnNetwork } from '../commons/saturn-network';
import { HttpClient } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';
import { GetWeatherResponse } from '../protocols/prometheus_pb';
import { map } from 'rxjs/internal/operators/map';
import { Injectable } from '@angular/core';
import { WeatherElement } from '../models/weather-element';
import { CommonExtensions } from '../commons/common-extensions';
import { PrometheusService } from './prometheus.service';

@Injectable({ providedIn: 'root' })
export class WeatherService extends SaturnNetwork {
  private m_Element$: BehaviorSubject<WeatherElement>;
  public element$: Observable<WeatherElement>;

  constructor(httpClient: HttpClient, prometheusService: PrometheusService) {
    super(httpClient, prometheusService.address);

    this.m_Element$ = new BehaviorSubject<WeatherElement>(null);
    this.element$ = this.m_Element$.asObservable();
  }

  // GET weather
  public requestGetWeather(): Observable<GetWeatherResponse> {
    return this.sendGet('weather').pipe(
      map((bytes) => {
        const response = GetWeatherResponse.deserializeBinary(bytes);
        if (CommonExtensions.isSuccess(response.getCommon())) {
          this.m_Element$.next(
            WeatherElement.fromMessage(
              response.getWeather(),
              response.getDatetimeseconds()
            )
          );
        }

        return response;
      })
    );
  }
}
