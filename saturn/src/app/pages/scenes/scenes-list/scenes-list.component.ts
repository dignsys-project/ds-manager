import { Component, OnInit, ViewChild } from '@angular/core';
import { ScenesHeaderService } from '../scenes-header.service';
import { take } from 'rxjs/operators';
import { SceneBaseElement } from 'src/app/models/scene-base-element';
import { CommonExtensions } from 'src/app/commons/common-extensions';
import { isNullOrUndefined } from 'util';
import { ComponentsScenesComponent } from 'src/app/components/components-scenes/components-scenes.component';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import {
  ComponentsCommonDialogComponent,
  DIALOG_KIND,
} from 'src/app/components/components-common-dialog/components-common-dialog.component';
import { ScenesService } from '../../../services/scenes.service';

/**
 * @deprecated instead of scenes-list-v2.component
 *
 */
@Component({
  selector: 'app-scenes-list',
  templateUrl: './scenes-list.component.html',
  styleUrls: ['./scenes-list.component.scss'],
  providers: [ScenesService],
})
export class ScenesListComponent implements OnInit {
  private readonly REQUEST_ITEM_SIZE: number = 10;
  private m_From: number = 0;

  @ViewChild(ComponentsScenesComponent, { static: true })
  componentsScenes: ComponentsScenesComponent;

  elements: Array<SceneBaseElement>;
  itemsCount: number;

  isProcess: boolean = false;

  selected: SceneBaseElement;

  constructor(
    private headerService: ScenesHeaderService,
    private service: ScenesService,
    private dialog: MatDialog,
    private router: Router
  ) {
    this.headerService.title$.next('씬 목록');
  }

  ngOnInit(): void {
    this.requestScenes(this.m_From);
  }

  private requestScenes(from: number) {
    this.isProcess = true;

    this.service
      .requestGetScene(this.m_From, this.REQUEST_ITEM_SIZE)
      .pipe(take(1))
      .subscribe(
        (response) => {
          if (CommonExtensions.isSuccess(response.getCommon())) {
            const elements = response
              .getScenebasesList()
              .map((x) => SceneBaseElement.fromMessageBase(x));

            if (!isNullOrUndefined(this.elements)) {
              const container = new Array<SceneBaseElement>();
              container.push(...this.elements);
              container.push(...elements);
              this.elements = container;
            } else {
              this.elements = elements;
            }

            this.itemsCount = response.getItemscount();

            this.componentsScenes.elements = this.elements;

            this.m_From = this.m_From + 1;
          }

          this.isProcess = false;
        },
        (error) => (this.isProcess = false)
      );
  }

  onOutputSceneNext() {
    this.requestScenes(this.m_From);
  }

  onOutputSelected(element: SceneBaseElement) {
    if (this.selected != element) {
      this.selected = element;
    } else {
      this.selected = null;
    }
  }

  onClickedSceneModified(element: SceneBaseElement) {
    this.router.navigate([`scenes/create`], {
      queryParams: { sceneId: element.sceneId, isDuplicated: false },
    });
  }

  onClickedSceneDuplicate(element: SceneBaseElement) {
    this.router.navigate([`scenes/create`], {
      queryParams: { sceneId: element.sceneId, isDuplicated: true },
    });
  }

  onClickedScenesDetail(element: SceneBaseElement) {
    this.router.navigate([`scenes/item/${element.sceneId}`]);
  }

  onClickedScenesDelete(element: SceneBaseElement) {
    ComponentsCommonDialogComponent.create(
      this.dialog,
      '씬 삭제',
      DIALOG_KIND.DIALOG_KIND_WARNING,
      `${element.name} 씬을 삭제하시겠습니까?`,
      ['디바이스에서 사용 중인 씬은 삭제할 수 없습니다.'],
      true
    )
      .afterClosed()
      .subscribe((bContinue) => {
        if (isNullOrUndefined(bContinue) || !bContinue) {
          return;
        }

        this.service
          .requestDeleteScene(element.sceneId)
          .pipe(take(1))
          .subscribe((response) => {
            if (CommonExtensions.isSuccess(response.getCommon())) {
              const index = this.elements.findIndex(
                (x) => x.sceneId == element.sceneId
              );
              if (-1 !== index) {
                this.elements.splice(index, 1);
                let itemCount = this.itemsCount - 1;
                if (itemCount < 0) {
                  itemCount = 0;
                }

                this.itemsCount = itemCount;
              }
            }
          });
      });
  }
}
