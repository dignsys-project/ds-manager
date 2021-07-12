import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable()
export class ScenesHeaderService {
  title$: BehaviorSubject<string> = new BehaviorSubject<string>('');

  isShowTitle$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(true);

  constructor() {}
}
