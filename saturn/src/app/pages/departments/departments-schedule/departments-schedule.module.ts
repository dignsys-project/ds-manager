import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DepartmentsScheduleRoutingModule } from './departments-schedule-routing.module';
import { DepartmentsScheduleComponent } from './departments-schedule.component';
import { MaterialsModule } from 'src/app/materials.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ComponentsConnectorDepartmentTableModule } from 'src/app/components/components-connector-department-table/components-connector-department-table.module';
import { ComponentsScenesModule } from 'src/app/components/components-scenes/components-scenes.module';
import { ComponentsSceneItemModule } from 'src/app/components/components-scene-item/components-scene-item.module';
import { ComponentsConnectorSchedulesModule } from 'src/app/components/components-connector-schedules/components-connector-schedules.module';
import { ConnectorScheduleService } from 'src/app/services/connector-schedule.service';

@NgModule({
  declarations: [DepartmentsScheduleComponent],
  imports: [
    CommonModule,
    DepartmentsScheduleRoutingModule,
    MaterialsModule,
    FlexLayoutModule,
    ComponentsConnectorDepartmentTableModule,
    ComponentsScenesModule,
    ComponentsSceneItemModule,
    ComponentsConnectorSchedulesModule,
  ],
  providers: [ConnectorScheduleService],
})
export class DepartmentsScheduleModule {}
