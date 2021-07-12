import { HttpClient, HttpHeaders } from '@angular/common/http';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { Component, Inject, OnDestroy, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import {
  MatDialog,
  MatDialogRef,
  MAT_DIALOG_DATA,
} from '@angular/material/dialog';
import { take, takeWhile } from 'rxjs/operators';
import { CommonExtensions } from 'src/app/commons/common-extensions';
import { SubtitleExtensions } from 'src/app/commons/subtitle-extensions';
import { FeedElement, FeedItemElement } from 'src/app/models/feed-element';
import { ScenePartSubtitleRssElement } from 'src/app/models/scene-part-subtitle-rss-element';
import { Feed, ScenePartSubtitle } from 'src/app/protocols/common_pb';
import { SubtitleService } from 'src/app/services/subtitle.service';

export interface IComponentsRssFeedData {
  element?: ScenePartSubtitleRssElement;
  feedElement?: FeedElement;
}

export interface IComponentsSceneViewerRssDialogData {
  read: boolean;
  rss?: IComponentsRssFeedData;
}

@Component({
  selector: 'app-components-scene-viewer-rss-dialog',
  templateUrl: './components-scene-viewer-rss-dialog.component.html',
  styleUrls: ['./components-scene-viewer-rss-dialog.component.scss'],
})
export class ComponentsSceneViewerRssDialogComponent
  implements OnInit, OnDestroy {
  addressForm: FormControl;

  rssKindForm: FormGroup;

  private readonly ADDRESS_REG = /^(?:http(s)?:\/\/)?[\w.-]+(?:\.[\w\.-]+)+[\w\-\._~:/?#[\]@!\$&'\(\)\*\+,;=.]+$/;

  private _isRead: boolean = false;

  private _bSubscribe: boolean = true;

  private _feedElement: FeedElement;

  private _contents: Array<string>;

  private _isCompleted: boolean = true;

  private _element: ScenePartSubtitleRssElement;

  get isRss(): boolean {
    return undefined != this.data?.rss;
  }

  get haveFeed(): boolean {
    return undefined != this.data?.rss?.feedElement;
  }

  get isRead(): boolean {
    return this._isRead;
  }

  get errors(): Array<string> {
    return Object.keys(this.addressForm.errors).map((x) => x);
  }

  get contents(): Array<string> {
    return this._contents;
  }

  get feedElement(): FeedElement {
    return this._feedElement;
  }

  get isValid(): boolean {
    if (this.addressForm.invalid) {
      return false;
    }

    if (!this._isCompleted) {
      return false;
    }

    const isTitle = this.rssKindForm.get('title').value as boolean;
    const isDescription = this.rssKindForm.get('description').value as boolean;

    if (false == isTitle && false == isDescription) {
      return false;
    }

    return true;
  }

  // constructor
  constructor(
    public reference: MatDialogRef<ComponentsSceneViewerRssDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: IComponentsSceneViewerRssDialogData,
    private subtitleService: SubtitleService,
    formBuilder: FormBuilder
  ) {
    if (this.data.read != undefined) {
      this._isRead = this.data.read;
    }

    // create rss address form
    const rss = data.rss;
    if (undefined != rss) {
      const element = rss?.element;
      this._element = element;

      if (undefined != element) {
        // create address form
        this.addressForm = new FormControl(element.address, [
          Validators.required,
          Validators.pattern(this.ADDRESS_REG),
        ]);

        // address form value changed
        this.addressForm.valueChanges
          .pipe(takeWhile(() => this._bSubscribe))
          .subscribe((value) => {
            this._isCompleted = false;
          });

        // checked title
        let checkedTitle = element.includeTitle;

        // checked description
        let checkedDescription = element.includeDescription;

        if (checkedTitle == false && checkedDescription == false) {
          checkedTitle = true;
          checkedDescription = true;
        }

        // create rss kind form
        this.rssKindForm = formBuilder.group({
          title: [checkedTitle, [Validators.required]],
          description: [checkedDescription, [Validators.required]],
        });

        // rss kind form value changed
        this.rssKindForm.valueChanges
          .pipe(takeWhile(() => this._bSubscribe))
          .subscribe((values) => {
            this._contents = SubtitleExtensions.makeFeedElement(
              this.feedElement,
              values.title,
              values.description
            );
          });
      }

      const feedElement = rss?.feedElement;
      if (undefined != feedElement) {
        const isTitle = this.rssKindForm.get('title').value as boolean;
        const isDescription = this.rssKindForm.get('description')
          .value as boolean;

        this._feedElement = feedElement;

        this._contents = SubtitleExtensions.makeFeedElement(
          feedElement,
          isTitle,
          isDescription
        );
      }
    }
  }
  ngOnDestroy(): void {
    this._bSubscribe = false;
  }

  ngOnInit(): void {}

  onClickedConfirm() {
    if (!this.isValid) {
      return;
    }

    // get address
    const address = this.addressForm.value as string;

    // get title, description
    const includeTitle = this.rssKindForm.get('title').value as boolean;
    const includeDescription = this.rssKindForm.get('description')
      .value as boolean;

    const element = this._element;

    element.contentKinds.splice(0, element.contentKinds.length);

    if (includeTitle) {
      element.contentKinds.push(
        ScenePartSubtitle.RSS_CONTENT_KIND.RSS_CONTENT_KIND_TITLE
      );
    }

    if (includeDescription) {
      element.contentKinds.push(
        ScenePartSubtitle.RSS_CONTENT_KIND.RSS_CONTENT_KIND_DESCRIPTION
      );
    }

    this.reference.close(element);
  }

  onClickedCancel() {
    this.reference.close(undefined);
  }

  // components scene viewer rss dialog create
  public static create(
    dialog: MatDialog,
    read: boolean,
    rss?: IComponentsRssFeedData,
    content?: string
  ): MatDialogRef<
    ComponentsSceneViewerRssDialogComponent,
    ScenePartSubtitleRssElement
  > {
    return dialog.open(ComponentsSceneViewerRssDialogComponent, {
      width: '100vw',
      maxWidth: '100vw',
      height: '100vh',
      data: <IComponentsSceneViewerRssDialogData>{
        read: read,
        rss: rss,
        content: content,
      },
    });
  }
}
