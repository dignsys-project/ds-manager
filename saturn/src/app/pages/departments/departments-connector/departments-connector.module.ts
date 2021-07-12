import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DepartmentsConnectorRoutingModule } from './departments-connector-routing.module';
import { DepartmentsConnectorComponent } from './departments-connector.component';
import { MaterialsModule } from 'src/app/materials.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ComponentsConnectorModule } from 'src/app/components/components-connector/components-connector.module';

@NgModule({
  declarations: [DepartmentsConnectorComponent],
  imports: [
    CommonModule,
    DepartmentsConnectorRoutingModule,
    ComponentsConnectorModule,
    MaterialsModule,
    FlexLayoutModule,
  ],
})
export class DepartmentsConnectorModule {}
