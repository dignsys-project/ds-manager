import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SceneDevelopmentsSceneResourceRoutingModule } from './scene-developments-scene-resource-routing.module';
import { SceneDevelopmentsSceneResourceComponent } from './scene-developments-scene-resource.component';
import { MaterialsModule } from 'src/app/materials.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ComponentsSceneCommonV2Component } from 'src/app/components/components-scene/components-scene-common/components-scene-common-v2.component';
import { ComponentsScenesV2Module } from 'src/app/components/components-scenes-v2/components-scenes-v2.module';

@NgModule({
  declarations: [SceneDevelopmentsSceneResourceComponent],
  imports: [
    CommonModule,
    SceneDevelopmentsSceneResourceRoutingModule,
    MaterialsModule,
    FlexLayoutModule,
    ComponentsScenesV2Module,
  ],
})
export class SceneDevelopmentsSceneResourceModule {}
