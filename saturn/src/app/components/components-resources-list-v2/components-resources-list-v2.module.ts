import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialsModule } from 'src/app/materials.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { SaturnDateModule } from 'src/app/pipes/saturn-date/saturn-date.module';
import { ComponentsResourcesListV2Component } from './components-resources-list-v2.component';
import { NgxFilesizeModule } from 'ngx-filesize';
@NgModule({
  declarations: [ComponentsResourcesListV2Component],
  imports: [
    CommonModule,
    MaterialsModule,
    FlexLayoutModule,
    SaturnDateModule,
    NgxFilesizeModule,
  ],
  exports: [ComponentsResourcesListV2Component],
})
export class ComponentsResourcesListV2Module {}
