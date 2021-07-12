import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DepartmentsConnectorsComponent } from './departments-connectors.component';

const routes: Routes = [
  { path: '', component: DepartmentsConnectorsComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DepartmentsConnectorsRoutingModule {}
