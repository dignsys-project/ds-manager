import { Component, OnInit, ElementRef, OnDestroy } from '@angular/core';
import { BehaviorSubject, fromEvent } from 'rxjs';
import { ScenesHeaderService } from './scenes-header.service';
import { AppService } from 'src/app/app.service';
import { HeaderSideService } from 'src/app/header-side/header-side.service';
import { takeWhile } from 'rxjs/operators';
import { ScenesLayoutService } from './scenes-layout.service';
import { environment } from 'src/environments/environment';
import { IHeaderSideMenu } from 'src/app/models/header-side-menu';

@Component({
  selector: 'app-scenes',
  templateUrl: './scenes.component.html',
  styleUrls: ['./scenes.component.scss'],
})
export class ScenesComponent implements OnInit, OnDestroy {
  title$: BehaviorSubject<string>;
  isShowTitle$: BehaviorSubject<boolean>;

  private m_bSubscribe: boolean = true;

  private minHeight$: BehaviorSubject<number>;

  constructor(
    private appService: AppService,
    private scenesHeaderService: ScenesHeaderService,
    private headerSideService: HeaderSideService,
    private service: ScenesLayoutService,
    private el: ElementRef<HTMLElement>
  ) {
    this.title$ = this.scenesHeaderService.title$;
    this.isShowTitle$ = this.scenesHeaderService.isShowTitle$;

    let menus: Array<IHeaderSideMenu> = [
      { name: '씬 생성', route: '/scenes/create' },
      { name: '씬 목록', route: '/scenes/list' },
      { name: '리소스 목록', route: '/scenes/resource' },
      {
        name: '씬 검증',
        route: '/scenes/validate',
      },
    ];

    if (!environment.production) {
      menus.push(...[{ name: '개발', route: '/scenes/developments' }]);
    }

    this.headerSideService.menus$.next(menus);

    this.minHeight$ = new BehaviorSubject<number>(0);
    this.service.minSceneHeight$ = this.minHeight$.asObservable();
  }
  ngOnDestroy(): void {
    this.m_bSubscribe = false;
  }

  ngOnInit(): void {
    this.minHeight$.next(this.el.nativeElement.offsetHeight);

    fromEvent(window, 'resize')
      .pipe(takeWhile(() => this.m_bSubscribe))
      .subscribe(() => {
        this.minHeight$.next(this.el.nativeElement.offsetHeight);
      });
  }
}
