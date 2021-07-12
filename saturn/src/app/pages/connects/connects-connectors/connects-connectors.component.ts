import { Component, OnInit } from '@angular/core';
import { ConnectorBase } from 'src/app/protocols/common_pb';
import { ConnectorsService } from '../../../services/connectors.service';
import { ConnectorBaseElement } from 'src/app/models/connector-base-element';
import { take } from 'rxjs/operators';
import { CommonExtensions } from 'src/app/commons/common-extensions';
import { ConnectsHeaderService } from '../connects-header.service';

@Component({
  selector: 'app-connects-connectors',
  templateUrl: './connects-connectors.component.html',
  styleUrls: ['./connects-connectors.component.scss'],
})
export class ConnectsConnectorsComponent implements OnInit {
  elements: Array<ConnectorBaseElement>;

  get hasElements(): boolean {
    return 0 < this.elements?.length;
  }

  constructor(
    private connectorService: ConnectorsService,
    headerService: ConnectsHeaderService
  ) {
    headerService.title$.next('디바이스');

    this.connectorService
      .requestGetConnectors()
      .pipe(take(1))
      .subscribe((response) => {
        if (CommonExtensions.isSuccess(response.getCommon())) {
          this.elements = response
            .getConnectorbasesList()
            .map((x) => ConnectorBaseElement.fromMessageBase(x));
        }
      });
  }

  ngOnInit(): void {}
}
