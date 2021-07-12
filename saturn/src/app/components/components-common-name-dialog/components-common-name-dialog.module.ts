import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComponentsCommonNameDialogComponent } from './components-common-name-dialog.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MaterialsModule } from 'src/app/materials.module';

@NgModule({
  declarations: [ComponentsCommonNameDialogComponent],
  imports: [CommonModule, MaterialsModule, FlexLayoutModule],
  entryComponents: [ComponentsCommonNameDialogComponent],
  exports: [ComponentsCommonNameDialogComponent],
})
export class ComponentsCommonNameDialogModule {}
