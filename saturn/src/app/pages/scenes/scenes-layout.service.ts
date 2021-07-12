import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable()
export class ScenesLayoutService {
  id: number = Math.random();
  public minSceneHeight$: Observable<number>;

  constructor() {}
}
