import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ScenesCreateCommonImageComponent } from './scenes-create-common-image.component';
import { MaterialsModule } from 'src/app/materials.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ScenesCreateCommonTextModule } from '../scenes-create-common-text/scenes-create-common-text.module';

@NgModule({
  declarations: [ScenesCreateCommonImageComponent],
  imports: [
    CommonModule,
    MaterialsModule,
    FlexLayoutModule,
    ScenesCreateCommonTextModule,
  ],
  exports: [ScenesCreateCommonImageComponent],
})
export class ScenesCreateCommonImageModule {}
