import {
  animate,
  state,
  style,
  transition,
  trigger,
} from '@angular/animations';
import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import {
  ISlideImageElement,
  ScenePartSlideImageElement,
} from 'src/app/models/scene-part-slide-image-element';
import { ResourceService } from 'src/app/services/resource.service';

@Component({
  selector: 'app-components-scene-common-slide-image',
  templateUrl: './components-scene-common-slide-image.component.html',
  styleUrls: ['./components-scene-common-slide-image.component.scss'],
  animations: [
    // the fade-in/fade-out animation.
    trigger('simpleFadeAnimation', [
      // the "in" style determines the "resting" state of the element when it is visible.
      state('in', style({ opacity: 1 })),

      // fade in when created. this could also be written as transition('void => *')
      transition(':enter', [style({ opacity: 0 }), animate(300)]),

      // fade out when destroyed. this could also be written as transition('void => *')
      transition(':leave', animate(300, style({ opacity: 0 }))),
    ]),
  ],
})
export class ComponentsSceneCommonSlideImageComponent
  implements OnInit, OnDestroy {
  private _element: ScenePartSlideImageElement;

  private _timer: any;

  private _startTimer: number = 0;

  @Input()
  set element(element: ScenePartSlideImageElement) {
    this._element = element;

    if (undefined != this._element) {
      this._timer = setInterval(() => {
        const index = this.current;
        if (index < this.element?.elements?.length) {
          const item = this.element?.elements[index];
          if (this._startTimer + 1 < item.seconds) {
            this._startTimer++;
          } else {
            this._startTimer = 0;
            const next = index + 1;
            if (this.element?.elements?.length < next) {
              this.current = 0;
            } else {
              if (this.haveResource(this.element.elements[next])) {
                this.current = next;
              } else {
                this.current = 0;
              }
            }
          }
        } else {
          this.current = 0;
        }
      }, 1000);
    }
  }

  get element(): ScenePartSlideImageElement {
    return this._element;
  }

  @Input()
  current: number = 0;

  constructor(private resourceService: ResourceService) {}

  ngOnInit(): void {}

  ngOnDestroy(): void {
    if (undefined != this._timer) {
      clearInterval(this._timer);
      this._timer = undefined;
    }
  }

  isCurrent(item: ISlideImageElement, index: number): boolean {
    return index == this.current;
  }

  haveResource(item: ISlideImageElement): boolean {
    return undefined != item?.resource && item?.resource?.resourceId > 0;
  }

  getResourceLocation(item: ISlideImageElement): string {
    return this.resourceService.getResourceAddress(item.resource);
  }
}
