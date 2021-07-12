import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComponentsMemberKindComponent } from './components-member-kind.component';
import { FlexLayoutModule } from '@angular/flex-layout';

@NgModule({
  declarations: [ComponentsMemberKindComponent],
  imports: [CommonModule, FlexLayoutModule],
  exports: [ComponentsMemberKindComponent],
})
export class ComponentsMemberKindModule {}
