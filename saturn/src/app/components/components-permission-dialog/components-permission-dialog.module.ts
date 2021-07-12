import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComponentsPermissionDialogComponent } from './components-permission-dialog.component';
import { MaterialsModule } from 'src/app/materials.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ComponentsMemberPermissionModule } from '../components-member-permission/components-member-permission.module';

@NgModule({
  declarations: [ComponentsPermissionDialogComponent],
  imports: [
    CommonModule,
    MaterialsModule,
    FlexLayoutModule,
    ComponentsMemberPermissionModule,
  ],
})
export class ComponentsPermissionDialogModule {}
