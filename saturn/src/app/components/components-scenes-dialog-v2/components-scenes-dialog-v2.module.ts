import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComponentsScenesDialogV2Component } from './components-scenes-dialog-v2.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MaterialsModule } from 'src/app/materials.module';
import { ComponentsScenesV2Module } from '../components-scenes-v2/components-scenes-v2.module';

@NgModule({
  declarations: [ComponentsScenesDialogV2Component],
  imports: [
    CommonModule,
    FlexLayoutModule,
    MaterialsModule,
    ComponentsScenesV2Module,
  ],
})
export class ComponentsScenesDialogV2Module {}
