import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ConnectorsListRoutingModule } from './connectors-list-routing.module';
import { ConnectorsListComponent } from './connectors-list.component';


@NgModule({
  declarations: [ConnectorsListComponent],
  imports: [
    CommonModule,
    ConnectorsListRoutingModule
  ]
})
export class ConnectorsListModule { }
