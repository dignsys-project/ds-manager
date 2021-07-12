import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComponentsSceneCommonCoordinateComponent } from './components-scene-common-coordinate.component';
import { MaterialsModule } from 'src/app/materials.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ComponentsSceneCommonTextModule } from '../components-scene-common-text/components-scene-common-text.module';

@NgModule({
  declarations: [ComponentsSceneCommonCoordinateComponent],
  imports: [
    CommonModule,
    MaterialsModule,
    FlexLayoutModule,
    ComponentsSceneCommonTextModule,
  ],
  exports: [ComponentsSceneCommonCoordinateComponent],
})
export class ComponentsSceneCommonCoordinateModule {}
