import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DepartmentsMembersListComponent } from './departments-members-list.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MaterialsModule } from 'src/app/materials.module';
import { ComponentsMemberTableModule } from 'src/app/components/components-member-table/components-member-table.module';
import { DepartmentsMembersListRoutingModule } from './departments-members-list-routing.module';
import { ComponentsMemberTableService } from 'src/app/components/components-member-table/components-member-table.service';

@NgModule({
  declarations: [DepartmentsMembersListComponent],
  imports: [
    CommonModule,
    DepartmentsMembersListRoutingModule,
    ComponentsMemberTableModule,
    FlexLayoutModule,
    MaterialsModule,
  ],
  providers: [ComponentsMemberTableService],
})
export class DepartmentsMembersListModule {}
