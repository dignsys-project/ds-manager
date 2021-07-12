import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { IHeaderSideMenu } from '../models/header-side-menu';

@Injectable({
  providedIn: 'root',
})
export class HeaderSideService {
  menus$: BehaviorSubject<IHeaderSideMenu[]> = new BehaviorSubject<
    IHeaderSideMenu[]
  >([]);

  constructor() {}
}
