import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ScenesSceneCanvasComponent } from './scenes-scene-canvas.component';
import { MaterialsModule } from 'src/app/materials.module';
import { FlexLayoutModule } from '@angular/flex-layout';

@NgModule({
  declarations: [ScenesSceneCanvasComponent],
  imports: [CommonModule, MaterialsModule, FlexLayoutModule],
  exports: [ScenesSceneCanvasComponent],
})
export class ScenesSceneCanvasModule {}
