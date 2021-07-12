import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DepartmentsConnectorComponent } from './departments-connector.component';

const routes: Routes = [{ path: '', component: DepartmentsConnectorComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DepartmentsConnectorRoutingModule {}
