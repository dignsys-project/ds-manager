import { HttpClient } from '@angular/common/http';
import {
  Component,
  OnInit,
  Input,
  OnDestroy,
  AfterContentChecked,
} from '@angular/core';
import { MatButtonToggleChange } from '@angular/material/button-toggle';
import { MatDialog } from '@angular/material/dialog';
import { MatSelectChange } from '@angular/material/select';
import { filter, take, takeWhile } from 'rxjs/operators';
import { CommonExtensions } from 'src/app/commons/common-extensions';
import { ResourceExtensions } from 'src/app/commons/resource-extensions';
import { SubtitleExtensions } from 'src/app/commons/subtitle-extensions';
import {
  ComponentsCommonDialogComponent,
  DIALOG_KIND,
} from 'src/app/components/components-common-dialog/components-common-dialog.component';
import { ComponentsCommonDialogModule } from 'src/app/components/components-common-dialog/components-common-dialog.module';
import { ComponentsCommonNameDialogComponent } from 'src/app/components/components-common-name-dialog/components-common-name-dialog.component';
import { ComponentsResourcesDialogV2Component } from 'src/app/components/components-resources-dialog-v2/components-resources-dialog-v2.component';
import { AbstractSceneCommon } from 'src/app/components/components-scene/abstract-scene-common';
import {
  ComponentsSceneViewerRssDialogComponent,
  IComponentsRssFeedData,
} from 'src/app/components/components-scene/components-scene-viewer-rss-dialog/components-scene-viewer-rss-dialog.component';
import { FeedElement } from 'src/app/models/feed-element';
import { ResourceElement } from 'src/app/models/resource-element';
import { ScenePartSubtitleElement } from 'src/app/models/scene-part-subtitle-element';
import { ScenePartSubtitleRssElement } from 'src/app/models/scene-part-subtitle-rss-element';
import {
  ALIGN_HORIZONTALS,
  ALIGN_VERTICALS,
  ITextAlignKind,
  ScenePartTextElement,
} from 'src/app/models/scene-part-text-element';
import {
  ScenePartSubtitle,
  SCENE_RESOURCE_KIND,
  TEXT_ALIGN_KIND,
  TEXT_ALIGN_KINDMap,
} from 'src/app/protocols/common_pb';
import { SubtitleService } from 'src/app/services/subtitle.service';
import { ResourceService } from '../../../../../services/resource.service';
import { ScenesCreateCopyPasteService } from '../../scenes-create-copy-paste.service';

interface IAnimKind {
  kind: ScenePartSubtitle.SUBTITLE_ANIMATION_KINDMap[keyof ScenePartSubtitle.SUBTITLE_ANIMATION_KINDMap];
  name: string;
}

@Component({
  selector: 'app-scenes-create-common-subtitle',
  templateUrl: './scenes-create-common-subtitle.component.html',
  styleUrls: ['./scenes-create-common-subtitle.component.scss'],
})
export class ScenesCreateCommonSubtitleComponent implements OnInit, OnDestroy {
  private _common: AbstractSceneCommon;

  private _bSubscribe: boolean = true;

  @Input()
  set common(common: AbstractSceneCommon) {
    if (undefined != common) {
      common.changedSize$
        .pipe(takeWhile(() => this._bSubscribe))
        .pipe(filter(() => this.element != undefined))
        .subscribe((size) => this.contentChanged(this.element, size.width));
    }

    this._common = common;
  }

  get common(): AbstractSceneCommon {
    return this._common;
  }

  get element(): ScenePartSubtitleElement {
    return this.common?.subtitleElement;
  }

  get haveResource(): boolean {
    return undefined != this.element?.resource;
  }

  get haveRss(): boolean {
    return undefined != this.element?.rss;
  }

  get isWrap(): boolean {
    return (
      this.element?.kind ==
      ScenePartSubtitle.SUBTITLE_ANIMATION_KIND.SUBTITLE_ANIMATION_KIND_WRAP
    );
  }

  get isRightToLeft(): boolean {
    return (
      this.element?.kind ==
      ScenePartSubtitle.SUBTITLE_ANIMATION_KIND
        .SUBTITLE_ANIMATION_KIND_RIGHT_TO_LEFT
    );
  }

  horizontalKinds: Array<ITextAlignKind> = ALIGN_HORIZONTALS;
  verticalKinds: Array<ITextAlignKind> = ALIGN_VERTICALS;

  animKinds: Array<IAnimKind>;

  constructor(
    private dialog: MatDialog,
    private httpClient: HttpClient,
    private resourceService: ResourceService,
    private subtitleService: SubtitleService,
    private copyPasteService: ScenesCreateCopyPasteService
  ) {
    // set animation kind
    this.animKinds = [
      {
        kind:
          ScenePartSubtitle.SUBTITLE_ANIMATION_KIND
            .SUBTITLE_ANIMATION_KIND_DEFAULT,
        name: '없음',
      },
      {
        kind:
          ScenePartSubtitle.SUBTITLE_ANIMATION_KIND
            .SUBTITLE_ANIMATION_KIND_RIGHT_TO_LEFT,
        name: '오른쪽에서 왼쪽',
      },
      {
        kind:
          ScenePartSubtitle.SUBTITLE_ANIMATION_KIND
            .SUBTITLE_ANIMATION_KIND_WRAP,
        name: 'WRAP',
      },
    ];
  }
  ngOnDestroy(): void {
    this._bSubscribe = false;
  }

  ngOnInit(): void {}

  isCheckedVertical(
    kind: TEXT_ALIGN_KINDMap[keyof TEXT_ALIGN_KINDMap]
  ): boolean {
    return this.element.textElement.verticalKind == kind;
  }
  isCheckedHorizontal(
    kind: TEXT_ALIGN_KINDMap[keyof TEXT_ALIGN_KINDMap]
  ): boolean {
    return this.element.textElement.horizontalKind == kind;
  }

  onClickedTest() {}

  onChangedFromFontSize(_: string) {
    const element = this.element;
    this.contentChanged(element, this.common.calculatedWidth());
  }

  onChangedFromTextArea(content: string) {
    this._common.subtitleElement._content = content;

    const element = this.element;
    this.contentChanged(element, this.common.calculatedWidth());
  }

  /**
   * on change from text-align button toggle group
   */
  onChangeTextVerticalAlignFromButtonToggleGroup(event: MatButtonToggleChange) {
    const kind = event.value as TEXT_ALIGN_KINDMap[keyof TEXT_ALIGN_KINDMap];
    this.element.textElement.verticalKind = kind;
  }

  /**
   * on change from text-align button toggle group
   */
  onChangeTextHorizontalAlignFromButtonToggleGroup(
    event: MatButtonToggleChange
  ) {
    const kind = event.value as TEXT_ALIGN_KINDMap[keyof TEXT_ALIGN_KINDMap];
    this.element.textElement.horizontalKind = kind;
  }

  /**
   * on selection change from subtitle-animation select
   * @param event
   */
  onSelectionChangeFromSubtitleAnimationSelect(event: MatSelectChange) {
    if (
      this.element.content?.length <= 0 &&
      this.element.contents?.length <= 0
    ) {
      return;
    }

    // 자막이 변경되면 justify-content도 변경 되어야 한다.
    const kind = event.value as ScenePartSubtitle.SUBTITLE_ANIMATION_KINDMap[keyof ScenePartSubtitle.SUBTITLE_ANIMATION_KINDMap];

    this.element.kind = kind;

    this.contentChanged(this.element, this.common.calculatedWidth());
  }

  async onClickedRemoveRss() {
    // create dialog for common dialog
    const bContinue = await ComponentsCommonDialogComponent.create(
      this.dialog,
      'RSS 제거',
      DIALOG_KIND.DIALOG_KIND_WARNING,
      '선택된 RSS를 취소 하시겠습니까?',
      [],
      true
    )
      .afterClosed()
      .pipe(take(1))
      .toPromise();

    if (true == bContinue) {
      this.element.rss = undefined;
      this.element.feedElement = undefined;
      this.element.contents = undefined;
      this.element.current = '';
      this.element.currentIndex = 0;
    }
  }
  /**
   * on clicked load rss feed.
   */
  async onClickedLoadRss() {
    // copy scene common service clear.
    this.copyPasteService.copySceneCommon(undefined);

    if (this.haveRss) {
      // create dialog rss component
      let rssElement = this.element.rss;
      const feedElement = this.element.feedElement;
      rssElement = await ComponentsSceneViewerRssDialogComponent.create(
        this.dialog,
        false,
        <IComponentsRssFeedData>{
          element: rssElement,
          feedElement: feedElement,
        }
      )
        .afterClosed()
        .pipe(take(1))
        .toPromise();

      if (undefined != rssElement) {
        this.element.rss = rssElement;
        this.element.feedElement = feedElement;
        this.element.resource = undefined;

        this.setFeedContent(rssElement, feedElement);
      }

      return;
    }

    // create ComponentsCommonNameDialog
    const rssAddress = await ComponentsCommonNameDialogComponent.create(
      this.dialog,
      'RSS 주소',
      400,
      '',
      true
    )
      .afterClosed()
      .pipe(take(1))
      .toPromise();

    if (undefined == rssAddress) {
      // create dialog for common dialog
      const bContinue = await ComponentsCommonDialogComponent.create(
        this.dialog,
        '리소스 제거',
        DIALOG_KIND.DIALOG_KIND_WARNING,
        '선택된 리소스를 취소 하시겠습니까?',
        [
          '리소스가 제거되지는 않습니다.',
          '리소스 삭제는 리소스 목록에서 삭제 가능합니다.',
        ],
        true
      )
        .afterClosed()
        .pipe(take(1))
        .toPromise();

      if (bContinue == true) {
        this.element.rss = undefined;
      }
    } else {
      // check www address
      const isValid = /^(?:http(s)?:\/\/)?[\w.-]+(?:\.[\w\.-]+)+[\w\-\._~:/?#[\]@!\$&'\(\)\*\+,;=.]+$/.test(
        rssAddress
      );
      if (true != isValid) {
        await ComponentsCommonDialogComponent.create(
          this.dialog,
          '잘못된 주소',
          DIALOG_KIND.DIALOG_KIND_ERROR,
          `${rssAddress}`,
          ['잘못된 주소 정보입니다.'],
          false
        )
          .afterClosed()
          .toPromise();

        return;
      }

      try {
        // check to prometheus
        const response = await this.subtitleService
          .requestGetRss(rssAddress)
          .pipe(take(1))
          .toPromise();

        if (CommonExtensions.isSuccess(response.getCommon())) {
          const feed = response.getFeed();

          let element = new ScenePartSubtitleRssElement();
          element.address = rssAddress;
          element.contentKinds.push(
            ...[
              ScenePartSubtitle.RSS_CONTENT_KIND.RSS_CONTENT_KIND_TITLE,
              ScenePartSubtitle.RSS_CONTENT_KIND.RSS_CONTENT_KIND_DESCRIPTION,
            ]
          );

          const feedElement = FeedElement.fromMessage(feed);

          // create dialog rss component
          element = await ComponentsSceneViewerRssDialogComponent.create(
            this.dialog,
            false,
            <IComponentsRssFeedData>{
              element: element,
              feedElement: feedElement,
            }
          )
            .afterClosed()
            .pipe(take(1))
            .toPromise();

          this.element.rss = element;
          this.element.feedElement = feedElement;
          this.element.resource = undefined;

          this.setFeedContent(element, feedElement);
        }
      } catch (error) {
        console.error(error);
      }
    }
  }

  private async rssFeedShow() {}

  /**
   * on clicked load resource
   */
  async onClickedLoadResource() {
    try {
      // create dialog for resources
      const elements = await ComponentsResourcesDialogV2Component.create(
        this.dialog,
        SCENE_RESOURCE_KIND.SCENE_RESOURCE_KIND_SUBTITLE
      )
        .afterClosed()
        .pipe(take(1))
        .toPromise();

      if (elements?.length > 0) {
        this.element.resource = elements[0];
        this.element.rss = undefined;

        // parse content
        const content = await ResourceExtensions.parseFromSubtitleResourceAsync(
          this.element.resource,
          this.resourceService,
          this.httpClient
        );

        this.onChangedFromTextArea(content);
      } else {
        // create dialog for common dialog
        const bContinue = await ComponentsCommonDialogComponent.create(
          this.dialog,
          '리소스 제거',
          DIALOG_KIND.DIALOG_KIND_WARNING,
          '선택된 리소스를 취소 하시겠습니까?',
          [
            '리소스가 제거되지는 않습니다.',
            '리소스 삭제는 리소스 목록에서 삭제 가능합니다.',
          ],
          true
        )
          .afterClosed()
          .pipe(take(1))
          .toPromise();

        if (bContinue == true) {
          this.element.resource = undefined;
          // this.element.contents = [];
        }
      }
    } catch (error) {
      console.error(error);
    }
  }

  private contentChanged(element: ScenePartSubtitleElement, width: number) {
    if (element.rss != undefined) {
      const feedElement = element.feedElement;
      if (feedElement != undefined) {
        this.setFeedContent(element.rss, feedElement);
      }
    } else {
      const content = element.content;
      if (content?.length > 0) {
        const kind = this.element.kind;
        this.element.setContent(
          content,
          width,
          this.element.textElement.textSize,
          kind
        );
      }
    }
  }
  private setFeedContent(
    rssElement: ScenePartSubtitleRssElement,
    feedElement: FeedElement
  ) {
    this.element.setFeedContent(
      SubtitleExtensions.makeFeedElement(
        feedElement,
        rssElement.includeTitle,
        rssElement.includeDescription
      ),
      this.common.calculatedWidth(),
      this.common.subtitleElement.textElement.textSize,
      this.element.kind
    );
  }
}
