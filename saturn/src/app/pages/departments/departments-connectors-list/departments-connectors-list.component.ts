import { Component, OnInit, OnDestroy } from '@angular/core';
import { DepartmentsService } from '../departments.service';
import { ConnectorsService } from '../../../services/connectors.service';
import { takeWhile, take } from 'rxjs/operators';
import { ConnectorBaseElement } from 'src/app/models/connector-base-element';
import { CommonExtensions } from 'src/app/commons/common-extensions';
import {
  ComponentsCommonDialogComponent,
  DIALOG_KIND,
} from 'src/app/components/components-common-dialog/components-common-dialog.component';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { CONNECTOR_REGISTER_KIND } from 'src/app/protocols/common_pb';
import { ConnectorElement } from 'src/app/models/connector-element';
import { DepartmentsHeaderService } from '../departments-header.service';
import { Observable, BehaviorSubject } from 'rxjs';
import { MatSnackBar } from '@angular/material/snack-bar';
import { environment } from 'src/environments/environment';
import { ConnectorEmergencyService } from 'src/app/services/connector-emergency.service';

@Component({
  selector: 'app-departments-connectors-list',
  templateUrl: './departments-connectors-list.component.html',
  styleUrls: ['./departments-connectors-list.component.scss'],
})
export class DepartmentsConnectorsListComponent implements OnInit, OnDestroy {
  private m_bSubscribe: boolean = true;
  private m_Elements$: BehaviorSubject<
    Array<ConnectorBaseElement>
  > = new BehaviorSubject<Array<ConnectorBaseElement>>([]);

  isProcess: boolean = false;

  selectedElements: Array<ConnectorBaseElement>;
  elements$: Observable<Array<ConnectorBaseElement>>;

  get isDevelopment(): boolean {
    return false == environment.production;
  }

  constructor(
    private headerService: DepartmentsHeaderService,
    private service: ConnectorsService,
    private dialog: MatDialog,
    private snackbar: MatSnackBar,
    private router: Router,
    private connectorEmergencyService: ConnectorEmergencyService
  ) {
    this.headerService.title$.next('디바이스 목록');

    this.service.selectedElements$
      .pipe(takeWhile(() => this.m_bSubscribe))
      .subscribe((elements) => (this.selectedElements = elements));

    this.elements$ = this.m_Elements$.asObservable();
  }
  ngOnDestroy(): void {
    this.m_bSubscribe = false;
  }

  ngOnInit(): void {
    this.requestGetConnectors();
  }

  async onClickedCreateTestConnectors() {
    const bSuccess = await ComponentsCommonDialogComponent.create(
      this.dialog,
      '테스트 디바이스 추가',
      DIALOG_KIND.DIALOG_KIND_DEFAULT,
      '테스트 디바이를 추가하시겠습니까?',
      null,
      true
    )
      .afterClosed()
      .toPromise();

    if (!bSuccess) return;

    this.service.isProcess$.next(true);
    this.isProcess = true;
    for (let i = 0; i < 30; i++) {
      const response = await this.service
        .requestPostConnector(
          `테스트 디바이스_${CommonExtensions.MakeRandomToken(10)}`,
          CommonExtensions.MakeRandomToken(16)
        )
        .toPromise();

      if (CommonExtensions.isSuccess(response.getCommon())) {
        this.requestGetConnectors();
      }
    }

    this.isProcess = false;
    this.service.isProcess$.next(false);
  }

  onClickedConnector(connectorId: number) {
    if (0 >= connectorId) {
      return;
    }
    this.router.navigate([`/departments/connector/${connectorId}`]);
  }

  async onClickedConnectorsConfirm() {
    const kind = CONNECTOR_REGISTER_KIND.CONNECTOR_REGISTER_KIND_COMFIRM;

    const items = this.selectedElements.filter((x) => x.kind !== kind);

    const bSuccess = await ComponentsCommonDialogComponent.create(
      this.dialog,
      '디바이스 승인',
      DIALOG_KIND.DIALOG_KIND_DEFAULT,
      `${items?.length} 개의 디바이스를 승인하시겠습니까?`,
      items.map((x) => x.name),
      true
    )
      .afterClosed()
      .toPromise();

    if (!bSuccess) return;

    this.isProcess = true;

    const deletedElement = new Array<ConnectorBaseElement>();

    for (const item of items) {
      var response = await this.service
        .requestPutConnector(item.connectorId, kind)
        .toPromise();
      if (CommonExtensions.isSuccess(response.getCommon())) {
        item.kind = kind;
      }
    }

    this.isProcess = false;
  }

  async onClickedConnectorsDeny() {
    const kind = CONNECTOR_REGISTER_KIND.CONNECTOR_REGISTER_KIND_DENY;

    const items = this.selectedElements.filter((x) => x.kind !== kind);

    const bSuccess = await ComponentsCommonDialogComponent.create(
      this.dialog,
      '디바이스 승인 거부',
      DIALOG_KIND.DIALOG_KIND_DEFAULT,
      `${items?.length} 개의 디바이스를 승인 거부 하시겠습니까?`,
      items.map((x) => x.name),
      true
    )
      .afterClosed()
      .toPromise();

    if (!bSuccess) return;

    this.isProcess = true;

    for (const item of items) {
      var response = await this.service
        .requestPutConnector(item.connectorId, kind)
        .toPromise();
      if (CommonExtensions.isSuccess(response.getCommon())) {
        item.kind = kind;
      }
    }

    this.isProcess = false;
  }

  async onClickedEmergencyChange(isEmergency: boolean) {
    const items = this.selectedElements.filter(
      (x) => x.isEmergency != isEmergency
    );

    if (items == undefined) {
      return;
    }

    const itemsCount = items.length;
    if (itemsCount <= 0) {
      return;
    }

    const bContinue = await ComponentsCommonDialogComponent.create(
      this.dialog,
      '긴급 상태 변경',
      DIALOG_KIND.DIALOG_KIND_WARNING,
      isEmergency
        ? '긴급 상태를 시작하겠습니까?'
        : '긴급 상태를 종료하시겠습니까?',
      [
        ...items.map((x) => x.name),
        isEmergency
          ? '디바이스들이 긴급 상태로 적용 됩니다.'
          : '디바이스들이 긴급 상태를 종료 합니다.',
      ],
      true
    )
      .afterClosed()
      .toPromise();

    if (bContinue != true) {
      return;
    }

    this.isProcess = true;
    try {
      for (const item of items) {
        const response = await this.connectorEmergencyService
          .requestPutConnectorEmergency(item.connectorId, isEmergency)
          .pipe(take(1))
          .toPromise();

        if (CommonExtensions.isSuccess(response.getCommon())) {
          item.isEmergency = isEmergency;
        }
      }
    } catch (error) {
      console.error(error);
    }

    // open snackbar
    this.snackbar.open('긴급 상태가 변경되었습니다.', '확인', {
      duration: 2000,
      horizontalPosition: 'center',
      verticalPosition: 'top',
    });

    this.isProcess = false;
  }

  async onClickedConnectorsDelete() {
    const items = this.selectedElements;

    const bSuccess = await ComponentsCommonDialogComponent.create(
      this.dialog,
      '디바이스 삭제',
      DIALOG_KIND.DIALOG_KIND_DEFAULT,
      `${items?.length} 개의 디바이스를 삭제 하시겠습니까?`,
      items.map((x) => x.name),
      true
    )
      .afterClosed()
      .toPromise();

    if (!bSuccess) return;

    this.isProcess = true;

    const deletedElement = new Array<ConnectorBaseElement>();

    for (const item of items) {
      try {
        var response = await this.service
          .requestDeleteConnector(item.connectorId)
          .toPromise();

        if (CommonExtensions.isSuccess(response.getCommon())) {
          deletedElement.push(item);
        }
      } catch (error) {}
    }

    this.service.deletedElements$.next(deletedElement);

    this.isProcess = false;

    this.snackbar.open(
      `${items.length} 개의 디바이스가 삭제되었습니다.`,
      '확인',
      {
        duration: 2000,
        horizontalPosition: 'center',
        verticalPosition: 'top',
      }
    );
  }

  private requestGetConnectors() {
    this.service
      .requestGetConnectors()
      .pipe(take(1))
      .subscribe((response) => {
        if (CommonExtensions.isSuccess(response.getCommon())) {
          const elements = response
            .getConnectorbasesList()
            .map((x) => ConnectorBaseElement.fromMessageBase(x));

          this.m_Elements$.next(elements);
        }
      });
  }
}
