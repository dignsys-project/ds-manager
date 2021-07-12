import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header.component';
import { MaterialsModule } from '../materials.module';
import { FlexLayoutModule } from "@angular/flex-layout";
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [HeaderComponent],
  imports: [
    CommonModule,
    MaterialsModule,
    FlexLayoutModule,
    RouterModule
  ],
  exports: [HeaderComponent]
})
export class HeaderModule { }
