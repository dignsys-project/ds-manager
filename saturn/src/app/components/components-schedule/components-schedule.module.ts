import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComponentsScheduleComponent } from './components-schedule.component';
import { MaterialsModule } from 'src/app/materials.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { NgxMaterialTimepickerModule } from 'ngx-material-timepicker';

@NgModule({
  declarations: [ComponentsScheduleComponent],
  imports: [
    CommonModule,
    MaterialsModule,
    FlexLayoutModule,
    NgxMaterialTimepickerModule,
  ],
  exports: [ComponentsScheduleComponent],
})
export class ComponentsScheduleModule {}
