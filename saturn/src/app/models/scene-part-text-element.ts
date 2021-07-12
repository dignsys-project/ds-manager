import { ɵSWITCH_VIEW_CONTAINER_REF_FACTORY__POST_R3__ } from '@angular/core';
import {
  ScenePartText,
  TEXT_ALIGN_KIND,
  TEXT_ALIGN_KINDMap,
} from '../protocols/common_pb';

export interface ITextAlignKind {
  name: string;
  kind: TEXT_ALIGN_KINDMap[keyof TEXT_ALIGN_KINDMap];
}

export const ALIGN_HORIZONTALS: Array<ITextAlignKind> = [
  {
    name: 'format_align_left',
    kind: TEXT_ALIGN_KIND.TEXT_ALIGN_KIND_HORIZONTAL_START,
  },
  {
    name: 'format_align_center',
    kind: TEXT_ALIGN_KIND.TEXT_ALIGN_KIND_HORIZONTAL_CENTER,
  },
  {
    name: 'format_align_right',
    kind: TEXT_ALIGN_KIND.TEXT_ALIGN_KIND_HORIZONTAL_END,
  },
];

export const ALIGN_VERTICALS: Array<ITextAlignKind> = [
  {
    name: 'align_vertical_top',
    kind: TEXT_ALIGN_KIND.TEXT_ALIGN_KIND_VERTICAL_START,
  },
  {
    name: 'align_vertical_center',
    kind: TEXT_ALIGN_KIND.TEXT_ALIGN_KIND_VERTICAL_CENTER,
  },
  {
    name: 'align_vertical_bottom',
    kind: TEXT_ALIGN_KIND.TEXT_ALIGN_KIND_VERTICAL_END,
  },
];

export class ScenePartTextElement {
  constructor(public text: string = '임시 버튼') {}
  public textColor: string = '#232323';
  public textSize: number = 17;
  public isBold: boolean = false;
  public isItalic: boolean = false;

  public horizontalKind: TEXT_ALIGN_KINDMap[keyof TEXT_ALIGN_KINDMap] =
    TEXT_ALIGN_KIND.TEXT_ALIGN_KIND_HORIZONTAL_CENTER;

  public verticalKind: TEXT_ALIGN_KINDMap[keyof TEXT_ALIGN_KINDMap] =
    TEXT_ALIGN_KIND.TEXT_ALIGN_KIND_VERTICAL_CENTER;

  public static isVertical(
    kind: TEXT_ALIGN_KINDMap[keyof TEXT_ALIGN_KINDMap]
  ): boolean {
    switch (kind) {
      case TEXT_ALIGN_KIND.TEXT_ALIGN_KIND_VERTICAL_START:
      case TEXT_ALIGN_KIND.TEXT_ALIGN_KIND_VERTICAL_CENTER:
      case TEXT_ALIGN_KIND.TEXT_ALIGN_KIND_VERTICAL_END:
        return true;
    }

    return false;
  }

  public static isHorizontal(
    kind: TEXT_ALIGN_KINDMap[keyof TEXT_ALIGN_KINDMap]
  ): boolean {
    switch (kind) {
      case TEXT_ALIGN_KIND.TEXT_ALIGN_KIND_HORIZONTAL_START:
      case TEXT_ALIGN_KIND.TEXT_ALIGN_KIND_HORIZONTAL_CENTER:
      case TEXT_ALIGN_KIND.TEXT_ALIGN_KIND_HORIZONTAL_END:
        return true;
    }

    return false;
  }

  // to message
  public toMessage(): ScenePartText {
    const message = new ScenePartText();
    message.setText(this.text);
    message.setTextcolor(this.textColor);
    message.setTextsize(this.textSize);
    message.setBold(this.isBold);
    message.setItalic(this.isItalic);
    message.setVerticalkind(this.verticalKind);
    message.setHorizontalkind(this.horizontalKind);

    return message;
  }

  // from message
  public fromMessage(message: ScenePartText) {
    this.text = message.getText();
    this.textColor = message.getTextcolor();
    this.textSize = message.getTextsize();
    this.isBold = message.getBold();
    this.isItalic = message.getItalic();
    this.verticalKind = message.getVerticalkind();
    this.horizontalKind = message.getHorizontalkind();
  }

  public static fromMessage(message: ScenePartText): ScenePartTextElement {
    const element = new ScenePartTextElement();
    element.fromMessage(message);
    return element;
  }
}
