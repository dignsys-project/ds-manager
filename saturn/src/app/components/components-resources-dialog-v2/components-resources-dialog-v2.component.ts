import { Component, Inject, OnInit } from '@angular/core';
import {
  MatDialog,
  MatDialogRef,
  MAT_DIALOG_DATA,
} from '@angular/material/dialog';
import { ResourceElement } from 'src/app/models/resource-element';
import { SCENE_RESOURCE_KINDMap } from 'src/app/protocols/common_pb';

export interface IComponentsResourceDialogV2Data {
  kind: SCENE_RESOURCE_KINDMap[keyof SCENE_RESOURCE_KINDMap];
}

@Component({
  selector: 'app-components-resources-dialog-v2',
  templateUrl: './components-resources-dialog-v2.component.html',
  styleUrls: ['./components-resources-dialog-v2.component.scss'],
})
export class ComponentsResourcesDialogV2Component implements OnInit {
  isCreatedMode: boolean = false;

  elements: Array<ResourceElement>;

  kind: SCENE_RESOURCE_KINDMap[keyof SCENE_RESOURCE_KINDMap];

  get isSelected(): boolean {
    return this.elements?.length > 0;
  }

  constructor(
    public dialogRef: MatDialogRef<ComponentsResourcesDialogV2Component>,
    @Inject(MAT_DIALOG_DATA) public data: IComponentsResourceDialogV2Data
  ) {
    this.kind = data.kind;
  }

  ngOnInit(): void {}

  public static create(
    dialog: MatDialog,
    kind: SCENE_RESOURCE_KINDMap[keyof SCENE_RESOURCE_KINDMap]
  ): MatDialogRef<
    ComponentsResourcesDialogV2Component,
    Array<ResourceElement>
  > {
    return dialog.open(ComponentsResourcesDialogV2Component, {
      data: <IComponentsResourceDialogV2Data>{ kind: kind },
      width: '100vw',
      height: '100vh',
      maxWidth: '100vw',
    });
  }

  onSelectedComponentsResourcesV2(elements: Array<ResourceElement>) {
    this.elements = elements;
  }

  onClickedSubmit() {
    if (!this.isSelected) {
      return;
    }
    this.dialogRef.close(this.elements);
  }

  onClickedCancel() {
    this.dialogRef.close(undefined);
  }
}
