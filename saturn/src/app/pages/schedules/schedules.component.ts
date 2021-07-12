import { Component, OnInit, OnDestroy } from '@angular/core';
import { IHeaderSideMenu } from 'src/app/models/header-side-menu';
import { BehaviorSubject, Observable } from 'rxjs';
import { HeaderSideService } from 'src/app/header-side/header-side.service';
import { ScheduleService } from 'src/app/services/schedules.service';
import {
  SchedulesContentService,
  ESCHEDULE_MENU_STATUS,
} from './schedules-content.service';
import { ActivatedRoute, Router } from '@angular/router';
import { filter, map, take } from 'rxjs/operators';
import { Location } from '@angular/common';

@Component({
  selector: 'app-schedules',
  templateUrl: './schedules.component.html',
  styleUrls: ['./schedules.component.scss'],
})
export class SchedulesComponent implements OnInit, OnDestroy {
  menus$: BehaviorSubject<Array<IHeaderSideMenu>>;

  title$: Observable<string>;
  currentMenu$: Observable<ESCHEDULE_MENU_STATUS>;

  enabledBack$: BehaviorSubject<boolean>;

  isProcess: boolean = false;

  constructor(
    private headerSideService: HeaderSideService,
    private contentService: SchedulesContentService,
    private service: ScheduleService,
    private router: Router,
    private location: Location
  ) {
    this.menus$ = headerSideService.menus$;
    this.title$ = this.contentService.title$.asObservable();
    this.currentMenu$ = this.contentService.menu$.asObservable();

    this.headerSideService.menus$.next([
      { name: '스케줄 관리', route: '/schedules/schedules' },
      { name: '스케줄 씬 관리', route: '/schedules/scenes' },
    ]);
  }
  ngOnDestroy(): void {
    this.headerSideService.menus$.next([]);
    this.contentService.menu$.next(ESCHEDULE_MENU_STATUS.DEFAULT);
  }

  ngOnInit(): void {}

  isAddIcon(): Observable<boolean> {
    return this.currentMenu$.pipe(
      map(
        (x) =>
          x === ESCHEDULE_MENU_STATUS.SCHEDULE_ADD ||
          x === ESCHEDULE_MENU_STATUS.SCHEDULE_SCENE_ADD
      )
    );
  }

  isShowMenu(): Observable<boolean> {
    return this.currentMenu$.pipe(
      map((x) => x !== ESCHEDULE_MENU_STATUS.DEFAULT)
    );
  }

  onClickedAdd() {
    this.isProcess = true;

    this.currentMenu$.pipe(take(1)).subscribe((status) => {
      switch (status) {
        case ESCHEDULE_MENU_STATUS.SCHEDULE_ADD:
          this.router.navigate(['/schedules/schedules/add']);
          break;
        case ESCHEDULE_MENU_STATUS.SCHEDULE_SCENE_ADD:
          this.router.navigate(['schedules/scenes/add']);
          break;
        case ESCHEDULE_MENU_STATUS.SCHEDULE_BACK:
          this.router.navigate(['schedules/schedules']);
          break;
        case ESCHEDULE_MENU_STATUS.SCHEDULE_SCENE_BACK:
          // this.router.navigate(['schedules/scenes']);
          this.location.back();

          break;
      }

      this.isProcess = false;
    });
  }
}
