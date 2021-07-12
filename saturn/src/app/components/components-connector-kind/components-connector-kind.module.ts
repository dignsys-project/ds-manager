import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComponentsConnectorKindComponent } from './components-connector-kind.component';
import { MaterialsModule } from 'src/app/materials.module';

@NgModule({
  declarations: [ComponentsConnectorKindComponent],
  imports: [CommonModule, MaterialsModule],
  exports: [ComponentsConnectorKindComponent],
})
export class ComponentsConnectorKindModule {}
