import {
  Component,
  OnInit,
  ViewChild,
  OnDestroy,
  Provider,
} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Location } from '@angular/common';
import { ScenesService } from '../../../services/scenes.service';
import { take } from 'rxjs/operators';
import { CommonExtensions } from 'src/app/commons/common-extensions';
import { ScenesHeaderService } from '../scenes-header.service';
import { AbstractSceneCommon } from 'src/app/components/components-scene/abstract-scene-common';
import { ScenesSceneCanvasComponent } from './scenes-scene-canvas/scenes-scene-canvas.component';
import { WeatherService } from 'src/app/services/weather.service';
import { WeatherElement } from 'src/app/models/weather-element';
import { AppService } from 'src/app/app.service';
import { BreakpointObserver } from '@angular/cdk/layout';
import { ResourceElement } from 'src/app/models/resource-element';
import { SceneBaseElement } from 'src/app/models/scene-base-element';

@Component({
  selector: 'app-scenes-scene',
  templateUrl: './scenes-scene.component.html',
  styleUrls: ['./scenes-scene.component.scss'],
})
export class ScenesSceneComponent implements OnInit, OnDestroy {
  @ViewChild(ScenesSceneCanvasComponent, { static: true })
  canvasComponent: ScenesSceneCanvasComponent;

  sceneId: number;

  canvas: AbstractSceneCommon;

  weatherElement: WeatherElement;

  private m_Timer: any;

  constructor(
    private activatedRoute: ActivatedRoute,
    private location: Location,

    private scenesService: ScenesService,
    private headerService: ScenesHeaderService,
    private weatherService: WeatherService,
    private appService: AppService,
    private breakpointObserver: BreakpointObserver,
    private router: Router
  ) {
    this.appService.changeHeaderSide(
      false,
      'scenes-create component, constructor()'
    );

    this.appService.isHeader$.next(false);
    this.headerService.isShowTitle$.next(false);

    // get activated route params
    this.activatedRoute.params.subscribe((params) => {
      this.sceneId = params.sceneId;
      if (undefined == this.sceneId || 0 >= this.sceneId) {
        this.location.back();
        return;
      }
      this.router.routeReuseStrategy.shouldReuseRoute = () => false;
    });

    this.requestWeather();
    this.m_Timer = setTimeout(() => this.requestWeather, 60 * 1000);
  }
  ngOnDestroy(): void {
    if (undefined != this.m_Timer) {
      clearTimeout(this.m_Timer);
    }

    this.appService.isHeader$.next(true);

    this.appService.changeHeaderSide(
      !this.breakpointObserver.isMatched('(max-width: 960px)'),
      'scenes-scene component, ngOnDestory()'
    );
    this.headerService.isShowTitle$.next(true);
  }

  async ngOnInit(): Promise<any> {
    // request GET scene/{sceneId}/blueprint
    try {
      const response = await this.scenesService
        .requestGetSceneBlueprintV2(this.sceneId)
        .pipe(take(1))
        .toPromise();

      if (CommonExtensions.isSuccess(response.getCommon())) {
        const blueprint = response.getBlueprint();
        this.headerService.title$.next(blueprint.getName());

        this.canvasComponent.makeScenefromBlueprintAsync(
          blueprint,
          response
            .getResourcesList()
            .map((x) => ResourceElement.fromMessage(x)),
          response
            .getScenebasesList()
            .map((x) => SceneBaseElement.fromMessageBase(x))
        );
      }
    } catch (error) {
      console.error(error);
    }
  }

  private requestWeather() {
    this.weatherService
      .requestGetWeather()
      .pipe(take(1))
      .subscribe((response) => {
        if (CommonExtensions.isSuccess(response.getCommon())) {
          this.weatherElement = WeatherElement.fromMessage(
            response.getWeather(),
            response.getDatetimeseconds()
          );
        }
      });
  }
}
