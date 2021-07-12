import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComponentsResourcesDialogV2Component } from './components-resources-dialog-v2.component';
import { MaterialsModule } from 'src/app/materials.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ComponentsResourcesListV2Module } from '../components-resources-list-v2/components-resources-list-v2.module';
import { ComponentsCommonDialogModule } from '../components-common-dialog/components-common-dialog.module';
import { ComponentsCommonNameDialogModule } from '../components-common-name-dialog/components-common-name-dialog.module';
import { ComponentsDepartmentFolderTreeModule } from '../components-department-folder-tree/components-department-folder-tree.module';
import { ComponentsResourcesV2Module } from '../components-resources-v2/components-resources-v2.module';

@NgModule({
  declarations: [ComponentsResourcesDialogV2Component],
  imports: [
    CommonModule,
    MaterialsModule,
    FlexLayoutModule,
    ComponentsResourcesV2Module,
  ],
  providers: [ComponentsResourcesDialogV2Component],
})
export class ComponentsResourcesDialogV2Module {}
