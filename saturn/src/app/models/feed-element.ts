import { CommonExtensions } from '../commons/common-extensions';
import { Feed } from '../protocols/common_pb';

export class FeedItemElement {
  title: string;
  description: string;
  pubDateSeconds: number;
  lastUpdateSeconds: number;
  link: string;

  fromMessage(message: Feed.FeedItem) {
    this.title = message.getTitle();
    this.description = message.getDescription();
    this.pubDateSeconds = message.getPubdateseconds();
    this.lastUpdateSeconds = message.getLastupdateseconds();
    this.link = message.getLink();
  }

  public static fromMessage(message: Feed.FeedItem): FeedItemElement {
    const element = new FeedItemElement();
    element.fromMessage(message);

    return element;
  }
}
export class FeedElement {
  title: string;
  link: string;
  description: string;
  language: string;
  copyright: string;
  lastBuildDateSeconds: number;

  public get lastBuildDate(): Date {
    return CommonExtensions.utcSecondsToDate(this.lastBuildDateSeconds);
  }

  items: Array<FeedItemElement>;

  fromMessage(message: Feed) {
    this.title = message.getTitle();
    this.link = message.getLink();
    this.description = message.getDescription();
    this.language = message.getLanguage();
    this.copyright = message.getCopyright();
    this.lastBuildDateSeconds = message.getLastbuilddateseconds();

    this.items = message
      .getItemsList()
      .map((x) => FeedItemElement.fromMessage(x));
  }

  public static fromMessage(message: Feed): FeedElement {
    const element = new FeedElement();
    element.fromMessage(message);

    return element;
  }
}
