import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SceneDevelopmentsComponent } from './scene-developments.component';

const routes: Routes = [
  {
    path: '',
    component: SceneDevelopmentsComponent,
    children: [
      {
        path: '',
        redirectTo: 'components-rss',
        pathMatch: 'full',
      },
      {
        path: 'components-subtitle',
        loadChildren: () =>
          import(
            './scene-developments-components-subtitle/scene-developments-components-subtitle.module'
          ).then((x) => x.SceneDevelopmentsSlideImageModule),
      },
      {
        path: 'components-slide-image',
        loadChildren: () =>
          import(
            './scene-developments-slide-image/scene-developments-slide-image.module'
          ).then((x) => x.SceneDevelopmentsSlideImageModule),
      },
      {
        path: 'connector-scene-stepper',
        loadChildren: () =>
          import(
            './scene-developments-connector-scene-stepper/scene-developments-connector-scene-stepper.module'
          ).then((x) => x.SceneDevelopmentsConnectorSceneStepperModule),
      },
      {
        path: 'scene-resource',
        loadChildren: () =>
          import(
            './scene-developments-scene-resource/scene-developments-scene-resource.module'
          ).then((x) => x.SceneDevelopmentsSceneResourceModule),
      },
      {
        path: 'scene-list',
        loadChildren: () =>
          import(
            './scene-developments-scene-list/scene-developments-scene-list.module'
          ).then((x) => x.SceneDevelopmentsSceneListModule),
      },
      {
        path: 'components-rss',
        loadChildren: () =>
          import(
            './scene-develompents-components-rss/scene-develompents-components-rss.module'
          ).then((x) => x.SceneDevelompentsComponentsRssModule),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SceneDevelopmentsRoutingModule {}
