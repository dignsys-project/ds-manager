import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComponentsConnectorTableComponent } from './components-connector-table.component';
import { MaterialsModule } from 'src/app/materials.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { SaturnDateModule } from 'src/app/pipes/saturn-date/saturn-date.module';
import { ConnectorsService } from 'src/app/services/connectors.service';
import { ComponentsConnectorKindModule } from '../components-connector-kind/components-connector-kind.module';

@NgModule({
  declarations: [ComponentsConnectorTableComponent],
  imports: [
    CommonModule,
    MaterialsModule,
    FlexLayoutModule,
    SaturnDateModule,
    ComponentsConnectorKindModule,
  ],
  exports: [ComponentsConnectorTableComponent],
  providers: [ConnectorsService],
})
export class ComponentsConnectorTableModule {}
