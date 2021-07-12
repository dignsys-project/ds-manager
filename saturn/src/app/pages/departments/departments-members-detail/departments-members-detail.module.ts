import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DepartmentsMembersDetailRoutingModule } from './departments-members-detail-routing.module';
import { DepartmentsMembersDetailComponent } from './departments-members-detail.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MaterialsModule } from 'src/app/materials.module';
import { ComponentsMemberItemModule } from 'src/app/components/components-member-item/components-member-item.module';
import { ComponentsDepartmentBaseItemModule } from 'src/app/components/components-department-base-item/components-department-base-item.module';

@NgModule({
  declarations: [DepartmentsMembersDetailComponent],
  imports: [
    CommonModule,
    DepartmentsMembersDetailRoutingModule,
    MaterialsModule,
    FlexLayoutModule,
    ComponentsMemberItemModule,
    ComponentsDepartmentBaseItemModule,
  ],
})
export class DepartmentsMembersDetailModule {}
