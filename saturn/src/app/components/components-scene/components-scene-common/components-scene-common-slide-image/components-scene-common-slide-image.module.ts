import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComponentsSceneCommonSlideImageComponent } from './components-scene-common-slide-image.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MaterialsModule } from 'src/app/materials.module';

@NgModule({
  declarations: [ComponentsSceneCommonSlideImageComponent],
  imports: [CommonModule, FlexLayoutModule, MaterialsModule],
  exports: [ComponentsSceneCommonSlideImageComponent],
})
export class ComponentsSceneCommonSlideImageModule {}
