import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { MemberRecordService } from 'src/app/services/member-record.service';
import { MemberRecordElement } from 'src/app/models/member-record';
import { TimeFormatterPipe } from 'ngx-material-timepicker/src/app/material-timepicker/pipes/time-formatter.pipe';
import { CommonExtensions } from 'src/app/commons/common-extensions';
import {
  MEMBER_PERMISSION_KIND,
  MEMBER_RECORD_KIND,
} from 'src/app/protocols/common_pb';
import { PermissionService } from 'src/app/services/permission.service';
import { map, take, takeWhile } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-components-timeline',
  templateUrl: './components-timeline.component.html',
  styleUrls: ['./components-timeline.component.scss'],
})
export class ComponentsTimelineComponent implements OnInit, OnDestroy {
  @Input()
  memberId: number;

  from: number = 0;
  size: number = 10;

  itemCount: number;

  elements: Array<MemberRecordElement>;

  private _subscribe: boolean = true;

  private _canMonitor$: Observable<boolean>;

  get canMonitor(): Observable<boolean> {
    return this._canMonitor$;
  }

  get hasElements(): boolean {
    return this.elements?.length > 0;
  }

  constructor(
    private memberRecordService: MemberRecordService,
    private permissionService: PermissionService
  ) {
    this._canMonitor$ = this.permissionService
      .havePermission(MEMBER_PERMISSION_KIND.MEMBER_PERMISSION_KIND_MONITOR)
      .pipe(takeWhile(() => this._subscribe))
      .pipe(map((x) => x));
  }
  ngOnDestroy(): void {
    this._subscribe = false;
  }

  async ngOnInit(): Promise<void> {
    await this.requestMemberRecordsAsync(this.from);
  }

  async onPressedAllMemberRecords() {
    this.requestMemberAllRecordsAsync(this.from);
  }

  async onPressedMemberRecords() {
    await this.requestMemberRecordsAsync(0);
  }

  private async requestMemberAllRecordsAsync(from: number): Promise<void> {
    try {
      const response = await this.memberRecordService
        .requestGetMemberRecords(from, this.size)
        .pipe(take(1))
        .toPromise();
      if (CommonExtensions.isSuccess(response.getCommon())) {
        this.elements = response
          .getMemberrecordsList()
          .map((x) => MemberRecordElement.fromMessage(x));

        this.itemCount = response.getItemscount();
      }
    } catch (error) {
      console.error(error);
    }
  }

  private async requestMemberRecordsAsync(from: number): Promise<void> {
    try {
      const response = await this.memberRecordService
        .requestGetMemberRecordsBymemberId(this.memberId, from, this.size)
        .pipe(take(1))
        .toPromise();

      if (CommonExtensions.isSuccess(response.getCommon())) {
        this.elements = response
          .getMemberrecordsList()
          .map((x) => MemberRecordElement.fromMessage(x));

        this.itemCount = response.getItemscount();
      }
    } catch (error) {
      console.error(error);
    }
  }

  getUserRecordToDescription(element: MemberRecordElement): string {
    switch (element.kind) {
      case MEMBER_RECORD_KIND.MEMBER_RECORD_KIND_CONNECTOR_EMERGENCY_SCENE_DELETED:
        if (element.blueprint.hasConnectoremergencyscenerecord()) {
          const record = element.blueprint.getConnectoremergencyscenerecord();
          return `???????????? : (${record.getConnectorname()}) ?????? ??? : (${record.getScenename()})??? ?????? ???????????????.`;
        }
        break;

      case MEMBER_RECORD_KIND.MEMBER_RECORD_KIND_CONNECTOR_EMERGENCY_SCENE_CREATED:
        if (element.blueprint.hasConnectoremergencyscenerecord()) {
          const record = element.blueprint.getConnectoremergencyscenerecord();
          return `???????????? : (${record.getConnectorname()}) ?????? ??? : (${record.getScenename()})??? ?????? ???????????????.`;
        }
        break;

      case MEMBER_RECORD_KIND.MEMBER_RECORD_KIND_CONNECTOR_EMERGENCY_START:
        if (element.blueprint.hasConnectoremergencyrecord()) {
          const record = element.blueprint.getConnectoremergencyrecord();
          return `???????????? : (${record.getConnectorname()}) ?????? ?????? ?????? ???????????????.`;
        }
        break;
      case MEMBER_RECORD_KIND.MEMBER_RECORD_KIND_CONNECTOR_EMERGENCY_END:
        if (element.blueprint.hasConnectoremergencyrecord()) {
          const record = element.blueprint.getConnectoremergencyrecord();
          return `???????????? : (${record.getConnectorname()}) ?????? ?????? ???????????????.`;
        }
        break;
      case MEMBER_RECORD_KIND.MEMBER_RECORD_KIND_RESOURCE_FOLDER_CREATED:
        if (element.blueprint.hasDepartmentresourcefolderrecord()) {
          const record = element.blueprint.getDepartmentresourcefolderrecord();
          return `?????? : (${record.getDepartmentname()}) ??? ????????? ?????? : (${record.getDepartmentresourcefoldername()})??? ?????? ???????????????.`;
        }
        break;
      case MEMBER_RECORD_KIND.MEMBER_RECORD_KIND_SCENE_FOLDER_DELETED:
        if (element.blueprint.hasDepartmentresourcefolderrecord()) {
          const record = element.blueprint.getDepartmentresourcefolderrecord();
          return `?????? : (${record.getDepartmentname()}) ??? ????????? ?????? : (${record.getDepartmentresourcefoldername()})??? ?????? ???????????????.`;
        }
        break;

      case MEMBER_RECORD_KIND.MEMBER_RECORD_KIND_SCENE_FOLDER_CREATED:
        if (element.blueprint.hasDepartmentscenefolderrecord()) {
          const record = element.blueprint.getDepartmentscenefolderrecord();
          return `?????? : (${record.getDepartmentname()}) ??? ??? ?????? : (${record.getDepartmentscenefoldername()})??? ?????? ???????????????.`;
        }
        break;
      case MEMBER_RECORD_KIND.MEMBER_RECORD_KIND_SCENE_FOLDER_DELETED:
        if (element.blueprint.hasDepartmentscenefolderrecord()) {
          const record = element.blueprint.getDepartmentscenefolderrecord();
          return `?????? : (${record.getDepartmentname()}) ??? ??? ?????? : (${record.getDepartmentscenefoldername()})??? ?????? ???????????????.`;
        }
        break;

      case MEMBER_RECORD_KIND.MEMBER_RECORD_KIND_DEPARTMENT_CREATED:
        if (element.blueprint.hasDepartmentrecord()) {
          const record = element.blueprint.getDepartmentrecord();
          return `?????? : (${record.getDepartmentname()}) ??? ?????? ???????????????.`;
        }
        return `${element.kind}`;

      case MEMBER_RECORD_KIND.MEMBER_RECORD_KIND_MEMBER_CREATED:
        return '????????? ????????? ??????????????????.';
      case MEMBER_RECORD_KIND.MEMBER_RECORD_KIND_MEMBER_PERMISSION_UPDATED:
        return '??? ????????? ??????????????????.';
      case MEMBER_RECORD_KIND.MEMBER_RECORD_KIND_SCENE_CREATED:
        if (element.blueprint.hasScenerecord()) {
          const record = element.blueprint.getScenerecord();

          return `??? : ( ${record.getScenename()} ) ??? ?????? ???????????????.`;
        }
        return `${element.kind}`;
      case MEMBER_RECORD_KIND.MEMBER_RECORD_KIND_SCENE_UPDATED:
        if (element.blueprint.hasScenerecord()) {
          const record = element.blueprint.getScenerecord();

          return `??? : ( ${record.getScenename()} ) ??? ?????? ???????????????.`;
        }
        return `${element.kind}`;
      case MEMBER_RECORD_KIND.MEMBER_RECORD_KIND_SCENE_DELETED:
        if (element.blueprint.hasScenerecord()) {
          const record = element.blueprint.getScenerecord();

          return `??? : ( ${record.getScenename()} ) ??? ?????? ???????????????.`;
        }
        return `${element.kind}`;
      case MEMBER_RECORD_KIND.MEMBER_RECORD_KIND_CONNECTOR_CONFIRM:
        if (element.blueprint.hasConnectorrecord()) {
          const record = element.blueprint.getConnectorrecord();

          return `???????????? : ( ${record.getConnectorname()} ) ??? ?????? ???????????????.`;
        }
        return `${element.kind}`;
      case MEMBER_RECORD_KIND.MEMBER_RECORD_KIND_CONNECTOR_DENY:
        if (element.blueprint.hasConnectorrecord()) {
          const record = element.blueprint.getConnectorrecord();

          return ` ???????????? : ( ${record.getConnectorname()} ) ??? ?????? ???????????????.`;
        }
        return `${element.kind}`;
        break;
      case MEMBER_RECORD_KIND.MEMBER_RECORD_KIND_CONNECTOR_DELETED:
        if (element.blueprint.hasConnectorkindrecord()) {
          const record = element.blueprint.getConnectorkindrecord();

          return `???????????? : ( ${record.getConnectorname()} ) ??? ?????? ???????????????.`;
        }
        return `${element.kind}`;
      case MEMBER_RECORD_KIND.MEMBER_RECORD_KIND_CONNECTOR_SCHEDULE_CREATED:
        if (element.blueprint.hasConnectorschedulerecord()) {
          const record = element.blueprint.getConnectorschedulerecord();

          return `???????????? (${record.getConnectorname()}) ??? ????????? ??? : ( ${record.getSceneschedulename()} ) ??? ?????? ???????????????.`;
        }
        return `${element.kind}`;
      case MEMBER_RECORD_KIND.MEMBER_RECORD_KIND_CONNECTOR_SCHEDULE_DELETED:
        if (element.blueprint.hasConnectorschedulerecord()) {
          const record = element.blueprint.getConnectorschedulerecord();

          return `???????????? (${record.getConnectorname()}) ??? ????????? ??? : ( ${record.getSceneschedulename()} ) ??? ?????? ???????????????.`;
        }
        return `${element.kind}`;
      case MEMBER_RECORD_KIND.MEMBER_RECORD_KIND_CONNECTOR_SCENE_ADDED:
        if (element.blueprint.hasConnectorscenerecord()) {
          const record = element.blueprint.getConnectorscenerecord();

          return `${record.getConnectorname()} ??????????????? ??? : ( ${record.getScenename()} ) ??? ?????? ???????????????.`;
        }
        return `${element.kind}`;
      case MEMBER_RECORD_KIND.MEMBER_RECORD_KIND_CONNECTOR_SCENE_DELETED:
        if (element.blueprint.hasConnectorscenerecord()) {
          const record = element.blueprint.getConnectorscenerecord();

          return `${record.getConnectorname()} ??????????????? ??? (${record.getScenename()}) ??? ?????? ???????????????.`;
        }
        return `${element.kind}`;
      case MEMBER_RECORD_KIND.MEMBER_RECORD_KIND_CONNECTOR_DEPARTMENT_ADDED:
        if (element.blueprint.hasConnectordepartmentrecord()) {
          const record = element.blueprint.getConnectordepartmentrecord();

          return `${record.getConnectorname()} ??????????????? ?????? : ( ${record.getDepartmentname()} ) ??? ?????? ???????????????.`;
        }
        return `${element.kind}`;
      case MEMBER_RECORD_KIND.MEMBER_RECORD_KIND_CONNECTOR_DEPARTMENT_DELETED:
        if (element.blueprint.hasConnectordepartmentrecord()) {
          const record = element.blueprint.getConnectordepartmentrecord();

          return `${record.getConnectorname()} ??????????????? ?????? : ( ${record.getDepartmentname()} ) ??? ?????? ???????????????.`;
        }
        return `${element.kind}`;
      case MEMBER_RECORD_KIND.MEMBER_RECORD_KIND_SCHEDULE_CREATED:
        if (element.blueprint.hasSchedulereocrd()) {
          const record = element.blueprint.getSchedulereocrd();

          return `????????? : ( ${record.getSchedulename()} ) ??? ?????? ???????????????.`;
        }
        return `${element.kind}`;
      case MEMBER_RECORD_KIND.MEMBER_RECORD_KIND_SCHEDULE_UPDATED:
        if (element.blueprint.hasSchedulereocrd()) {
          const record = element.blueprint.getSchedulereocrd();

          return `????????? : ( ${record.getSchedulename()} ) ??? ?????? ???????????????.`;
        }
        return `${element.kind}`;
      case MEMBER_RECORD_KIND.MEMBER_RECORD_KIND_SCHEDULE_DELETED:
        if (element.blueprint.hasSchedulereocrd()) {
          const record = element.blueprint.getSchedulereocrd();

          return `????????? : ( ${record.getSchedulename()} ) ??? ?????? ???????????????.`;
        }
        return `${element.kind}`;
      case MEMBER_RECORD_KIND.MEMBER_RECORD_KIND_SCHEDULE_SCENE_CREATED:
        if (element.blueprint.hasSchedulescenerecord()) {
          const record = element.blueprint.getSchedulescenerecord();

          return `????????? ??? : ( ${record.getSchedulescenename()} ) ??? ?????? ???????????????.`;
        }
        return `${element.kind}`;
      case MEMBER_RECORD_KIND.MEMBER_RECORD_KIND_SCHEDULE_SCENE_UPDATED:
        if (element.blueprint.hasSchedulescenerecord()) {
          const record = element.blueprint.getSchedulescenerecord();

          return `????????? ??? : ( ${record.getSchedulescenename()} ) ??? ?????? ???????????????.`;
        }
        return `${element.kind}`;
      case MEMBER_RECORD_KIND.MEMBER_RECORD_KIND_SCHEDULE_SCENE_DELETED:
        if (element.blueprint.hasSchedulescenerecord()) {
          const record = element.blueprint.getSchedulescenerecord();

          return `????????? ??? : ( ${record.getSchedulescenename()} ) ??? ?????? ???????????????.`;
        }
        return `${element.kind}`;

      default:
        return `${element.kind} ${element.date}`;
    }
  }
}
