import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ScenesSceneRoutingModule } from './scenes-scene-routing.module';
import { ScenesSceneComponent } from './scenes-scene.component';
import { ScenesSceneComponentModule } from './scenes-scene-component/scenes-scene-component.module';
import { ScenesSceneCanvasModule } from './scenes-scene-canvas/scenes-scene-canvas.module';
import { ScenesSceneService } from './scenes-scene.service';

@NgModule({
  declarations: [ScenesSceneComponent],
  imports: [
    CommonModule,
    ScenesSceneRoutingModule,
    ScenesSceneComponentModule,
    ScenesSceneCanvasModule,
  ],
  providers: [ScenesSceneService],
})
export class ScenesSceneModule {}
