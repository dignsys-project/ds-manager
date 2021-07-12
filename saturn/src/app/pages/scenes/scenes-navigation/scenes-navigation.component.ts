import { Location } from '@angular/common';
import {
  AfterViewInit,
  Component,
  OnDestroy,
  OnInit,
  ViewChild,
} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { take } from 'rxjs/operators';
import { AppService } from 'src/app/app.service';
import { CommonExtensions } from 'src/app/commons/common-extensions';
import { SceneBaseElement } from 'src/app/models/scene-base-element';
import { SceneConnectionElement } from 'src/app/models/scene-connection-element';
import { SceneElement } from 'src/app/models/scene-element';
import { Scene, SceneBase } from 'src/app/protocols/common_pb';
import { PrometheusService } from 'src/app/services/prometheus.service';
import { SceneNavigationService } from 'src/app/services/scene-navigation.service';
import { ScenesService } from 'src/app/services/scenes.service';
import { ScenesHeaderService } from '../scenes-header.service';

class SceneNavigationElement {
  public connections: Array<SceneBaseElement>;

  constructor(
    public scene: SceneElement,
    public sourceSceneBases: Array<SceneBaseElement>
  ) {}

  public static fromMessage(scene: Scene, sourceSceneBases: Array<SceneBase>) {
    const element = new SceneNavigationElement(
      SceneElement.fromMessage(scene),
      sourceSceneBases?.map((x) => SceneBaseElement.fromMessageBase(x))
    );

    element.connections = scene
      .getSceneconnectionsList()
      .map((x) => SceneBaseElement.fromMessageBase(x.getConnectedscenebase()));

    return element;
  }
}

@Component({
  selector: 'app-scenes-navigation',
  templateUrl: './scenes-navigation.component.html',
  styleUrls: ['./scenes-navigation.component.scss'],
})
export class ScenesNavigationComponent implements OnInit, OnDestroy {
  private _subscribe: boolean = true;

  private _sceneId: number;

  private _element: SceneNavigationElement;

  get element(): SceneNavigationElement {
    return this._element;
  }

  constructor(
    private activatedRoute: ActivatedRoute,
    private location: Location,
    private router: Router,
    private appService: AppService,
    private headerService: ScenesHeaderService,
    private sceneNavigationService: SceneNavigationService
  ) {
    this.appService.isHeader$.next(false);
    this.appService.changeHeaderSide(false);
    this.headerService.isShowTitle$.next(false);

    // get activated route params
    this.activatedRoute.params.subscribe((params) => {
      this._sceneId = params.sceneId;
      if (undefined == this._sceneId || 0 >= this._sceneId) {
        this.location.back();
        return;
      }
      this.router.routeReuseStrategy.shouldReuseRoute = () => false;
    });
  }

  ngOnDestroy(): void {
    this._subscribe = false;

    this.appService.isHeader$.next(true);
    this.appService.changeHeaderSide(true);
  }

  async ngOnInit(): Promise<void> {
    try {
      const response = await this.sceneNavigationService
        .requestGetSceneNavigation(this._sceneId)
        .pipe(take(1))
        .toPromise();

      if (CommonExtensions.isSuccess(response.getCommon())) {
        if (!response.hasScene()) {
          throw `scenes-navigation, requestGetScene, can't find scene from 'requestGetSceneNavigation'`;
        }
        const scene = response.getScene();
        if (!scene.hasBase()) {
          throw `scenes-navigation, requestGetScene, can't find scene base from requestGetSceneNavigation`;
        }
      }

      this._element = SceneNavigationElement.fromMessage(
        response.getScene(),
        response.getSourcescenebasesList()
      );
    } catch (error) {
      console.error(error);
    }
  }
}
