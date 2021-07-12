import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable()
export class DepartmentsHeaderService {
  title$: BehaviorSubject<string> = new BehaviorSubject<string>('');

  enabledBack$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
}
