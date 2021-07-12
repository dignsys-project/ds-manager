import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComponentsSceneCommonVideoComponent } from './components-scene-common-video.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MaterialsModule } from 'src/app/materials.module';

@NgModule({
  declarations: [ComponentsSceneCommonVideoComponent],
  imports: [CommonModule, FlexLayoutModule, MaterialsModule],
  exports: [ComponentsSceneCommonVideoComponent],
})
export class ComponentsSceneCommonVideoModule {}
