import { Component, OnDestroy, OnInit } from '@angular/core';
import { MatSlideToggleChange } from '@angular/material/slide-toggle';
import { Observable, BehaviorSubject } from 'rxjs';
import { AppService } from '../app.service';
import { Router } from '@angular/router';
import { AccountsService } from '../services/accounts.service';
import { HeaderSideService } from '../header-side/header-side.service';
import { IHeaderSideMenu } from '../models/header-side-menu';
import {
  trigger,
  state,
  style,
  transition,
  animate,
} from '@angular/animations';
import { filter, map, takeWhile } from 'rxjs/operators';
import { PermissionElement } from '../models/permission-element';
import { PermissionService } from '../services/permission.service';
import { MEMBER_PERMISSION_KIND } from '../protocols/common_pb';
import { AuthorizeService } from '../services/authorize.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  animations: [
    trigger('flyInOut', [
      state('in', style({ height: '100%' })),
      transition('void => *', [style({ height: '0%' }), animate(300)]),
      transition('* => void', [animate(200, style({ height: '0%' }))]),
    ]),
  ],
})
export class HeaderComponent implements OnInit, OnDestroy {
  private _bSubscribe: boolean = true;

  isDarkMode$: BehaviorSubject<boolean>;
  isHeader$: BehaviorSubject<boolean>;
  isAuthorized$: Observable<boolean>;
  isSideHeader$: Observable<boolean>;

  isOpenMenu: boolean;

  menus$: Observable<Array<IHeaderSideMenu>>;

  private _permissionElement$: Observable<PermissionElement>;

  constructor(
    private appService: AppService,
    private router: Router,
    private authorizeService: AuthorizeService,
    private headerSideService: HeaderSideService,
    private permissionsService: PermissionService
  ) {
    this.isDarkMode$ = this.appService.isDarkMode$;
    this.isHeader$ = this.appService.isHeader$;
    this.isSideHeader$ = this.appService.isSideHeader$;

    this.menus$ = this.headerSideService.menus$.asObservable();

    this.isAuthorized$ = this.authorizeService.isAuthorize();

    this._permissionElement$ = this.permissionsService.element$;
  }
  ngOnDestroy(): void {
    this._bSubscribe = false;
  }

  get haveScenePermission(): Observable<boolean> {
    return this._permissionElement$
      .pipe(filter((x) => undefined != x))
      .pipe(
        map((x) =>
          x.isInclude(
            MEMBER_PERMISSION_KIND.MEMBER_PERMISSION_KIND_SCENE_SELECT
          )
        )
      );
  }

  ngOnInit(): void {}

  onClickedSubmenu() {
    this.isOpenMenu = !this.isOpenMenu;
  }

  onChangedToggleDarkMode() {
    const isDarkMode = this.isDarkMode$.value ?? false;
    this.appService.changeDarkMode(!isDarkMode);
  }

  onClickedRouteDashboard() {}

  onClickedRouteAccount() {
    this.router.navigate(['managers']);
  }

  onClickedUnAuthorize() {
    this.authorizeService.unAuthorize();
    location.reload();
  }

  onClickedRouted() {
    this.isOpenMenu = false;
  }
}
