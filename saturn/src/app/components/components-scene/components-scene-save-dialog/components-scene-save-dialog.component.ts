import { Component, OnInit, Inject } from '@angular/core';
import {
  MatDialog,
  MatDialogRef,
  MAT_DIALOG_DATA,
} from '@angular/material/dialog';
import { Observable } from 'rxjs';
import { FormControl, Validators } from '@angular/forms';

export interface IComponentsSceneSaveDialogData {
  isModified: boolean;
  sceneName: string;
}

@Component({
  selector: 'app-components-scene-save-dialog',
  templateUrl: './components-scene-save-dialog.component.html',
  styleUrls: ['./components-scene-save-dialog.component.scss'],
})
export class ComponentsSceneSaveDialogComponent implements OnInit {
  nameControl: FormControl;

  get isModified(): boolean {
    return undefined != this.data && true == this.data?.isModified;
  }

  constructor(
    public dialogRef: MatDialogRef<ComponentsSceneSaveDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: IComponentsSceneSaveDialogData
  ) {
    this.nameControl = new FormControl('', [Validators.required]);

    if (undefined != data && undefined != this.data.sceneName) {
      this.nameControl.setValue(this.data.sceneName);
    }
  }

  public static open(
    dialog: MatDialog,
    data?: IComponentsSceneSaveDialogData
  ): Observable<string> {
    const dialogRef = dialog.open(ComponentsSceneSaveDialogComponent, {
      data: data,
    });
    return dialogRef.afterClosed();
  }

  ngOnInit(): void {}

  onClickedSave() {
    return this.dialogRef.close(this.nameControl.value as string);
  }
}
