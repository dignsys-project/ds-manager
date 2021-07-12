import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComponentsScheduleSceneComponent } from './components-schedule-scene.component';
import { MaterialsModule } from 'src/app/materials.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ComponentsScheduleModule } from '../components-schedule/components-schedule.module';
import { ScheduleService } from 'src/app/services/schedules.service';
import { ComponentsSceneItemModule } from '../components-scene-item/components-scene-item.module';
import { ComponentsScheduleItemModule } from '../components-schedule-item/components-schedule-item.module';

@NgModule({
  declarations: [ComponentsScheduleSceneComponent],
  imports: [
    CommonModule,
    MaterialsModule,
    FlexLayoutModule,
    ComponentsScheduleModule,
    ComponentsSceneItemModule,
    ComponentsScheduleItemModule,
  ],
  providers: [ScheduleService],
  exports: [ComponentsScheduleSceneComponent],
})
export class ComponentsScheduleSceneModule {}
