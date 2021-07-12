import { Injectable } from '@angular/core';
import { SaturnNetwork } from 'src/app/commons/saturn-network';
import { HttpClient } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';
import {
  GetMemberResponse,
  DeleteMemberResponse,
  GetMemberByIdResponse,
} from 'src/app/protocols/prometheus_pb';
import { map } from 'rxjs/operators';
import { MemberElement } from 'src/app/models/member-element';
import { environment } from 'src/environments/environment';
import { MemberBaseElement } from 'src/app/models/member-base-element';

@Injectable()
export class ComponentsMemberTableService {
  deletedElements$: BehaviorSubject<
    Array<MemberBaseElement>
  > = new BehaviorSubject<Array<MemberBaseElement>>(null);
}
