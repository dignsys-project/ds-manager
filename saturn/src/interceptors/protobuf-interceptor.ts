import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpResponse,
  HttpErrorResponse
} from '@angular/common/http';

import { Observable,  of, throwError } from 'rxjs';
import { switchMap, map, catchError, tap, filter, retry } from 'rxjs/operators';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';

@Injectable()
export class ProtobufInterceptor implements HttpInterceptor {

  constructor() { }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return next.handle(request)
    .pipe(catchError((error: HttpErrorResponse) => {
        console.error(error);
        return throwError(error);
    }));
  }

  // intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
  //   return from(this.authService.getToken())
  //     .pipe(filter(token => token != null))
  //     .pipe(switchMap(token => {
  //       request = request.clone({
  //         setHeaders: {
  //           Authorization: `Bearer ${token}`
  //         }
  //       });
  //       return next.handle(request);
  //     })).pipe(tap(event => {
  //       if (event instanceof HttpResponse) {
  //       }
  //     }, error => {

  //       let maintanence = false;

  //       let message = '';
  //       if (error.error instanceof ErrorEvent) {
  //         // frontend error.
  //         console.error(`neptune error : ${error.error.message}`);
  //         message = error.error.message;
  //       } else {
  //         const errorResponse = error as HttpErrorResponse;

  //         // backend error
  //         console.error('triton error : ', error);
  //         maintanence = 0 === errorResponse.status;
  //         message = error.message;
  //       }

  //       if (maintanence) {
  //         if (!this.authService.isAdmin()) {
  //           this.snackBar.openSnackBar('현재 서버를 이용할 수 없습니다.', 'close', 'red-snackbar');
  //           this.router.navigate(['help/maintanance']);
  //         }
  //       } else {
  //         this.snackBar.openSnackBar(message, 'close', 'red-snackbar');
  //       }


  //     }));
  // }

}

