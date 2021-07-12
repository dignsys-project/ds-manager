import { Component, OnInit, Inject } from '@angular/core';
import {
  MatDialogRef,
  MAT_DIALOG_DATA,
  MatDialog,
} from '@angular/material/dialog';
export enum DIALOG_KIND {
  DIALOG_KIND_DEFAULT = 0,
  DIALOG_KIND_WARNING = 1,
  DIALOG_KIND_ERROR = 2,
}

export interface IComponentsCommonDialogData {
  titleName: string;
  kind: DIALOG_KIND;
  content: string;
  contents?: Array<string>;
  haveCancel: boolean;
}

@Component({
  selector: 'app-components-common-dialog',
  templateUrl: './components-common-dialog.component.html',
  styleUrls: ['./components-common-dialog.component.scss'],
})
export class ComponentsCommonDialogComponent implements OnInit {
  constructor(
    public reference: MatDialogRef<ComponentsCommonDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: IComponentsCommonDialogData
  ) {}

  public static create(
    dialog: MatDialog,
    titleName: string,
    kind: DIALOG_KIND,
    content: string,
    contents?: Array<string>,
    haveCancel?: boolean
  ): MatDialogRef<ComponentsCommonDialogComponent, boolean> {
    return dialog.open(ComponentsCommonDialogComponent, {
      data: <IComponentsCommonDialogData>{
        titleName: titleName,
        kind: kind,
        content: content,
        contents: contents,
        haveCancel: haveCancel ?? false,
      },
    });
  }

  ngOnInit(): void {}

  getColor(): string {
    return 'warn';
  }

  getIconName(): string {
    switch (this.data.kind) {
      case DIALOG_KIND.DIALOG_KIND_ERROR:
        return 'error';
      case DIALOG_KIND.DIALOG_KIND_WARNING:
        return 'error_outline';
    }

    return '';
  }

  isShowIcon(): boolean {
    return this.data.kind !== DIALOG_KIND.DIALOG_KIND_DEFAULT;
  }
}
