import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ScenesCreateCommonWeatherComponent } from './scenes-create-common-weather.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MaterialsModule } from 'src/app/materials.module';
import { ScenesCreateCommonTextModule } from '../scenes-create-common-text/scenes-create-common-text.module';

@NgModule({
  declarations: [ScenesCreateCommonWeatherComponent],
  imports: [
    CommonModule,
    FlexLayoutModule,
    MaterialsModule,
    ScenesCreateCommonTextModule,
  ],
  exports: [ScenesCreateCommonWeatherComponent],
})
export class ScenesCreateCommonWeatherModule {}
