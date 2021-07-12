import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DepartmentsMembersDetailComponent } from './departments-members-detail.component';

const routes: Routes = [
  { path: '', component: DepartmentsMembersDetailComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DepartmentsMembersDetailRoutingModule {}
