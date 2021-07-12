import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ComponentsResourcesV2Component } from './components-resources-v2.component';
import { ComponentsResourcesCreateV2Module } from '../components-resource-create-v2/components-resources-create-v2.module';
import { ComponentsCommonDialogModule } from '../components-common-dialog/components-common-dialog.module';
import { ComponentsResourcesListV2Module } from '../components-resources-list-v2/components-resources-list-v2.module';
import { ComponentsDepartmentFolderTreeModule } from '../components-department-folder-tree/components-department-folder-tree.module';
import { ComponentsCommonNameDialogModule } from '../components-common-name-dialog/components-common-name-dialog.module';
import { MaterialsModule } from 'src/app/materials.module';

@NgModule({
  declarations: [ComponentsResourcesV2Component],
  imports: [
    CommonModule,
    MaterialsModule,
    FlexLayoutModule,
    ComponentsResourcesListV2Module,
    ComponentsResourcesCreateV2Module,
    ComponentsDepartmentFolderTreeModule,
    ComponentsCommonNameDialogModule,
    ComponentsCommonDialogModule,
  ],
  exports: [ComponentsResourcesV2Component],
})
export class ComponentsResourcesV2Module {}
