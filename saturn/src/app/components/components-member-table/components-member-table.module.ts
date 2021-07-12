import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComponentsMemberTableComponent } from './components-member-table.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MaterialsModule } from 'src/app/materials.module';
import { SaturnDateModule } from 'src/app/pipes/saturn-date/saturn-date.module';
import { ComponentsMemberKindModule } from '../components-member-kind/components-member-kind.module';
import { ComponentsMemberTableService } from './components-member-table.service';

@NgModule({
  declarations: [ComponentsMemberTableComponent],
  imports: [
    CommonModule,
    MaterialsModule,
    FlexLayoutModule,
    SaturnDateModule,
    ComponentsMemberKindModule,
  ],
  exports: [ComponentsMemberTableComponent],
  providers: [ComponentsMemberTableService],
})
export class ComponentsMemberTableModule {}
