import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ConnectorsListComponent } from './connectors-list.component';

const routes: Routes = [{ path: '', component: ConnectorsListComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ConnectorsListRoutingModule {}
