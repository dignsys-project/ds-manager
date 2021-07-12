import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ScenesCreateCommonCoordinateComponent } from './scenes-create-common-coordinate.component';
import { MaterialsModule } from 'src/app/materials.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ScenesCreateCommonTextModule } from '../scenes-create-common-text/scenes-create-common-text.module';

@NgModule({
  declarations: [ScenesCreateCommonCoordinateComponent],
  imports: [
    CommonModule,
    MaterialsModule,
    FlexLayoutModule,
    ScenesCreateCommonTextModule,
  ],
  exports: [ScenesCreateCommonCoordinateComponent],
})
export class ScenesCreateCommonCoordinateModule {}
