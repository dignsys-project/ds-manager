import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ScenesCreateCommonComponent } from './scenes-create-common.component';
import { MaterialsModule } from 'src/app/materials.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ScenesCreateCommonVideoModule } from './scenes-create-common-video/scenes-create-common-video.module';
import { ScenesCreateCommonImageModule } from './scenes-create-common-image/scenes-create-common-image.module';
import { ScenesCreateCommonButtonModule } from './scenes-create-common-button/scenes-create-common-button.module';
import { ComponentsSceneComponentsSelectDialogModule } from 'src/app/components/components-scene/components-scene-components-select-dialog/components-scene-components-select-dialog.module';
import { ScenesCreateCommonWeatherModule } from './scenes-create-common-weather/scenes-create-common-weather.module';
import { ScenesCreateCommonClockModule } from './scenes-create-common-clock/scenes-create-common-clock.module';
import { ScenesCreateCommonDocumentModule } from './scenes-create-common-document/scenes-create-common-document.module';
import { ScenesCreateCommonWebModule } from './scenes-create-common-web/scenes-create-common-web.module';
import { ScenesCreateCommonSlideImageModule } from './scenes-create-common-slide-image/scenes-create-common-slide-image.module';
import { ScenesCreateCommonSubtitleModule } from './scenes-create-common-subtitle/scenes-create-common-subtitle.module';
import { ScenesCreateCommonCoordinateModule } from './scenes-create-common-coordinate/scenes-create-common-coordinate.module';

@NgModule({
  declarations: [ScenesCreateCommonComponent],
  imports: [
    CommonModule,
    MaterialsModule,
    FlexLayoutModule,
    ComponentsSceneComponentsSelectDialogModule, // 씬 컴포넌트 선태 다이얼로그
    ScenesCreateCommonSubtitleModule,
    ScenesCreateCommonVideoModule,
    ScenesCreateCommonImageModule,
    ScenesCreateCommonButtonModule,
    ScenesCreateCommonWeatherModule,
    ScenesCreateCommonClockModule,
    ScenesCreateCommonDocumentModule,
    ScenesCreateCommonWebModule,
    ScenesCreateCommonSlideImageModule,
    ScenesCreateCommonCoordinateModule,
  ],
  exports: [ScenesCreateCommonComponent],
})
export class ScenesCreateCommonModule {}
