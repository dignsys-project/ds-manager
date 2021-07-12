import { ScenePartTextElement } from './scene-part-text-element';
import { ResourceElement } from './resource-element';
import { ScenePartClock } from '../protocols/common_pb';
import { CommonExtensions } from '../commons/common-extensions';

export class ScenePartClockElement {
  constructor() {
    this.textElement = new ScenePartTextElement();
    this.dateElement = new ScenePartTextElement();
    this.dateFormat = 'yyyy-MM-dd';
    this.textFormat = 'hh : mm : ss';
  }
  public textElement: ScenePartTextElement;
  public textFormat: string;

  public dateElement: ScenePartTextElement;
  public dateFormat: string;

  public resource: ResourceElement;

  public useDate: boolean = false;
  public useWeek: boolean = false;

  public toMessage(): ScenePartClock {
    const message = new ScenePartClock();
    // set text
    if (!CommonExtensions.isNullOrUndefined(this.textElement)) {
      message.setText(this.textElement.toMessage());
    }

    // set resource
    if (
      !CommonExtensions.isNullOrUndefined(this.resource) &&
      this.resource?.resourceId > 0
    ) {
      message.setResource(this.resource.toMessage());
    }

    // set dateText
    if (!CommonExtensions.isNullOrUndefined(this.dateElement)) {
      message.setDatetext(this.dateElement.toMessage());
    }

    // set date format
    if (!CommonExtensions.isNullOrUndefined(this.dateFormat)) {
      message.setDateformat(this.dateFormat);
    }

    // set text format
    if (!CommonExtensions.isNullOrUndefined(this.textFormat)) {
      message.setTextformat(this.textFormat);
    }

    // set use date
    message.setUsedate(this.useDate);

    // set use week
    message.setUseweek(this.useWeek);

    return message;
  }

  public fromMessage(message: ScenePartClock) {
    // text
    if (message.hasText()) {
      this.textElement.fromMessage(message.getText());
    }

    // resource
    if (message.hasResource()) {
      this.resource = ResourceElement.fromMessage(message.getResource());
    }

    // date text
    if (message.hasDatetext()) {
      this.dateElement.fromMessage(message.getDatetext());
    }

    // date format
    this.dateFormat = message.getDateformat();

    // text format
    this.textFormat = message.getTextformat();

    // get use date
    this.useDate = message.getUsedate();

    // get use week
    this.useWeek = message.getUseweek();
  }
}
