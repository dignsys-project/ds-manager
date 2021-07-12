import { ScenePartWeb } from '../protocols/common_pb';
import { ScenePartTextElement } from './scene-part-text-element';
import { Observable, BehaviorSubject } from 'rxjs';

export class ScenePartWebElement {
  url: string;

  isShowWeb: boolean = false;

  public urlChanged$: BehaviorSubject<string> = new BehaviorSubject<string>(
    undefined
  );

  public changed$: Observable<string>;

  constructor() {
    this.changed$ = this.urlChanged$.asObservable();
  }

  public toMessage(): ScenePartWeb {
    const message = new ScenePartWeb();
    message.setUrl(this.url);
    return message;
  }

  public fromMessage(message: ScenePartWeb) {
    this.url = message.getUrl();
  }
}
