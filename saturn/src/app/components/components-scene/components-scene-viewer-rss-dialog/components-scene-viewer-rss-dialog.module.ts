import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComponentsSceneViewerRssDialogComponent } from './components-scene-viewer-rss-dialog.component';
import { MaterialsModule } from 'src/app/materials.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { SaturnDateModule } from 'src/app/pipes/saturn-date/saturn-date.module';

@NgModule({
  declarations: [ComponentsSceneViewerRssDialogComponent],
  imports: [CommonModule, MaterialsModule, FlexLayoutModule, SaturnDateModule],
  exports: [ComponentsSceneViewerRssDialogComponent],
})
export class ComponentsSceneViewerRssDialogModule {}
