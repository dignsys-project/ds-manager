import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComponentsSceneCommonWeatherComponent } from './components-scene-common-weather.component';
import { MaterialsModule } from 'src/app/materials.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ComponentsSceneCommonTextModule } from '../components-scene-common-text/components-scene-common-text.module';

@NgModule({
  declarations: [ComponentsSceneCommonWeatherComponent],
  imports: [
    CommonModule,
    MaterialsModule,
    FlexLayoutModule,
    ComponentsSceneCommonTextModule,
  ],
  exports: [ComponentsSceneCommonWeatherComponent],
})
export class ComponentsSceneCommonWeatherModule {}
