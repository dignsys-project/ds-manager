import { Component, OnInit, OnDestroy } from '@angular/core';
import { AccountsService } from '../../services/accounts.service';
import { takeWhile } from 'rxjs/operators';
import { HeaderSideService } from 'src/app/header-side/header-side.service';
import { AppService } from 'src/app/app.service';
import { AuthorizeService } from 'src/app/services/authorize.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit, OnDestroy {
  private m_bSubscribe: boolean = true;

  memberId: number;

  constructor(
    private authorizeService: AuthorizeService,
    private headerSideService: HeaderSideService,
    private appService: AppService
  ) {
    this.authorizeService.member$
      .pipe(takeWhile(() => this.m_bSubscribe))
      .subscribe((member) => {
        this.memberId = member?.id;
      });

    this.headerSideService.menus$.next([]);
  }
  ngOnDestroy(): void {
    this.m_bSubscribe = false;
  }

  ngOnInit(): void {}
}
