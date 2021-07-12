import {
  Component,
  OnInit,
  Input,
  Sanitizer,
  ViewChild,
  ElementRef,
  OnDestroy,
} from '@angular/core';
import { ConnectorBaseElement } from 'src/app/models/connector-base-element';
import { ConnectorsService } from '../../../services/connectors.service';
import { ResourceService } from '../../../services/resource.service';
import { DomSanitizer } from '@angular/platform-browser';
import { isNullOrUndefined } from 'util';

@Component({
  selector: 'app-connects-components-connector',
  templateUrl: './connects-components-connector.component.html',
  styleUrls: ['./connects-components-connector.component.scss'],
})
export class ConnectsComponentsConnectorComponent implements OnInit, OnDestroy {
  private m_Element: ConnectorBaseElement;

  private m_Timer: any;

  @ViewChild('IMG', { static: true })
  imageElement: ElementRef<HTMLImageElement>;

  @Input()
  set element(element: ConnectorBaseElement) {
    this.m_Element = element;

    this.imageElement.nativeElement.onerror = (error) => {
      var uri =
        'data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==';
      this.imageElement.nativeElement.src = uri;
    };
    this.imageElement.nativeElement.hidden = true;

    this.requestResource();
  }
  get element(): ConnectorBaseElement {
    return this.m_Element;
  }

  constructor(private resourceService: ResourceService) {
    this.m_Timer = setInterval(() => {
      this.requestResource();
    }, 5000);
  }
  ngOnDestroy(): void {
    if (!isNullOrUndefined(this.m_Timer)) {
      clearInterval(this.m_Timer);
    }
  }

  ngOnInit(): void {}

  private requestResource() {
    var time = new Date().getTime();
    this.imageElement.nativeElement.src = `${this.getResourceSource()}?time=${time}`;
    this.imageElement.nativeElement.hidden = false;
  }

  public getResourceSource(): string {
    return this.getConnectorScreenCapture(this.element);
  }

  public getConnectorScreenCapture(element: ConnectorBaseElement): string {
    return this.resourceService.getConnectorScreenCaptureAddress(
      element.deviceId
    );
  }
}
