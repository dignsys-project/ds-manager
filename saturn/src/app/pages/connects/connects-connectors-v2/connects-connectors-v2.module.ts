import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ConnectsConnectorsV2RoutingModule } from './connects-connectors-v2-routing.module';
import { ConnectsConnectorsV2Component } from './connects-connectors-v2.component';
import { SaturnDateModule } from 'src/app/pipes/saturn-date/saturn-date.module';
import { MaterialsModule } from 'src/app/materials.module';
import { FlexLayoutModule } from '@angular/flex-layout';

@NgModule({
  declarations: [ConnectsConnectorsV2Component],
  imports: [
    CommonModule,
    ConnectsConnectorsV2RoutingModule,
    MaterialsModule,
    FlexLayoutModule,
    SaturnDateModule,
  ],
})
export class ConnectsConnectorsV2Module {}
