import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComponentsCommonDatePickerComponent } from './components-common-date-picker.component';
import { MaterialsModule } from 'src/app/materials.module';
import { FlexLayoutModule } from '@angular/flex-layout';

@NgModule({
  declarations: [ComponentsCommonDatePickerComponent],
  imports: [CommonModule, MaterialsModule, FlexLayoutModule],
})
export class ComponentsCommonDatePickerModule {}
