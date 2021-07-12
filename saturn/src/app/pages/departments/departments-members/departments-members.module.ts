import { NgModule, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DepartmentsMembersRoutingModule } from './departments-members-routing.module';
import { DepartmentsMembersComponent } from './departments-members.component';
import { MaterialsModule } from 'src/app/materials.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { SaturnDateModule } from 'src/app/pipes/saturn-date/saturn-date.module';
import { ComponentsConnectorSelectModule } from 'src/app/components/components-connector-select/components-connector-select.module';
import { ComponentsConnectorTableModule } from 'src/app/components/components-connector-table/components-connector-table.module';
import { ComponentsMemberTableModule } from 'src/app/components/components-member-table/components-member-table.module';
import { ComponentsMemberTableService } from 'src/app/components/components-member-table/components-member-table.service';

@NgModule({
  declarations: [DepartmentsMembersComponent],
  imports: [
    CommonModule,
    DepartmentsMembersRoutingModule,
    MaterialsModule,
    FlexLayoutModule,
    SaturnDateModule,
    ComponentsConnectorSelectModule,
    ComponentsConnectorTableModule,
    ComponentsMemberTableModule,
  ],
  providers: [ComponentsMemberTableService],
})
export class DepartmentsMembersModule {}
