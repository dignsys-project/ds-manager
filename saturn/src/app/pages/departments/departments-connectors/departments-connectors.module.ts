import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MaterialsModule } from 'src/app/materials.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { SaturnDateModule } from 'src/app/pipes/saturn-date/saturn-date.module';
import { DepartmentsConnectorsComponent } from './departments-connectors.component';
import { DepartmentsConnectorsRoutingModule } from './departments-connectors-routing.module';
import { ComponentsConnectorSelectModule } from 'src/app/components/components-connector-select/components-connector-select.module';
import { ComponentsConnectorTableModule } from 'src/app/components/components-connector-table/components-connector-table.module';

@NgModule({
  declarations: [DepartmentsConnectorsComponent],
  imports: [
    CommonModule,
    DepartmentsConnectorsRoutingModule,
    MaterialsModule,
    FlexLayoutModule,
    SaturnDateModule,
    ComponentsConnectorSelectModule,
    ComponentsConnectorTableModule,
  ],
})
export class DepartmentsConnectorsModule {}
