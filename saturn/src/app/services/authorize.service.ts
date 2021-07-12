import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { SaturnNetwork } from '../commons/saturn-network';
import { AccountElement } from '../models/account-element';
import {
  MEMBER_KINDMap,
  MEMBER_REGISTER_KINDMap,
} from '../protocols/common_pb';
import { PrometheusService } from './prometheus.service';

@Injectable({
  providedIn: 'root',
})
export class AuthorizeService {
  private _currentMember$: BehaviorSubject<AccountElement> = new BehaviorSubject<AccountElement>(
    undefined
  );
  public member$: Observable<AccountElement>;

  private timer: any;

  constructor() {
    this.member$ = this._currentMember$.asObservable();

    // get item from local storage
    const encodedMember = localStorage.getItem('u');

    let memberElement: AccountElement = undefined;
    if (undefined != encodedMember) {
      memberElement = JSON.parse(atob(encodedMember));
    }
    memberElement = this.checkValidateMember(memberElement);

    this._currentMember$.next(memberElement);

    if (undefined != memberElement) {
      if (memberElement.isExpired) {
        this.unAuthorize();
      }
    }
  }

  public get currentMember(): AccountElement {
    return this._currentMember$.value;
  }

  public isAuthorize(): Observable<boolean> {
    return this._currentMember$.pipe(
      map((member) => {
        return member && !member.isExpired;
      })
    );
  }

  public authorize(token: string) {
    var accountElement = new AccountElement(token);

    const helper = new JwtHelperService();
    const decodedToken = helper.decodeToken(token);

    const expirationDate = helper.getTokenExpirationDate(token);
    const isExpired = helper.isTokenExpired(token);

    const id = decodedToken.id as string;
    const email = decodedToken.email as string;
    const memberKind = decodedToken.role as MEMBER_KINDMap[keyof MEMBER_KINDMap];
    const memberRegister = decodedToken.register as MEMBER_REGISTER_KINDMap;
    accountElement.id = Number.parseInt(id);
    accountElement.email = email;
    accountElement.kind = memberKind;
    accountElement.register = memberRegister;

    accountElement = this.checkValidateMember(accountElement);

    localStorage.setItem('u', btoa(JSON.stringify(accountElement)));

    this._currentMember$.next(accountElement);
  }

  public unAuthorize() {
    localStorage.removeItem('u');

    if (undefined != this.timer) {
      clearInterval(this.timer);
      this.timer = null;
    }
  }
  private checkValidateMember(accountElement: AccountElement): AccountElement {
    if (undefined == accountElement) {
      return accountElement;
    }
    const helper = new JwtHelperService();
    const decodedToken = helper.decodeToken(accountElement.token);

    const expirationDate = helper.getTokenExpirationDate(accountElement.token);
    const isExpired = helper.isTokenExpired(accountElement.token);
    accountElement.expirationDate = expirationDate;
    accountElement.isExpired = isExpired;
    return accountElement;
  }
}
