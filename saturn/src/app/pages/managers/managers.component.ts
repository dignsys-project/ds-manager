import { Component, OnInit, OnDestroy } from '@angular/core';
import { AccountsService } from '../../services/accounts.service';
import { Observable, fromEvent } from 'rxjs';
import { AccountElement } from 'src/app/models/account-element';
import { Platform } from '@angular/cdk/platform';
import { takeWhile } from 'rxjs/operators';
import { HeaderSideService } from 'src/app/header-side/header-side.service';
import { AppService } from 'src/app/app.service';
import { environment } from 'src/environments/environment';
import { MembersService } from '../../services/members.service';
import { CommonExtensions } from 'src/app/commons/common-extensions';
import { MemberElement } from 'src/app/models/member-element';
import { ManagersService } from './managers.service';
import { MoonVersionElement } from 'src/app/models/moon-version-element';
import { PrometheusService } from 'src/app/services/prometheus.service';

@Component({
  selector: 'app-managers',
  templateUrl: './managers.component.html',
  styleUrls: ['./managers.component.scss'],
  providers: [MembersService, ManagersService],
})
export class ManagersComponent implements OnInit, OnDestroy {
  element: MemberElement;

  width: number;
  height: number;

  version: string;

  moonVersionElement: MoonVersionElement;

  address: string;

  private m_bSubscribe: boolean = true;

  get currentWindows(): string {
    return `${window.innerWidth} x ${window.innerHeight}`;
  }

  constructor(
    private accountsService: AccountsService,
    private headerSideService: HeaderSideService,
    private appService: AppService,
    private memberService: MembersService,
    private service: ManagersService,
    private prometheusService: PrometheusService
  ) {
    this.memberService.requestGetMemberById(0).subscribe((response) => {
      if (CommonExtensions.isSuccess(response.getCommon())) {
        this.element = MemberElement.fromMessage(response.getMember());
      }
    });

    this.service
      .requestGetVersion()
      .pipe(takeWhile(() => this.m_bSubscribe))
      .subscribe((response) => {
        if (CommonExtensions.isSuccess(response.getCommon())) {
          if (response.getVersionsList().length > 0) {
            this.moonVersionElement = MoonVersionElement.fromMessage(
              response.getVersionsList()[0]
            );
          }
        }
      });

    // check width, height
    this.width = window.innerWidth;
    this.height = window.innerHeight;

    this.headerSideService.menus$.next([]);

    // hide side header
    this.appService.changeHeaderSide(false, 'manager component, constructor()');

    // get version
    this.version = environment.version;

    this.address = this.prometheusService.address;
  }

  ngOnDestroy(): void {
    this.m_bSubscribe = false;

    this.appService.changeHeaderSide(true, 'manager component, ngOnDestory()');
  }

  ngOnInit(): void {}
}
