import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComponentsMemberItemComponent } from './components-member-item.component';
import { MaterialsModule } from 'src/app/materials.module';
import { ComponentsMemberKindModule } from '../components-member-kind/components-member-kind.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ComponentsMemberPermissionModule } from '../components-member-permission/components-member-permission.module';
import { ComponentsPermissionDialogModule } from '../components-permission-dialog/components-permission-dialog.module';

@NgModule({
  declarations: [ComponentsMemberItemComponent],
  imports: [
    CommonModule,
    MaterialsModule,
    FlexLayoutModule,
    ComponentsMemberKindModule,
    ComponentsMemberPermissionModule,
    ComponentsPermissionDialogModule,
  ],
  exports: [ComponentsMemberItemComponent],
})
export class ComponentsMemberItemModule {}
