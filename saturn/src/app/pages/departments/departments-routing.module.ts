import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DepartmentsComponent } from './departments.component';

const routes: Routes = [
  {
    path: '',
    component: DepartmentsComponent,
    children: [
      {
        path: '',
        redirectTo: 'items',
        pathMatch: 'full',
      },
      {
        path: 'items',
        loadChildren: () =>
          import('./departments-items/departments-items.module').then(
            (x) => x.DepartmentsItemsModule
          ),
      },
      {
        path: 'item/:departmentId',
        loadChildren: () =>
          import('./departments-item/departments-item.module').then(
            (x) => x.DepartmentsItemModule
          ),
      },
      {
        path: 'scene/:departmentId',
        loadChildren: () =>
          import('./departments-scene/departments-scene.module').then(
            (x) => x.DepartmentsSceneModule
          ),
      },
      {
        path: 'schedule/:departmentId',
        loadChildren: () =>
          import('./departments-schedule/departments-schedule.module').then(
            (x) => x.DepartmentsScheduleModule
          ),
      },
      {
        path: 'emergency/:departmentId',
        loadChildren: () =>
          import('./departments-emergency/departments-emergency.module').then(
            (x) => x.DepartmentsEmergencyModule
          ),
      },
      {
        path: 'list',
        loadChildren: () =>
          import('./departments-list/departments-list.module').then(
            (x) => x.DepartmentListModule
          ),
      },
      {
        path: 'members/:departmentId',
        loadChildren: () =>
          import('./departments-members/departments-members.module').then(
            (x) => x.DepartmentsMembersModule
          ),
      },
      {
        path: 'members',
        loadChildren: () =>
          import(
            './departments-members-list/departments-members-list.module'
          ).then((x) => x.DepartmentsMembersListModule),
      },
      {
        path: 'member/:memberId',
        loadChildren: () =>
          import(
            './departments-members-detail/departments-members-detail.module'
          ).then((x) => x.DepartmentsMembersDetailModule),
      },
      {
        path: 'connectors',
        loadChildren: () =>
          import(
            './departments-connectors-list/departments-connectors-list.module'
          ).then((x) => x.DepartmentsConnectorsListModule),
      },
      {
        path: 'connectors/:departmentId',
        loadChildren: () =>
          import('./departments-connectors/departments-connectors.module').then(
            (x) => x.DepartmentsConnectorsModule
          ),
      },
      {
        path: 'connector/:connectorId',
        loadChildren: () =>
          import('./departments-connector/departments-connector.module').then(
            (x) => x.DepartmentsConnectorModule
          ),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DepartmentsRoutingModule {}
