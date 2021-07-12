import { SceneBaseElement } from './scene-base-element';
import { ScheduleElement } from './schedule-element';
import { CommonExtensions } from '../commons/common-extensions';
import { isNullOrUndefined } from 'util';
import { ScheduleSceneElement } from './scene-schedule-element';
import { ConnectorScheduleScene } from '../protocols/common_pb';
import { SceneElement } from './scene-element';

export class ConnectorScheduleSceneElement {
  public id: number;
  public scheduleScene: ScheduleSceneElement;
  public created: Date;
  public updated: Date;

  public get schedule(): ScheduleElement {
    return this.scheduleScene?.schedule;
  }

  public get sceneBase(): SceneBaseElement {
    return this.scheduleScene?.sceneBase;
  }

  public fromMessage(message: ConnectorScheduleScene) {
    this.id = message.getConnectorschedulesceneid();
    this.scheduleScene = ScheduleSceneElement.fromMessage(
      message.getSchedulescene()
    );
    this.created = CommonExtensions.utcSecondsToDate(message.getCreated());
    this.updated = CommonExtensions.utcSecondsToDate(message.getUpdated());
  }

  public static fromMessage(
    message: ConnectorScheduleScene
  ): ConnectorScheduleSceneElement {
    const element = new ConnectorScheduleSceneElement();
    element.fromMessage(message);
    return element;
  }
}
