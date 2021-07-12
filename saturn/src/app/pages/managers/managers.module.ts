import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ManagersRoutingModule } from './managers-routing.module';
import { ManagersComponent } from './managers.component';
import { MaterialsModule } from 'src/app/materials.module';
import { ComponentsMemberItemModule } from 'src/app/components/components-member-item/components-member-item.module';
import { FlexLayoutModule } from '@angular/flex-layout';

@NgModule({
  declarations: [ManagersComponent],
  imports: [
    CommonModule,
    ManagersRoutingModule,
    MaterialsModule,
    ComponentsMemberItemModule,
    FlexLayoutModule,
  ],
})
export class ManagersModule {}
