import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ScenesSceneComponentComponent } from './scenes-scene-component.component';
import { MaterialsModule } from 'src/app/materials.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ComponentsSceneCommonButtonModule } from 'src/app/components/components-scene/components-scene-common/components-scene-common-button/components-scene-common-button.module';
import { ComponentsSceneCommonClockModule } from 'src/app/components/components-scene/components-scene-common/components-scene-common-clock/components-scene-common-clock.module';
import { ComponentsSceneCommonCoordinateModule } from 'src/app/components/components-scene/components-scene-common/components-scene-common-coordinate/components-scene-common-coordinate.module';
import { ComponentsSceneCommonDocumentModule } from 'src/app/components/components-scene/components-scene-common/components-scene-common-document/components-scene-common-document.module';
import { ComponentsSceneCommonImageModule } from 'src/app/components/components-scene/components-scene-common/components-scene-common-image/components-scene-common-image.module';
import { ComponentsSceneCommonWeatherModule } from 'src/app/components/components-scene/components-scene-common/components-scene-common-weather/components-scene-common-weather.module';
import { ComponentsSceneCommonVideoModule } from 'src/app/components/components-scene/components-scene-common/components-scene-common-video/components-scene-common-video.module';
import { ComponentsSceneCommonSubtitleModule } from 'src/app/components/components-scene/components-scene-common/components-scene-common-subtitle/components-scene-common-subtitle.module';
import { ScenesSceneService } from '../scenes-scene.service';
import { ScenesCreateCommonDocumentModule } from '../../scenes-create/scenes-create-common/scenes-create-common-document/scenes-create-common-document.module';
import { ComponentsSceneCommonWebModule } from 'src/app/components/components-scene/components-scene-common/components-scene-common-web/components-scene-common-web.module';
import { ComponentsSceneCommonSlideImageModule } from 'src/app/components/components-scene/components-scene-common/components-scene-common-slide-image/components-scene-common-slide-image.module';

@NgModule({
  declarations: [ScenesSceneComponentComponent],
  imports: [
    CommonModule,
    MaterialsModule,
    FlexLayoutModule,
    ComponentsSceneCommonButtonModule,
    ComponentsSceneCommonImageModule,
    ComponentsSceneCommonWeatherModule,
    ComponentsSceneCommonVideoModule,
    ComponentsSceneCommonSubtitleModule,
    ComponentsSceneCommonDocumentModule,
    ComponentsSceneCommonCoordinateModule,
    ComponentsSceneCommonClockModule,
    ComponentsSceneCommonWebModule,
    ComponentsSceneCommonSlideImageModule,
  ],
  exports: [ScenesSceneComponentComponent],
})
export class ScenesSceneComponentModule {}
