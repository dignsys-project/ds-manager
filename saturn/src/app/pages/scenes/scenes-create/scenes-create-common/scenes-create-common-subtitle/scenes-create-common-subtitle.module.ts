import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialsModule } from 'src/app/materials.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ScenesCreateCommonSubtitleComponent } from './scenes-create-common-subtitle.component';
import { ComponentsCommonNameDialogModule } from 'src/app/components/components-common-name-dialog/components-common-name-dialog.module';
import { ComponentsCommonDialogModule } from 'src/app/components/components-common-dialog/components-common-dialog.module';
import { ComponentsSceneViewerRssDialogModule } from 'src/app/components/components-scene/components-scene-viewer-rss-dialog/components-scene-viewer-rss-dialog.module';

@NgModule({
  declarations: [ScenesCreateCommonSubtitleComponent],
  imports: [
    CommonModule,
    MaterialsModule,
    FlexLayoutModule,
    ComponentsCommonNameDialogModule,
    ComponentsCommonDialogModule,
    ComponentsSceneViewerRssDialogModule,
  ],
  exports: [ScenesCreateCommonSubtitleComponent],
})
export class ScenesCreateCommonSubtitleModule {}
