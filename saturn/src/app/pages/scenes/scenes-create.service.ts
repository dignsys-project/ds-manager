import { Injectable, OnDestroy, OnInit } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { AbstractSceneCommon } from 'src/app/components/components-scene/abstract-scene-common';
import { filter, tap, map, takeWhile, throwIfEmpty } from 'rxjs/operators';
import { isNullOrUndefined } from 'util';
import { Guid } from 'guid-typescript';
import { SCENE_COMPONENTS_KIND } from 'src/app/protocols/common_pb';
import { AbstractSceneComponent } from 'src/app/components/abstract-scene-component';
import { CommonExtensions } from 'src/app/commons/common-extensions';

@Injectable()
export class ScenesCreateService implements OnDestroy, OnInit {
  selected$: Observable<AbstractSceneCommon>;
  canvas$: Observable<AbstractSceneCommon>;

  public elements: Array<AbstractSceneCommon> = new Array<
    AbstractSceneCommon
  >();

  private m_Select$: BehaviorSubject<AbstractSceneCommon> = new BehaviorSubject<
    AbstractSceneCommon
  >(null);

  private m_Canvas$: BehaviorSubject<AbstractSceneCommon> = new BehaviorSubject<
    AbstractSceneCommon
  >(null);

  selectedId: Guid;

  private m_bSubscribe: boolean = true;

  constructor() {
    this.canvas$ = this.m_Canvas$.asObservable();
    this.selected$ = this.m_Select$.asObservable();

    this.selected$
      .pipe(takeWhile(() => this.m_bSubscribe))
      .pipe(filter((x) => !CommonExtensions.isNullOrUndefined(x)))
      .subscribe((x) => {
        this.selectedId = x.id;
        if (x.kind === SCENE_COMPONENTS_KIND.SCENE_COMPONENTS_KIND_SCENE) {
          this.m_Canvas$.next(x);
        }
      });
  }

  ngOnInit(): void {}
  ngOnDestroy(): void {
    this.m_bSubscribe = false;
  }

  public clear() {
    this.elements = new Array<AbstractSceneCommon>();
    this.m_Canvas$.next(null);
    this.m_Select$.next(null);
  }

  public select(sceneComponent: AbstractSceneCommon) {
    if (
      isNullOrUndefined(this.selectedId) ||
      isNullOrUndefined(sceneComponent) ||
      !sceneComponent.id.equals(this.selectedId)
    ) {
      this.m_Select$.next(sceneComponent);
    }
  }

  public add(sceneComponent: AbstractSceneCommon) {
    this.elements.push(sceneComponent);
  }

  public remove(sceneComponent: AbstractSceneCommon) {
    const index = this.elements?.findIndex((x) => x.id == sceneComponent.id);
    if (-1 != index) {
      this.elements.splice(index, 1);
    }
  }
}
