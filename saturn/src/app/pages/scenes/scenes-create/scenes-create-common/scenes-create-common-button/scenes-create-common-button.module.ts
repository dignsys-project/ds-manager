import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ScenesCreateCommonButtonComponent } from './scenes-create-common-button.component';
import { MaterialsModule } from 'src/app/materials.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ComponentsSceneItemModule } from 'src/app/components/components-scene-item/components-scene-item.module';
import { ScenesCreateCommonTextModule } from '../scenes-create-common-text/scenes-create-common-text.module';

@NgModule({
  declarations: [ScenesCreateCommonButtonComponent],
  imports: [
    CommonModule,
    MaterialsModule,
    FlexLayoutModule,
    ComponentsSceneItemModule,
    ScenesCreateCommonTextModule,
  ],
  exports: [ScenesCreateCommonButtonComponent],
})
export class ScenesCreateCommonButtonModule {}
