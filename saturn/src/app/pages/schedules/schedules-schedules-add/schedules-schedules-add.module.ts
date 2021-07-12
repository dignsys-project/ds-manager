import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SchedulesSchedulesAddRoutingModule } from './schedules-schedules-add-routing.module';
import { SchedulesSchedulesAddComponent } from './schedules-schedules-add.component';
import { MaterialsModule } from 'src/app/materials.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ComponentsCommonDialogModule } from 'src/app/components/components-common-dialog/components-common-dialog.module';
import { ComponentsScheduleModule } from 'src/app/components/components-schedule/components-schedule.module';

@NgModule({
  declarations: [SchedulesSchedulesAddComponent],
  imports: [
    CommonModule,
    SchedulesSchedulesAddRoutingModule,
    ComponentsScheduleModule,
    MaterialsModule,
    FlexLayoutModule,
    ComponentsCommonDialogModule,
  ],
})
export class SchedulesSchedulesAddModule {}
