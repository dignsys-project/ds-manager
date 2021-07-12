import { ScenePartSubtitle } from '../protocols/common_pb';

export class ScenePartSubtitleRssElement {
  public address: string;
  public contentKinds: Array<
    ScenePartSubtitle.RSS_CONTENT_KINDMap[keyof ScenePartSubtitle.RSS_CONTENT_KINDMap]
  > = Array<
    ScenePartSubtitle.RSS_CONTENT_KINDMap[keyof ScenePartSubtitle.RSS_CONTENT_KINDMap]
  >();

  public get includeTitle(): boolean {
    return this.contentKinds?.includes(
      ScenePartSubtitle.RSS_CONTENT_KIND.RSS_CONTENT_KIND_TITLE
    );
  }

  public get includeDescription(): boolean {
    return this.contentKinds?.includes(
      ScenePartSubtitle.RSS_CONTENT_KIND.RSS_CONTENT_KIND_DESCRIPTION
    );
  }

  constructor() {
    this.contentKinds = new Array<
      ScenePartSubtitle.RSS_CONTENT_KINDMap[keyof ScenePartSubtitle.RSS_CONTENT_KINDMap]
    >();
  }

  fromMessage(message: ScenePartSubtitle.Rss) {
    this.address = message.getAddress();

    const contentKinds = message.getContentkindsList();
    if (contentKinds?.length > 0) {
      this.contentKinds = message.getContentkindsList();
    }
  }

  toMessage(): ScenePartSubtitle.Rss {
    const message = new ScenePartSubtitle.Rss();
    message.setAddress(this.address);
    if (undefined != this.contentKinds && this.contentKinds?.length > 0) {
      message.setContentkindsList(this.contentKinds);
    }

    return message;
  }
}
