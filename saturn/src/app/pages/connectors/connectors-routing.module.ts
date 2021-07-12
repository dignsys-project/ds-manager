import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ConnectorsComponent } from './connectors.component';

const routes: Routes = [
  {
    path: '',
    component: ConnectorsComponent,
    children: [
      {
        path: '',
        redirectTo: 'list',
        pathMatch: 'full',
      },
      {
        path: 'list',
        loadChildren: () =>
          import('./connectors-list/connectors-list.module').then(
            (x) => x.ConnectorsListModule
          ),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ConnectorsRoutingModule {}
