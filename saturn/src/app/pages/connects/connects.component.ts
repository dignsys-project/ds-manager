import { Component, OnInit, OnDestroy } from '@angular/core';
import { HeaderSideService } from 'src/app/header-side/header-side.service';
import { IHeaderSideMenu } from 'src/app/models/header-side-menu';
import { BehaviorSubject, Observable } from 'rxjs';
import { ConnectsHeaderService } from './connects-header.service';

@Component({
  selector: 'app-connects',
  templateUrl: './connects.component.html',
  styleUrls: ['./connects.component.scss'],
})
export class ConnectsComponent implements OnInit, OnDestroy {
  menus$: BehaviorSubject<Array<IHeaderSideMenu>>;

  title$: Observable<string>;

  constructor(
    private headerSideService: HeaderSideService,
    headerService: ConnectsHeaderService
  ) {
    this.title$ = headerService.title$.asObservable();

    this.menus$ = headerSideService.menus$;

    this.headerSideService.menus$.next([
      { name: '서버', route: '/connects/backends' },
      { name: '디바이스', route: '/connects/connectors' },
    ]);
  }
  ngOnDestroy(): void {
    this.headerSideService.menus$.next(null);
  }

  ngOnInit(): void {}
}
