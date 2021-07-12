import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComponentsSceneCanvasComponent } from './components-scene-canvas.component';
import { MaterialsModule } from 'src/app/materials.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ExtensionsModule } from 'src/app/extensions.module';
import { ComponentsSceneSaveV2DialogModule } from '../components-scene-save-v2-dialog/components-scene-save-v2-dialog.module';
import { ComponentsSceneOverwriteDialogModule } from '../components-scene-overwrite-dialog/components-scene-overwrite-dialog.module';

@NgModule({
  declarations: [ComponentsSceneCanvasComponent],
  imports: [
    CommonModule,
    MaterialsModule,
    FlexLayoutModule,
    ExtensionsModule,
    ComponentsSceneSaveV2DialogModule,
    ComponentsSceneOverwriteDialogModule,
  ],
  exports: [ComponentsSceneCanvasComponent],
})
export class ComponentsSceneCanvasModule {}
