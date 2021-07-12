import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ScenesCreateCanvasComponent } from './scenes-create-canvas.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MaterialsModule } from 'src/app/materials.module';
import { ComponentsSceneItemModule } from 'src/app/components/components-scene-item/components-scene-item.module';

@NgModule({
  declarations: [ScenesCreateCanvasComponent],
  imports: [
    CommonModule,
    MaterialsModule,
    FlexLayoutModule,
    ComponentsSceneItemModule,
  ],
  exports: [ScenesCreateCanvasComponent],
})
export class ScenesCreateCanvasModule {}
