import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { element } from 'protractor';
import { SceneBaseElement } from 'src/app/models/scene-base-element';
import { SceneElement } from 'src/app/models/scene-element';

@Component({
  selector: 'app-components-scenes-dialog-v2',
  templateUrl: './components-scenes-dialog-v2.component.html',
  styleUrls: ['./components-scenes-dialog-v2.component.scss'],
})
export class ComponentsScenesDialogV2Component implements OnInit {
  private _elements: Array<SceneBaseElement>;

  get isSelected(): boolean {
    return this._elements?.length > 0;
  }

  constructor(
    public dialogRef: MatDialogRef<ComponentsScenesDialogV2Component>
  ) {}

  ngOnInit(): void {}

  public static create(
    dialog: MatDialog
  ): MatDialogRef<ComponentsScenesDialogV2Component, Array<SceneBaseElement>> {
    return dialog.open(ComponentsScenesDialogV2Component, {
      width: '100vw',
      height: '100vh',
      maxWidth: '100vw',
    });
  }

  onClickedCancel() {
    this.dialogRef.close(undefined);
  }

  onClickedSubmit() {
    this.dialogRef.close(this._elements);
  }

  onSelectedComponentsScenesV2(elements: Array<SceneBaseElement>) {
    this._elements = elements;
  }
}
