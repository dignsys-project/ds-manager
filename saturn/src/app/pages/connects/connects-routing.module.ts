import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ConnectsComponent } from './connects.component';

const routes: Routes = [
  {
    path: '',
    component: ConnectsComponent,
    children: [
      {
        path: '',
        redirectTo: 'backends',
        pathMatch: 'full',
      },
      {
        path: 'backends',
        loadChildren: () =>
          import('./connects-backends/connects-backends.module').then(
            (x) => x.ConnectsBackendsModule
          ),
      },
      {
        path: 'connectors',
        loadChildren: () =>
          import('./connects-connectors-v2/connects-connectors-v2.module').then(
            (x) => x.ConnectsConnectorsV2Module
          ),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ConnectsRoutingModule {}
