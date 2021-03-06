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
    this.headerService.title$.next('???????????? ??????');

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
      '????????? ???????????? ??????',
      DIALOG_KIND.DIALOG_KIND_DEFAULT,
      '????????? ???????????? ?????????????????????????',
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
          `????????? ????????????_${CommonExtensions.MakeRandomToken(10)}`,
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
      '???????????? ??????',
      DIALOG_KIND.DIALOG_KIND_DEFAULT,
      `${items?.length} ?????? ??????????????? ?????????????????????????`,
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
      '???????????? ?????? ??????',
      DIALOG_KIND.DIALOG_KIND_DEFAULT,
      `${items?.length} ?????? ??????????????? ?????? ?????? ???????????????????`,
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
      '?????? ?????? ??????',
      DIALOG_KIND.DIALOG_KIND_WARNING,
      isEmergency
        ? '?????? ????????? ??????????????????????'
        : '?????? ????????? ?????????????????????????',
      [
        ...items.map((x) => x.name),
        isEmergency
          ? '?????????????????? ?????? ????????? ?????? ?????????.'
          : '?????????????????? ?????? ????????? ?????? ?????????.',
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
    this.snackbar.open('?????? ????????? ?????????????????????.', '??????', {
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
      '???????????? ??????',
      DIALOG_KIND.DIALOG_KIND_DEFAULT,
      `${items?.length} ?????? ??????????????? ?????? ???????????????????`,
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
      `${items.length} ?????? ??????????????? ?????????????????????.`,
      '??????',
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
