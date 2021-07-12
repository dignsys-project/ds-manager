import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ScenesCreateCommonWebComponent } from './scenes-create-common-web.component';
import { MaterialsModule } from 'src/app/materials.module';
import { FlexLayoutModule } from '@angular/flex-layout';

@NgModule({
  declarations: [ScenesCreateCommonWebComponent],
  imports: [CommonModule, MaterialsModule, FlexLayoutModule],
  exports: [ScenesCreateCommonWebComponent],
})
export class ScenesCreateCommonWebModule {}
