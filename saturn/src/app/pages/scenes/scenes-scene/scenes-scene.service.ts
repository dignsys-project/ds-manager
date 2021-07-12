import { Injectable, OnDestroy } from '@angular/core';
import { AbstractSceneCommon } from 'src/app/components/components-scene/abstract-scene-common';
import { ComponentsSceneCommonCoordinateComponent } from 'src/app/components/components-scene/components-scene-common/components-scene-common-coordinate/components-scene-common-coordinate.component';
import { AbstractSceneComponent } from 'src/app/components/abstract-scene-component';
import { Guid } from 'guid-typescript';

@Injectable()
export class ScenesSceneService implements OnDestroy {
  public elements: Array<AbstractSceneCommon> = new Array<
    AbstractSceneCommon
  >();

  public routers: Array<AbstractSceneComponent> = new Array<
    AbstractSceneComponent
  >();

  public currentCoordinateButtonId: Guid;

  public add(component: AbstractSceneCommon) {
    this.elements.push(component);
  }

  constructor() {}
  ngOnDestroy(): void {}
}
