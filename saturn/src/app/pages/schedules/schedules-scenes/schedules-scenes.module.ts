import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SchedulesScenesRoutingModule } from './schedules-scenes-routing.module';
import { SchedulesScenesComponent } from './schedules-scenes.component';
import { MaterialsModule } from 'src/app/materials.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ComponentsScheduleItemModule } from 'src/app/components/components-schedule-item/components-schedule-item.module';
import { ComponentsSceneItemModule } from 'src/app/components/components-scene-item/components-scene-item.module';
import { ComponentsCommonDialogModule } from 'src/app/components/components-common-dialog/components-common-dialog.module';

@NgModule({
  declarations: [SchedulesScenesComponent],
  imports: [
    CommonModule,
    SchedulesScenesRoutingModule,
    MaterialsModule,
    FlexLayoutModule,
    ComponentsScheduleItemModule,
    ComponentsSceneItemModule,
    ComponentsCommonDialogModule,
  ],
})
export class SchedulesScenesModule {}
