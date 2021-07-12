import { isNgTemplate } from '@angular/compiler';
import {
  Component,
  ElementRef,
  Input,
  NgZone,
  OnDestroy,
  OnInit,
  ViewChild,
} from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatTableDataSource } from '@angular/material/table';
import { Observable } from 'rxjs';
import { map, startWith, take } from 'rxjs/operators';
import { CommonExtensions } from 'src/app/commons/common-extensions';
import { ConnectorBaseElement } from 'src/app/models/connector-base-element';
import { ConnectorsService } from 'src/app/services/connectors.service';
import { ResourceService } from '../../../services/resource.service';
import { ConnectsHeaderService } from '../connects-header.service';

@Component({
  selector: 'app-connects-connectors-v2',
  templateUrl: './connects-connectors-v2.component.html',
  styleUrls: ['./connects-connectors-v2.component.scss'],
  providers: [ConnectorsService],
})
export class ConnectsConnectorsV2Component implements OnInit, OnDestroy {
  @ViewChild('CONNECTOR_LIST')
  connectorList: ElementRef<HTMLUListElement>;

  private _filtered: string;

  private _timer: any;

  private _elements: Array<ConnectorBaseElement>;

  private _type: 'detail' | 'normal' = 'detail';

  get elementsCount(): number {
    return this._elements?.length;
  }
  get elements(): Array<ConnectorBaseElement> {
    return this._elements;
  }

  get hasElements(): boolean {
    return this.elementsCount > 0;
  }

  get isNormal(): boolean {
    return this._type == 'normal';
  }

  get isDetail(): boolean {
    return !this.isNormal;
  }

  getLastConnectedSeconds(element: ConnectorBaseElement): string {
    return this.zone.runTask(() => {
      return element.updatedSeconds > 0
        ? `${Date.now() - element.updatedSeconds}`
        : '0';
    });
  }

  myControl = new FormControl();

  filteredOptions: Observable<Array<ConnectorBaseElement>>;
  filteredElements: Array<ConnectorBaseElement>;

  constructor(
    private connectorService: ConnectorsService,
    private resourceService: ResourceService,
    private zone: NgZone,
    headerService: ConnectsHeaderService
  ) {
    headerService.title$.next('디바이스');

    this._timer = setInterval(() => this.requestConnectors(), 5000);
  }
  ngOnDestroy(): void {
    clearInterval(this._timer);
  }

  async ngOnInit(): Promise<any> {
    this.filteredOptions = this.myControl.valueChanges.pipe(
      // startWith(''),
      map((value) => {
        this._filtered = value;
        const filteredElements = this._filter(this._filtered);
        this.filteredElements = filteredElements;
        return filteredElements;
      })
    );

    await this.requestConnectors();
  }

  haveScreenCapture(item: ConnectorBaseElement): boolean {
    return item?.resource != undefined;
  }
  getScreenCaptureLocation(item: ConnectorBaseElement): string {
    if (item.resource == undefined) {
      return '';
    }

    return this.resourceService.getResourceAddress(item.resource);
  }

  getLastConnectSeconds(element: ConnectorBaseElement): string {
    return `${
      Math.round(new Date().getTime() / 1000) - element.updatedSeconds
    }`;
  }

  // On clicked scenes-container__menus detail
  onClickedListDetail() {
    const classList = this.connectorList.nativeElement.classList;
    if (classList.contains('n-items')) {
      classList.remove('n-items');
    }

    if (!classList.contains('d-items')) {
      classList.add('d-items');
    }

    this._type = 'detail';
  }

  // On clicked scenes-container__menus normal
  onClickedListNormal() {
    const classList = this.connectorList.nativeElement.classList;
    if (classList.contains('d-items')) {
      classList.remove('d-items');
    }
    if (!classList.contains('n-items')) {
      classList.add('n-items');
    }

    this._type = 'normal';
  }

  private async requestConnectors(): Promise<any> {
    try {
      const response = await this.connectorService
        .requestGetConnectors()
        .pipe(take(1))
        .toPromise();

      if (CommonExtensions.isSuccess(response.getCommon())) {
        this._elements = response
          .getConnectorbasesList()
          .map((x) => ConnectorBaseElement.fromMessageBase(x));

        this.filteredElements = this._filter(this._filtered);
      }
    } catch (error) {
      console.error(error);
    }
  }

  private _filter(value: string): Array<ConnectorBaseElement> {
    if (undefined == value) {
      return this._elements;
    }
    const filterValue = value.toLowerCase();

    return this.elements?.filter((e) =>
      e.name.toLowerCase().includes(filterValue)
    );
  }
}
