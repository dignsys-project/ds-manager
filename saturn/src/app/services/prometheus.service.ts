import { Injectable } from '@angular/core';
import * as prometheus from 'src/assets/prometheus.json';
import { environment } from 'src/environments/environment';
import { CommonExtensions } from '../commons/common-extensions';

@Injectable({
  providedIn: 'root',
})
export class PrometheusService {
  public address: string;

  constructor() {
    this.address = environment.prometheus;

    // if (!CommonExtensions.isNullOrUndefined(prometheus.Prometheus)) {
    //   this.address = prometheus.Prometheus;
    // }
  }
}
