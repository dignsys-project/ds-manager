import { Component, OnInit, Inject } from '@angular/core';
import {
  MatDialogRef,
  MAT_DIALOG_DATA,
  MatDialog,
} from '@angular/material/dialog';
import { SCENE_COMPONENTS_KINDMap } from 'src/app/protocols/common_pb';
import { ScenesCreateService } from 'src/app/pages/scenes/scenes-create.service';
import { AbstractSceneCommon } from '../abstract-scene-common';
import { isNullOrUndefined } from 'util';
import { MatSelectionListChange } from '@angular/material/list';

interface IComponentsSceneComponentsSelectData {
  kind: SCENE_COMPONENTS_KINDMap[keyof SCENE_COMPONENTS_KINDMap];
}

@Component({
  selector: 'app-components-scene-components-select-dialog',
  templateUrl: './components-scene-components-select-dialog.component.html',
  styleUrls: ['./components-scene-components-select-dialog.component.scss'],
})
export class ComponentsSceneComponentsSelectDialogComponent implements OnInit {
  private m_SceneCommon: AbstractSceneCommon;

  elements: Array<AbstractSceneCommon>;

  get isValid(): boolean {
    return !isNullOrUndefined(this.m_SceneCommon);
  }

  constructor(
    public dialogRef: MatDialogRef<
      ComponentsSceneComponentsSelectDialogComponent
    >,
    @Inject(MAT_DIALOG_DATA) public data: IComponentsSceneComponentsSelectData,
    private scenesCreateService: ScenesCreateService
  ) {
    this.elements = this.scenesCreateService.elements.filter(
      (x) => x.kind === this.data.kind && !x.isGenerated
    );
  }
  ngOnInit(): void {}

  public static create(
    kind: SCENE_COMPONENTS_KINDMap[keyof SCENE_COMPONENTS_KINDMap],
    dialog: MatDialog
  ): MatDialogRef<
    ComponentsSceneComponentsSelectDialogComponent,
    AbstractSceneCommon
  > {
    return dialog.open(ComponentsSceneComponentsSelectDialogComponent, {
      data: <IComponentsSceneComponentsSelectData>{
        kind: kind,
      },
    });
  }

  isSelected(item: AbstractSceneCommon): boolean {
    return this.m_SceneCommon?.id === item.id;
  }
  getComponentsName(): string {
    return AbstractSceneCommon.getComponentsName(this.data.kind);
  }

  onSelectionListChanged(event: MatSelectionListChange) {
    this.m_SceneCommon = event.option.value as AbstractSceneCommon;
  }

  onClickedSave() {
    this.dialogRef.close(this.m_SceneCommon);
  }

  onClickedCancel() {
    this.dialogRef.close(null);
  }
}
