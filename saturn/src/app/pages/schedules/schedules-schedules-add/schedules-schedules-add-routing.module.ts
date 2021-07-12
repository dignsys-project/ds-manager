import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SchedulesSchedulesAddComponent } from './schedules-schedules-add.component';

const routes: Routes = [
  { path: '', component: SchedulesSchedulesAddComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SchedulesSchedulesAddRoutingModule {}
