import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ScenesReferenceRoutingModule } from './scenes-reference-routing.module';
import { ScenesReferenceComponent } from './scenes-reference.component';
import { MaterialsModule } from 'src/app/materials.module';
import { FlexLayoutModule } from '@angular/flex-layout';

@NgModule({
  declarations: [ScenesReferenceComponent],
  imports: [
    CommonModule,
    ScenesReferenceRoutingModule,
    MaterialsModule,
    FlexLayoutModule,
  ],
})
export class ScenesReferenceModule {}
