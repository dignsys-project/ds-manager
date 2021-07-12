import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SchedulesScenesAddComponent } from './schedules-scenes-add.component';

const routes: Routes = [{ path: '', component: SchedulesScenesAddComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SchedulesScenesAddRoutingModule {}
