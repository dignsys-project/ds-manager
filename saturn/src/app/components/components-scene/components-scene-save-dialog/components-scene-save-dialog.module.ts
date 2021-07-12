import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComponentsSceneSaveDialogComponent } from './components-scene-save-dialog.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MaterialsModule } from 'src/app/materials.module';

@NgModule({
  declarations: [ComponentsSceneSaveDialogComponent],
  imports: [CommonModule, MaterialsModule, FlexLayoutModule],
  entryComponents: [ComponentsSceneSaveDialogComponent],
})
export class ComponentsSceneSaveDialogModule {}
