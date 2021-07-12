import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComponentsDepartmentFolderTreeComponent } from './components-department-folder-tree.component';
import { MaterialsModule } from 'src/app/materials.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { RouterModule } from '@angular/router';
@NgModule({
  declarations: [ComponentsDepartmentFolderTreeComponent],
  imports: [CommonModule, MaterialsModule, FlexLayoutModule, RouterModule],
  exports: [ComponentsDepartmentFolderTreeComponent],
})
export class ComponentsDepartmentFolderTreeModule {}
