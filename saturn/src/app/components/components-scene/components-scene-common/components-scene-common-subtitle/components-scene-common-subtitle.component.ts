import { animate, style, trigger } from '@angular/animations';
import { HttpClient } from '@angular/common/http';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import {
  Component,
  OnInit,
  Input,
  AfterContentChecked,
  ViewChild,
  ElementRef,
  ContentChild,
} from '@angular/core';
import { stringify } from 'querystring';
import { ResourceExtensions } from 'src/app/commons/resource-extensions';
import { ScenePartSubtitleElement } from 'src/app/models/scene-part-subtitle-element';
import { ResourceService } from 'src/app/services/resource.service';
import {
  ScenePartCommon,
  ScenePartSubtitle,
  TEXT_ALIGN_KIND,
} from 'src/app/protocols/common_pb';
import { SubtitleService } from 'src/app/services/subtitle.service';
import { AbstractSceneCommon } from '../../abstract-scene-common';

@Component({
  selector: 'app-components-scene-common-subtitle',
  templateUrl: './components-scene-common-subtitle.component.html',
  styleUrls: ['./components-scene-common-subtitle.component.scss'],
  animations: [],
})
export class ComponentsSceneCommonSubtitleComponent
  implements OnInit, AfterContentChecked {
  private _element: ScenePartSubtitleElement;
  private _common: AbstractSceneCommon;

  private _baseWidth: number = 0;

  @ViewChild('CONTENT_TEXT', { static: false })
  contentText: ElementRef<HTMLDivElement>;

  @Input()
  set common(common: AbstractSceneCommon) {
    this._common = common;

    if (this.element != undefined && this.common) {
      if (this.element.resource != undefined) {
        // parse content
        ResourceExtensions.parseFromSubtitleResourceAsync(
          this.element.resource,
          this.resourceService,
          this.httpClient
        ).then((content) => {
          const kind = this.element.kind;
          this.element.setContent(
            content,
            this.common.calculatedWidth(),
            this.element.textElement.textSize,
            kind
          );
        });
      } else if (this.element.resource != undefined) {
        // this.subtitleService.requestGetRss(this.element.rss)
      } else {
        const kind = this.element.kind;
        this.element.setContent(
          this.element.content,
          this.common.calculatedWidth(),
          this.element.textElement.textSize,
          kind
        );
      }
    }
  }
  get common(): AbstractSceneCommon {
    return this._common;
  }

  @Input()
  set element(element: ScenePartSubtitleElement) {
    this._element = element;

    if (this.element != undefined && this.common) {
      if (this.element.resource != undefined) {
        // parse content
        ResourceExtensions.parseFromSubtitleResourceAsync(
          this.element.resource,
          this.resourceService,
          this.httpClient
        ).then((content) => {
          const kind = element.kind;
          this.element.setContent(
            content,
            this.common.calculatedWidth(),
            this.element.textElement.textSize,
            kind
          );
        });
      } else {
        const kind = element.kind;
        this.element.setContent(
          this.element.content,
          this.common.calculatedWidth(),
          this.element.textElement.textSize,
          kind
        );
      }
    }
  }

  get element(): ScenePartSubtitleElement {
    return this._element;
  }

  private _timer: any;
  private _timerCounter: number = 0;

  get haveTextElement(): boolean {
    return undefined != this.element?.textElement;
  }

  get animationName(): string {
    switch (this.element?.kind) {
      case ScenePartSubtitle.SUBTITLE_ANIMATION_KIND
        .SUBTITLE_ANIMATION_KIND_RIGHT_TO_LEFT:
        return 'animate-x';
      case ScenePartSubtitle.SUBTITLE_ANIMATION_KIND
        .SUBTITLE_ANIMATION_KIND_WRAP:
        return 'animate-y';
    }
    return '';
  }

  get verticalAlign(): string {
    switch (this.element?.textElement.verticalKind) {
      case TEXT_ALIGN_KIND.TEXT_ALIGN_KIND_VERTICAL_START:
        return 'flex-start';
      case TEXT_ALIGN_KIND.TEXT_ALIGN_KIND_VERTICAL_CENTER:
        return 'center';
      case TEXT_ALIGN_KIND.TEXT_ALIGN_KIND_VERTICAL_END:
        return 'flex-end';
      case TEXT_ALIGN_KIND.TEXT_ALIGN_KIND_HORIZONTAL_START:
        return 'flex-start';
      case TEXT_ALIGN_KIND.TEXT_ALIGN_KIND_HORIZONTAL_CENTER:
        return 'center';
      case TEXT_ALIGN_KIND.TEXT_ALIGN_KIND_HORIZONTAL_END:
        return 'flex-end';
    }

    return '';
  }

  get horizontalAlign(): string {
    switch (this.element?.textElement?.horizontalKind) {
      case TEXT_ALIGN_KIND.TEXT_ALIGN_KIND_VERTICAL_START:
        return 'flex-start';
      case TEXT_ALIGN_KIND.TEXT_ALIGN_KIND_VERTICAL_CENTER:
        return 'center';
      case TEXT_ALIGN_KIND.TEXT_ALIGN_KIND_VERTICAL_END:
        return 'flex-end';
      case TEXT_ALIGN_KIND.TEXT_ALIGN_KIND_HORIZONTAL_START:
        return 'flex-start';
      case TEXT_ALIGN_KIND.TEXT_ALIGN_KIND_HORIZONTAL_CENTER:
        return 'center';
      case TEXT_ALIGN_KIND.TEXT_ALIGN_KIND_HORIZONTAL_END:
        return 'flex-end';
    }

    return '';
  }

  constructor(
    private resourceService: ResourceService,
    private httpClient: HttpClient,
    private subtitleService: SubtitleService
  ) {}
  ngAfterContentChecked(): void {
    if (undefined != this.element) {
      if (
        this.element.kind ==
        ScenePartSubtitle.SUBTITLE_ANIMATION_KIND
          .SUBTITLE_ANIMATION_KIND_DEFAULT
      ) {
        if (undefined == this._timer) {
          this._timer = setInterval(() => {
            if (this.element?.contents?.length > 0) {
              const nextCounter = this._timerCounter + 1;
              if (this.element.seconds < nextCounter) {
                this._timerCounter = 0;

                let nextIndex = this.element.currentIndex + 1;

                if (nextIndex >= this.element.contents.length) {
                  nextIndex = 0;
                }

                this.element.current = this.element.contents[nextIndex];
                this.element.currentIndex = nextIndex;
              } else {
                this._timerCounter = nextCounter;
              }
            }
          }, 1000);
        }
      } else {
        clearInterval(this._timer);
        this._timer = undefined;
      }
    }

    if (undefined != this.contentText?.nativeElement) {
      // this.contentText.nativeElement.style.width = element.
      this._baseWidth = this.contentText.nativeElement.clientWidth;
      this.contentText.nativeElement.onanimationstart = this.onAnimationStartContentText.bind(
        this
      );

      this.contentText.nativeElement.onanimationiteration = this.onAnimationInterationFromContentText.bind(
        this
      );
      this.contentText.nativeElement.onanimationend = this.onAnimationEndContentTextFromContentText.bind(
        this
      );
    }
  }

  ngOnInit(): void {}

  onAnimationEndContentTextFromContentText(event: any) {}

  onAnimationInterationFromContentText(event: any) {
    if (this.element?.contents?.length > 0) {
      let nextIndex = this.element.currentIndex + 1;
      if (nextIndex >= this.element.contents.length) {
        nextIndex = 0;
      }

      const text = this.element.contents[nextIndex];
      this.element.current = text;
      this.element.currentIndex = nextIndex;

      if (
        this.element.kind ==
          ScenePartSubtitle.SUBTITLE_ANIMATION_KIND
            .SUBTITLE_ANIMATION_KIND_LEFT_TO_RIGHT ||
        this.element.kind ==
          ScenePartSubtitle.SUBTITLE_ANIMATION_KIND
            .SUBTITLE_ANIMATION_KIND_RIGHT_TO_LEFT
      ) {
        // re-use canvas object for better performance
        var canvas: HTMLCanvasElement = document.createElement('canvas');
        var context = canvas.getContext('2d');
        context.font = `${this.element.textElement.textSize}px Noto Sans KR`;
        var metrics = context.measureText(text);
        canvas.remove();

        const width = metrics.width + 10;

        if (this._baseWidth > width) {
          this.contentText.nativeElement.style.width = `${width}px`;
        }
      }
    }
  }
  onAnimationStartContentText(event: any) {}
}
