import { Component, OnInit, Input } from '@angular/core';
import { MatButtonToggleChange } from '@angular/material/button-toggle';
import {
  ALIGN_HORIZONTALS,
  ALIGN_VERTICALS,
  ITextAlignKind,
  ScenePartTextElement,
} from 'src/app/models/scene-part-text-element';
import {
  ScenePartText,
  TEXT_ALIGN_KIND,
  TEXT_ALIGN_KINDMap,
} from 'src/app/protocols/common_pb';

@Component({
  selector: 'app-scenes-create-common-text',
  templateUrl: './scenes-create-common-text.component.html',
  styleUrls: ['./scenes-create-common-text.component.scss'],
})
export class ScenesCreateCommonTextComponent implements OnInit {
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

  @Input()
  disabledText: boolean = false;

  horizontalKinds: Array<ITextAlignKind> = ALIGN_HORIZONTALS;
  verticalKinds: Array<ITextAlignKind> = ALIGN_VERTICALS;

  constructor() {}

  ngOnInit(): void {}

  isCheckedVertical(
    kind: TEXT_ALIGN_KINDMap[keyof TEXT_ALIGN_KINDMap]
  ): boolean {
    return this.element.verticalKind == kind;
  }
  isCheckedHorizontal(
    kind: TEXT_ALIGN_KINDMap[keyof TEXT_ALIGN_KINDMap]
  ): boolean {
    return this.element.horizontalKind == kind;
  }

  /**
   * on change from text-align button toggle group
   */
  onChangeTextVerticalAlignFromButtonToggleGroup(event: MatButtonToggleChange) {
    const kind = event.value as TEXT_ALIGN_KINDMap[keyof TEXT_ALIGN_KINDMap];
    this.element.verticalKind = kind;
  }

  /**
   * on change from text-align button toggle group
   */
  onChangeTextHorizontalAlignFromButtonToggleGroup(
    event: MatButtonToggleChange
  ) {
    const kind = event.value as TEXT_ALIGN_KINDMap[keyof TEXT_ALIGN_KINDMap];
    this.element.horizontalKind = kind;
  }
}
