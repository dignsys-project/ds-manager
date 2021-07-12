import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DepartmentsItemRoutingModule } from './departments-item-routing.module';
import { DepartmentsItemComponent } from './departments-item.component';
import { MaterialsModule } from 'src/app/materials.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ComponentsDepartmentBaseItemModule } from 'src/app/components/components-department-base-item/components-department-base-item.module';
import { ComponentsMemberTableModule } from 'src/app/components/components-member-table/components-member-table.module';
import { ComponentsConnectorTableModule } from 'src/app/components/components-connector-table/components-connector-table.module';

@NgModule({
  declarations: [DepartmentsItemComponent],
  imports: [
    CommonModule,
    DepartmentsItemRoutingModule,
    MaterialsModule,
    FlexLayoutModule,
    ComponentsDepartmentBaseItemModule,
    ComponentsMemberTableModule,
    ComponentsConnectorTableModule,
  ],
})
export class DepartmentsItemModule {}
