import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComponentsConnectorSchedulesComponent } from './components-connector-schedules.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MaterialsModule } from 'src/app/materials.module';
import { ScheduleService } from 'src/app/services/schedules.service';
import { ConnectorScheduleService } from 'src/app/services/connector-schedule.service';
import { ComponentsScheduleItemModule } from '../components-schedule-item/components-schedule-item.module';
import { ComponentsSceneItemModule } from '../components-scene-item/components-scene-item.module';
import { ComponentsScheduleSceneModule } from '../components-schedule-scene/components-schedule-scene.module';
import { ComponentsConnectorSchedulesContainerModule } from '../components-connector-schedules-container/components-connector-schedules-container.module';
import { ComponentsCommonDialogModule } from '../components-common-dialog/components-common-dialog.module';

@NgModule({
  declarations: [ComponentsConnectorSchedulesComponent],
  imports: [
    CommonModule,
    MaterialsModule,
    FlexLayoutModule,
    ComponentsScheduleItemModule,
    ComponentsSceneItemModule,
    ComponentsScheduleSceneModule,
    ComponentsConnectorSchedulesContainerModule,
    ComponentsCommonDialogModule,
  ],
  providers: [ScheduleService, ConnectorScheduleService],
  exports: [ComponentsConnectorSchedulesComponent],
})
export class ComponentsConnectorSchedulesModule {}
