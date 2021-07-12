import { Weather } from '../protocols/common_pb';
import { CommonExtensions } from '../commons/common-extensions';

export class WeatherElement {
  public skyCode: number = 0;
  public ptyCode: number = 0;
  public temperature: number = 0;

  public requestDate: Date;

  public getWeatherIconName() {
    return `${this.skyCode}_${this.ptyCode}.png`;
  }

  public fromMessage(message: Weather, requestDateSeconds: number) {
    this.skyCode = message.getSkycode();
    this.ptyCode = message.getPtycode();
    this.temperature = message.getTemperature();
    this.requestDate = CommonExtensions.utcSecondsToDate(requestDateSeconds);
  }

  public static fromMessage(
    message: Weather,
    requestDateSeconds: number
  ): WeatherElement {
    const element = new WeatherElement();
    element.fromMessage(message, requestDateSeconds);
    return element;
  }
}
