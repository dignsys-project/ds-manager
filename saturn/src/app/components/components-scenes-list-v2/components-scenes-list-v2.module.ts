import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComponentsScenesListV2Component } from './components-scenes-list-v2.component';
import { MaterialsModule } from 'src/app/materials.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { SaturnDateModule } from 'src/app/pipes/saturn-date/saturn-date.module';
@NgModule({
  declarations: [ComponentsScenesListV2Component],
  imports: [CommonModule, MaterialsModule, FlexLayoutModule, SaturnDateModule],
  exports: [ComponentsScenesListV2Component],
})
export class ComponentsScenesListV2Module {}
