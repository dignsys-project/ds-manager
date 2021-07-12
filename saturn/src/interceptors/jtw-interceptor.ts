import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpErrorResponse,
} from '@angular/common/http';

import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Router } from '@angular/router';
import { AuthorizeService } from 'src/app/services/authorize.service';

@Injectable()
export class JwtInterceptor implements HttpInterceptor {
  constructor(
    private authorizeService: AuthorizeService,
    private router: Router
  ) {}

  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    const member = this.authorizeService.currentMember;
    if (undefined != member) {
      request = request.clone({
        setHeaders: { Authorization: `Bearer ${member.token}` },
      });
    }

    return next.handle(request).pipe(
      catchError((error: HttpErrorResponse) => {
        console.error(error);
        if (error.status == 0) {
          this.router.navigate(['disconnected']);
        }

        return throwError(error);
      })
    );
  }
}
