import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DepartmentsMembersListComponent } from './departments-members-list.component';

const routes: Routes = [
  { path: '', component: DepartmentsMembersListComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DepartmentsMembersListRoutingModule {}
