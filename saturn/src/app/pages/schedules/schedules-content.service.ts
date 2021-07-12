import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

export enum ESCHEDULE_MENU_STATUS {
  DEFAULT = 0,
  SCHEDULE_ADD = 1,
  SCHEDULE_SCENE_ADD = 2,
  SCHEDULE_BACK = 3,
  SCHEDULE_SCENE_BACK = 4,
}
@Injectable()
export class SchedulesContentService {
  title$: BehaviorSubject<string> = new BehaviorSubject<string>('');

  menu$: BehaviorSubject<ESCHEDULE_MENU_STATUS> = new BehaviorSubject<
    ESCHEDULE_MENU_STATUS
  >(ESCHEDULE_MENU_STATUS.DEFAULT);

  public scheduleId: number = 0;
  public scheduleSceneId: number = 0;

  constructor() {}
}
