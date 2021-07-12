import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { take } from 'rxjs/operators';
import { CommonExtensions } from 'src/app/commons/common-extensions';
import { ComponentsResourcesCreateElementComponent } from 'src/app/components/components-resources-create-element/components-resources-create-element.component';
import {
  ComponentsSceneViewerRssDialogComponent,
  IComponentsRssFeedData,
} from 'src/app/components/components-scene/components-scene-viewer-rss-dialog/components-scene-viewer-rss-dialog.component';
import { ScenePartSubtitleRssElement } from 'src/app/models/scene-part-subtitle-rss-element';
import { SubtitleService } from 'src/app/services/subtitle.service';

@Component({
  selector: 'app-scene-develompents-components-rss',
  templateUrl: './scene-develompents-components-rss.component.html',
  styleUrls: ['./scene-develompents-components-rss.component.scss'],
})
export class SceneDevelompentsComponentsRssComponent implements OnInit {
  rssElement: ScenePartSubtitleRssElement;

  readonly ADDRESS: string = 'http://rss.etnews.com/Section062.xml';

  constructor(
    private dialog: MatDialog,
    private subtitleService: SubtitleService
  ) {}

  ngOnInit(): void {}

  async onClickedCreateRss() {
    try {
      const response = await this.subtitleService
        .requestGetRss(this.ADDRESS)
        .pipe(take(1))
        .toPromise();
      if (CommonExtensions.isSuccess(response.getCommon())) {
        const feed = response.getFeed();

        const rssElement = new ScenePartSubtitleRssElement();
        rssElement.address = this.ADDRESS;

        const message = await ComponentsSceneViewerRssDialogComponent.create(
          this.dialog,
          false,
          <IComponentsRssFeedData>{
            element: rssElement,
            feed: feed,
          }
        )
          .afterClosed()
          .pipe(take(1))
          .toPromise();
      }
    } catch (error) {}
  }

  onClickedReadRss() {}
}
