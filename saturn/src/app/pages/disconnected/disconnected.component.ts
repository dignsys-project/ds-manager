import { Location } from '@angular/common';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { fromEvent } from 'rxjs';
import { takeWhile } from 'rxjs/operators';
import { AppService } from 'src/app/app.service';
import { PrometheusService } from 'src/app/services/prometheus.service';
import { VersionService } from 'src/app/version.service';

@Component({
  selector: 'app-disconnected',
  templateUrl: './disconnected.component.html',
  styleUrls: ['./disconnected.component.scss'],
})
export class DisconnectedComponent implements OnInit, OnDestroy {
  private _prometheusAddress: string;

  private _isSubscribe: boolean = true;

  get prometheusAddress(): string {
    return this._prometheusAddress;
  }

  constructor(
    prometheusService: PrometheusService,
    private appService: AppService,
    private versionService: VersionService,
    private location: Location
  ) {
    // disable side header
    this.appService.changeHeaderSide(
      false,
      'disconnected component, constructor()'
    );

    // disable header
    this.appService.isHeader$.next(false);

    fromEvent(window, 'resize')
      .pipe(takeWhile(() => this._isSubscribe))
      .subscribe((_) => {
        // disable side header
        this.appService.changeHeaderSide(
          false,
          'disconnected component window:resize'
        );

        this.appService.isHeader$.next(false);
      });

    // set prometheus address
    this._prometheusAddress = prometheusService.address;
  }
  ngOnDestroy(): void {
    this._isSubscribe = false;
    this.appService.isHeader$.next(true);
    this.appService.changeHeaderSide(true);
  }

  ngOnInit(): void {}

  onPressedRetryConnect() {
    this.location.back();
  }
}
