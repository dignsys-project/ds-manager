import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComponentsConnectorComponent } from './components-connector.component';
import { MaterialsModule } from 'src/app/materials.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ComponentsConnectorKindModule } from '../components-connector-kind/components-connector-kind.module';
import { ComponentsDepartmentBaseItemModule } from '../components-department-base-item/components-department-base-item.module';
import { ConnectorSceneService } from '../../services/connector-scene.service';
import { ComponentsConnectorSchedulesModule } from '../components-connector-schedules/components-connector-schedules.module';
import { ComponentsSceneItemModule } from '../components-scene-item/components-scene-item.module';
import { ConnectorScheduleService } from 'src/app/services/connector-schedule.service';
import { ConnectorsService } from 'src/app/services/connectors.service';
import { ComponentsCommonNameDialogModule } from '../components-common-name-dialog/components-common-name-dialog.module';

@NgModule({
  declarations: [ComponentsConnectorComponent],
  imports: [
    CommonModule,
    MaterialsModule,
    FlexLayoutModule,
    ComponentsConnectorKindModule,
    ComponentsDepartmentBaseItemModule,
    ComponentsConnectorSchedulesModule,
    ComponentsSceneItemModule,
    ComponentsCommonNameDialogModule,
  ],
  providers: [
    ConnectorSceneService,
    ConnectorScheduleService,
    ConnectorsService,
  ],
  exports: [ComponentsConnectorComponent],
})
export class ComponentsConnectorModule {}
