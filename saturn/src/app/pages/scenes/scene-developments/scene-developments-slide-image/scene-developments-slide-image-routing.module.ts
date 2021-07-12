import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SceneDevelopmentsSlideImageComponent } from './scene-developments-slide-image.component';

const routes: Routes = [
  { path: '', component: SceneDevelopmentsSlideImageComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SceneDevelopmentsSlideImageRoutingModule {}
