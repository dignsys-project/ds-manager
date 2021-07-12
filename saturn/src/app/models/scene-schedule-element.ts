import { SceneBaseElement } from './scene-base-element';
import { ScheduleElement } from './schedule-element';
import { CommonExtensions } from '../commons/common-extensions';
import { isNullOrUndefined } from 'util';
import { ScheduleScene } from '../protocols/common_pb';

export class ScheduleSceneElement {
  id: number;
  name: string;
  schedule: ScheduleElement;
  sceneBase: SceneBaseElement;
  created: Date;
  updated: Date;

  constructor() {
    this.schedule = new ScheduleElement();
  }

  public get isValidate(): boolean {
    if (isNullOrUndefined(this.name)) {
      return false;
    }
    if (this.name.length <= 0) {
      return false;
    }
    if (isNullOrUndefined(this.sceneBase)) {
      return false;
    }

    if (this.sceneBase.sceneId <= 0) {
      return false;
    }

    if (isNullOrUndefined(this.schedule)) {
      return false;
    }

    if (!this.schedule.isValidate) {
      return false;
    }

    return true;
  }

  fromMessage(message: ScheduleScene) {
    this.id = message.getSchedulesceneid();
    this.name = message.getName();
    this.sceneBase = SceneBaseElement.fromMessageBase(message.getScenebase());
    this.schedule = ScheduleElement.fromMessage(message.getSchedule());
    this.created = CommonExtensions.utcSecondsToDate(message.getCreated());
    this.updated = CommonExtensions.utcSecondsToDate(message.getUpdated());
  }

  public static fromMessage(message: ScheduleScene) {
    const element = new ScheduleSceneElement();
    element.fromMessage(message);
    return element;
  }
}
