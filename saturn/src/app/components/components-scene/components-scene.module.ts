import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialsModule } from 'src/app/materials.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ComponentsSceneCanvasModule } from './components-scene-canvas/components-scene-canvas.module';
import { ComponentsSceneSaveDialogModule } from './components-scene-save-dialog/components-scene-save-dialog.module';
import { ComponentsSceneCommonButtonModule } from './components-scene-common/components-scene-common-button/components-scene-common-button.module';
import { ComponentsSceneCommonImageModule } from './components-scene-common/components-scene-common-image/components-scene-common-image.module';
import { ComponentsSceneCommonWeatherModule } from './components-scene-common/components-scene-common-weather/components-scene-common-weather.module';
import { ComponentsSceneCommonVideoModule } from './components-scene-common/components-scene-common-video/components-scene-common-video.module';
import { ComponentsSceneCommonSubtitleModule } from './components-scene-common/components-scene-common-subtitle/components-scene-common-subtitle.module';
import { ComponentsSceneCommonDocumentModule } from './components-scene-common/components-scene-common-document/components-scene-common-document.module';
import { ComponentsSceneCommonCoordinateModule } from './components-scene-common/components-scene-common-coordinate/components-scene-common-coordinate.module';
import { ComponentsSceneCommonClockModule } from './components-scene-common/components-scene-common-clock/components-scene-common-clock.module';
import { ComponentsSceneCommonWebModule } from './components-scene-common/components-scene-common-web/components-scene-common-web.module';
import { ComponentsSceneCommonV2Component } from './components-scene-common/components-scene-common-v2.component';
import { ComponentsSceneCommonSlideImageModule } from './components-scene-common/components-scene-common-slide-image/components-scene-common-slide-image.module';
@NgModule({
  declarations: [ComponentsSceneCommonV2Component],
  imports: [
    CommonModule,
    FlexLayoutModule,
    MaterialsModule,
    ComponentsSceneCanvasModule,
    ComponentsSceneSaveDialogModule,
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
  exports: [ComponentsSceneCanvasModule],
})
export class ComponentsSceneModule {}
