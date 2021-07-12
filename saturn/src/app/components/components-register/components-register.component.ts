import { Component, OnInit } from '@angular/core';
import {
  FormGroup,
  FormBuilder,
  Validators,
  FormControl,
} from '@angular/forms';
import { isNullOrUndefined } from 'util';
import { AccountsService } from 'src/app/services/accounts.service';
import { take } from 'rxjs/operators';
import { CommonExtensions } from 'src/app/commons/common-extensions';
import { Router } from '@angular/router';
import {
  PostAccountResponse,
  PostAccountRequest,
} from 'src/app/protocols/prometheus_pb';
import { MatDialog } from '@angular/material/dialog';
import {
  ComponentsCommonDialogComponent,
  DIALOG_KIND,
} from '../components-common-dialog/components-common-dialog.component';

@Component({
  selector: 'app-components-register',
  templateUrl: './components-register.component.html',
  styleUrls: ['./components-register.component.scss'],
})
export class ComponentsRegisterComponent implements OnInit {
  forms: FormGroup;

  ishidePassword: boolean;

  isProcess: boolean = false;

  constructor(
    formBuilder: FormBuilder,
    private accountservice: AccountsService,
    private router: Router,
    private dialog: MatDialog
  ) {
    this.ishidePassword = true;

    this.forms = formBuilder.group({
      email: [
        '',
        [
          Validators.required,
          Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,4}$'),
        ],
      ],
      password: [
        '',
        [
          Validators.required,
          this.validatePasswordLowerCharacter.bind(this),
          this.validatePasswordUpperCharacter.bind(this),
          this.validatePasswordLength.bind(this),
          this.validatePasswordSpecialCharacter.bind(this),
        ],
      ],
      password_confirm: [
        '',
        [Validators.required, this.validatePasswordSamePassword.bind(this)],
      ],
    });
  }

  ngOnInit(): void {}

  async onClickedRegister() {
    if (this.forms.invalid) {
      return;
    }

    const password = this.forms.get('password').value as string;
    const email = this.forms.get('email').value as string;

    this.isProcess = true;

    this.forms.disable();

    try {
      const response = await this.accountservice
        .requestPostAccount(email, password)
        .pipe(take(1))
        .toPromise();

      if (CommonExtensions.isSuccess(response.getCommon())) {
        ComponentsCommonDialogComponent.create(
          this.dialog,
          '계정 생성 성공',
          DIALOG_KIND.DIALOG_KIND_DEFAULT,
          '계정이 생성되었습니다.',
          [`${email}`]
        )
          .afterClosed()
          .subscribe(() => {
            this.router.navigate(['accounts/authorize']);
          });
      } else if (CommonExtensions.isDuplicated(response.getCommon())) {
        ComponentsCommonDialogComponent.create(
          this.dialog,
          '계정 생성 실패',
          DIALOG_KIND.DIALOG_KIND_WARNING,
          '',
          ['이미 사용된 계정입니다.', '다른 계정을 선택하세요']
        );
      } else {
        ComponentsCommonDialogComponent.create(
          this.dialog,
          '계정 생성 실패',
          DIALOG_KIND.DIALOG_KIND_ERROR,
          '',
          ['계정을 생성할 수 없습니다.', '잠시 후 이용 해 주세요']
        );
      }
    } catch (error) {}
    this.completed();
  }

  private completed() {
    this.isProcess = false;
    this.forms.enable();
  }

  validatePasswordLowerCharacter(formControl: FormControl) {
    const PASSWORD_REGEXP = '(?=.*[a-z])';

    return new RegExp(PASSWORD_REGEXP).test(formControl.value)
      ? null
      : { requiredLowerCharacter: { valid: false } };
  }

  validatePasswordUpperCharacter(formControl: FormControl) {
    const PASSWORD_REGEXP = '(?=.*[A-Z])';

    return new RegExp(PASSWORD_REGEXP).test(formControl.value)
      ? null
      : { requiredUpperCharacter: { valid: false } };
  }

  validatePasswordLength(formControl: FormControl) {
    const PASSWORD_REGEXP = '(?=.{8,})';

    return new RegExp(PASSWORD_REGEXP).test(formControl.value)
      ? null
      : { requiredLengthCharacter: { valid: false } };
  }

  validatePasswordSpecialCharacter(formControl: FormControl) {
    const PASSWORD_REGEXP = '(?=.*[!@#$%^&*])';

    return new RegExp(PASSWORD_REGEXP).test(formControl.value)
      ? null
      : { requiredSpecialCharacter: { valid: false } };
  }

  validatePasswordSamePassword(formControl: FormControl) {
    if (isNullOrUndefined(this.forms)) {
      return null;
    }
    const password = this.forms.get('password').value as string;

    return this.forms.get('password').valid && password === formControl.value
      ? null
      : { requiredSamePassword: { valid: false } };
  }
}
