import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ScenesCreateMenuComponent } from './scenes-create-menu.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MaterialsModule } from 'src/app/materials.module';

@NgModule({
  declarations: [ScenesCreateMenuComponent],
  imports: [CommonModule, FlexLayoutModule, MaterialsModule],
  entryComponents: [ScenesCreateMenuComponent],
})
export class ScenesCreateMenuModule {}
