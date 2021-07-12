import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SceneDevelopmentsComponentsSubtitleRoutingModule } from './scene-developments-components-subtitle-routing.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MaterialsModule } from 'src/app/materials.module';
import { SceneDevelopmentsComponentsSubtitleComponent } from './scene-developments-components-subtitle.component';
import { ScenesCreateCommonSubtitleModule } from '../../scenes-create/scenes-create-common/scenes-create-common-subtitle/scenes-create-common-subtitle.module';
import { ComponentsSceneCommonSubtitleModule } from 'src/app/components/components-scene/components-scene-common/components-scene-common-subtitle/components-scene-common-subtitle.module';
import { ComponentsSceneModule } from 'src/app/components/components-scene/components-scene.module';

@NgModule({
  declarations: [SceneDevelopmentsComponentsSubtitleComponent],
  imports: [
    CommonModule,
    SceneDevelopmentsComponentsSubtitleRoutingModule,
    FlexLayoutModule,
    MaterialsModule,
    ScenesCreateCommonSubtitleModule,
    ComponentsSceneCommonSubtitleModule,
    ComponentsSceneModule,
  ],
})
export class SceneDevelopmentsSlideImageModule {}
