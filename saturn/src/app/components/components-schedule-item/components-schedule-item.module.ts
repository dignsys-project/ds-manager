import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComponentsScheduleItemComponent } from './components-schedule-item.component';
import { MaterialsModule } from 'src/app/materials.module';
import { FlexLayoutModule } from '@angular/flex-layout';

@NgModule({
  declarations: [ComponentsScheduleItemComponent],
  imports: [CommonModule, MaterialsModule, FlexLayoutModule],
  exports: [ComponentsScheduleItemComponent],
})
export class ComponentsScheduleItemModule {}
