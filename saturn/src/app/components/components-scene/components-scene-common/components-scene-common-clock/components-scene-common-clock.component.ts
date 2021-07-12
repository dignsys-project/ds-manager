import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { ScenePartClockElement } from 'src/app/models/scene-part-clock-element';
import { WeatherService } from 'src/app/services/weather.service';
import { Observable } from 'rxjs';
import { WeatherElement } from 'src/app/models/weather-element';
import { takeWhile, tap } from 'rxjs/operators';
import { ResourceService } from 'src/app/services/resource.service';
import { DatePipe } from '@angular/common';
import { CommonExtensions } from 'src/app/commons/common-extensions';
import ko from '@angular/common/locales/ko';

@Component({
  selector: 'app-components-scene-common-clock',
  templateUrl: './components-scene-common-clock.component.html',
  styleUrls: ['./components-scene-common-clock.component.scss'],
})
export class ComponentsSceneCommonClockComponent implements OnInit, OnDestroy {
  private _timer: any;

  @Input()
  element: ScenePartClockElement;

  constructor(
    private datePipe: DatePipe,
    private resourceService: ResourceService
  ) {}

  ngOnDestroy(): void {
    if (undefined != this._timer) {
      clearInterval(this._timer);
      this._timer = undefined;
    }
  }

  ngOnInit(): void {
    Promise.resolve(() => this.doClock());

    this._timer = setInterval(() => {
      this.doClock();
    }, 1000);
  }

  getResourceAddress(): string {
    return this.resourceService.getResourceAddress(this.element.resource);
  }

  private doClock(): void {
    var date = new Date();

    if (this.element.useDate) {
      try {
        const dateText = this.datePipe.transform(date, this.element.dateFormat);
        if (this.element.useWeek) {
          let week = '일';
          switch (date.getDay()) {
            case 0:
              week = '일';
              break;
            case 1:
              week = '월';
              break;
            case 2:
              week = '화';
              break;
            case 3:
              week = '수';
              break;
            case 4:
              week = '목';
              break;
            case 5:
              week = '금';
              break;
            case 6:
              week = '토';
              break;
          }
          this.element.dateElement.text = `${dateText} ${week}`;
        } else {
          this.element.dateElement.text = `${dateText}`;
        }
      } catch (error) {
        console.error(error);
        this.element.textElement.text = `${date
          .getFullYear()
          .toString()} - ${date
          .getMonth()
          .toString()
          .padStart(2, '0')} - ${date.getDay().toString().padStart(2, '0')}`;
      }
    }

    try {
      this.element.textElement.text = this.datePipe.transform(
        date,
        this.element.textFormat
      );
    } catch (error) {
      this.element.textElement.text = `${date
        .getHours()
        .toString()
        .padStart(2, '0')} : ${date
        .getMinutes()
        .toString()
        .padStart(2, '0')} : ${date.getSeconds().toString().padStart(2, '0')}`;
    }
  }
}
