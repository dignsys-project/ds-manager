import { Component, OnInit, OnDestroy } from '@angular/core';
import { DepartmentsService } from '../departments.service';
import { ActivatedRoute, Router } from '@angular/router';
import { AppService } from 'src/app/app.service';
import { takeWhile, filter, take } from 'rxjs/operators';
import { isNullOrUndefined } from 'util';
import { CommonExtensions } from 'src/app/commons/common-extensions';
import { DepartmentElement } from 'src/app/models/department-element';
import { ConnectorsService } from '../../../services/connectors.service';
import { ConnectorBaseElement } from 'src/app/models/connector-base-element';
import { trigger, transition, style, animate } from '@angular/animations';
import { MatDialog } from '@angular/material/dialog';
import {
  ComponentsCommonDialogComponent,
  DIALOG_KIND,
} from 'src/app/components/components-common-dialog/components-common-dialog.component';
import { Location } from '@angular/common';
import { Department, ConnectorBase } from 'src/app/protocols/common_pb';
import { DepartmentsHeaderService } from '../departments-header.service';
import { DepartmentsConnectorsService } from 'src/app/services/departments-connectors.service';

@Component({
  selector: 'app-departments-connectors',
  templateUrl: './departments-connectors.component.html',
  styleUrls: ['./departments-connectors.component.scss'],
  animations: [
    trigger('live', [
      transition(':enter', [
        style({ opacity: 0, transform: 'scale(0.1)' }),
        animate('300ms', style({ opacity: 1, transform: 'scale(1)' })),
      ]),
      // transition(':leave', [animate('100ms', style({ opacity: 0 }))]),
    ]),
    trigger('appear', [
      transition(':enter', [
        style({ opacity: 0 }),
        animate('300ms', style({ opacity: 1 })),
      ]),
      transition(':leave', [animate('100ms', style({ opacity: 0 }))]),
    ]),
  ],
})
export class DepartmentsConnectorsComponent implements OnInit, OnDestroy {
  private m_DepartmentId: number;
  private m_bSubscribe: boolean = true;
  private isDarkMode: boolean = false;

  department: DepartmentElement;

  connectors: Array<ConnectorBaseElement>;

  isDeadbeatsMode: boolean = false;

  selectedDeadbeatElement: ConnectorBaseElement;

  selectedConnectorElements: Array<ConnectorBaseElement>;

  isProcess: boolean = false;

  get haveSelectConnectors(): boolean {
    return this.selectedConnectorElements?.length > 0;
  }

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private headerService: DepartmentsHeaderService,
    private service: DepartmentsConnectorsService,
    private appService: AppService,
    private dialog: MatDialog,
    private connectorsService: ConnectorsService
  ) {
    this.headerService.enabledBack$.next(true);

    this.appService.isDarkMode$
      .pipe(takeWhile(() => this.m_bSubscribe))
      .subscribe((isDarkMode) => (this.isDarkMode = isDarkMode));

    this.activatedRoute.params.subscribe((params) => {
      this.m_DepartmentId = params.departmentId;
      if (isNullOrUndefined(this.m_DepartmentId) || 0 >= this.m_DepartmentId) {
        this.router.navigate(['/departments']);
        return;
      }

      this.service
        .requestGetDepartmentConnectors(this.m_DepartmentId)
        .pipe(takeWhile(() => this.m_bSubscribe))
        .subscribe((response) => {
          if (CommonExtensions.isSuccess(response.getCommon())) {
            this.setDepartmentConnectors(
              response.getDepartment(),
              response.getConnectorbasesList()
            );
            this.headerService.title$.next(
              `${this.department.name} 조직 디바이스 관리`
            );
          }
        });
    });

    this.connectorsService.selectedElements$
      .pipe(takeWhile(() => this.m_bSubscribe))
      .subscribe((elements) => (this.selectedConnectorElements = elements));
  }

  ngOnDestroy(): void {
    this.m_bSubscribe = false;
    this.headerService.enabledBack$.next(false);
  }

  ngOnInit(): void {}

  onClickedAddDeadbeats() {
    this.isDeadbeatsMode = true;
    this.selectedDeadbeatElement = null;
  }

  onClickedCancleDeadbeats() {
    this.isDeadbeatsMode = false;
    this.selectedDeadbeatElement = null;
  }

  onClickedMoveConnectors() {
    this.router.navigate(['/departments/connectors']);
  }

  onOutputDeadbeatConnectorSelected(element: ConnectorBaseElement) {
    this.selectedDeadbeatElement = element;
  }

  onClickedAddConnectorToDepartment() {
    ComponentsCommonDialogComponent.create(
      this.dialog,
      '조직에 디바이스 추가',
      DIALOG_KIND.DIALOG_KIND_DEFAULT,
      `${this.selectedDeadbeatElement.name}`,
      ['조직에 추가하시겠습니까?'],
      true
    )
      .afterClosed()
      .pipe(filter((bContinue) => bContinue))
      .subscribe((bContinue) => {
        this.service
          .requestPostDepartmentConnector(
            this.m_DepartmentId,
            this.selectedDeadbeatElement.connectorId
          )
          .pipe(take(1))
          .subscribe((response) => {
            if (CommonExtensions.isSuccess(response.getCommon())) {
              this.setDepartmentConnectors(
                response.getDepartment(),
                response.getConnectorbasesList()
              );

              this.onClickedCancleDeadbeats();
            } else if (CommonExtensions.isRefresh(response.getCommon())) {
              window.location.reload();
            }
          });
      });
  }

  async onClickedConnectorsDelete() {
    const items = this.selectedConnectorElements;

    const bContinue = await ComponentsCommonDialogComponent.create(
      this.dialog,
      '조직의 디바이스 제거',
      DIALOG_KIND.DIALOG_KIND_DEFAULT,
      `${items.length} 개의 디바이스를 제거하시겠습니까?`,
      items.map((x) => x.name),
      true
    )
      .afterClosed()
      .toPromise();

    if (isNullOrUndefined(bContinue) || !bContinue) {
      return;
    }

    for (const item of items) {
      var response = await this.service
        .requestDeleteDepartmentConnector(this.m_DepartmentId, item.connectorId)
        .pipe(take(1))
        .toPromise();
      if (CommonExtensions.isSuccess(response.getCommon())) {
        this.setDepartmentConnectors(
          response.getDepartment(),
          response.getConnectorbasesList()
        );
      }
    }
  }

  private setDepartmentConnectors(
    department: Department,
    connectors: Array<ConnectorBase>
  ) {
    this.department = DepartmentElement.fromMessage(department);

    //  this.connectorsService.elements$.next(this.department.connectorBases);

    this.connectors = connectors.map((x) =>
      ConnectorBaseElement.fromMessageBase(x)
    );
  }
}
