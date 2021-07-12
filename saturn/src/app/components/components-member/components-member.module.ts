import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComponentsMemberComponent } from './components-member.component';
import { MaterialsModule } from 'src/app/materials.module';
import { FlexLayoutModule } from '@angular/flex-layout';

@NgModule({
  declarations: [ComponentsMemberComponent],
  imports: [CommonModule, MaterialsModule, FlexLayoutModule],
  exports: [ComponentsMemberComponent],
})
export class ComponentsMemberModule {}
