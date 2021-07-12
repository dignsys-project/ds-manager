import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SchedulesScenesComponent } from './schedules-scenes.component';

const routes: Routes = [{ path: '', component: SchedulesScenesComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SchedulesScenesRoutingModule {}
