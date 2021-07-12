import { Component, OnInit, OnDestroy, ElementRef } from '@angular/core';
import { AbstractSceneCommon } from '../abstract-scene-common';
import { SCENE_COMPONENTS_KIND, ScenePart } from 'src/app/protocols/common_pb';
import { CommonExtensions } from 'src/app/commons/common-extensions';
import { ScenesCreateService } from 'src/app/pages/scenes/scenes-create.service';
import { take, takeWhile, filter } from 'rxjs/operators';
import { SceneBaseElement } from 'src/app/models/scene-base-element';
import { ScenePartWeatherElement } from 'src/app/models/scene-part-weather-element';
import { AbstractSceneComponent } from '../../abstract-scene-component';

import * as interact from 'interactjs';
import { ScenesService } from 'src/app/services/scenes.service';
import { fromEvent } from 'rxjs';
import { IPosition } from 'src/app/common/position';

@Component({
  selector: 'app-components-scene-common-v2',
  templateUrl: './components-scene-common-v2.component.html',
  styleUrls: ['./components-scene-common-v2.component.scss'],
})
export class ComponentsSceneCommonV2Component
  extends AbstractSceneComponent
  implements OnInit, OnDestroy {
  private _useFunction: boolean = false;

  private _subscribe: boolean = true;

  private _show: boolean = true;

  private _draggable: boolean = false;

  get isShow(): boolean {
    return (this._show = false);
  }

  get helperzIndex(): number {
    return this.zIndex + 1;
  }

  get element(): HTMLElement {
    return this.elementRef.nativeElement;
  }

  get common(): AbstractSceneCommon {
    return this;
  }

  public canvas: AbstractSceneCommon;

  constructor(
    private elementRef: ElementRef<HTMLElement>,
    private scenesCreateService: ScenesCreateService,
    private scenesService: ScenesService
  ) {
    super(
      scenesCreateService,
      SCENE_COMPONENTS_KIND.SCENE_COMPONENTS_KIND_COMMON
    );

    this.backgroundColor = '#29e';
  }

  ngOnInit(): void {
    this.element.style.zIndex = `${this.zIndex}`;

    this._changedIndex$
      .pipe(takeWhile(() => this._subscribe))
      .subscribe((index) => {
        this.element.style.zIndex = `${this.zIndex}`;
      });

    this.changedPosition$
      .pipe(takeWhile(() => this._subscribe))
      .subscribe((position) => {
        const target = this.element;
        const moveX = position.x;
        const moveY = position.y;

        target.style.transform = 'translate(' + moveX + 'px, ' + moveY + 'px)';

        target.setAttribute('data-x', moveX.toString());
        target.setAttribute('data-y', moveY.toString());
        target.style.top = '0px';
        target.style.left = '0px';
      });

    // clicked event
    this.element.onclick = (event) => {
      this.onClickedSelectedCommon(event);
    };

    interact
      .default(this.elementRef.nativeElement)
      .on('tap', (event) => {
        event.preventDefault();
        event.stopPropagation();
        this.onClickedSelectedCommon(event);
      })
      .draggable({
        modifiers: [
          interact.default.modifiers.snap({
            targets: [interact.default.createSnapGrid({ x: 1, y: 1 })],
            range: Infinity,
            relativePoints: [{ x: 0, y: 0 }],
          }),
          interact.default.modifiers.restrictRect({
            restriction: 'parent',
            endOnly: true,
          }),
        ],
        inertia: true,
      })
      .on('dragmove', (event) => {
        if (!this.isMoveable) {
          return;
        }

        this.onClickedSelectedCommon(event);

        const target = event.target;
        const moveX = Math.round(
          (parseFloat(target.getAttribute('data-x')) || 0) + event.dx
        );
        const moveY = Math.round(
          (parseFloat(target.getAttribute('data-y')) || 0) + event.dy
        );

        target.style.transform = 'translate(' + moveX + 'px, ' + moveY + 'px)';

        target.setAttribute('data-x', moveX);
        target.setAttribute('data-y', moveY);

        const parentRect = target.parentElement.getBoundingClientRect();
        const rect = target.getBoundingClientRect();

        const x = Math.round(rect.x - parentRect.x);
        const y = Math.round(rect.y - parentRect.y);

        const position = this.adjustPosition(x, y);

        this.position = position;
        this._changedPosition$.next({ x: x, y: y });

        target.classList.add('getting-dragged');
        this._draggable = true;
      })
      .on('dragend', (event) => {
        if (!this.isMoveable) {
          return;
        }

        const target = event.target;

        const parentRect = target.parentElement.getBoundingClientRect();
        const rect = target.getBoundingClientRect();

        const x = rect.x - parentRect.x;
        const y = rect.y - parentRect.y;

        setTimeout(() => {
          (window as any).dragData = null;
          this._draggable = false;
        });
      })
      .resizable({
        edges: { left: true, right: true, bottom: true, top: true },
        modifiers: [
          // keep the edges inside the parent
          interact.default.modifiers.restrictEdges({
            outer: 'parent',
          }),

          // minimum size
          interact.default.modifiers.restrictSize({
            min: { width: 1, height: 1 },
          }),
        ],

        inertia: false,
      })
      .on('resizemove', (event) => {
        if (!this.isMoveable) {
          return;
        }

        event.preventDefault();

        var target = event.target;

        var x = parseFloat(target.getAttribute('data-x')) || 0;
        var y = parseFloat(target.getAttribute('data-y')) || 0;

        // update the element's style
        const width = Math.round(event.rect.width);
        const height = Math.round(event.rect.height);

        this.changeSize(width, height);

        // translate when resizing from top or left edges
        x += event.deltaRect.left;
        y += event.deltaRect.top;

        target.style.webkitTransform = target.style.transform =
          'translate(' + x + 'px,' + y + 'px)';

        target.setAttribute('data-x', x);
        target.setAttribute('data-y', y);
      })
      .on('resizeend', (event) => {});
  }

  ngOnDestroy(): void {
    this._subscribe = false;
  }

  ngAfterViewInit() {
    this.alignSize();

    // selected class
    this.service.selected$
      .pipe(takeWhile(() => this._subscribe))
      .subscribe((common) => {
        if (common.id.equals(this.id)) {
          if (!this.element.classList.contains('scene-component-selected')) {
            this.element.classList.add('scene-component-selected');
          }
        } else {
          if (this.element.classList.contains('scene-component-selected')) {
            this.element.classList.remove('scene-component-selected');
          }
        }
      });
  }

  public dontShow(): void {
    this.element.style.display = 'none';
    this._show = false;
  }
  public show() {
    this.element.style.display = 'block';
    this._show = true;
  }

  public alignSize() {
    // set div#resizeBox change width, height in style
    const target = this.element;
    target.style.width = `${this.calculatedWidth()}px`;
    target.style.height = `${this.calculatedHeight()}px`;
  }

  onClickedSelectedCommon(event: MouseEvent) {
    if (!this.isMoveable) {
      return;
    }

    event.stopPropagation();

    this.scenesCreateService.select(this);
  }

  // override changePosition from AbstractSceneCommon
  public changePosition(x: number, y: number) {
    super.changePosition(x, y);

    this._changedPosition$.next({ x: x, y: y });
  }

  // override changeSize from AbstractSceneCommon
  public changeSize(width: number, height: number) {
    super.changeSize(width, height);

    // set width, height in style
    this.alignSize();

    this.m_ChangedSize$.next(this.size);
  }

  private adjustPosition(x: number, y: number): IPosition {
    // if (x % 10 > 7) {
    //   x = Math.round(x / 10) * 10;
    // }
    // if (y % 10 > 7) {
    //   y = Math.round(y / 10) * 10;
    // }

    return { x: x, y: y };
  }
}
