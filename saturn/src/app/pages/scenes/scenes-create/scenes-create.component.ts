import {
  Component,
  OnInit,
  ViewChild,
  OnDestroy,
  ElementRef,
  ChangeDetectorRef,
} from '@angular/core';
import { ScenesHeaderService } from '../scenes-header.service';
import { AbstractSceneCommon } from 'src/app/components/components-scene/abstract-scene-common';
import { ScenesService } from '../../../services/scenes.service';
import { ComponentsSceneCanvasComponent } from 'src/app/components/components-scene/components-scene-canvas/components-scene-canvas.component';
import { filter, map, take, takeWhile } from 'rxjs/operators';
import { AppService } from 'src/app/app.service';
import { Observable, BehaviorSubject } from 'rxjs';
import { MatDialog } from '@angular/material/dialog';
import { SceneBase, SceneBlueprint } from 'src/app/protocols/common_pb';
import { Overlay, OverlayRef } from '@angular/cdk/overlay';
import { CommonExtensions } from 'src/app/commons/common-extensions';
import { ComponentPortal } from '@angular/cdk/portal';
import { ScenesCreateModifiedComponent } from '../scenes-create-modified/scenes-create-modified.component';
import { SceneElement } from 'src/app/models/scene-element';
import { ScenesLayoutService } from '../scenes-layout.service';
import { ScenesCreateService } from '../scenes-create.service';
import { WeatherService } from 'src/app/services/weather.service';
import { WeatherElement } from 'src/app/models/weather-element';
import { ScenesCreateMenuComponent } from './scenes-create-menu/scenes-create-menu.component';
import { parseLazyRoute } from '@angular/compiler/src/aot/lazy_routes';
import { ScenesCreateCopyPasteService } from './scenes-create-copy-paste.service';
import { IPosition } from 'src/app/common/position';
import { ISize } from 'src/app/common/size';
import { ActivatedRoute } from '@angular/router';
import { SceneBaseElement } from 'src/app/models/scene-base-element';
import { ResourceElement } from 'src/app/models/resource-element';

@Component({
  selector: 'app-scenes-create',
  templateUrl: './scenes-create.component.html',
  styleUrls: ['./scenes-create.component.scss'],
  providers: [ScenesService, ScenesCreateCopyPasteService],
})
export class ScenesCreateComponent implements OnInit, OnDestroy {
  private m_bSubscribe: boolean = true;

  private _modifiedSceneElement: SceneBaseElement;

  private m_OverlayRef: OverlayRef;

  private _canvas: AbstractSceneCommon;

  private m_Timer: any;

  // 컴포넌트 리스트 뷰
  private _bShowComponents: boolean = false;

  @ViewChild(ComponentsSceneCanvasComponent, { static: true })
  canvas: ComponentsSceneCanvasComponent;

  @ViewChild('container', { static: true })
  container: ElementRef<HTMLElement>;

  isDarkMode$: Observable<boolean>;

  isSelected$: Observable<boolean>;

  isFullScreenMode: boolean = false;

  _selectedSceneCommon: AbstractSceneCommon;

  weatherElement: WeatherElement;
  weatherRequestSeconds: number;

  get sceneCommon(): AbstractSceneCommon {
    return this._selectedSceneCommon;
  }

  get sceneCommonPosition(): IPosition {
    return this._selectedSceneCommon?.position;
  }

  get sceneCommonSize(): ISize {
    return this._selectedSceneCommon?.size;
  }

  get sceneCommonZIndex(): number {
    return this._selectedSceneCommon?.zIndex;
  }

  get isShowCanvasMenu(): boolean {
    return (
      !this.isShowComponents && true == this._selectedSceneCommon?.isCanvas()
    );
  }

  get isShowPartMenu(): boolean {
    return !this.isShowComponents && !this.isShowCanvasMenu;
  }

  get isShowComponents(): boolean {
    return this._bShowComponents;
  }

  get canvasSize(): string {
    const canvasSize =
      undefined == this._canvas
        ? ''
        : `${this._canvas.size.width} x ${this._canvas.size.height}`;
    return canvasSize;
  }

  get hasCanvas(): boolean {
    return undefined != this._canvas;
  }

  get canvasWidth(): number {
    return this._canvas?.size.width;
  }

  get canvasHeight(): number {
    return this._canvas?.size.height;
  }

  private _init: boolean = false;

  private _sceneId: number;
  private _isDuplicated: boolean;

  constructor(
    private appService: AppService,
    private scenesHeaderService: ScenesHeaderService,
    private scenesService: ScenesService,
    private scenesCreateService: ScenesCreateService,
    private dialog: MatDialog,
    private overlay: Overlay,
    private layoutService: ScenesLayoutService,
    private cd: ChangeDetectorRef,
    private weatherService: WeatherService,
    private _activatedRoute: ActivatedRoute
  ) {
    // app is dark mode theme
    this.isDarkMode$ = this.appService.isDarkMode$.asObservable();

    // set scene component title
    this.scenesHeaderService.title$.next('씬 생성');

    // get is selected component
    this.isSelected$ = this.scenesCreateService.selected$
      .pipe(takeWhile(() => this.m_bSubscribe))
      .pipe(map((x) => undefined != x));

    // canvas size
    this.scenesCreateService.canvas$.subscribe((canvas) => {
      if (undefined != canvas) {
        setTimeout(() => {
          this._canvas = canvas;
          this.cd.detectChanges();
        }, 0);
      }
    });

    // get current is selected component
    this.scenesCreateService.selected$
      .pipe(filter(() => this.m_bSubscribe))
      .pipe(filter((x) => undefined != x))
      .subscribe((sceneCommon) => (this._selectedSceneCommon = sceneCommon));

    // timer for weather service
    this.requestWeather();
    this.m_Timer = setInterval(() => {
      this.requestWeather();
    }, 60 * 1000);

    if (!this._init) {
      this.scenesCreateService.select(this._canvas);
    }
  }

  async ngOnInit() {
    this._activatedRoute.queryParams
      .pipe(takeWhile(() => this.m_bSubscribe))
      .subscribe((params) => {
        if (undefined != params.sceneId) {
          try {
            const sceneId = Number.parseInt(params.sceneId);

            let isDuplicated: boolean = false;
            if (undefined != params.isDuplicated) {
              isDuplicated = params.isDuplicated.toLowerCase() === 'true';
            }

            this.loadSceneBlueprintAsync(sceneId, isDuplicated)
              .then(() => {
                this.m_OverlayRef.detach();
                this.m_OverlayRef = null;
              })
              .catch(() => {
                this.m_OverlayRef.detach();
                this.m_OverlayRef = null;
              });
          } catch (error) {
            console.error(error);
          }
        }
      });

    // 48px is scene container-title
    // 16px is 1em
    this.layoutService.minSceneHeight$.subscribe(
      (x) => (this.container.nativeElement.style.height = `${x - 48 - 16}px`)
    );
  }

  ngOnDestroy(): void {
    if (undefined != this.m_OverlayRef) {
      this.m_OverlayRef.detach();
    }
    this.m_bSubscribe = false;

    this.scenesCreateService.clear();

    if (undefined != this.m_Timer) {
      clearInterval(this.m_Timer);
    }
  }

  /**
   * on clicked components list
   */
  onClickedSelectComponents() {
    this._bShowComponents = !this._bShowComponents;
  }

  /**
   * on clicked select canvas
   */
  onClickedSelectCanvas() {
    const canvas = this.scenesCreateService.elements.find((x) => x.isCanvas());
    if (undefined != canvas) {
      this.scenesCreateService.select(canvas);
    }
  }

  // obsolete
  onClickedFullScreen() {
    this.isFullScreenMode = !this.isFullScreenMode;
    this.appService.isHeader$.next(!this.isFullScreenMode);
    this.appService.changeHeaderSide(
      !this.isFullScreenMode,
      'scenes-create component, onClickedFullScreen'
    );
    this.scenesHeaderService.isShowTitle$.next(!this.isFullScreenMode);
  }

  // on clicked create component
  onClickedCreateComponent() {
    ScenesCreateMenuComponent.create(this.dialog)
      .afterClosed()
      .pipe(take(1))
      .pipe(filter((x) => x != undefined))
      .subscribe((kind) => {
        this.canvas.createComponent(true, kind);
      });
  }

  // on save scene
  async onClickedSaveScene() {
    try {
      const canvas = await this.scenesCreateService.canvas$
        .pipe(take(1))
        .toPromise();
      const canvasComponent = canvas as ComponentsSceneCanvasComponent;
      await canvasComponent.saveSceneCanvas();
    } catch (error) {
      console.error(error);
    }
  }

  /**
   * load scene blueprint from scene id
   * @param sceneId scene id
   * @param isDuplicated duplicated
   */
  private async loadSceneBlueprintAsync(
    sceneId: number,
    isDuplicated: boolean
  ): Promise<boolean> {
    // get scene id for modify, duplication

    if (undefined == sceneId) {
      return false;
    }

    // create overlay
    this.m_OverlayRef = this.overlay.create({
      positionStrategy: this.overlay
        .position()
        .global()
        .centerHorizontally()
        .centerVertically(),
      hasBackdrop: true,
    });

    // attach overlay component
    this.m_OverlayRef.attach(
      new ComponentPortal(ScenesCreateModifiedComponent)
    );

    // GET scene/v2/{id}/blueprint
    try {
      const response = await this.scenesService
        .requestGetSceneBlueprintV2(sceneId)
        .pipe(take(1))
        .toPromise();

      const common = response.getCommon();
      if (CommonExtensions.isNoContent(common)) {
        return false;
      } else if (CommonExtensions.isSuccess(common)) {
        if (!response.hasScenebase()) {
          return false;
        }

        const element = SceneBaseElement.fromMessageBase(
          response.getScenebase()
        );

        let sceneName = element.name;

        // duplicated name is change and scene id is initialize
        if (isDuplicated) {
          element.sceneId = 0;
          sceneName += '(복사)';
        }

        // set scene title name
        this.scenesHeaderService.title$.next(`${sceneName} 씬 수정`);

        this._modifiedSceneElement = element;

        // load scene
        return await this.loadSceneAsync(
          element.sceneId,
          sceneName,
          response.getBlueprint(),
          response
            .getResourcesList()
            .map((x) => ResourceElement.fromMessage(x)),
          response
            .getScenebasesList()
            .map((x) => SceneBaseElement.fromMessageBase(x))
        );
      } else {
        return false;
      }
    } catch (error) {
      console.error(error);
    }

    return false;
  }

  // 씬 불러오기
  private async loadSceneAsync(
    sceneId: number,
    sceneName: string,
    blueprint: SceneBlueprint,
    resources: Array<ResourceElement>,
    sceneBases: Array<SceneBaseElement>
  ): Promise<boolean> {
    // find canvas
    const canvas = await this.scenesCreateService.canvas$
      .pipe(take(1))
      .toPromise();

    const canvasComponent = canvas as ComponentsSceneCanvasComponent;
    if (undefined == canvasComponent) {
      return false;
    }

    await canvasComponent.makeScenefromBlueprintAsync(
      sceneId,
      sceneName,
      blueprint,
      resources,
      sceneBases
    );

    return true;
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
