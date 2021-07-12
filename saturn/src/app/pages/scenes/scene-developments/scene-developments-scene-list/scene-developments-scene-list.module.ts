import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SceneDevelopmentsSceneListRoutingModule } from './scene-developments-scene-list-routing.module';
import { SceneDevelopmentsSceneListComponent } from './scene-developments-scene-list.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MaterialsModule } from 'src/app/materials.module';
import { ComponentsScenesV2Module } from 'src/app/components/components-scenes-v2/components-scenes-v2.module';

@NgModule({
  declarations: [SceneDevelopmentsSceneListComponent],
  imports: [
    CommonModule,
    SceneDevelopmentsSceneListRoutingModule,
    FlexLayoutModule,
    MaterialsModule,
    ComponentsScenesV2Module,
  ],
})
export class SceneDevelopmentsSceneListModule {}
