import { Component, OnInit, Input } from '@angular/core';
import {
  CONNECTOR_REGISTER_KINDMap,
  CONNECTOR_REGISTER_KIND,
} from 'src/app/protocols/common_pb';

@Component({
  selector: 'app-components-connector-kind',
  templateUrl: './components-connector-kind.component.html',
  styleUrls: ['./components-connector-kind.component.scss'],
})
export class ComponentsConnectorKindComponent implements OnInit {
  @Input()
  kind: CONNECTOR_REGISTER_KINDMap[keyof CONNECTOR_REGISTER_KINDMap];

  @Input()
  type: string = 'icon';

  constructor() {}

  ngOnInit(): void {}

  get isShowIcon(): boolean {
    return this.type === 'icon';
  }

  getKindName(): string {
    switch (this.kind) {
      case CONNECTOR_REGISTER_KIND.CONNECTOR_REGISTER_KIND_REGISTERED:
        return '승인 대기 중';

      case CONNECTOR_REGISTER_KIND.CONNECTOR_REGISTER_KIND_DENY:
        return '승인 거부';

      case CONNECTOR_REGISTER_KIND.CONNECTOR_REGISTER_KIND_COMFIRM:
        return '승인';
    }

    return '';
  }

  getIconName(): string {
    switch (this.kind) {
      case CONNECTOR_REGISTER_KIND.CONNECTOR_REGISTER_KIND_REGISTERED:
        return 'hourglass_empty';

      case CONNECTOR_REGISTER_KIND.CONNECTOR_REGISTER_KIND_DENY:
        return 'not_interested';

      case CONNECTOR_REGISTER_KIND.CONNECTOR_REGISTER_KIND_COMFIRM:
        return 'done_outline';
    }

    return '';
  }

  getIconColor(): string {
    switch (this.kind) {
      case CONNECTOR_REGISTER_KIND.CONNECTOR_REGISTER_KIND_REGISTERED:
        return '';

      case CONNECTOR_REGISTER_KIND.CONNECTOR_REGISTER_KIND_DENY:
        return 'warn';

      case CONNECTOR_REGISTER_KIND.CONNECTOR_REGISTER_KIND_COMFIRM:
        return 'primary';
    }

    return '';
  }
}
