import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DepartmentsItemComponent } from './departments-item.component';

const routes: Routes = [{ path: '', component: DepartmentsItemComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DepartmentsItemRoutingModule {}
