import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ConnectsConnectorsComponent } from './connects-connectors.component';

const routes: Routes = [{ path: '', component: ConnectsConnectorsComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ConnectsConnectorsRoutingModule {}
