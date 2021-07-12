import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComponentsDepartmentBaseItemComponent } from './components-department-base-item.component';
import { MaterialsModule } from 'src/app/materials.module';
import { FlexLayoutModule } from '@angular/flex-layout';

@NgModule({
  declarations: [ComponentsDepartmentBaseItemComponent],
  imports: [CommonModule, MaterialsModule, FlexLayoutModule],
  exports: [ComponentsDepartmentBaseItemComponent],
})
export class ComponentsDepartmentBaseItemModule {}
