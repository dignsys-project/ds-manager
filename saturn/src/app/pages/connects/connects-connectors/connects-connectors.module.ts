import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ConnectsConnectorsRoutingModule } from './connects-connectors-routing.module';
import { ConnectsConnectorsComponent } from './connects-connectors.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MaterialsModule } from 'src/app/materials.module';
import { ConnectorsService } from '../../../services/connectors.service';
import { ConnectsComponentsConnectorModule } from '../connects-components-connector/connects-components-connector.module';

@NgModule({
  declarations: [ConnectsConnectorsComponent],
  imports: [
    CommonModule,
    ConnectsConnectorsRoutingModule,
    MaterialsModule,
    FlexLayoutModule,
    ConnectsComponentsConnectorModule,
  ],
  providers: [ConnectorsService],
})
export class ConnectsConnectorsModule {}
