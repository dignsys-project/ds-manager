import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComponentsConnectorSelectComponent } from './components-connector-select.component';
import { MaterialsModule } from 'src/app/materials.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ComponentsConnectorKindModule } from '../components-connector-kind/components-connector-kind.module';
import { SaturnDateModule } from 'src/app/pipes/saturn-date/saturn-date.module';

@NgModule({
  declarations: [ComponentsConnectorSelectComponent],
  imports: [
    CommonModule,
    MaterialsModule,
    FlexLayoutModule,
    ComponentsConnectorKindModule,
    SaturnDateModule,
  ],
  exports: [ComponentsConnectorSelectComponent],
})
export class ComponentsConnectorSelectModule {}
