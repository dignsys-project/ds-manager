import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ConnectsConnectorsV2Component } from './connects-connectors-v2.component';

const routes: Routes = [{ path: '', component: ConnectsConnectorsV2Component }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ConnectsConnectorsV2RoutingModule {}
