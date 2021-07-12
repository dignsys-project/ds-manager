import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialsModule } from 'src/app/materials.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ScenesNavigationItemComponent } from './scenes-navigation-item.component';

@NgModule({
  declarations: [ScenesNavigationItemComponent],
  imports: [CommonModule, MaterialsModule, FlexLayoutModule],
  exports: [ScenesNavigationItemComponent],
})
export class ScenesNavigationItemModule {}
