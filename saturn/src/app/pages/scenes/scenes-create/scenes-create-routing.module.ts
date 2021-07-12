import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ScenesCreateComponent } from './scenes-create.component';

const routes: Routes = [
  {
    path: '',
    component: ScenesCreateComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ScenesCreateRoutingModule {}
