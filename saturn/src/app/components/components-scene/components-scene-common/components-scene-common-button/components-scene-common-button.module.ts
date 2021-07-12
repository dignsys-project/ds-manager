import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MaterialsModule } from 'src/app/materials.module';
import { ComponentsSceneCommonButtonComponent } from './components-scene-common-button.component';
import { ComponentsSceneCommonTextModule } from '../components-scene-common-text/components-scene-common-text.module';

@NgModule({
  declarations: [ComponentsSceneCommonButtonComponent],
  imports: [
    CommonModule,
    FlexLayoutModule,
    MaterialsModule,
    ComponentsSceneCommonTextModule,
  ],
  exports: [ComponentsSceneCommonButtonComponent],
})
export class ComponentsSceneCommonButtonModule {}
