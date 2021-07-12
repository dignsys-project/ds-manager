import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ColorPickerModule } from 'ngx-color-picker';

@NgModule({
  declarations: [],
  imports: [CommonModule, ColorPickerModule],
  exports: [ColorPickerModule],
})
export class ExtensionsModule {}
