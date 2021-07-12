import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ScenesCreateModifiedComponent } from './scenes-create-modified.component';
import { MaterialsModule } from 'src/app/materials.module';
import { FlexLayoutModule } from '@angular/flex-layout';

@NgModule({
  declarations: [ScenesCreateModifiedComponent],
  imports: [CommonModule, MaterialsModule, FlexLayoutModule],
  entryComponents: [ScenesCreateModifiedComponent],
})
export class ScenesCreateModifiedModule {}
