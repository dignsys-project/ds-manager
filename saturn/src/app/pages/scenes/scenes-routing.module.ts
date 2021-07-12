import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { environment } from 'src/environments/environment';
import { ScenesComponent } from './scenes.component';

const routes: Routes = [
  {
    path: '',
    component: ScenesComponent,
    children: [
      {
        path: '',
        redirectTo: 'list',
        pathMatch: 'full',
      },
      {
        path: 'create',
        loadChildren: () =>
          import('./scenes-create/scenes-create.module').then(
            (x) => x.ScenesCreateModule
          ),
      },
      {
        path: 'resource',
        loadChildren: () =>
          import(
            './scenes-resource-list-v2/scenes-resource-list-v2.module'
          ).then((x) => x.ScenesResourceListV2Module),
      },
      {
        path: 'list',
        loadChildren: () =>
          import('./scenes-list-v2/scenes-list-v2.module').then(
            (x) => x.ScenesListV2Module
          ),
      },
      {
        path: 'scene/:sceneId',
        loadChildren: () =>
          import('./scenes-scene/scenes-scene.module').then(
            (x) => x.ScenesSceneModule
          ),
      },
      {
        path: 'scene-reference/:sceneId',
        loadChildren: () =>
          import('./scenes-reference/scenes-reference.module').then(
            (x) => x.ScenesReferenceModule
          ),
      },
      {
        path: 'scene-navigation/:sceneId',
        loadChildren: () =>
          import('./scenes-navigation/scenes-navigation.module').then(
            (x) => x.ScenesNavigationModule
          ),
      },
      {
        path: 'validate',
        loadChildren: () =>
          import('./scenes-validate/scenes-validate.module').then(
            (x) => x.ScenesValidateModule
          ),
      },
    ],
  },
];

if (!environment.production) {
  routes[0].children.push({
    path: 'developments',
    loadChildren: () =>
      import('./scene-developments/scene-developments.module').then(
        (x) => x.SceneDevelopmentsModule
      ),
  });
}

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ScenesRoutingModule {}
