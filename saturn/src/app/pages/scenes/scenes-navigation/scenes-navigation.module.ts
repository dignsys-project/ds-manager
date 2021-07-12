import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ScenesNavigationRoutingModule } from './scenes-navigation-routing.module';
import { ScenesNavigationComponent } from './scenes-navigation.component';
import { MaterialsModule } from 'src/app/materials.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ScenesNavigationItemModule } from '../scenes-navigation-item/scenes-navigation-item.module';

@NgModule({
  declarations: [ScenesNavigationComponent],
  imports: [
    CommonModule,
    ScenesNavigationRoutingModule,
    MaterialsModule,
    FlexLayoutModule,
    ScenesNavigationItemModule,
  ],
})
export class ScenesNavigationModule {}
