import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ScenesReferenceComponent } from './scenes-reference.component';

const routes: Routes = [{ path: '', component: ScenesReferenceComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ScenesReferenceRoutingModule {}
