import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { fromEvent, Observable } from 'rxjs';
import { filter, takeWhile } from 'rxjs/operators';
import { AppService } from 'src/app/app.service';
import { AbstractSceneComponent } from 'src/app/components/abstract-scene-component';
import {
  ComponentsCommonDialogComponent,
  DIALOG_KIND,
} from 'src/app/components/components-common-dialog/components-common-dialog.component';
import { AbstractSceneCommon } from 'src/app/components/components-scene/abstract-scene-common';
import {
  SCENE_COMPONENTS_KIND,
  SCENE_COMPONENTS_KINDMap,
} from 'src/app/protocols/common_pb';
import { ScenesCreateService } from '../../scenes-create.service';
import { ScenesCreateCopyPasteService } from '../scenes-create-copy-paste.service';

interface IKindElement {
  name: string;
  kind: SCENE_COMPONENTS_KINDMap[keyof SCENE_COMPONENTS_KINDMap];
}

@Component({
  selector: 'app-scenes-create-common',
  templateUrl: './scenes-create-common.component.html',
  styleUrls: ['./scenes-create-common.component.scss'],
})
export class ScenesCreateCommonComponent implements OnInit, OnDestroy {
  private m_bSubscribe: boolean = true;

  private _canvas: AbstractSceneCommon;

  common: AbstractSceneCommon;

  kindElements: Array<IKindElement>;

  isDarkMode$: Observable<boolean>;

  // is slide image component
  get isComponentsSlideImage(): boolean {
    return (
      undefined != this.common &&
      this.common?.kind ==
        SCENE_COMPONENTS_KIND.SCENE_COMPONENTS_KIND_SLIDE_IMAGE
    );
  }

  // is subtitle component
  get isComponentsSubtitle(): boolean {
    return (
      undefined != this.common &&
      this.common.kind == SCENE_COMPONENTS_KIND.SCENE_COMPONENTS_KIND_SUBTITLE
    );
  }

  // is read only
  get isReadOnly(): boolean {
    return this.common?.isGenerated;
  }

  // can zIndex to minus
  get canMoveBackward(): boolean {
    return this.common.zIndex > 0;
  }

  // can zIndex to plus
  get canMoveForward(): boolean {
    const elements = this.service.elements;
    const forwardElements = elements.filter(
      (x) => x.id !== this.common.id && x.zIndex >= this.common.zIndex
    );
    return forwardElements?.length > 0;
  }

  // icon name
  get iconName(): string {
    return AbstractSceneCommon.getIconName(this.common.kind);
  }

  // component name
  get componentName(): string {
    return AbstractSceneCommon.getComponentsName(this.common.kind);
  }

  constructor(
    private service: ScenesCreateService,
    private dialog: MatDialog,
    private appService: AppService,
    private copyPasteService: ScenesCreateCopyPasteService,
    private snackBar: MatSnackBar
  ) {
    this.isDarkMode$ = this.appService.isDarkMode$;

    // 현재 선택된 element를 가지고 온다.
    this.service.selected$
      .pipe(takeWhile(() => this.m_bSubscribe))
      .subscribe((common) => {
        this.common = common;
      });

    this.kindElements = new Array<IKindElement>(
      ...[
        {
          name: '버튼',
          kind: SCENE_COMPONENTS_KIND.SCENE_COMPONENTS_KIND_BUTTON,
        },
        {
          name: '비디오',
          kind: SCENE_COMPONENTS_KIND.SCENE_COMPONENTS_KIND_VIDEO,
        },
        {
          name: '이미지 (지도 포함)',
          kind: SCENE_COMPONENTS_KIND.SCENE_COMPONENTS_KIND_IMAGE,
        },
        {
          name: '텍스트',
          kind: SCENE_COMPONENTS_KIND.SCENE_COMPONENTS_KIND_SUBTITLE,
        },
        {
          name: 'PDF',
          kind: SCENE_COMPONENTS_KIND.SCENE_COMPONENTS_KIND_PDF,
        },
        {
          name: '경로 이미지',
          kind: SCENE_COMPONENTS_KIND.SCENE_COMPONENTS_KIND_MAP,
        },
        {
          name: '날씨',
          kind: SCENE_COMPONENTS_KIND.SCENE_COMPONENTS_KIND_WEATHER,
        },
        {
          name: '시계',
          kind: SCENE_COMPONENTS_KIND.SCENE_COMPONENTS_KIND_CLOCK,
        },
        {
          name: '웹 페이지',
          kind: SCENE_COMPONENTS_KIND.SCENE_COMPONENTS_KIND_WEB,
        },
      ]
    );
  }
  ngOnDestroy(): void {
    this.m_bSubscribe = false;
  }

  ngOnInit(): void {
    fromEvent(window, 'keydown')
      .pipe(takeWhile(() => this.m_bSubscribe))
      .subscribe(async (event: KeyboardEvent) => {
        if (event.key.toLocaleLowerCase() == 'control') {
          if (!this.copyPasteService.isUse) {
            this.copyPasteService.isUse = true;
          }
        }
      });

    fromEvent(window, 'keyup')
      .pipe(takeWhile(() => this.m_bSubscribe))
      .subscribe(async (event: KeyboardEvent) => {
        if (event.key.toLocaleLowerCase() == 'control') {
          this.copyPasteService.isUse = false;
        } else if (event.key == 'c') {
          if (this.copyPasteService.isUse == true) {
            if (this.common?.isComponents()) {
              this.copyPasteService.copySceneCommon(this.common);

              // open snackbar
              this.snackBar.open(
                `${this.common.name} 컴포넌트를 복사하였습니다.`,
                '확인',
                {
                  duration: 500,
                  horizontalPosition: 'center',
                  verticalPosition: 'top',
                }
              );
            }
          }
        } else if (event.key == 'v') {
          if (this.copyPasteService.isUse == true) {
            await this.copyPasteService.pasteSceneCommonAsync(this._canvas);
          }
        }
      });

    // get canvas from canvas
    this.service.canvas$
      .pipe(takeWhile(() => this.m_bSubscribe))
      .subscribe((canvas: AbstractSceneCommon) => {
        this._canvas = canvas;
      });

    // // keycode added
    // fromEvent(window, 'keyup')
    //   .pipe(takeWhile(() => this.m_bSubscribe))
    //   .subscribe((x: KeyboardEvent) => {
    //     switch (x.code) {
    //       case 'Delete':
    //         this.onClickedRemove();
    //         break;
    //     }
    //   });

    // fromEvent(window, 'keydown')
    //   .pipe(takeWhile(() => this.m_bSubscribe))
    //   .subscribe((x: KeyboardEvent) => {
    //     switch (x.code) {
    //       case 'ArrowLeft':
    //         {
    //           x.preventDefault();
    //           const width = this.common.position.x - 1;
    //           if (-1 < width) {
    //             this.common.changePosition(
    //               this.common.position.x - 1,
    //               this.common.position.y
    //             );
    //           }
    //         }
    //         break;
    //       case 'ArrowRight':
    //         {
    //           x.preventDefault();
    //           const width = this.common.position.x + 1 + this.common.size.width;
    //           if (this._canvas.size.width >= width) {
    //             this.common.changePosition(
    //               this.common.position.x + 1,
    //               this.common.position.y
    //             );
    //           }
    //         }
    //         break;
    //     }
    //   });
  }

  onChangeSize() {
    this.common.changeSize(
      Math.round(this.common.size.width),
      Math.round(this.common.size.height)
    );
  }

  onClickedRemove() {
    if (this.isReadOnly) {
      return;
    }

    ComponentsCommonDialogComponent.create(
      this.dialog,
      '삭제 경고',
      DIALOG_KIND.DIALOG_KIND_WARNING,
      '삭제하시겠습니까?',
      ['삭제하시면 복구 할 수 없습니다.'],
      true
    )
      .afterClosed()
      .subscribe((bContinue) => {
        if (!bContinue) {
          return;
        }

        const elements = this.service.elements;

        const index = elements.findIndex((x) => x.id.equals(this.common.id));
        if (-1 !== index) {
          this.common.reference.destroy();

          elements.splice(index, 1);
        }
        this.service.select(this._canvas);
      });
  }

  onChangePosition() {
    this.common.changePosition(
      Math.round(this.common.position.x),
      Math.round(this.common.position.y)
    );
  }

  /**
   * on clicked move forward index
   */
  onClickedMoveForward() {
    const currentIndex = this.common.zIndex;

    this.common.changeZIndex(currentIndex + 1);
  }

  /**
   * on clicked move backward index
   */
  onClickedMoveBackward() {
    const currentIndex = this.common.zIndex;
    if (currentIndex > 0) {
      this.common.changeZIndex(currentIndex - 1);
    }
  }
}
