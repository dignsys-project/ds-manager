import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ScenesValidateComponent } from './scenes-validate.component';

const routes: Routes = [{ path: '', component: ScenesValidateComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ScenesValidateRoutingModule {}
