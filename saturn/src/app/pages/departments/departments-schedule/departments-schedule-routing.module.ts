import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DepartmentsScheduleComponent } from './departments-schedule.component';

const routes: Routes = [{ path: '', component: DepartmentsScheduleComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DepartmentsScheduleRoutingModule {}
