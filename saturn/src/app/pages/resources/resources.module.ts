import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ResourcesRoutingModule } from './resources-routing.module';
import { ResourcesComponent } from './resources.component';
import { MaterialsModule } from 'src/app/materials.module';
import { SaturnDateModule } from 'src/app/pipes/saturn-date/saturn-date.module';
import { NgxFilesizeModule } from 'ngx-filesize';
import { ResourcesDragDropDirective } from './resources-drag-drop.directive';
import { ComponentsResourcesCreateElementModule } from 'src/app/components/components-resources-create-element/components-resources-create-element.module';
import { ComponentsCommonDialogModule } from 'src/app/components/components-common-dialog/components-common-dialog.module';
import { ComponentsSceneItemModule } from 'src/app/components/components-scene-item/components-scene-item.module';
import { ScenesNavigationItemModule } from '../scenes/scenes-navigation-item/scenes-navigation-item.module';

@NgModule({
  declarations: [ResourcesComponent, ResourcesDragDropDirective],
  imports: [
    CommonModule,
    ResourcesRoutingModule,
    MaterialsModule,
    SaturnDateModule,
    NgxFilesizeModule,
    ComponentsResourcesCreateElementModule,
    ComponentsCommonDialogModule,
    ScenesNavigationItemModule,
  ],
})
export class ResourcesModule {}
