import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComponentsScenesV2Component } from './components-scenes-v2.component';
import { ComponentsCommonDialogModule } from '../components-common-dialog/components-common-dialog.module';
import { ComponentsDepartmentFolderTreeModule } from '../components-department-folder-tree/components-department-folder-tree.module';
import { ComponentsCommonNameDialogModule } from '../components-common-name-dialog/components-common-name-dialog.module';
import { ComponentsScenesListV2Module } from '../components-scenes-list-v2/components-scenes-list-v2.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MaterialsModule } from 'src/app/materials.module';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [ComponentsScenesV2Component],
  imports: [
    CommonModule,
    FlexLayoutModule,
    MaterialsModule,
    ComponentsCommonDialogModule,
    ComponentsDepartmentFolderTreeModule,
    ComponentsCommonNameDialogModule,
    ComponentsScenesListV2Module,
    RouterModule,
  ],
  exports: [ComponentsScenesV2Component],
})
export class ComponentsScenesV2Module {}
