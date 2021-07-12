import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SceneDevelompentsComponentsRssComponent } from './scene-develompents-components-rss.component';

const routes: Routes = [
  { path: '', component: SceneDevelompentsComponentsRssComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SceneDevelompentsComponentsRssRoutingModule {}
