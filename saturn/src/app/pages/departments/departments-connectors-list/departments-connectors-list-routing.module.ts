import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DepartmentsConnectorsListComponent } from './departments-connectors-list.component';

const routes: Routes = [
  { path: '', component: DepartmentsConnectorsListComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DepartmentsConnectorsListRoutingModule {}
