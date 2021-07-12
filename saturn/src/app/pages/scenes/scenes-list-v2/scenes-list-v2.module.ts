import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ScenesListV2RoutingModule } from './scenes-list-v2-routing.module';
import { ScenesListV2Component } from './scenes-list-v2.component';
import { ComponentsScenesV2Module } from 'src/app/components/components-scenes-v2/components-scenes-v2.module';
@NgModule({
  declarations: [ScenesListV2Component],
  imports: [CommonModule, ScenesListV2RoutingModule, ComponentsScenesV2Module],
})
export class ScenesListV2Module {}
