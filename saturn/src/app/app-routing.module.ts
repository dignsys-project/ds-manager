import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AccountsGuard } from './pages/accounts/accounts.guard';

const routes: Routes = [
  { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
  {
    path: 'dashboard',
    loadChildren: () =>
      import('./pages/dashboard/dashboard.module').then(
        (x) => x.DashboardModule
      ),
    canActivate: [AccountsGuard],
  },
  {
    path: 'connects',
    loadChildren: () =>
      import('./pages/connects/connects.module').then((x) => x.ConnectsModule),
    canActivate: [AccountsGuard],
  },
  {
    path: 'scenes',
    loadChildren: () =>
      import('./pages/scenes/scenes.module').then((x) => x.ScenesModule),
    canActivate: [AccountsGuard],
  },
  {
    path: 'departments',
    loadChildren: () =>
      import('./pages/departments/departments.module').then(
        (x) => x.DepartmentsModule
      ),
    canActivate: [AccountsGuard],
  },
  {
    path: 'deployments',
    loadChildren: () =>
      import('./pages/deployments/deployments.module').then(
        (x) => x.DeploymentsModule
      ),
    canActivate: [AccountsGuard],
  },
  {
    path: 'managers',
    loadChildren: () =>
      import('./pages/managers/managers.module').then((x) => x.ManagersModule),
    canActivate: [AccountsGuard],
  },
  {
    path: 'accounts',
    loadChildren: () =>
      import('./pages/accounts/accounts.module').then((x) => x.AccountsModule),
  },
  {
    path: 'connectors',
    loadChildren: () =>
      import('./pages/connectors/connectors.module').then(
        (x) => x.ConnectorsModule
      ),
    canActivate: [AccountsGuard],
  },
  {
    path: 'schedules',
    loadChildren: () =>
      import('./pages/schedules/schedules.module').then(
        (x) => x.SchedulesModule
      ),
    canActivate: [AccountsGuard],
  },
  {
    path: 'disconnected',
    loadChildren: () =>
      import('./pages/disconnected/disconnected.module').then(
        (x) => x.DisconnectedModule
      ),
  },
  {
    path: 'resources/:departmentId/:folderId/:resourceId',
    loadChildren: () =>
      import('./pages/resources/resources.module').then(
        (x) => x.ResourcesModule
      ),
  },
  {
    path: '**',
    redirectTo: 'dashboard',
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { enableTracing: false, useHash: true }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
