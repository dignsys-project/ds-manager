import { Component, Input, OnInit } from '@angular/core';
import { NgxMaterialTimepickerHoursFace } from 'ngx-material-timepicker/src/app/material-timepicker/components/timepicker-hours-face/ngx-material-timepicker-hours-face';
import { ScenePartTextElement } from 'src/app/models/scene-part-text-element';
import { TEXT_ALIGN_KIND } from 'src/app/protocols/common_pb';

@Component({
  selector: 'app-components-scene-common-text',
  templateUrl: './components-scene-common-text.component.html',
  styleUrls: ['./components-scene-common-text.component.scss'],
})
export class ComponentsSceneCommonTextComponent implements OnInit {
  private _element: ScenePartTextElement;

  @Input()
  set element(element: ScenePartTextElement) {
    this._element = element;
    if (undefined != this._element) {
      if (
        this._element?.horizontalKind == TEXT_ALIGN_KIND.TEXT_ALIGN_KIND_DEFAULT
      ) {
        this._element.horizontalKind =
          TEXT_ALIGN_KIND.TEXT_ALIGN_KIND_HORIZONTAL_CENTER;
      }

      if (
        this._element?.verticalKind == TEXT_ALIGN_KIND.TEXT_ALIGN_KIND_DEFAULT
      ) {
        this._element.verticalKind =
          TEXT_ALIGN_KIND.TEXT_ALIGN_KIND_VERTICAL_CENTER;
      }
    }
  }

  get element(): ScenePartTextElement {
    return this._element;
  }

  get verticalAlign(): string {
    if (undefined == this.element?.verticalKind) {
      return 'center';
    }

    switch (this.element?.verticalKind) {
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
    if (undefined == this.element?.horizontalKind) {
      return 'center';
    }
    switch (this.element?.horizontalKind) {
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

  get haveElement(): boolean {
    return undefined != this.element;
  }

  constructor() {}

  ngOnInit(): void {}
}
