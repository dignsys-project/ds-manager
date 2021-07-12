import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SceneDevelompentsComponentsRssRoutingModule } from './scene-develompents-components-rss-routing.module';
import { SceneDevelompentsComponentsRssComponent } from './scene-develompents-components-rss.component';
import { MaterialsModule } from 'src/app/materials.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ComponentsSceneViewerRssDialogModule } from 'src/app/components/components-scene/components-scene-viewer-rss-dialog/components-scene-viewer-rss-dialog.module';

@NgModule({
  declarations: [SceneDevelompentsComponentsRssComponent],
  imports: [
    CommonModule,
    SceneDevelompentsComponentsRssRoutingModule,
    MaterialsModule,
    FlexLayoutModule,
    ComponentsSceneViewerRssDialogModule,
  ],
})
export class SceneDevelompentsComponentsRssModule {}
