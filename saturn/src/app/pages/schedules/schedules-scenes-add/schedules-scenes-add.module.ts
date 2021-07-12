import { NgModule } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';

import { SchedulesScenesAddRoutingModule } from './schedules-scenes-add-routing.module';
import { SchedulesScenesAddComponent } from './schedules-scenes-add.component';
import { MaterialsModule } from 'src/app/materials.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ComponentsScheduleSceneModule } from 'src/app/components/components-schedule-scene/components-schedule-scene.module';

@NgModule({
  declarations: [SchedulesScenesAddComponent],
  imports: [
    CommonModule,
    SchedulesScenesAddRoutingModule,
    MaterialsModule,
    FlexLayoutModule,
    ComponentsScheduleSceneModule,
  ],
  providers: [DatePipe],
})
export class SchedulesScenesAddModule {}
