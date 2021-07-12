import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComponentsConnectorSchedulesContainerComponent } from './components-connector-schedules-container.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MaterialsModule } from 'src/app/materials.module';
import { ComponentsScheduleItemModule } from '../components-schedule-item/components-schedule-item.module';
import { ComponentsSceneItemModule } from '../components-scene-item/components-scene-item.module';
import { SaturnDateModule } from 'src/app/pipes/saturn-date/saturn-date.module';

@NgModule({
  declarations: [ComponentsConnectorSchedulesContainerComponent],
  imports: [
    CommonModule,
    FlexLayoutModule,
    MaterialsModule,
    ComponentsScheduleItemModule,
    ComponentsSceneItemModule,
    SaturnDateModule,
  ],
  exports: [ComponentsConnectorSchedulesContainerComponent],
})
export class ComponentsConnectorSchedulesContainerModule {}
