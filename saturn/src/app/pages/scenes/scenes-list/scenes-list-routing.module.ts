import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ScenesListComponent } from './scenes-list.component';

const routes: Routes = [{ path: '', component: ScenesListComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ScenesListRoutingModule {}
