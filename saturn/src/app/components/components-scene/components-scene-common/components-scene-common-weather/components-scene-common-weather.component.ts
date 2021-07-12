import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { ScenePartWeatherElement } from 'src/app/models/scene-part-weather-element';
import { WeatherElement } from 'src/app/models/weather-element';
import { WeatherService } from 'src/app/services/weather.service';
import { takeWhile } from 'rxjs/operators';
import { ScenePartText, TEXT_ALIGN_KIND } from 'src/app/protocols/common_pb';

@Component({
  selector: 'app-components-scene-common-weather',
  templateUrl: './components-scene-common-weather.component.html',
  styleUrls: ['./components-scene-common-weather.component.scss'],
})
export class ComponentsSceneCommonWeatherComponent
  implements OnInit, OnDestroy {
  private m_bSubscribe: boolean = true;

  private _timer: any;

  private _element: ScenePartWeatherElement;
  @Input()
  set element(element: ScenePartWeatherElement) {
    this._element = element;
    if (undefined != element && undefined != this._element?.textElement?.text) {
      this._element.textElement.text = '';

      switch (this._element.textElement.horizontalKind) {
        case undefined:
        case TEXT_ALIGN_KIND.TEXT_ALIGN_KIND_DEFAULT:
          this._element.textElement.horizontalKind =
            TEXT_ALIGN_KIND.TEXT_ALIGN_KIND_HORIZONTAL_END;
          break;
      }

      switch (this._element.textElement.verticalKind) {
        case undefined:
        case TEXT_ALIGN_KIND.TEXT_ALIGN_KIND_DEFAULT:
          this._element.textElement.verticalKind =
            TEXT_ALIGN_KIND.TEXT_ALIGN_KIND_VERTICAL_CENTER;
          break;
      }
    }
  }

  get element(): ScenePartWeatherElement {
    return this._element;
  }

  weather: WeatherElement;

  constructor(private weatherService: WeatherService) {
    this.weatherService.element$
      .pipe(takeWhile(() => this.m_bSubscribe))
      .subscribe((element) => {
        this.weather = element;
      });
  }
  ngOnDestroy(): void {
    this.m_bSubscribe = false;

    if (undefined != this._timer) {
      clearInterval(this._timer);
    }
  }

  ngOnInit(): void {
    this._timer = setTimeout(() => {
      if (
        undefined != this.element?.textElement?.text &&
        undefined != this.weather
      ) {
        this.element.textElement.text = `${this.weather.temperature}°`;
      }
    }, 1000);
  }

  getWeatherAssetsName(weather: WeatherElement): string {
    const weatherPtyCode = weather.ptyCode > 4 ? 1 : weather.ptyCode;
    return `assets\\weathers\\${weather.skyCode}_${weatherPtyCode}.png`;
  }
  getWeatherAssetsWebPName(weather: WeatherElement): string {
    return '';
  }
}
