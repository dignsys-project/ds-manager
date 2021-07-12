import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SchedulesSchedulesComponent } from './schedules-schedules.component';

const routes: Routes = [{ path: '', component: SchedulesSchedulesComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SchedulesSchedulesRoutingModule {}
