import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComponentsConnectorDepartmentTableComponent } from './components-connector-department-table.component';
import { MaterialsModule } from 'src/app/materials.module';
import { FlexLayoutModule } from '@angular/flex-layout';

@NgModule({
  declarations: [ComponentsConnectorDepartmentTableComponent],
  imports: [CommonModule, MaterialsModule, FlexLayoutModule],
  exports: [ComponentsConnectorDepartmentTableComponent],
})
export class ComponentsConnectorDepartmentTableModule {}
