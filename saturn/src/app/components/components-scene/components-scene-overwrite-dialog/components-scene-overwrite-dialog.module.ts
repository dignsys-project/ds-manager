import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComponentsSceneOverwriteDialogComponent } from './components-scene-overwrite-dialog.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MaterialsModule } from 'src/app/materials.module';

@NgModule({
  declarations: [ComponentsSceneOverwriteDialogComponent],
  imports: [CommonModule, MaterialsModule, FlexLayoutModule],
  exports: [ComponentsSceneOverwriteDialogComponent],
})
export class ComponentsSceneOverwriteDialogModule {}
