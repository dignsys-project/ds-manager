import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ScenesCreateCommonVideoComponent } from './scenes-create-common-video.component';
import { MaterialsModule } from 'src/app/materials.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ComponentsSceneItemModule } from 'src/app/components/components-scene-item/components-scene-item.module';

@NgModule({
  declarations: [ScenesCreateCommonVideoComponent],
  imports: [
    CommonModule,
    MaterialsModule,
    FlexLayoutModule,
    ComponentsSceneItemModule,
  ],
  exports: [ScenesCreateCommonVideoComponent],
})
export class ScenesCreateCommonVideoModule {}
