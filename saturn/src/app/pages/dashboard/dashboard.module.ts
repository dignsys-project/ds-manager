import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import { MaterialsModule } from 'src/app/materials.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ComponentsTimelineModule } from 'src/app/components/components-timeline/components-timeline.module';

@NgModule({
  declarations: [DashboardComponent],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    MaterialsModule,
    FlexLayoutModule,
    ComponentsTimelineModule,
  ],
})
export class DashboardModule {}
