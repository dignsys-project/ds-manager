import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { AbstractSceneCommon } from 'src/app/components/components-scene/abstract-scene-common';
import { SCENE_COMPONENTS_KIND } from 'src/app/protocols/common_pb';
import { ScenesService } from '../../../../services/scenes.service';
import { ScenesSceneService } from '../scenes-scene.service';
import { AbstractSceneComponent } from 'src/app/components/abstract-scene-component';
import {
  trigger,
  state,
  style,
  transition,
  animate,
} from '@angular/animations';
import { ComponentsSceneCommonImageComponent } from 'src/app/components/components-scene/components-scene-common/components-scene-common-image/components-scene-common-image.component';

@Component({
  selector: 'app-scenes-scene-component',
  templateUrl: './scenes-scene-component.component.html',
  styleUrls: ['./scenes-scene-component.component.scss'],
  animations: [
    trigger('openClose', [
      // ...
      state(
        'open',
        style({
          opacity: 1,
          // display: 'block',
        })
      ),
      state(
        'closed',
        style({
          opacity: 0,
          // display: 'none',
        })
      ),
      transition('false => true', [animate('5s')]),
      transition('true => false', [animate('1s')]),
    ]),
  ],
})
export class ScenesSceneComponentComponent
  extends AbstractSceneComponent
  implements OnInit {
  isAlive: boolean = true;

  @ViewChild('COMMON', { static: true })
  commonElement: ElementRef;

  @ViewChild(ComponentsSceneCommonImageComponent, { static: false })
  componentsImageComponent: ElementRef;

  get common(): AbstractSceneCommon {
    return this;
  }

  get isShow(): boolean {
    return this.isAlive;
  }

  get isHover(): boolean {
    return (
      this.kind === SCENE_COMPONENTS_KIND.SCENE_COMPONENTS_KIND_BUTTON ||
      this.kind === SCENE_COMPONENTS_KIND.SCENE_COMPONENTS_KIND_MAP
    );
  }

  constructor(
    private scenesService: ScenesService,
    private scenesSceneService: ScenesSceneService
  ) {
    super(null, SCENE_COMPONENTS_KIND.SCENE_COMPONENTS_KIND_COMMON);
  }

  ngOnInit(): void {}

  public dontShow(): void {
    this.isAlive = false;
    this.imageElement.animationKind = 'none';
  }

  public show() {
    this.isAlive = true;
  }

  onClickedCoordinate() {
    const element = this.coordinateElement;

    const currentCoordinateButtonId = this.scenesSceneService
      .currentCoordinateButtonId;

    if (currentCoordinateButtonId == this.id) {
      // coordinate component turn on or off
      if (element.haveCoordinateComponent) {
        const component = this.coordinateElement
          .routeSceneCoordinateImageComponent;
        component.dontShow();
      }

      if (element.isCreatedSource) {
        const component = this.coordinateElement.routeSceneSourceImageComponent;
        component.dontShow();
        component.imageElement.animationKind = 'none';
      }

      if (element.isCreatedDestination) {
        const component = this.coordinateElement
          .routeSceneDestinationImageComponent;
        component.dontShow();
        component.imageElement.animationKind = 'none';
      }

      this.scenesSceneService.currentCoordinateButtonId = null;

      return;
    }

    // don`t show all routers
    this.scenesSceneService.routers.forEach((x) => x.dontShow());

    // coordinate component turn on
    if (element.haveCoordinateComponent) {
      const component = this.coordinateElement
        .routeSceneCoordinateImageComponent;

      component.show();
      component.imageElement.animationKind = 'coordinate';
    }

    if (element.isCreatedSource) {
      const component = this.coordinateElement.routeSceneSourceImageComponent;

      component.show();
    }

    if (element.isCreatedDestination) {
      const component = this.coordinateElement
        .routeSceneDestinationImageComponent;
      component.show();
      component.imageElement.animationKind = 'source';
    }
    this.scenesSceneService.currentCoordinateButtonId = this.id;
  }
}
