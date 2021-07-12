import { Injectable } from '@angular/core';
import {
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  UrlTree,
  Router,
} from '@angular/router';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { AuthorizeService } from 'src/app/services/authorize.service';

@Injectable({
  providedIn: 'root',
})
export class AccountsGuard implements CanActivate {
  constructor(
    private authorizeService: AuthorizeService,
    private router: Router
  ) {}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    return this.authorizeService.isAuthorize().pipe(
      map((isAuthorize) => {
        if (!isAuthorize) {
          this.router.navigate(['accounts']);
        }

        return isAuthorize;
      })
    );
  }
}
