import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialsModule } from 'src/app/materials.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ComponentsSceneCommonSubtitleComponent } from './components-scene-common-subtitle.component';

@NgModule({
  declarations: [ComponentsSceneCommonSubtitleComponent],
  imports: [CommonModule, MaterialsModule, FlexLayoutModule],
  exports: [ComponentsSceneCommonSubtitleComponent],
})
export class ComponentsSceneCommonSubtitleModule {}
