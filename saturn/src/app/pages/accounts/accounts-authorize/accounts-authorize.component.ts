import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AccountsService } from '../../../services/accounts.service';
import { take, takeWhile } from 'rxjs/operators';
import { CommonExtensions } from 'src/app/commons/common-extensions';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import {
  ComponentsCommonDialogComponent,
  DIALOG_KIND,
} from 'src/app/components/components-common-dialog/components-common-dialog.component';
import { AuthorizeService } from 'src/app/services/authorize.service';

@Component({
  selector: 'app-accounts-authorize',
  templateUrl: './accounts-authorize.component.html',
  styleUrls: ['./accounts-authorize.component.scss'],
})
export class AccountsAuthorizeComponent implements OnInit, OnDestroy {
  forms: FormGroup;

  isHidePassword: boolean = true;

  isProcess: boolean = false;

  private m_bSubscribe: boolean = true;

  constructor(
    formBuilder: FormBuilder,
    private authorizeService: AuthorizeService,
    private accountService: AccountsService,
    private router: Router,
    private dialog: MatDialog
  ) {
    this.forms = formBuilder.group({
      email: ['', [Validators.required, Validators.maxLength(50)]],
      password: ['', [Validators.required, Validators.maxLength(16)]],
    });

    this.authorizeService
      .isAuthorize()
      .pipe(takeWhile(() => this.m_bSubscribe))
      .subscribe((isAuthourize) => {
        if (isAuthourize === true) {
          this.router.navigate(['/dashboard']);
        }
      });
  }
  ngOnDestroy(): void {
    this.m_bSubscribe = false;
  }

  ngOnInit(): void {}

  async onClickedAuthorize() {
    const email = this.forms.get('email').value as string;
    const password = this.forms.get('password').value as string;

    this.isProcess = true;

    try {
      const response = await this.accountService
        .requestPutAccount(email, password)
        .pipe(take(1))
        .toPromise();

      if (CommonExtensions.isSuccess(response.getCommon())) {
        this.authorizeService.authorize(response.getToken());
        this.router.navigate(['/dashboard']);
      } else if (CommonExtensions.isPermission(response.getCommon())) {
        ComponentsCommonDialogComponent.create(
          this.dialog,
          '????????? ??????',
          DIALOG_KIND.DIALOG_KIND_ERROR,
          '???????????? ????????? ???????????????.',
          ['???????????? ????????? ????????? ????????? ??? ??? ????????????.'],
          false
        );
      } else if (CommonExtensions.isUnAuthorized(response.getCommon())) {
        ComponentsCommonDialogComponent.create(
          this.dialog,
          '????????? ??????',
          DIALOG_KIND.DIALOG_KIND_ERROR,
          '???????????? ?????? ??????????????????, ????????? ?????????????????????.',
          ['????????? ?????? ?????? ????????? ?????? ??????????????????.'],
          false
        );
      }
    } catch (error) {
      console.error(error);
    }
    this.isProcess = false;
  }
}
