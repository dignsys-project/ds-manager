import { Component, OnInit } from '@angular/core';
import { AppService } from 'src/app/app.service';
import { BehaviorSubject } from 'rxjs';
import { Router } from '@angular/router';
import { VersionService } from 'src/app/version.service';
import { take } from 'rxjs/operators';
import { CommonExtensions } from 'src/app/commons/common-extensions';

@Component({
  selector: 'app-accounts',
  templateUrl: './accounts.component.html',
  styleUrls: ['./accounts.component.scss'],
})
export class AccountsComponent implements OnInit {
  isNeedAdmin$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

  constructor(
    private appService: AppService,
    private router: Router,
    private versionService: VersionService
  ) {
    this.appService.changeHeaderSide(false, 'account component');

    this.appService.isHeader$.next(false);

    this.isNeedAdmin$.subscribe((isNeedAdministrator) => {
      if (isNeedAdministrator) {
        this.router.navigate(['/accounts/administrator']);
      }
    });

    this.requestVersionRequired();
  }

  private requestVersionRequired() {
    this.versionService
      .requestGetVersionRequired()
      .pipe(take(1))
      .subscribe((response) => {
        if (CommonExtensions.isSuccess(response.getCommon())) {
          this.isNeedAdmin$.next(!response.getHaveadmin());
        }
      });
  }

  ngOnDestroy(): void {
    this.appService.isHeader$.next(true);
    this.appService.changeHeaderSide(true, 'accounts component');
  }

  ngOnInit(): void {}
}
