import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ScenesResourceListV2RoutingModule } from './scenes-resource-list-v2-routing.module';
import { ScenesResourceListV2Component } from './scenes-resource-list-v2.component';
import { MaterialsModule } from 'src/app/materials.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ComponentsResourcesV2Module } from 'src/app/components/components-resources-v2/components-resources-v2.module';

@NgModule({
  declarations: [ScenesResourceListV2Component],
  imports: [
    CommonModule,
    ScenesResourceListV2RoutingModule,
    MaterialsModule,
    FlexLayoutModule,
    ComponentsResourcesV2Module,
  ],
})
export class ScenesResourceListV2Module {}
