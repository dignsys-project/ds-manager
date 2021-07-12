import { Component, Inject, OnDestroy, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import {
  MatDialog,
  MatDialogRef,
  MAT_DIALOG_DATA,
} from '@angular/material/dialog';
import { Observable } from 'rxjs';
import { takeWhile } from 'rxjs/operators';
import { DepartmentFolderNode } from 'src/app/common/department-folder-node';
import { DEPARTMENT_FOLDER_ITEM_KIND } from 'src/app/common/DEPARTMENT_FOLDER_ITEM_KIND';
import { CommonExtensions } from 'src/app/commons/common-extensions';
import { DepartmentSceneFolderElement } from 'src/app/models/department-scene-folder-element';
import { DepartmentSceneFolderItemElement } from 'src/app/models/department-scene-folder-item-element';
import { SceneFolderNodeItem } from 'src/app/models/SceneFolderNodeItem';
import { DepartmentSceneFolderService } from 'src/app/services/department-scene-folder.service';
import { ISelectedDepartmentFolder } from '../../components-department-folder-tree/components-department-folder-tree.component';

export interface IComponentsSceneSaveV2DialogData {
  isModified: boolean;
  sceneName: string;
}

export interface IComponentsSceneSaveV2DialogOutput {
  departmentId: number;
  departmentSceneFolderId: number;
  sceneName: string;
}

@Component({
  selector: 'app-components-scene-save-v2-dialog',
  templateUrl: './components-scene-save-v2-dialog.component.html',
  styleUrls: ['./components-scene-save-v2-dialog.component.scss'],
})
export class ComponentsSceneSaveV2DialogComponent implements OnInit, OnDestroy {
  private _subscribe: boolean = true;
  private _received: boolean = false;

  get isReceived(): boolean {
    return this._received;
  }

  elements: Array<DepartmentFolderNode>;

  folderGroup: FormGroup;
  nameGroup: FormGroup;

  get isModified(): boolean {
    return true == this.data?.isModified;
  }

  constructor(
    formBuilder: FormBuilder,
    private departmentSceneFolderService: DepartmentSceneFolderService,
    public dialogRef: MatDialogRef<ComponentsSceneSaveV2DialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: IComponentsSceneSaveV2DialogData
  ) {
    this.folderGroup = formBuilder.group({
      departmentId: ['', Validators.required],
      folderId: ['', Validators.required],
    });

    this.nameGroup = formBuilder.group({
      name: ['', Validators.required],
    });

    if (undefined != data && undefined != this.data?.sceneName) {
      this.nameGroup.get('name').setValue(this.data.sceneName);
    }
  }

  public static create(
    dialog: MatDialog,
    data?: IComponentsSceneSaveV2DialogData
  ): Observable<IComponentsSceneSaveV2DialogOutput> {
    const dialogRef = dialog.open(ComponentsSceneSaveV2DialogComponent, {
      data: data,
    });
    return dialogRef.afterClosed();
  }

  async ngOnInit() {
    await this.requestSceneFolders();
  }

  ngOnDestroy(): void {
    this._subscribe = false;
  }

  onSelectedComponentsDepartmentFolderTree(
    selectedDepartmentFolder: ISelectedDepartmentFolder
  ) {
    // folder id
    this.folderGroup
      .get('folderId')
      .setValue(
        undefined != selectedDepartmentFolder
          ? selectedDepartmentFolder.folderId
          : undefined
      );

    // department id
    this.folderGroup
      .get('departmentId')
      .setValue(
        undefined != selectedDepartmentFolder
          ? selectedDepartmentFolder.departmentId
          : undefined
      );
  }

  onClickedSceneSave() {
    if (this.folderGroup.invalid || this.nameGroup.invalid) {
      return;
    }
    // return this.dialogRef.close(this.nameControl.value as string);
    const departmentSceneFolderId = this.folderGroup.get('folderId')
      .value as number;

    const departmentId = this.folderGroup.get('departmentId').value as number;
    const name = this.nameGroup.get('name').value as string;

    this.dialogRef.close(<IComponentsSceneSaveV2DialogOutput>{
      departmentId: departmentId,
      departmentSceneFolderId: departmentSceneFolderId,
      sceneName: name,
    });
  }

  private async requestSceneFolders() {
    try {
      const response = await this.departmentSceneFolderService
        .requestGetSceneFolders()
        .pipe(takeWhile(() => this._subscribe))
        .toPromise();

      if (CommonExtensions.isSuccess(response.getCommon())) {
        const elements = response
          .getItemsList()
          .map((x) => DepartmentSceneFolderItemElement.fromMessage(x));

        // make nodes
        this.elements = this.departmentSceneFolderService.makeNodes(
          elements,
          (element: DepartmentSceneFolderElement) =>
            SceneFolderNodeItem.from(element)
        );
      }

      // setInterval(() => (this._received = true), 2000);
      this._received = true;
    } catch (error) {}
  }
}
