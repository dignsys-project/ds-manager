import { Component, OnInit, Inject } from '@angular/core';
import {
  MatDialog,
  MatDialogRef,
  MAT_DIALOG_DATA,
} from '@angular/material/dialog';
import { Observable } from 'rxjs';
import { FormControl, Validators } from '@angular/forms';
import { SceneBaseElement } from 'src/app/models/scene-base-element';

export interface IComponentsSceneOverwriteDialogData {
  sceneBaseElement: SceneBaseElement;
}

@Component({
  selector: 'app-components-scene-overwrite-dialog',
  templateUrl: './components-scene-overwrite-dialog.component.html',
  styleUrls: ['./components-scene-overwrite-dialog.component.scss'],
})
export class ComponentsSceneOverwriteDialogComponent implements OnInit {
  nameControl: FormControl;

  get sceneName(): string {
    return this.data?.sceneBaseElement?.name;
  }

  constructor(
    public dialogRef: MatDialogRef<ComponentsSceneOverwriteDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: IComponentsSceneOverwriteDialogData
  ) {
    this.nameControl = new FormControl('', [Validators.required]);

    const element = this.data.sceneBaseElement;

    this.nameControl.setValue(element.name);
  }

  public static create(
    dialog: MatDialog,
    element: SceneBaseElement
  ): Observable<boolean> {
    const dialogRef = dialog.open(ComponentsSceneOverwriteDialogComponent, {
      data: { sceneBaseElement: element },
    });
    return dialogRef.afterClosed();
  }

  ngOnInit(): void {}

  onClickedOverwrite() {
    this.dialogRef.close(true);
  }

  onClickedCancel() {
    this.dialogRef.close(undefined);
  }
}
