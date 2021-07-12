import { Injectable } from '@angular/core';
import { Subject, BehaviorSubject, Observable } from 'rxjs';
import { isNullOrUndefined } from 'util';
import {
  BreakpointObserver,
  Breakpoints,
  BreakpointState,
} from '@angular/cdk/layout';
import { Router, NavigationEnd } from '@angular/router';
import { takeWhile, filter } from 'rxjs/operators';
import { VersionService } from './version.service';
import { stat } from 'fs';

@Injectable({
  providedIn: 'root',
})
export class AppService {
  private _enableSideHeader$: BehaviorSubject<boolean> = new BehaviorSubject<
    boolean
  >(false);
  isDarkMode$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  isHeader$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(true);

  isSideHeader$: Observable<boolean>;

  private isShowSideHeader: boolean = true;

  private _isCoercionDisableSideHeader: boolean = false;

  constructor(
    private breakpointObserver: BreakpointObserver,
    private router: Router
  ) {
    this.isSideHeader$ = this._enableSideHeader$.asObservable();

    // check dark theme

    let bDarkMode: boolean = true;

    const darkMode = localStorage.getItem('dark');
    if (undefined == darkMode) {
      this.isDarkMode$.next(true);
    } else {
      const isDarkmode = darkMode.toLowerCase() === 'true';
      this.isDarkMode$.next(isDarkmode);
      bDarkMode = isDarkmode;
    }

    if (bDarkMode) {
      if (!document.body.classList.contains('dark-theme')) {
        document.body.classList.add('dark-theme');
      }
    } else {
      if (document.body.classList.contains('dark-theme')) {
        document.body.classList.remove('dark-theme');
      }
    }

    // break point max-width : 960px
    this.breakpointObserver
      .observe(['(max-width: 960px'])
      .pipe(filter(() => this.isShowSideHeader))
      .subscribe((state: BreakpointState) => {
        this.changeHeaderSizeFromDevice(!state.matches);
      });

    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        const navigationEndEvent = event as NavigationEnd;

        this.isShowSideHeader = !navigationEndEvent.url.includes('accounts');
      }
    });
  }

  public changeDarkMode(isDarkmode: boolean) {
    localStorage.setItem('dark', isDarkmode.toString());
    this.isDarkMode$.next(isDarkmode);

    if (isDarkmode) {
      if (!document.body.classList.contains('dark-theme')) {
        document.body.classList.add('dark-theme');
      }
    } else {
      if (document.body.classList.contains('dark-theme')) {
        document.body.classList.remove('dark-theme');
      }
    }
  }

  private changeHeaderSizeFromDevice(isMatched: boolean) {
    if (this._isCoercionDisableSideHeader) {
      return;
    }

    this._enableSideHeader$.next(isMatched);
  }

  public changeHeaderSide(isHeaderSide: boolean, _?: string) {
    this._isCoercionDisableSideHeader = !isHeaderSide;

    this._enableSideHeader$.next(isHeaderSide);
  }

  public changeHeader(isHeader: boolean) {
    this.isHeader$.next(isHeader);
  }
}
