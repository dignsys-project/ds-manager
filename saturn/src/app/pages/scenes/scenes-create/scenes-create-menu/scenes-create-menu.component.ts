import { Component, OnInit, Inject, ViewChild, OnDestroy } from '@angular/core';
import {
  MatDialogRef,
  MAT_DIALOG_DATA,
  MatDialog,
} from '@angular/material/dialog';
import {
  SCENE_COMPONENTS_KINDMap,
  SCENE_COMPONENTS_KIND,
} from 'src/app/protocols/common_pb';
import { AbstractSceneCommon } from 'src/app/components/components-scene/abstract-scene-common';
import {
  MatSelectionList,
  MatSelectionListChange,
} from '@angular/material/list';
import { takeWhile } from 'rxjs/operators';

interface IComponentKind {
  iconName: string;
  name: string;
  kind: SCENE_COMPONENTS_KINDMap[keyof SCENE_COMPONENTS_KINDMap];
  desc: string;
}

@Component({
  selector: 'app-scenes-create-menu',
  templateUrl: './scenes-create-menu.component.html',
  styleUrls: ['./scenes-create-menu.component.scss'],
})
export class ScenesCreateMenuComponent implements OnInit, OnDestroy {
  @ViewChild('COMPONENTS', { static: true })
  selectionList: MatSelectionList;

  private m_bSubscribe: boolean = true;
  private m_SelectedKind: SCENE_COMPONENTS_KINDMap[keyof SCENE_COMPONENTS_KINDMap];

  items: Array<IComponentKind>;

  get isDecide(): boolean {
    return undefined != this.m_SelectedKind;
  }

  constructor(public reference: MatDialogRef<ScenesCreateMenuComponent>) {
    this.items = new Array<IComponentKind>();

    this.items.push({
      iconName: AbstractSceneCommon.getIconName(
        SCENE_COMPONENTS_KIND.SCENE_COMPONENTS_KIND_BUTTON
      ),
      name: AbstractSceneCommon.getComponentsName(
        SCENE_COMPONENTS_KIND.SCENE_COMPONENTS_KIND_BUTTON
      ),
      kind: SCENE_COMPONENTS_KIND.SCENE_COMPONENTS_KIND_BUTTON,
      desc: '씬을 이동하는 버튼 컴포넌트',
    });
    this.items.push({
      iconName: AbstractSceneCommon.getIconName(
        SCENE_COMPONENTS_KIND.SCENE_COMPONENTS_KIND_VIDEO
      ),
      name: AbstractSceneCommon.getComponentsName(
        SCENE_COMPONENTS_KIND.SCENE_COMPONENTS_KIND_VIDEO
      ),
      kind: SCENE_COMPONENTS_KIND.SCENE_COMPONENTS_KIND_VIDEO,
      desc: '비디오를 플레이하는 컴포넌트',
    });

    this.items.push({
      iconName: AbstractSceneCommon.getIconName(
        SCENE_COMPONENTS_KIND.SCENE_COMPONENTS_KIND_SUBTITLE
      ),
      name: AbstractSceneCommon.getComponentsName(
        SCENE_COMPONENTS_KIND.SCENE_COMPONENTS_KIND_SUBTITLE
      ),
      kind: SCENE_COMPONENTS_KIND.SCENE_COMPONENTS_KIND_SUBTITLE,
      desc: '텍스트 컴포넌트',
    });

    this.items.push({
      iconName: AbstractSceneCommon.getIconName(
        SCENE_COMPONENTS_KIND.SCENE_COMPONENTS_KIND_SLIDE_IMAGE
      ),
      name: AbstractSceneCommon.getComponentsName(
        SCENE_COMPONENTS_KIND.SCENE_COMPONENTS_KIND_SLIDE_IMAGE
      ),
      kind: SCENE_COMPONENTS_KIND.SCENE_COMPONENTS_KIND_SLIDE_IMAGE,
      desc: '이미지 슬라이드 컴포넌트',
    });

    this.items.push({
      iconName: AbstractSceneCommon.getIconName(
        SCENE_COMPONENTS_KIND.SCENE_COMPONENTS_KIND_IMAGE
      ),
      name: AbstractSceneCommon.getComponentsName(
        SCENE_COMPONENTS_KIND.SCENE_COMPONENTS_KIND_IMAGE
      ),
      kind: SCENE_COMPONENTS_KIND.SCENE_COMPONENTS_KIND_IMAGE,
      desc: '이미지를 보여주는 컴포넌트',
    });

    this.items.push({
      iconName: AbstractSceneCommon.getIconName(
        SCENE_COMPONENTS_KIND.SCENE_COMPONENTS_KIND_MAP
      ),
      name: AbstractSceneCommon.getComponentsName(
        SCENE_COMPONENTS_KIND.SCENE_COMPONENTS_KIND_MAP
      ),
      kind: SCENE_COMPONENTS_KIND.SCENE_COMPONENTS_KIND_MAP,
      desc:
        '경로 이미지 컴포넌트. 미리 배경으로 사용할 이미지가 있어야 합니다. ',
    });

    this.items.push({
      iconName: AbstractSceneCommon.getIconName(
        SCENE_COMPONENTS_KIND.SCENE_COMPONENTS_KIND_WEATHER
      ),
      name: AbstractSceneCommon.getComponentsName(
        SCENE_COMPONENTS_KIND.SCENE_COMPONENTS_KIND_WEATHER
      ),
      kind: SCENE_COMPONENTS_KIND.SCENE_COMPONENTS_KIND_WEATHER,
      desc: '날씨 아이콘 및 온도 컴포넌트',
    });
    this.items.push({
      iconName: AbstractSceneCommon.getIconName(
        SCENE_COMPONENTS_KIND.SCENE_COMPONENTS_KIND_CLOCK
      ),
      name: AbstractSceneCommon.getComponentsName(
        SCENE_COMPONENTS_KIND.SCENE_COMPONENTS_KIND_CLOCK
      ),
      kind: SCENE_COMPONENTS_KIND.SCENE_COMPONENTS_KIND_CLOCK,
      desc: '디지털 시계 컴포넌트',
    });

    this.items.push({
      iconName: AbstractSceneCommon.getIconName(
        SCENE_COMPONENTS_KIND.SCENE_COMPONENTS_KIND_PDF
      ),
      name: AbstractSceneCommon.getComponentsName(
        SCENE_COMPONENTS_KIND.SCENE_COMPONENTS_KIND_PDF
      ),
      kind: SCENE_COMPONENTS_KIND.SCENE_COMPONENTS_KIND_PDF,
      desc: 'PDF 컴포넌트',
    });

    this.items.push({
      iconName: AbstractSceneCommon.getIconName(
        SCENE_COMPONENTS_KIND.SCENE_COMPONENTS_KIND_WEB
      ),
      name: AbstractSceneCommon.getComponentsName(
        SCENE_COMPONENTS_KIND.SCENE_COMPONENTS_KIND_WEB
      ),
      kind: SCENE_COMPONENTS_KIND.SCENE_COMPONENTS_KIND_WEB,
      desc: '웹 페이지 컴포넌트',
    });
  }
  ngOnDestroy(): void {
    this.m_bSubscribe = false;
  }

  ngOnInit(): void {
    this.selectionList.selectionChange
      .pipe(takeWhile(() => this.m_bSubscribe))
      .subscribe((changed: MatSelectionListChange) => {
        const componentKind = changed.option.value as IComponentKind;

        this.m_SelectedKind = componentKind.kind;
      });
  }

  isSelected(
    kind: SCENE_COMPONENTS_KINDMap[keyof SCENE_COMPONENTS_KINDMap]
  ): boolean {
    return this.m_SelectedKind === kind;
  }

  public static create(
    dialog: MatDialog
  ): MatDialogRef<
    ScenesCreateMenuComponent,
    SCENE_COMPONENTS_KINDMap[keyof SCENE_COMPONENTS_KINDMap]
  > {
    return dialog.open(ScenesCreateMenuComponent);
  }

  onClickedComfirm() {
    this.reference.close(this.m_SelectedKind);
  }

  onClickedCancel() {
    this.reference.close(undefined);
  }
}
