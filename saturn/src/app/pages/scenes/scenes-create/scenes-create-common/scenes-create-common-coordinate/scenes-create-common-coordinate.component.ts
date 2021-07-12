import { Component, OnInit, Input, ElementRef, OnDestroy } from '@angular/core';
import { AbstractSceneCommon } from 'src/app/components/components-scene/abstract-scene-common';
import { MatDialog } from '@angular/material/dialog';
import {
  SCENE_RESOURCE_KIND,
  SCENE_COMPONENTS_KIND,
} from 'src/app/protocols/common_pb';
import { ScenesCreateService } from '../../../scenes-create.service';
import { ComponentsSceneComponentsSelectDialogComponent } from 'src/app/components/components-scene/components-scene-components-select-dialog/components-scene-components-select-dialog.component';
import {
  ComponentsCommonDialogComponent,
  DIALOG_KIND,
} from 'src/app/components/components-common-dialog/components-common-dialog.component';
import { takeWhile, take } from 'rxjs/operators';
import { ComponentsSceneCanvasComponent } from 'src/app/components/components-scene/components-scene-canvas/components-scene-canvas.component';
import { ResourceElement } from 'src/app/models/resource-element';
import { ScenePartCoordinateElement } from 'src/app/models/scene-part-coordinate-element';
import { AbstractSceneComponent } from 'src/app/components/abstract-scene-component';
import { ComponentsResourcesDialogV2Component } from 'src/app/components/components-resources-dialog-v2/components-resources-dialog-v2.component';
import { ComponentsSceneCommonV2Component } from 'src/app/components/components-scene/components-scene-common/components-scene-common-v2.component';
import { IPosition } from 'src/app/common/position';
import { ISize } from 'src/app/common/size';
import { element } from 'protractor';

@Component({
  selector: 'app-scenes-create-common-coordinate',
  templateUrl: './scenes-create-common-coordinate.component.html',
  styleUrls: ['./scenes-create-common-coordinate.component.scss'],
})
export class ScenesCreateCommonCoordinateComponent
  implements OnInit, OnDestroy {
  // 기본 캔버스
  private _canvas: ComponentsSceneCanvasComponent;

  private m_bSelected: boolean = false;

  private m_bSubscribe: boolean = true;

  private m_Common: AbstractSceneCommon;

  public static routes: Array<AbstractSceneComponent> = new Array<AbstractSceneComponent>();

  @Input()
  set common(value: AbstractSceneCommon) {
    this.m_Common = value;

    if (undefined == value) {
      return;
    }

    // 생성이 되지 않았다면 리소스에 대한 컴포넌트들을 생성해준다.
    // cre
    setTimeout(() => {
      if (
        this.element.haveCoordinateResource &&
        !this.element.haveCoordinateComponent
      ) {
        // create route image component
        const component = this.createResourceComponent(
          this.element.coordinateResource,
          false
        );
        this.element.routeSceneCoordinateImageComponent = component;
      }

      if (this.element.haveSourceResource && !this.element.isCreatedSource) {
        // create source image component
        const sourceComponent = this.createResourceComponent(
          this.element.sourceResource,
          true,
          this.element.sourceSize,
          this.element.sourcePosition
        );
        this.element.routeSceneSourceImageComponent = sourceComponent;
      }

      if (
        this.element.haveDestinationResource &&
        !this.element.isCreatedDestination
      ) {
        // create destination image component
        const destinationComponent = this.createResourceComponent(
          this.element.destinationResource,
          true,
          this.element.destinationSize,
          this.element.destinationPosition
        );
        this.element.routeSceneDestinationImageComponent = destinationComponent;
      }

      // changed
      if (this.common.isSelected()) {
        ScenesCreateCommonCoordinateComponent.routes.map((x) => x.dontShow());
        if (this.element.haveCoordinateComponent) {
          this.element.routeSceneCoordinateImageComponent?.show();
          this.element.routeSceneSourceImageComponent?.show();
          this.element.routeSceneDestinationImageComponent?.show();
        }
      }
    }, 0);
  }

  get common(): AbstractSceneCommon {
    return this.m_Common;
  }

  get element(): ScenePartCoordinateElement {
    return this.common?.coordinateElement;
  }

  get haveSource(): boolean {
    return undefined != this.element?.sourceResource;
  }

  get haveDestination(): boolean {
    return undefined != this.element?.destinationResource;
  }

  get haveCoordinate(): boolean {
    return undefined != this.element?.coordinateResource;
  }

  constructor(
    private dialog: MatDialog,
    private sceneCreateService: ScenesCreateService,
    private elementRef: ElementRef<HTMLElement>
  ) {}
  ngOnDestroy(): void {
    this.m_bSubscribe = false;
  }

  ngOnInit(): void {
    this.sceneCreateService.canvas$
      .pipe(takeWhile(() => this.m_bSubscribe))
      .subscribe((canvas) => {
        this._canvas = canvas as ComponentsSceneCanvasComponent;
      });

    this.sceneCreateService.selected$
      .pipe(takeWhile(() => this.m_bSubscribe))
      .subscribe((selectedSceneCommon) => {
        if (selectedSceneCommon.id == this.common.id) {
          const owner = this.element.scenePartImage;

          // if have coordinate resource
          if (undefined != owner && this.element.haveCoordinateComponent) {
            // change size for owner
            this.element.routeSceneCoordinateImageComponent.changeSize(
              owner.size.width,
              owner.size.height
            );

            // change position for owner
            this.element.routeSceneCoordinateImageComponent.changePosition(
              owner.position.x,
              owner.position.y
            );
          }
        }
      });
  }

  // 버튼 이미지 선택
  async onClickedSelectResource() {
    try {
      const elements = await ComponentsResourcesDialogV2Component.create(
        this.dialog,
        SCENE_RESOURCE_KIND.SCENE_RESOURCE_KIND_IMAGE
      )
        .afterClosed()
        .pipe(take(1))
        .toPromise();

      if (elements?.length >= 1) {
        this.element.resource = elements[0];
      } else {
        // create dialog for common dialog
        const bContinue = await ComponentsCommonDialogComponent.create(
          this.dialog,
          '리소스 제거',
          DIALOG_KIND.DIALOG_KIND_WARNING,
          '선택된 리소스를 취소 하시겠습니까?',
          [
            '리소스가 제거되지는 않습니다.',
            '리소스 삭제는 리소스 목록에서 삭제 가능합니다.',
          ],
          true
        )
          .afterClosed()
          .pipe(take(1))
          .toPromise();

        if (bContinue == true) {
          this.element.resource = undefined;
        }
      }
    } catch (error) {
      console.error(error);
    }
  }

  /**
   * 부모 지도 이미지 컴포넌트 선택
   */
  onClickedFindOwnerScenePartImage() {
    const elements = this.sceneCreateService.elements.filter(
      (x) => x.kind === SCENE_COMPONENTS_KIND.SCENE_COMPONENTS_KIND_IMAGE
    );

    ComponentsSceneComponentsSelectDialogComponent.create(
      SCENE_COMPONENTS_KIND.SCENE_COMPONENTS_KIND_IMAGE,
      this.dialog
    )
      .afterClosed()
      .subscribe((scenePartImage) => {
        this.element.scenePartImage = scenePartImage;
      });
  }

  // 지도 이미지 삭제
  onClickedRemoveOwnerScenePartImage() {
    ComponentsCommonDialogComponent.create(
      this.dialog,
      '지도 삭제',
      DIALOG_KIND.DIALOG_KIND_WARNING,
      '선택한 지도 정보를 제거 하시겠습니까?',
      null,
      true
    )
      .afterClosed()
      .subscribe((bContinue) => {
        if (bContinue) {
          this.element.scenePartImage = null;

          // remove route
          this.removeRouteImage();

          // remove source
          this.removeSource();

          // remove destination
          this.removeDestination();
        }
      });
  }

  /**
   * 시작 지점 선택
   */
  async onClickedSelectSourceResource() {
    let resourceElement: ResourceElement;
    try {
      const elements = await ComponentsResourcesDialogV2Component.create(
        this.dialog,
        SCENE_RESOURCE_KIND.SCENE_RESOURCE_KIND_IMAGE
      )
        .afterClosed()
        .toPromise();

      if (elements?.length > 0) {
        resourceElement = elements[0];
      } else {
        resourceElement = undefined;
      }
    } catch (error) {
      console.error(error);
    }

    if (undefined != resourceElement) {
      // create routes component
      const component = this.createResourceComponent(resourceElement, true, {
        width: 256,
        height: 256,
      });

      // 항상 지도 이미지 위에 있어야 한다.
      if (this.element.haveCoordinateComponent) {
        const zIndex = this.element.routeSceneCoordinateImageComponent.zIndex;
        component.changeZIndex(zIndex + 1);
      }

      component.name = `${this.common?.name} 시작 지점`;
      this.element.routeSceneSourceImageComponent = component;
      this.element.sourceResource = resourceElement;
    } else {
      this.removeSource();
    }
  }

  // on Clicked Select Destination Resource
  async onClickedSelectDestinationResource() {
    let resourceElement: ResourceElement;
    try {
      const elements = await ComponentsResourcesDialogV2Component.create(
        this.dialog,
        SCENE_RESOURCE_KIND.SCENE_RESOURCE_KIND_IMAGE
      )
        .afterClosed()
        .toPromise();

      if (elements?.length > 0) {
        resourceElement = elements[0];
      } else {
        resourceElement = undefined;
      }
    } catch (error) {}

    if (undefined != resourceElement) {
      // create routes component
      const component = this.createResourceComponent(resourceElement, true, {
        width: 256,
        height: 256,
      });

      // 항상 지도 이미지 위에 있어야 한다.
      if (this.element.haveCoordinateComponent) {
        const zIndex = this.element.routeSceneCoordinateImageComponent.zIndex;
        component.changeZIndex(zIndex + 1);
      }

      component.name = `${this.common?.name} 목적 지점`;
      this.element.routeSceneDestinationImageComponent = component;
      this.element.destinationResource = resourceElement;
    } else {
      // remove canvas
      this.removeDestination();
    }
  }

  // 경로 이미지 선택 및 제거
  async onClickedSelectRouteImageResource() {
    let resourceElement: ResourceElement;
    const elements = await ComponentsResourcesDialogV2Component.create(
      this.dialog,
      SCENE_RESOURCE_KIND.SCENE_RESOURCE_KIND_IMAGE
    )
      .afterClosed()
      .toPromise();

    if (elements?.length > 0) {
      resourceElement = elements[0];
    } else {
      resourceElement = undefined;
    }

    if (undefined != resourceElement) {
      // create routers component
      const component = this.createResourceComponent(resourceElement, false);
      this.element.routeSceneCoordinateImageComponent = component;
      this.element.coordinateResource = resourceElement;
    } else {
      // remove route
      this.removeRouteImage();
    }
  }

  private removeDestination() {
    if (undefined != this.element.destinationResource) {
      this._canvas.removeComponent(
        this.element.routeSceneDestinationImageComponent
      );

      // remove routes
      const index = ScenesCreateCommonCoordinateComponent.routes.findIndex(
        (x) => this.element.routeSceneDestinationImageComponent.id
      );
      if (-1 !== index) {
        ScenesCreateCommonCoordinateComponent.routes.splice(index, 1);
      }

      this.element.destinationResource = undefined;
    }
  }

  private removeSource() {
    if (undefined != this.element.sourceResource) {
      // remove canvas
      this._canvas.removeComponent(this.element.routeSceneSourceImageComponent);

      // remove routes
      const index = ScenesCreateCommonCoordinateComponent.routes.findIndex(
        (x) => this.element.routeSceneSourceImageComponent.id
      );
      if (-1 !== index) {
        ScenesCreateCommonCoordinateComponent.routes.splice(index, 1);
      }

      this.element.sourceResource = undefined;
    }
  }

  private removeRouteImage() {
    if (undefined != this.element.coordinateResource) {
      // remove from canvas
      this._canvas.removeComponent(
        this.element.routeSceneCoordinateImageComponent
      );

      // remove routes
      const index = ScenesCreateCommonCoordinateComponent.routes.findIndex(
        (x) => this.element.routeSceneCoordinateImageComponent.id
      );
      if (-1 !== index) {
        ScenesCreateCommonCoordinateComponent.routes.splice(index, 1);
      }

      this.element.coordinateResource = undefined;
    }
  }

  // 자신의 경로 이미지를 생성한다.
  private createResourceComponent(
    resourceElement: ResourceElement,
    isMoveable: boolean,
    size: ISize = undefined,
    position: IPosition = undefined
  ): ComponentsSceneCommonV2Component {
    const ownerPosition = this.element.scenePartImage.position;
    const ownerSize = this.element.scenePartImage.size;

    const component = this._canvas.createComponent(false);
    component.backgroundColor = 'rgba(0, 0, 0, 0)';
    component.makeElement(
      SCENE_COMPONENTS_KIND.SCENE_COMPONENTS_KIND_IMAGE,
      true
    );
    component.isMoveable = isMoveable;

    // set position
    let x = ownerPosition.x;
    let y = ownerPosition.y;

    if (undefined != position) {
      x = position.x;
      y = position.y;
    }
    component.changePosition(x, y);

    let width = ownerSize.width;
    let height = ownerSize.height;
    if (undefined != size) {
      width = size.width;
      height = size.height;
    }

    component.changeSize(width, height);

    if (!isMoveable) {
      // set size

      this.element.scenePartImage.changedPosition$
        .pipe(takeWhile(() => this.m_bSubscribe))
        .subscribe((position) => {
          component.changePosition(position.x, position.y);
        });

      this.element.scenePartImage.changedSize$
        .pipe(takeWhile(() => this.m_bSubscribe))
        .subscribe((size) => {
          component.changeSize(size.width, size.height);
        });
    }

    // setting resource
    component.imageElement.resource = resourceElement;

    // push routes
    ScenesCreateCommonCoordinateComponent.routes.push(component);

    return component;
  }
}
