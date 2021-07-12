import { ScenePartTextElement } from './scene-part-text-element';
import { WeatherService } from '../services/weather.service';
import { OnDestroy } from '@angular/core';
import { ScenePartWeather } from '../protocols/common_pb';

export class ScenePartWeatherElement {
  constructor() {
    this.textElement = new ScenePartTextElement();
  }
  public textElement: ScenePartTextElement;

  public toMessage(): ScenePartWeather {
    const message = new ScenePartWeather();
    message.setText(this.textElement.toMessage());
    return message;
  }

  public fromMessage(message: ScenePartWeather) {
    this.textElement = ScenePartTextElement.fromMessage(message.getText());
  }

  public static fromMessage(
    message: ScenePartWeather
  ): ScenePartWeatherElement {
    const element = new ScenePartWeatherElement();
    element.fromMessage(message);
    return element;
  }
}
