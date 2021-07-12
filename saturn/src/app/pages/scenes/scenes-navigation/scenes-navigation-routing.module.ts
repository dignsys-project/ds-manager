import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ScenesNavigationComponent } from './scenes-navigation.component';

const routes: Routes = [{ path: '', component: ScenesNavigationComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ScenesNavigationRoutingModule {}
