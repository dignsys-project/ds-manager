import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable()
export class ConnectsHeaderService {
  title$: BehaviorSubject<string> = new BehaviorSubject<string>('');
}
