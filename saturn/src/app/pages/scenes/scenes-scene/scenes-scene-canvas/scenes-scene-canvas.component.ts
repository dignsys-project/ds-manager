import {
  Component,
  OnInit,
  Input,
  ViewChild,
  ViewContainerRef,
  ElementRef,
  ComponentFactoryResolver,
  OnDestroy,
  NgZone,
} from '@angular/core';
import { AbstractSceneCommon } from 'src/app/components/components-scene/abstract-scene-common';
import {
  SCENE_COMPONENTS_KIND,
  SceneBlueprint,
  ScenePart,
} from 'src/app/protocols/common_pb';
import { ScenesSceneComponentComponent } from '../scenes-scene-component/scenes-scene-component.component';
import { ScenesSceneService } from '../scenes-scene.service';
import { ResourceElement } from 'src/app/models/resource-element';
import { SceneExtensions } from 'src/app/commons/scene-extensions';
import { ScenesService } from 'src/app/services/scenes.service';
import { DispatchSceneElement } from 'src/app/models/dispatch-scene-element';
import { take } from 'rxjs/operators';
import { CommonExtensions } from 'src/app/commons/common-extensions';
import { SceneBaseElement } from 'src/app/models/scene-base-element';
import { Router } from '@angular/router';
import { IPosition } from 'src/app/common/position';
import { ISize } from 'src/app/common/size';
import { SubtitleService } from 'src/app/services/subtitle.service';

/**
 * 씬을 미리보기로 구현 시 보여줄 작성할 캔버스
 */
@Component({
  selector: 'app-scenes-scene-canvas',
  templateUrl: './scenes-scene-canvas.component.html',
  styleUrls: ['./scenes-scene-canvas.component.scss'],
})
export class ScenesSceneCanvasComponent
  extends AbstractSceneCommon
  implements OnInit, OnDestroy {
  private m_bSubscribe: boolean = true;

  private _timer: any;

  private _nextSeconds: number;
  private _dispatchIsTouch: boolean;

  @ViewChild('DYNAMIC', { static: true, read: ViewContainerRef })
  container: ViewContainerRef;

  @ViewChild('scene', { static: true })
  elementRef: ElementRef<HTMLElement>;

  constructor(
    private resolver: ComponentFactoryResolver,
    private scenesSceneService: ScenesSceneService,
    private scenesService: ScenesService,
    private subtitleService: SubtitleService,
    private router: Router,
    private zone: NgZone
  ) {
    super(null, SCENE_COMPONENTS_KIND.SCENE_COMPONENTS_KIND_SCENE);

    this.dispatchSceneElement = new DispatchSceneElement();
  }
  ngOnDestroy(): void {
    if (undefined != this._timer) {
      clearInterval(this._timer);
    }
    this.m_bSubscribe = false;
  }

  ngOnInit(): void {}

  onClickedCanvas() {
    if (true == this._dispatchIsTouch) {
      this.router.navigate([
        `scenes/scene/${this.dispatchSceneElement.sceneId}`,
      ]);
    }
  }

  // from scene blueprint
  public async makeScenefromBlueprintAsync(
    blueprint: SceneBlueprint,
    resources: Array<ResourceElement>,
    sceneBases: Array<SceneBaseElement>
  ) {
    const canvasBlueprint = blueprint.getCanvas();
    this.fromMessage(canvasBlueprint);

    // for dispatch scene
    if (blueprint.hasDispatchscene()) {
      this.dispatchSceneElement.fromMessage(blueprint.getDispatchscene());

      if (
        this.dispatchSceneElement.isUsed &&
        this.dispatchSceneElement.sceneId > 0
      ) {
        const response = await this.scenesService
          .requestGetScenebySceneId(this.dispatchSceneElement.sceneId)
          .pipe(take(1))
          .toPromise();

        if (CommonExtensions.isSuccess(response.getCommon())) {
          this.dispatchSceneElement.scene = SceneBaseElement.fromMessageBase(
            response.getScene().getBase()
          );

          // set dispatch scene
          if (this.dispatchSceneElement.isTouched) {
            this._dispatchIsTouch = this.dispatchSceneElement.isTouched;
          }
          if (this.dispatchSceneElement.seconds > 0) {
            const currentSeconds = Math.round(Date.now() / 1000);
            this._nextSeconds =
              currentSeconds + this.dispatchSceneElement.seconds;
            this._timer = setInterval(() => {
              const currentSeconds = Math.round(Date.now() / 1000);

              if (currentSeconds >= this._nextSeconds) {
                clearInterval(this._timer);
                this._timer = undefined;

                this.zone.runTask(() =>
                  this.router.navigate([
                    `scenes/scene/${this.dispatchSceneElement.sceneId}`,
                  ])
                );

                return;
              }
            }, 1000);
          }
        }
      }
    }

    const sceneParts = blueprint.getPartsList();

    for (let part of sceneParts) {
      if (CommonExtensions.isRouteButton(part)) {
        continue;
      }

      const instance = await this.makePreviewSceneComponent(
        part,
        resources,
        sceneBases
      );
    }
    for (let part of sceneParts) {
      if (!CommonExtensions.isRouteButton(part)) {
        continue;
      }
      const instance = await this.makePreviewSceneComponent(
        part,
        resources,
        sceneBases
      );

      if (part.hasCoordinate() && undefined != instance) {
        const element = instance.coordinateElement;

        setTimeout(() => {
          // 자신의 경로 이미지를 생성한다.
          const ownerCommon = element.scenePartImage;
          const ownerPosition = ownerCommon.position;
          const ownerSize = ownerCommon.size;
          if (element.haveCoordinateResource) {
            const component = this.createResourceComponent(
              '',
              element.coordinateResource,
              ownerSize,
              ownerPosition
            );

            element.routeSceneCoordinateImageComponent = component;
          }

          if (element.haveSourceResource) {
            const component = this.createResourceComponent(
              '',
              element.sourceResource,
              element.sourceSize,
              element.sourcePosition
            );
            element.routeSceneSourceImageComponent = component;
          }
          if (element.haveDestinationResource) {
            const component = this.createResourceComponent(
              '',
              element.destinationResource,
              element.destinationSize,
              element.destinationPosition
            );
            element.routeSceneDestinationImageComponent = component;
          }
        }, 0);
      }
    }
  }

  private async makePreviewSceneComponent(
    part: ScenePart,
    resources: Array<ResourceElement>,
    sceneBases: Array<SceneBaseElement>
  ): Promise<ScenesSceneComponentComponent> {
    const common = part.getCommon();

    if (common.hasPosition() && common.hasSize()) {
      const instance = this.createComponent(
        common.getName(),
        common.getPosition().getX(),
        common.getPosition().getY(),
        common.getSize().getWidth(),
        common.getSize().getHeight()
      );

      await SceneExtensions.makeComponentFromPartAsync(
        instance,
        part,
        this.scenesSceneService.elements,
        this.scenesService,
        this.subtitleService,
        resources,
        sceneBases
      );
      return instance;
    }
    return undefined;
  }

  private createResourceComponent(
    name: string,
    resourceElement: ResourceElement,
    size: ISize = undefined,
    position: IPosition
  ): ScenesSceneComponentComponent {
    const component = this.createComponent(
      '',
      position.x,
      position.y,
      size.width,
      size.height
    );
    component.backgroundColor = 'rgba(0, 0, 0, 0)';
    component.makeElement(
      SCENE_COMPONENTS_KIND.SCENE_COMPONENTS_KIND_IMAGE,
      true
    );

    // setting resource
    component.imageElement.resource = resourceElement;

    this.scenesSceneService.routers.push(component);

    component.dontShow();

    return component;
  }

  private createComponent(
    name: string,
    x: number,
    y: number,
    width: number,
    height: number
  ): ScenesSceneComponentComponent {
    const factory = this.resolver.resolveComponentFactory(
      ScenesSceneComponentComponent
    );

    const component = factory.create(this.container.parentInjector);
    this.container.insert(component.hostView);

    const instance = component.instance;

    instance.name = name;

    instance.changeSize(Math.ceil(width), Math.ceil(height));
    instance.changePosition(Math.ceil(x), Math.ceil(y));

    this.scenesSceneService.add(instance);

    return instance;
  }
}
