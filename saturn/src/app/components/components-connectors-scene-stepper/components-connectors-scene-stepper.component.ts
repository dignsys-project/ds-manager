import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { connect } from 'http2';
import { ConnectorDepartmentBaseElement } from 'src/app/models/connector-department-base-element';
import { SceneBaseElement } from 'src/app/models/scene-base-element';

export enum PUT_PROCESS_KIND {
  PUT_PROCESS_KIND_DEFAULT,
  PUT_PROCESS_KIND_STARTED,
  PUT_PROCESS_KIND_COMPLETED,
}

export interface IConnectorEmergency {
  connector: ConnectorDepartmentBaseElement;
  kind: PUT_PROCESS_KIND;
}

export interface IEmergencyElement {
  connectors: Array<IConnectorEmergency>;
  sceneId: number;
  isEmergency: boolean;
}

@Component({
  selector: 'app-components-connectors-scene-stepper',
  templateUrl: './components-connectors-scene-stepper.component.html',
  styleUrls: ['./components-connectors-scene-stepper.component.scss'],
})
export class ComponentsConnectorsSceneStepperComponent implements OnInit {
  private _connectors: Array<ConnectorDepartmentBaseElement>;

  private _container: Array<ConnectorDepartmentBaseElement>;

  private _elements: Array<IConnectorEmergency>;

  private _sceneBase: SceneBaseElement;

  connectorsForm: FormControl;
  sceneForm: FormControl;

  private _isEmergency: boolean = true;

  get isEmergency(): boolean {
    return this._isEmergency;
  }

  @Input()
  set isEmergency(isEmergency: boolean) {
    this._isEmergency = isEmergency;

    if (this._container != undefined) {
      this._connectors = this._container.filter(
        (x) => x.isemergency != this._isEmergency
      );
    } else {
      this._connectors = undefined;
    }
  }

  @Output()
  doIt: EventEmitter<IEmergencyElement> = new EventEmitter<IEmergencyElement>();

  get selectedConnectorsCount(): number {
    if (!this.connectorFormValid) {
      return 0;
    }

    const connectors = this.connectorsForm.value as Array<
      ConnectorDepartmentBaseElement
    >;

    return connectors?.length;
  }

  get connectorFormValid(): boolean {
    return this.connectorsForm.valid;
  }

  get sceneFormValid(): boolean {
    return this.sceneForm.valid;
  }

  get elements(): Array<IConnectorEmergency> {
    return this._elements;
  }

  @Input()
  isProcess: boolean = false;

  @Input()
  departmentId: number;

  @Input()
  set connectors(connectors: Array<ConnectorDepartmentBaseElement>) {
    this._container = connectors;

    if (this._container != undefined) {
      this._connectors = this._container.filter(
        (x) => x.isemergency != this._isEmergency
      );
    } else {
      this._connectors = undefined;
    }
  }

  get connectors(): Array<ConnectorDepartmentBaseElement> {
    return this._connectors;
  }

  constructor() {
    // create form controls
    this.connectorsForm = new FormControl('', [Validators.required]);
    this.sceneForm = new FormControl('', [Validators.required]);
  }

  ngOnInit(): void {}

  isProcessCompleted(item: IConnectorEmergency): boolean {
    return item.kind == PUT_PROCESS_KIND.PUT_PROCESS_KIND_COMPLETED;
  }

  isProcessStarted(item: IConnectorEmergency): boolean {
    return item.kind == PUT_PROCESS_KIND.PUT_PROCESS_KIND_STARTED;
  }

  isProcessWait(item: IConnectorEmergency): boolean {
    return item.kind == PUT_PROCESS_KIND.PUT_PROCESS_KIND_DEFAULT;
  }

  onSelectedComponentsConnectorDepartmentTable(
    elements: Array<ConnectorDepartmentBaseElement>
  ) {
    this._elements = elements.map(
      (x) =>
        <IConnectorEmergency>{
          connector: x,
          kind: PUT_PROCESS_KIND.PUT_PROCESS_KIND_DEFAULT,
        }
    );

    this.connectorsForm.setValue(elements);
  }

  onSelectedComponentsScenesV2(sceneBaseElements: Array<SceneBaseElement>) {
    if (sceneBaseElements?.length > 0) {
      this._sceneBase = sceneBaseElements[0];
    } else {
      this._sceneBase = undefined;
    }

    this.sceneForm.setValue(this._sceneBase);
  }

  async onClickedEmergencyScene() {
    if (this._elements?.length <= 0) {
      return;
    }

    const sceneId =
      this._sceneBase != undefined ? this._sceneBase.id : undefined;

    this.doIt.next(<IEmergencyElement>{
      connectors: this._elements,
      sceneId: sceneId,
      isEmergency: this._isEmergency,
    });
  }
}
