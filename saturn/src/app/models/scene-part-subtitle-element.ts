import { ScenePartTextElement } from './scene-part-text-element';
import {
  ScenePartSubtitle,
  TEXT_ALIGN_KIND,
  TEXT_ALIGN_KINDMap,
} from '../protocols/common_pb';
import { ResourceElement } from './resource-element';
import { SubtitleExtensions } from '../commons/subtitle-extensions';
import { ScenePartSubtitleRssElement } from './scene-part-subtitle-rss-element';
import { FeedElement } from './feed-element';

export class ScenePartSubtitleElement {
  // text element
  public textElement: ScenePartTextElement;

  // seconds
  public seconds: number = 5;

  // text or xml resource element
  public resource: ResourceElement;

  public repeated: boolean;

  public kind: ScenePartSubtitle.SUBTITLE_ANIMATION_KINDMap[keyof ScenePartSubtitle.SUBTITLE_ANIMATION_KINDMap] =
    ScenePartSubtitle.SUBTITLE_ANIMATION_KIND.SUBTITLE_ANIMATION_KIND_DEFAULT;

  public rss: ScenePartSubtitleRssElement;
  public feedElement: FeedElement;

  //
  // contents

  public _content: string = '';
  public contents: Array<string>;

  public current: string;
  public currentIndex: number;

  constructor() {
    this.textElement = new ScenePartTextElement();
  }

  public setContent(
    content: string,
    width: number,
    textSize: number,
    animKind: ScenePartSubtitle.SUBTITLE_ANIMATION_KINDMap[keyof ScenePartSubtitle.SUBTITLE_ANIMATION_KINDMap]
  ) {
    this._content = content;
    if (content?.length > 1) {
      let contents = content.split('.');
      contents = SubtitleExtensions.calculateTextWidth(
        contents,
        width,
        textSize,
        animKind
      );

      if (contents?.length > 0) {
        this.contents = contents;
        this.current = contents[0];
        this.currentIndex = 0;
      }
    }
  }

  public setFeed(
    rssElement: ScenePartSubtitleRssElement,
    feedElement: FeedElement,
    width: number,
    fontSize: number
  ) {
    this.setFeedContent(
      SubtitleExtensions.makeFeedElement(
        feedElement,
        rssElement.includeTitle,
        rssElement.includeDescription
      ),
      width,
      fontSize,
      this.kind
    );
  }

  public setFeedContent(
    contents: Array<string>,
    width: number,
    textSize: number,
    animKind: ScenePartSubtitle.SUBTITLE_ANIMATION_KINDMap[keyof ScenePartSubtitle.SUBTITLE_ANIMATION_KINDMap]
  ) {
    this._content = '';
    if (contents?.length > 1) {
      contents = SubtitleExtensions.calculateTextWidth(
        contents,
        width,
        textSize,
        animKind
      );

      if (contents?.length > 0) {
        this.contents = contents;
        this.current = contents[0];
        this.currentIndex = 0;
      }
    }
  }

  public get content(): string {
    return this._content;
  }
  public toMessage(): ScenePartSubtitle {
    const message = new ScenePartSubtitle();

    // set seconds
    message.setSeconds(this.seconds);

    // set resource
    if (undefined != this.resource) {
      message.setResource(this.resource.toMessage());
    } else {
      this.textElement.text = this.content;
    }

    // set text
    message.setText(this.textElement.toMessage());

    // set repeated
    if (undefined != this.repeated) {
      message.setRepeated(this.repeated);
    }

    // set kind
    message.setAnimationkind(this.kind);

    // set rss
    if (undefined != this.rss) {
      message.setRss(this.rss.toMessage());
    }

    return message;
  }

  public fromMessage(message: ScenePartSubtitle) {
    // from seconds
    this.seconds = message.getSeconds();

    // from text
    if (message.hasText()) {
      this.textElement.fromMessage(message.getText());
    }

    if (message.hasResource()) {
      this.resource = ResourceElement.fromMessage(message.getResource());
    } else {
      this._content = this.textElement.text;
    }

    // from text
    this.repeated = message.getRepeated();

    // from kind
    this.kind = message.getAnimationkind();

    // from rss
    if (message.hasRss()) {
      this.rss = new ScenePartSubtitleRssElement();
      this.rss.fromMessage(message.getRss());
    }
  }
}
