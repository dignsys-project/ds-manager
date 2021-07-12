import { Injectable } from '@angular/core';
import {
  MEMBER_KINDMap,
  MEMBER_PERMISSION_KINDMap,
} from '../protocols/common_pb';
import { Observable } from 'rxjs';
import { PermissionElement } from '../models/permission-element';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class PermissionService {
  public element$: Observable<PermissionElement>;

  public havePermission(
    permission: MEMBER_PERMISSION_KINDMap[keyof MEMBER_PERMISSION_KINDMap]
  ): Observable<boolean> {
    return this.element$.pipe(
      map((x) => -1 == x.permissions.findIndex((p) => p == permission))
    );
  }

  constructor() {}
}
