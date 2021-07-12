import {
  Component,
  OnInit,
  Input,
  ViewChild,
  ElementRef,
  OnDestroy,
  SecurityContext,
} from '@angular/core';
import { ScenePartWebElement } from 'src/app/models/scene-part-web-element';
import { isNullOrUndefined } from 'util';
import { takeWhile } from 'rxjs/operators';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { ScenePartWeb } from 'src/app/protocols/common_pb';
import { AbstractSceneCommon } from '../../abstract-scene-common';

@Component({
  selector: 'app-components-scene-common-web',
  templateUrl: './components-scene-common-web.component.html',
  styleUrls: ['./components-scene-common-web.component.scss'],
})
export class ComponentsSceneCommonWebComponent implements OnInit, OnDestroy {
  private m_Element: ScenePartWebElement;
  private m_bSubscribe: boolean = true;

  private _common: AbstractSceneCommon;

  @ViewChild('WEB_BOX', { static: false })
  container: ElementRef<HTMLIFrameElement>;

  @Input()
  isScene: boolean = false;

  @Input()
  set common(common: AbstractSceneCommon) {
    this._common = common;
  }

  get maxWidth(): number {
    return this._common?.size?.width;
  }

  @Input()
  set element(element: ScenePartWebElement) {
    this.m_Element = element;
    if (!isNullOrUndefined(this.m_Element)) {
      this.m_Element.changed$
        .pipe(takeWhile(() => this.m_bSubscribe))
        .subscribe((url) => {
          if (this.isScene) {
            this.nativeElement.src = this.sanitizer.sanitize(
              SecurityContext.RESOURCE_URL,
              this.sanitizer.bypassSecurityTrustResourceUrl(url)
            );
          }
        });
    }
  }

  get element(): ScenePartWebElement {
    return this.m_Element;
  }

  get url(): string {
    return this.element?.url;
  }

  private get nativeElement(): HTMLIFrameElement {
    return this.container?.nativeElement;
  }

  constructor(private sanitizer: DomSanitizer) {}

  ngOnDestroy(): void {
    this.m_bSubscribe = false;
  }

  ngOnInit(): void {}

  isValidWebAddress(): boolean {
    return new RegExp(
      /(http|https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?/
    ).test(this.m_Element?.url);
  }
}
