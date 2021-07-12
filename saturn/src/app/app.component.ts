import { Component } from '@angular/core';
import { AppService } from './app.service';
import { BehaviorSubject, Observable } from 'rxjs';
import { take } from 'rxjs/operators';
import { CommonExtensions } from './commons/common-extensions';
import { Title } from '@angular/platform-browser';
import { PermissionService } from './services/permission.service';
import { AccountsService } from './services/accounts.service';
import { PermissionElement } from './models/permission-element';
import { environment } from 'src/environments/environment';
import { AuthorizeService } from './services/authorize.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'saturn';

  isDarkMode$: BehaviorSubject<boolean>;

  isSideHeader$: Observable<boolean>;

  private m_Timer: any;

  private m_PermissionElement$: BehaviorSubject<PermissionElement> = new BehaviorSubject<PermissionElement>(
    undefined
  );

  constructor(
    appService: AppService,
    private titleService: Title,
    private permissionService: PermissionService,
    private authorizeService: AuthorizeService,
    private accountService: AccountsService
  ) {
    // set title name
    this.titleService.setTitle('다인시스 씬 관리 프로그램');

    //
    this.isDarkMode$ = appService.isDarkMode$;
    this.isSideHeader$ = appService.isSideHeader$;

    // set permission element as observable
    this.permissionService.element$ = this.m_PermissionElement$.asObservable();

    // 권한 정보를 1분마다 갱신 한다.
    this.authorizeService.member$.subscribe((member) => {
      if (!CommonExtensions.isNullOrUndefined(member)) {
        if (CommonExtensions.isNullOrUndefined(this.m_Timer)) {
          // refresh account permission
          this.refreshAccount(member.id);

          // start timer per 5 minute
          setInterval(
            () => {
              this.refreshAccount(member.id);
            },
            environment.production ? 60 * 1000 * 5 : 60 * 1000
          );
        }
      } else {
        clearInterval(this.m_Timer);
        this.m_Timer = null;
      }
    });
  }

  private refreshAccount(memberId: number) {
    this.accountService
      .requestGetAccount(memberId)
      .pipe(take(1))
      .subscribe((response) => {
        if (CommonExtensions.isSuccess(response.getCommon())) {
          const element = PermissionElement.fromMessage(
            response.getKind(),
            response.getPermissionsList()
          );

          this.m_PermissionElement$.next(element);
        } else if (CommonExtensions.isUnAuthorized(response.getCommon())) {
          this.authorizeService.unAuthorize();
          location.reload();
        }
      });
  }
}
