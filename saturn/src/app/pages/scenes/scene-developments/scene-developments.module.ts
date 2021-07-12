import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SceneDevelopmentsRoutingModule } from './scene-developments-routing.module';
import { SceneDevelopmentsComponent } from './scene-developments.component';
import { ComponentsResourcesDialogV2Module } from 'src/app/components/components-resources-dialog-v2/components-resources-dialog-v2.module';
import { MaterialsModule } from 'src/app/materials.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ComponentsScenesDialogV2Module } from 'src/app/components/components-scenes-dialog-v2/components-scenes-dialog-v2.module';
import { ScenesCreateCommonSlideImageModule } from '../scenes-create/scenes-create-common/scenes-create-common-slide-image/scenes-create-common-slide-image.module';

@NgModule({
  declarations: [SceneDevelopmentsComponent],
  imports: [
    CommonModule,
    MaterialsModule,
    FlexLayoutModule,

    SceneDevelopmentsRoutingModule,
    ComponentsResourcesDialogV2Module,
    ComponentsScenesDialogV2Module,
  ],
})
export class SceneDevelopmentsModule {}
