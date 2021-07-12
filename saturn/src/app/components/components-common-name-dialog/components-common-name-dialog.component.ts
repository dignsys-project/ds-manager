import { Component, OnInit, Inject } from '@angular/core';
import {
  MatDialogRef,
  MAT_DIALOG_DATA,
  MatDialog,
} from '@angular/material/dialog';
import { FormControl, Validators } from '@angular/forms';

interface IComponentsCommonNameDialogData {
  titleName: string;
  value?: string;
  maxLength: number;
  haveCancel?: boolean;
}

@Component({
  selector: 'app-components-common-name-dialog',
  templateUrl: './components-common-name-dialog.component.html',
  styleUrls: ['./components-common-name-dialog.component.scss'],
})
export class ComponentsCommonNameDialogComponent implements OnInit {
  nameControl: FormControl;

  constructor(
    public reference: MatDialogRef<ComponentsCommonNameDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: IComponentsCommonNameDialogData
  ) {
    this.nameControl = new FormControl('', [
      Validators.required,
      Validators.maxLength(data.maxLength),
    ]);
  }

  ngOnInit(): void {}

  onClickedSubmit() {
    const name = this.nameControl.value as string;

    this.reference.close(name);
  }

  onClickedCancel() {
    this.reference.close(undefined);
  }

  onClickedTest() {}

  public static create(
    dialog: MatDialog,
    titleName: string,
    maxLength: number,
    value?: string,
    haveCancel?: boolean
  ): MatDialogRef<ComponentsCommonNameDialogComponent, string> {
    return dialog.open(ComponentsCommonNameDialogComponent, {
      data: <IComponentsCommonNameDialogData>{
        titleName: titleName,
        maxLength: maxLength,
        value: value,
        haveCancel: haveCancel ?? false,
      },
    });
  }
}
