import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DepartmentsConnectorsListRoutingModule } from './departments-connectors-list-routing.module';
import { DepartmentsConnectorsListComponent } from './departments-connectors-list.component';
import { ComponentsConnectorTableModule } from 'src/app/components/components-connector-table/components-connector-table.module';
import { MaterialsModule } from 'src/app/materials.module';
import { FlexLayoutModule } from '@angular/flex-layout';

@NgModule({
  declarations: [DepartmentsConnectorsListComponent],
  imports: [
    CommonModule,
    DepartmentsConnectorsListRoutingModule,
    ComponentsConnectorTableModule,
    MaterialsModule,
    FlexLayoutModule,
  ],
})
export class DepartmentsConnectorsListModule {}
