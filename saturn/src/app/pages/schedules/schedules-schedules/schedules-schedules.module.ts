import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SchedulesSchedulesRoutingModule } from './schedules-schedules-routing.module';
import { SchedulesSchedulesComponent } from './schedules-schedules.component';
import { MaterialsModule } from 'src/app/materials.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ComponentsScheduleItemModule } from 'src/app/components/components-schedule-item/components-schedule-item.module';

@NgModule({
  declarations: [SchedulesSchedulesComponent],
  imports: [
    CommonModule,
    SchedulesSchedulesRoutingModule,
    MaterialsModule,
    FlexLayoutModule,
    ComponentsScheduleItemModule,
  ],
})
export class SchedulesSchedulesModule {}
