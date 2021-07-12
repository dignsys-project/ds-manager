import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ScenesCreateComponentsComponent } from './scenes-create-components.component';
import { MaterialsModule } from 'src/app/materials.module';
import { FlexLayoutModule } from '@angular/flex-layout';

@NgModule({
  declarations: [ScenesCreateComponentsComponent],
  imports: [CommonModule, MaterialsModule, FlexLayoutModule],
  exports: [ScenesCreateComponentsComponent],
})
export class ScenesCreateComponentsModule {}
