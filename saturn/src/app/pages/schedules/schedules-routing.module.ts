import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SchedulesComponent } from './schedules.component';

const routes: Routes = [
  {
    path: '',
    component: SchedulesComponent,
    children: [
      {
        path: '',
        redirectTo: 'schedules',
        pathMatch: 'full',
      },
      {
        path: 'schedules',
        loadChildren: () =>
          import('./schedules-schedules/schedules-schedules.module').then(
            (x) => x.SchedulesSchedulesModule
          ),
      },
      {
        path: 'schedules/add',
        loadChildren: () =>
          import(
            './schedules-schedules-add/schedules-schedules-add.module'
          ).then((x) => x.SchedulesSchedulesAddModule),
      },
      {
        path: 'scenes',
        loadChildren: () =>
          import('./schedules-scenes/schedules-scenes.module').then(
            (x) => x.SchedulesScenesModule
          ),
      },
      {
        path: 'scenes/add',
        loadChildren: () =>
          import('./schedules-scenes-add/schedules-scenes-add.module').then(
            (x) => x.SchedulesScenesAddModule
          ),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SchedulesRoutingModule {}
