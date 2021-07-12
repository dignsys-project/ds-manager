import {
  Component,
  EventEmitter,
  Input,
  OnDestroy,
  OnInit,
  Output,
} from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { take, takeWhile } from 'rxjs/operators';
import {
  DepartmentFolderNode,
  DepartmentNodeItem,
  IDepartmentItem,
} from 'src/app/common/department-folder-node';
import { DEPARTMENT_FOLDER_ITEM_KIND } from 'src/app/common/DEPARTMENT_FOLDER_ITEM_KIND';
import { ResourceAttachment } from 'src/app/common/resource-attachment';
import { CommonExtensions } from 'src/app/commons/common-extensions';
import { DepartmentResourceFolderElement } from 'src/app/models/department-resource-folder-element';
import { DepartmentResourceFolderItemElement } from 'src/app/models/department-resource-folder-item-element';
import { PreviewResourceElement } from 'src/app/models/preview-resource-element';
import { ResourceElement } from 'src/app/models/resource-element';
import { ScenesHeaderService } from 'src/app/pages/scenes/scenes-header.service';
import { ResourceService } from 'src/app/services/resource.service';
import {
  SCENE_COMPONENTS_KIND,
  SCENE_RESOURCE_KINDMap,
} from 'src/app/protocols/common_pb';
import { DepartmentResourceFolderService } from 'src/app/services/department-resource-folder.service';
import { ResourceFolderService } from 'src/app/services/resource-folder.service';
import {
  ComponentsCommonDialogComponent,
  DIALOG_KIND,
} from '../components-common-dialog/components-common-dialog.component';
import { ComponentsCommonNameDialogComponent } from '../components-common-name-dialog/components-common-name-dialog.component';
import {
  IMovedDepartmentFolderItems,
  ISelectedDepartmentFolder,
} from '../components-department-folder-tree/components-department-folder-tree.component';
import { Router } from '@angular/router';
import { ResourceExtensions } from 'src/app/commons/resource-extensions';

class ResourceFolderItem implements IDepartmentItem {
  constructor(
    private m_ResourceFolderId: number,
    private m_ParentResourceFolderId: number,
    private m_DepartmentId: number,
    private m_Name: string
  ) {}
  id(): number {
    return this.m_ResourceFolderId;
  }
  parentId(): number {
    return this.m_ParentResourceFolderId;
  }
  name(): string {
    return this.m_Name;
  }

  departmentId(): number {
    return this.m_DepartmentId;
  }
}

@Component({
  selector: 'app-components-resources-v2',
  templateUrl: './components-resources-v2.component.html',
  styleUrls: ['./components-resources-v2.component.scss'],
})
export class ComponentsResourcesV2Component implements OnInit, OnDestroy {
  private m_bSubscribe: boolean = true;

  private m_Elements: Array<DepartmentResourceFolderItemElement>;

  private _received: boolean = false;

  private _selectedResourceItems: Array<ResourceElement>;

  private _resources: Array<ResourceElement>;

  private _selectedDepartmentFolder: ISelectedDepartmentFolder;

  private _isCreatedMode: boolean = false;

  elements: Array<DepartmentFolderNode>;

  isNoContent: boolean = true;

  isProcess: boolean = false;

  get isPossibleMenu(): boolean {
    return this._selectedResourceItems?.length == 1;
  }

  get isReceived(): boolean {
    return this._received;
  }

  get resourceId(): number {
    return 0;
  }

  get resources(): Array<ResourceElement> {
    return this._resources;
  }

  get isSelectedFolder(): boolean {
    return this._selectedDepartmentFolder?.folderId > 0;
  }

  get isCreateMode(): boolean {
    return this._isCreatedMode;
  }

  private get selectedResourceElement(): ResourceElement {
    return this._selectedResourceItems?.length == 1
      ? this._selectedResourceItems[0]
      : undefined;
  }

  private _kind: SCENE_RESOURCE_KINDMap[keyof SCENE_RESOURCE_KINDMap] =
    SCENE_COMPONENTS_KIND.SCENE_COMPONENTS_KIND_DEFAULT;

  @Input()
  set kind(kind: SCENE_RESOURCE_KINDMap[keyof SCENE_RESOURCE_KINDMap]) {
    this._kind = kind;
  }

  get kind(): SCENE_RESOURCE_KINDMap[keyof SCENE_RESOURCE_KINDMap] {
    return this._kind;
  }

  // on selected items
  @Output()
  selected: EventEmitter<Array<ResourceElement>> = new EventEmitter<
    Array<ResourceElement>
  >();

  constructor(
    private departmentResourceFolderservice: DepartmentResourceFolderService,
    private resourceFolderService: ResourceFolderService,
    private resourceService: ResourceService,
    private dialog: MatDialog,
    private router: Router
  ) {}

  ngOnDestroy(): void {
    this.m_bSubscribe = false;
  }

  async ngOnInit(): Promise<any> {
    this.isProcess = false;

    await this.requestResourceFolders();

    const elements = new Array<ResourceElement>();
    await this.requestGetExcludeResources(elements);

    this._resources = elements;

    this._received = true;

    this.isProcess = false;
  }

  getResourceLocation(): string {
    const element = this.selectedResourceElement;
    if (undefined == element) {
      return '';
    }
    return this.resourceService.getResourceAddress(element);
  }

  onClickedResourceCreate() {
    this._isCreatedMode = !this._isCreatedMode;
  }

  onPressedResourceNavigation() {
    const element = this.selectedResourceElement;
    if (undefined == element) {
      return;
    }

    const selectedDepartmentFolder = this._selectedDepartmentFolder;
    if (undefined == selectedDepartmentFolder) {
      return;
    }

    const departmentId = selectedDepartmentFolder.departmentId;
    const folderId = selectedDepartmentFolder.folderId ?? 0;

    const url = this.router.createUrlTree([
      '/resources',
      departmentId,
      folderId,
      element.resourceId,
    ]);

    const URI = `#${url.toString()}`;
    window.open(URI, '_blank');
  }

  /**
   * event : button
   * on clicked resource delete
   */
  async onClickedResourceDelete() {
    const element = this.selectedResourceElement;
    if (undefined == element) {
      return;
    }

    try {
      const bContinue = await ComponentsCommonDialogComponent.create(
        this.dialog,
        '아이템 삭제',
        DIALOG_KIND.DIALOG_KIND_WARNING,
        `${element.name}을 삭제하시겠습니까?`,
        ['삭제한 리소스는 복구할 수 없습니다.'],
        true
      )
        .afterClosed()
        .pipe(take(1))
        .toPromise();

      if (true != bContinue) {
        return;
      }

      const selectedDepartmentFolder = this._selectedDepartmentFolder;

      const departmentId = selectedDepartmentFolder?.departmentId;
      const departmentResourceFolderId = selectedDepartmentFolder?.folderId;

      const response = await this.departmentResourceFolderservice
        .requestDeleteResourceFolderResource(
          undefined == departmentId ? 0 : departmentId,
          undefined == departmentResourceFolderId
            ? 0
            : departmentResourceFolderId,
          element.resourceId
        )
        .pipe(take(1))
        .toPromise();

      if (CommonExtensions.isSuccess(response.getCommon())) {
        const index = this.resources.findIndex(
          (x) => x.resourceId == element.resourceId
        );
        if (-1 != index) {
          this._resources.splice(index, 1);
        }
      } else if (CommonExtensions.isDatabaseRestrict(response.getCommon())) {
        ComponentsCommonDialogComponent.create(
          this.dialog,
          '삭제 실패',
          DIALOG_KIND.DIALOG_KIND_ERROR,
          `사용 중인 리소스를 삭제할 수 없습니다.`
        );
      }
    } catch (error) {
      console.error(error);
    }
  }

  // output : created from app-components-department-folder-tree
  async onCreatedComponentsDepartmentFolderTree(
    selectedDepartmentFolder: ISelectedDepartmentFolder
  ) {
    let folderName: string = await ComponentsCommonNameDialogComponent.create(
      this.dialog,
      '폴더 이름',
      20,
      undefined,
      true
    )
      .afterClosed()
      .toPromise();

    if (typeof folderName !== 'string') {
      return;
    }

    folderName = folderName.replace(/^\s+/, '').replace(/\s+$/, '');

    if (folderName == '') {
      return;
    }

    const departmentId = selectedDepartmentFolder.departmentId;

    const folderId = selectedDepartmentFolder.folderId;

    try {
      const response = await this.departmentResourceFolderservice
        .requestPostResourceFolder(departmentId, folderName, folderId)
        .pipe(take(1))
        .toPromise();

      if (CommonExtensions.isSuccess(response.getCommon())) {
        // create element
        const element = DepartmentResourceFolderElement.fromMessage(
          response.getDepartmentresourcefolder()
        );

        // find department element
        const departmentElement = this.m_Elements.find(
          (x) => x.departmentBase?.id == element.departmentId
        );

        if (!CommonExtensions.isNullOrUndefined(departmentElement)) {
          // check resourceFolders then create resourceFolders container
          if (
            CommonExtensions.isNullOrUndefined(
              departmentElement.resourceFolders
            )
          ) {
            departmentElement.resourceFolders = new Array<DepartmentResourceFolderElement>();
          }

          // add element into resourceFolders
          departmentElement.resourceFolders.push(element);

          this.makeNodes();
        }
      }
    } catch (error) {
      console.error(error);
      ComponentsCommonDialogComponent.create(
        this.dialog,
        '알 수 없는 에러',
        DIALOG_KIND.DIALOG_KIND_ERROR,
        `${error.statusText}`
      );
    }
  }

  /**
   *
   * @param selectedDepartmentFolder selectedDepartmentFolder from app-components-department-folder-tree
   */
  async onChangedComponentsDepartmentFolderTree(
    selectedDepartmentFolder: ISelectedDepartmentFolder
  ) {
    if (undefined == selectedDepartmentFolder || this.isProcess) {
      return;
    }

    this.isProcess = true;

    let folderName: string = await ComponentsCommonNameDialogComponent.create(
      this.dialog,
      '폴더 이름',
      20,
      undefined,
      true
    )
      .afterClosed()
      .toPromise();

    if (typeof folderName !== 'string') {
      this.isProcess = false;
      return;
    }

    folderName = folderName.replace(/^\s+/, '').replace(/\s+$/, '');

    if (folderName == '') {
      this.isProcess = false;
      return;
    }

    const departmentId = selectedDepartmentFolder.departmentId;
    const departmentResourceFolderId = selectedDepartmentFolder.folderId;

    try {
      const response = await this.departmentResourceFolderservice
        .requestPatchResourceFolder(
          departmentId,
          departmentResourceFolderId,
          folderName
        )
        .pipe(take(1))
        .toPromise();

      if (CommonExtensions.isSuccess(response.getCommon())) {
        // create element

        if (response.hasDepartmentresourcefolder()) {
          const departmentId = response
            .getDepartmentresourcefolder()
            .getDepartmentid();
          const departmentFolderId = response
            .getDepartmentresourcefolder()
            .getDepartmentfolderid();
        }

        // find department element
        const departmentElement = this.m_Elements.find(
          (x) => x.departmentBase?.id == departmentId
        );

        // check resourceFolders then create resourceFolders container
        if (
          undefined != departmentElement &&
          departmentElement.resourceFolders?.length > 0
        ) {
          // change element into resourceFolders
          const resourceFolder = departmentElement.resourceFolders.find(
            (x) => x.departmentFolderId == departmentResourceFolderId
          );
          if (undefined != resourceFolder) {
            resourceFolder.fromMessage(response.getDepartmentresourcefolder());
            this.makeNodes();
          }
        }
      } else if (CommonExtensions.isDuplicated(response.getCommon())) {
        ComponentsCommonDialogComponent.create(
          this.dialog,
          '중복된 이름이 있습니다',
          DIALOG_KIND.DIALOG_KIND_ERROR,
          `동일한 이름으로 변경할 수 없습니다.`,
          ['문제가 계속 된다면', '새로 고침 후 처리해야합니다.']
        );
      } else {
        ComponentsCommonDialogComponent.create(
          this.dialog,
          '알 수 없는 에러',
          DIALOG_KIND.DIALOG_KIND_ERROR,
          `${response.getCommon().getStatus()}`
        );
      }
    } catch (error) {
      console.error(error);
      ComponentsCommonDialogComponent.create(
        this.dialog,
        '알 수 없는 에러',
        DIALOG_KIND.DIALOG_KIND_ERROR,
        `${error.statusText}`
      );
    }

    this.isProcess = false;
  }

  // output : deleted from app-components-department-folder-tree
  async onDeletedComponentsDepartmentFolderTree(
    selectedDepartmentFolder: ISelectedDepartmentFolder
  ) {
    const bContinue = await ComponentsCommonDialogComponent.create(
      this.dialog,
      `${selectedDepartmentFolder.name} 폴더 삭제`,
      DIALOG_KIND.DIALOG_KIND_WARNING,
      '폴더를 삭제하시겠습니까?',
      ['삭제한 폴더는 복구 할 수 없습니다.'],
      true
    )
      .afterClosed()
      .toPromise();

    if (bContinue == false) {
      return false;
    }

    const departmentId = selectedDepartmentFolder.departmentId;
    const departmentResourceFolderId = selectedDepartmentFolder.folderId;

    try {
      const response = await this.departmentResourceFolderservice
        .requestDeleteResourceFolder(departmentId, departmentResourceFolderId)
        .pipe(take(1))
        .toPromise();
      if (CommonExtensions.isSuccess(response.getCommon())) {
        const departmentBase = this.m_Elements.find(
          (x) => x.departmentBase.id == departmentId
        );
        if (!CommonExtensions.isNullOrUndefined(departmentBase)) {
          const index = departmentBase.resourceFolders.findIndex(
            (x) => x.departmentFolderId == departmentResourceFolderId
          );
          if (-1 != index) {
            departmentBase.resourceFolders.splice(index, 1);

            this.makeNodes();
          }
        }
      } else if (CommonExtensions.isDatabaseRestrict(response.getCommon())) {
        await ComponentsCommonDialogComponent.create(
          this.dialog,
          `폴더를 삭제 할 수 없습니다.`,
          DIALOG_KIND.DIALOG_KIND_WARNING,
          '해당 폴더의 씬 또는 폴더가 존재해서 삭제할 수 없습니다.'
        )
          .afterClosed()
          .toPromise();
      }
    } catch (error) {}

    this.isProcess = false;
  }

  onSelectedComponentsResourcesList(selectedItems: Array<ResourceElement>) {
    this._selectedResourceItems = selectedItems;
    this.selected.next(this._selectedResourceItems);
  }

  /**
   * (output) On selected app-components-department-folder-tree
   * @param selectedDepartmentFolder selectedDepartmentFolder
   */
  async onSelectedComponentsDepartmentFolderTree(
    selectedDepartmentFolder: ISelectedDepartmentFolder
  ) {
    this.isProcess = true;

    const elements = new Array<ResourceElement>();

    if (undefined == selectedDepartmentFolder) {
      await this.requestGetExcludeResources(elements);
    } else {
      await this.requestGetSceneFolderScenes(
        selectedDepartmentFolder.folderId,
        elements,
        this.kind
      );
    }

    // this._isCreatedMode = !this._isCreatedMode;

    this._selectedDepartmentFolder = selectedDepartmentFolder;

    this._resources = elements;

    this.isProcess = false;

    this._selectedResourceItems = undefined;

    this.selected.next(undefined);
  }

  /**
   * output : (selected)
   * on moved app-components-department-folder-tree
   * @param movedDepartmentFolderItems selected department folder
   */
  async onMovedComponentsDepartmentFolderTree(
    movedDepartmentFolderItems: IMovedDepartmentFolderItems
  ) {
    if (
      undefined == movedDepartmentFolderItems ||
      0 >= movedDepartmentFolderItems.items?.length
    ) {
      return;
    }

    this.isProcess = true;

    // items
    const items = movedDepartmentFolderItems.items;

    const departmentId = movedDepartmentFolderItems.departmentId;
    const departmentFolderId = movedDepartmentFolderItems.folderId;

    try {
      const bContinue = await ComponentsCommonDialogComponent.create(
        this.dialog,
        `${movedDepartmentFolderItems.name} 폴더로 이동`,
        DIALOG_KIND.DIALOG_KIND_DEFAULT,
        `씬 ${items.length}개를 폴더로 이동하시겠습니까?`,
        undefined,
        true
      )
        .afterClosed()
        .pipe(take(1))
        .toPromise();
      if (!bContinue) {
        this.isProcess = false;

        return;
      }
    } catch (error) {
      this.isProcess = false;

      return;
    }

    try {
      const response = await this.departmentResourceFolderservice
        .requestPutResourceFolder(departmentId, departmentFolderId, items)
        .pipe(take(1))
        .toPromise();

      if (CommonExtensions.isSuccess(response.getCommon())) {
        const elements = this.resources;

        response.getResourceidsList().map((resourceId) => {
          const index = elements.findIndex((x) => x.resourceId == resourceId);
          if (-1 != index) {
            elements.splice(index, 1);
          }
        });

        this._resources = elements;

        this.isProcess = false;
      }
    } catch (error) {
      this.isProcess = false;

      console.error(error);
    }
  }

  async onUploadComponentsResourceCreateV2(
    elements: Array<ResourceAttachment>
  ) {
    const departmentId = this._selectedDepartmentFolder.departmentId;

    const departmentFolderId = this._selectedDepartmentFolder.folderId;

    if (undefined == departmentId || departmentId <= 0) {
      return;
    }

    if (undefined == departmentFolderId || departmentFolderId <= 0) {
      return;
    }

    this.isProcess = true;

    const resources = this._resources;

    for (let element of elements) {
      let previewResourceId: number = 0;

      if (!element.isDefinedPreview && undefined != element.previewDataURI) {
        // create preview resource

        try {
          const response = await this.resourceService
            .requestPostPreviewResource(
              ResourceExtensions.b64toFile(element.previewDataURI),
              (percent) => {},
              undefined
            )
            .pipe(take(1))
            .toPromise();

          if (!CommonExtensions.isSuccess(response.getCommon())) {
            continue;
          }

          const previewResource = PreviewResourceElement.fromMessage(
            response.getPreviewresource()
          );

          previewResourceId = previewResource.previewResourceId;
        } catch (error) {
          console.error(error);
          continue;
        }
      }

      try {
        const response = await this.resourceService
          .requestPostResourceV2(
            departmentId,
            departmentFolderId,
            element.file,
            undefined,
            undefined,
            previewResourceId
          )
          .pipe(take(1))
          .toPromise();

        if (!CommonExtensions.isSuccess(response.getCommon())) {
          continue;
        }

        if (undefined != resources) {
          resources.push(ResourceElement.fromMessage(response.getResource()));
        }
      } catch (error) {
        console.error(error);
        continue;
      }
    }

    this._resources = resources;
    this._isCreatedMode = false;

    this.isProcess = false;
  }

  private async requestResourceFolders() {
    try {
      const response = await this.departmentResourceFolderservice
        .requestGetResourceFolders()
        .pipe(takeWhile(() => this.m_bSubscribe))
        .toPromise();

      if (CommonExtensions.isSuccess(response.getCommon())) {
        this.isNoContent = false;
        this.m_Elements = response
          .getItemsList()
          .map((x) => DepartmentResourceFolderItemElement.fromMessage(x));

        this.makeNodes();
      } else {
      }
    } catch (error) {}
  }

  private makeNodes() {
    const items: Array<DepartmentFolderNode> = new Array<DepartmentFolderNode>();

    // set all items
    const elements = this.m_Elements;
    elements.forEach((x) => {
      const node = new DepartmentFolderNode();
      node.name = x.departmentBase.name;
      node.kind = DEPARTMENT_FOLDER_ITEM_KIND.DEPARTMENT;

      node.children = new Array<DepartmentFolderNode>();

      node.item = new DepartmentNodeItem(
        x.departmentNodeBase.id,
        x.departmentBase.id,
        x.departmentBase.name,
        x.departmentNodeBase.parentDepartmentNodeId
      );

      if (x.resourceFolders?.length > 0) {
        x.resourceFolders.forEach((rf) => {
          const folderNode = new DepartmentFolderNode();
          folderNode.kind = DEPARTMENT_FOLDER_ITEM_KIND.FOLDER;
          folderNode.item = new ResourceFolderItem(
            rf.departmentFolderId,
            rf.parentDepartmentResourceFolderId,
            rf.departmentId,
            rf.name
          );
          folderNode.name = rf.name;
          folderNode.children = new Array<DepartmentFolderNode>();

          items.push(folderNode);
        });
      }

      items.push(node);
    });

    const nodes = new Array<DepartmentFolderNode>();

    // calculate parent
    items.forEach((x) => {
      if (x.kind == DEPARTMENT_FOLDER_ITEM_KIND.DEPARTMENT) {
        const departmentNodeItem = x.item as DepartmentNodeItem;

        const parentNodeId: number = departmentNodeItem.parentNodeId();

        // don`t have parent node
        if (
          !CommonExtensions.isNullOrUndefined(parentNodeId) &&
          0 != parentNodeId
        ) {
          // find department node
          const parentItem = items
            .filter((x) => x.kind == DEPARTMENT_FOLDER_ITEM_KIND.DEPARTMENT)
            .find(
              (x) => (x.item as DepartmentNodeItem).nodeId() == parentNodeId
            );
          if (!CommonExtensions.isNullOrUndefined(parentItem)) {
            parentItem.children.push(x);
          } else {
            nodes.push(x);
          }
        } else {
          // It is root node
          nodes.push(x);
        }
      } else if (x.kind == DEPARTMENT_FOLDER_ITEM_KIND.FOLDER) {
        const item = x.item;

        const parentFolderId = item.parentId();
        if (0 < parentFolderId) {
          const parentFolder = items
            .filter((x) => x.kind == DEPARTMENT_FOLDER_ITEM_KIND.FOLDER)
            .find((x) => x.item.id() == parentFolderId);
          if (undefined != parentFolder) {
            parentFolder.children.push(x);
          }
        } else {
          const departmentId: number = item.departmentId();

          // don`t have parent node
          if (
            !CommonExtensions.isNullOrUndefined(departmentId) &&
            0 != departmentId
          ) {
            // find department node
            const parentDepartment = items
              .filter((x) => x.kind == DEPARTMENT_FOLDER_ITEM_KIND.DEPARTMENT)
              .find((x) => x.item.id() == departmentId);

            if (!CommonExtensions.isNullOrUndefined(parentDepartment)) {
              parentDepartment.children.push(x);
            }
          }
        }
      }
    });

    this.elements = nodes;
  }

  private async requestGetExcludeResources(elements: Array<ResourceElement>) {
    let fromIndex: number = 0;
    let size: number = 2;

    let itemCount: number = 0;
    try {
      do {
        //
        const response = await this.resourceService
          .requestGetExcludeResources(undefined, fromIndex, size)
          .pipe(take(1))
          .toPromise();

        if (CommonExtensions.isSuccess(response.getCommon())) {
          itemCount = response.getItemscount();
          elements.push(
            ...response
              .getResourcesList()
              .map((x) => ResourceElement.fromMessage(x))
          );
        }
        fromIndex++;
      } while (elements.length < itemCount && this.m_bSubscribe);
    } catch (error) {}
  }

  private async requestGetSceneFolderScenes(
    departmentSceneFolderId: number,
    elements: Array<ResourceElement>,
    kind: SCENE_RESOURCE_KINDMap[keyof SCENE_RESOURCE_KINDMap]
  ) {
    let fromIndex: number = 0;
    let size: number = 10;

    let itemCount: number = 0;
    try {
      do {
        // request
        const response = await this.resourceFolderService
          .requestGetResources(departmentSceneFolderId, fromIndex, size, kind)
          .pipe(take(1))
          .toPromise();
        if (CommonExtensions.isSuccess(response.getCommon())) {
          itemCount = response.getItemcount();
          elements.push(
            ...response
              .getResourcesList()
              .map((x) => ResourceElement.fromMessage(x))
          );
        }
        fromIndex++;
      } while (elements.length < itemCount && this.m_bSubscribe);
    } catch (error) {
      console.error(error);
    }
  }
}
