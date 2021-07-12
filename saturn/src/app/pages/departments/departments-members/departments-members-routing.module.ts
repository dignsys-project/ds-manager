import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DepartmentsMembersComponent } from './departments-members.component';

const routes: Routes = [{ path: '', component: DepartmentsMembersComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DepartmentsMembersRoutingModule {}
