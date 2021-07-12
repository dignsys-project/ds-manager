import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ScenesCreateRoutingModule } from './scenes-create-routing.module';
import { ScenesCreateComponent } from './scenes-create.component';
import { MaterialsModule } from 'src/app/materials.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ComponentsSceneModule } from 'src/app/components/components-scene/components-scene.module';
import { ScenesCreateCommonModule } from './scenes-create-common/scenes-create-common.module';
import { ScenesCreateCanvasModule } from './scenes-create-canvas/scenes-create-canvas.module';
import { ScenesCreateComponentsModule } from './scenes-create-components/scenes-create-components.module';
import { ScenesCreateService } from '../scenes-create.service';
import { ScenesSceneService } from '../scenes-scene/scenes-scene.service';
import { ScenesCreateMenuModule } from './scenes-create-menu/scenes-create-menu.module';
import { ComponentsSceneOverwriteDialogModule } from 'src/app/components/components-scene/components-scene-overwrite-dialog/components-scene-overwrite-dialog.module';

@NgModule({
  declarations: [ScenesCreateComponent],
  imports: [
    CommonModule,
    ScenesCreateRoutingModule,
    MaterialsModule,
    FlexLayoutModule,
    ComponentsSceneModule,
    ScenesCreateCommonModule,
    ScenesCreateCanvasModule,
    ScenesCreateComponentsModule,
    ScenesCreateMenuModule,
    ComponentsSceneOverwriteDialogModule,
  ],
  providers: [ScenesCreateService, ScenesSceneService],
})
export class ScenesCreateModule {}
