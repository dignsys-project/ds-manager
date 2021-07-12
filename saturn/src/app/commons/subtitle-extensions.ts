import { FeedElement } from '../models/feed-element';
import { ScenePartSubtitle } from '../protocols/common_pb';

export class SubtitleExtensions {
  public static contents2content(contents: Array<string>): string {
    let content: string = '';
    for (let i = 0; i < contents.length; i++) {
      content += contents[i];

      if (i >= 5) {
        break;
      }
    }

    return content;
  }
  public static makeFeedElement(
    element: FeedElement,
    includeTitle: boolean,
    includeDescription: boolean
  ): Array<string> {
    const contents = new Array<string>();

    for (const item of element.items) {
      if (includeTitle) {
        contents.push(item.title);
      }

      if (includeDescription) {
        contents.push(item.description);
      }
    }

    return contents;
  }

  public static calculateTextWidth(
    contents: Array<string>,
    width: number,
    textSize: number,
    kind: ScenePartSubtitle.SUBTITLE_ANIMATION_KINDMap[keyof ScenePartSubtitle.SUBTITLE_ANIMATION_KINDMap]
  ): Array<string> {
    let container = new Array<string>();

    switch (kind) {
      case ScenePartSubtitle.SUBTITLE_ANIMATION_KIND
        .SUBTITLE_ANIMATION_KIND_DEFAULT:
      case ScenePartSubtitle.SUBTITLE_ANIMATION_KIND
        .SUBTITLE_ANIMATION_KIND_WRAP:
        {
          container.push(...this.calculateContents(width, textSize, contents));
        }

        break;
      default:
        container = contents;
        break;
    }

    return container;
  }

  private static calculateContentsOld(
    width: number,
    fontSize: number,
    contents: Array<string>
  ): Array<string> {
    const container = new Array<string>();

    const meansureTextLength = Math.round(
      width / this.getTextWidth('가', fontSize)
    );

    for (let content of contents) {
      content = content.replace(/^\s+/, '').replace(/\s+$/, '');
      if (content.trim().length <= 0) {
        continue;
      }
      const length = content.length;
      let index = 0;
      do {
        let size = meansureTextLength;
        if (size > content.length - index) {
          size = content.length - index;
        }
        container.push(content.substr(index, size));
        index += size;
      } while (index < length);
    }

    return container;
  }

  private static calculateContents(
    width: number,
    fontSize: number,
    contents: Array<string>
  ): Array<string> {
    const container = new Array<string>();

    for (let content of contents) {
      content = content.replace(/^\s+/, '').replace(/\s+$/, '');
      if (content.trim().length <= 0) {
        continue;
      }

      const formattedTextWidth = Math.ceil(
        this.getTextWidth(content, fontSize)
      );

      if (width < formattedTextWidth) {
        const textBoxWidth = width;
        const textWidth = formattedTextWidth;

        const avarageTextWidth = Math.floor(
          textWidth / Math.ceil(content.length)
        );
        const meansureTextLength = Math.floor(
          textBoxWidth / Math.ceil(avarageTextWidth)
        );

        const length = content.length;
        let index = 0;

        do {
          let size = meansureTextLength;
          if (size > content.length - index) {
            size = content.length - index;
          }
          container.push(content.substr(index, size));
          index += size;
        } while (index < length);
      } else {
        container.push(content);
      }
    }

    return container;
  }

  public static getTextWidth(text: string, fontSize: number) {
    // re-use canvas object for better performance
    var canvas: HTMLCanvasElement = document.createElement('canvas');
    var context = canvas.getContext('2d');
    context.font = `${fontSize}px Noto Sans KR`;
    var metrics = context.measureText(text);

    canvas.remove();
    return metrics.width;
  }
}
