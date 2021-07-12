import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DepartmentsRoutingModule } from './departments-routing.module';
import { DepartmentsComponent } from './departments.component';
import { MaterialsModule } from 'src/app/materials.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { DepartmentsService } from './departments.service';
import { MembersService } from '../../services/members.service';
import { ComponentsMemberTableModule } from 'src/app/components/components-member-table/components-member-table.module';
import { ConnectorsService } from '../../services/connectors.service';
import { DepartmentsHeaderService } from './departments-header.service';

@NgModule({
  declarations: [DepartmentsComponent],
  imports: [
    CommonModule,
    DepartmentsRoutingModule,
    MaterialsModule,
    FlexLayoutModule,
    ComponentsMemberTableModule,
  ],
  providers: [
    DepartmentsHeaderService,
    DepartmentsService,
    MembersService,
    ConnectorsService,
  ],
})
export class DepartmentsModule {}
