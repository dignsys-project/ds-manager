import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ScenesCreateCommonTextComponent } from './scenes-create-common-text.component';
import { MaterialsModule } from 'src/app/materials.module';
import { FlexLayoutModule } from '@angular/flex-layout';

@NgModule({
  declarations: [ScenesCreateCommonTextComponent],
  imports: [CommonModule, MaterialsModule, FlexLayoutModule],
  exports: [ScenesCreateCommonTextComponent],
})
export class ScenesCreateCommonTextModule {}
