import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComponentsScenesComponent } from './components-scenes.component';
import { MaterialsModule } from 'src/app/materials.module';
import { FlexLayoutModule } from '@angular/flex-layout';

@NgModule({
  declarations: [ComponentsScenesComponent],
  imports: [CommonModule, MaterialsModule, FlexLayoutModule],
  exports: [ComponentsScenesComponent],
})
export class ComponentsScenesModule {}
