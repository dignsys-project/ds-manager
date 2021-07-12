import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComponentsSceneComponentsSelectDialogComponent } from './components-scene-components-select-dialog.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MaterialsModule } from 'src/app/materials.module';
import { ScenesCreateService } from 'src/app/pages/scenes/scenes-create.service';

@NgModule({
  declarations: [ComponentsSceneComponentsSelectDialogComponent],
  imports: [CommonModule, FlexLayoutModule, MaterialsModule],
  providers: [
    ComponentsSceneComponentsSelectDialogComponent,
    ScenesCreateService,
  ],
})
export class ComponentsSceneComponentsSelectDialogModule {}
