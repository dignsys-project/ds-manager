import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SceneDevelopmentsSlideImageRoutingModule } from './scene-developments-slide-image-routing.module';
import { SceneDevelopmentsSlideImageComponent } from './scene-developments-slide-image.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MaterialsModule } from 'src/app/materials.module';
import { ScenesCreateCommonSlideImageModule } from '../../scenes-create/scenes-create-common/scenes-create-common-slide-image/scenes-create-common-slide-image.module';
import { ComponentsSceneCommonSlideImageModule } from 'src/app/components/components-scene/components-scene-common/components-scene-common-slide-image/components-scene-common-slide-image.module';

@NgModule({
  declarations: [SceneDevelopmentsSlideImageComponent],
  imports: [
    CommonModule,
    SceneDevelopmentsSlideImageRoutingModule,
    FlexLayoutModule,
    MaterialsModule,
    ScenesCreateCommonSlideImageModule,
    ComponentsSceneCommonSlideImageModule,
  ],
})
export class SceneDevelopmentsSlideImageModule {}
