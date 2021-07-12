import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ScenesCreateCommonSlideImageComponent } from './scenes-create-common-slide-image.component';
import { MaterialsModule } from 'src/app/materials.module';
import { FlexLayoutModule } from '@angular/flex-layout';

@NgModule({
  declarations: [ScenesCreateCommonSlideImageComponent],
  imports: [CommonModule, MaterialsModule, FlexLayoutModule],
  exports: [ScenesCreateCommonSlideImageComponent],
})
export class ScenesCreateCommonSlideImageModule {}
