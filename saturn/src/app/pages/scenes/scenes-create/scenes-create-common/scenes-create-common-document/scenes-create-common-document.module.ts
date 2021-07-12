import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialsModule } from 'src/app/materials.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ScenesCreateCommonDocumentComponent } from './scenes-create-common-document.component';

@NgModule({
  declarations: [ScenesCreateCommonDocumentComponent],
  imports: [CommonModule, MaterialsModule, FlexLayoutModule],
  exports: [ScenesCreateCommonDocumentComponent],
})
export class ScenesCreateCommonDocumentModule {}
