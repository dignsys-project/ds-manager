import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SchedulesRoutingModule } from './schedules-routing.module';
import { SchedulesComponent } from './schedules.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MaterialsModule } from 'src/app/materials.module';
import { ScheduleService } from 'src/app/services/schedules.service';
import { SchedulesContentService } from './schedules-content.service';

@NgModule({
  declarations: [SchedulesComponent],
  imports: [
    CommonModule,
    SchedulesRoutingModule,
    MaterialsModule,
    FlexLayoutModule,
  ],
  providers: [ScheduleService, SchedulesContentService],
})
export class SchedulesModule {}
