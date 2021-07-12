import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialsModule } from 'src/app/materials.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ComponentsCommonDialogModule } from '../components-common-dialog/components-common-dialog.module';
import { ComponentsSceneItemComponent } from './components-scene-item.component';

@NgModule({
  declarations: [ComponentsSceneItemComponent],
  imports: [
    CommonModule,
    MaterialsModule,
    FlexLayoutModule,
    ComponentsCommonDialogModule,
  ],
  exports: [ComponentsSceneItemComponent],
})
export class ComponentsSceneItemModule {}
