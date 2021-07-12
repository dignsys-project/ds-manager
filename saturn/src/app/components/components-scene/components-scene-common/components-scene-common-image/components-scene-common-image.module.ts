import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComponentsSceneCommonImageComponent } from './components-scene-common-image.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MaterialsModule } from 'src/app/materials.module';

@NgModule({
  declarations: [ComponentsSceneCommonImageComponent],
  imports: [CommonModule, MaterialsModule, FlexLayoutModule],
  exports: [ComponentsSceneCommonImageComponent],
})
export class ComponentsSceneCommonImageModule {}
