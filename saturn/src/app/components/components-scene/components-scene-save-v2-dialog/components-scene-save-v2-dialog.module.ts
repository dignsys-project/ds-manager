import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComponentsSceneSaveV2DialogComponent } from './components-scene-save-v2-dialog.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MaterialsModule } from 'src/app/materials.module';
import { ComponentsDepartmentFolderTreeModule } from '../../components-department-folder-tree/components-department-folder-tree.module';

@NgModule({
  declarations: [ComponentsSceneSaveV2DialogComponent],
  imports: [
    CommonModule,
    MaterialsModule,
    FlexLayoutModule,
    ComponentsDepartmentFolderTreeModule,
  ],
  exports: [ComponentsSceneSaveV2DialogComponent],
})
export class ComponentsSceneSaveV2DialogModule {}
