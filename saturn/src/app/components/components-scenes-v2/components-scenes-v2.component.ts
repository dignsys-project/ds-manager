import {
  AfterContentChecked,
  AfterContentInit,
  Component,
  ElementRef,
  EventEmitter,
  Input,
  OnDestroy,
  OnInit,
  Output,
  ViewChild,
} from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { takeWhile, take } from 'rxjs/operators';
import {
  DepartmentFolderNode,
  DepartmentNodeItem,
} from 'src/app/common/department-folder-node';
import { DEPARTMENT_FOLDER_ITEM_KIND } from 'src/app/common/DEPARTMENT_FOLDER_ITEM_KIND';
import { CommonExtensions } from 'src/app/commons/common-extensions';
import { DepartmentSceneFolderElement } from 'src/app/models/department-scene-folder-element';
import { DepartmentSceneFolderItemElement } from 'src/app/models/department-scene-folder-item-element';
import { SceneBaseElement } from 'src/app/models/scene-base-element';
import { SceneFolderNodeItem } from 'src/app/models/SceneFolderNodeItem';
import { ScenesService } from 'src/app/services/scenes.service';
import { DepartmentSceneFolderService } from 'src/app/services/department-scene-folder.service';
import { SceneFolderService } from 'src/app/services/scene-folder.service';
import {
  ComponentsCommonDialogComponent,
  DIALOG_KIND,
} from '../components-common-dialog/components-common-dialog.component';
import { ComponentsCommonNameDialogComponent } from '../components-common-name-dialog/components-common-name-dialog.component';
import {
  ISelectedDepartmentFolder,
  IMovedDepartmentFolderItems,
} from '../components-department-folder-tree/components-department-folder-tree.component';
import { SceneElement } from 'src/app/models/scene-element';
import { ScenesModule } from 'src/app/pages/scenes/scenes.module';
import { SceneExtensions } from 'src/app/commons/scene-extensions';

@Component({
  selector: 'app-components-scenes-v2',
  templateUrl: './components-scenes-v2.component.html',
  styleUrls: ['./components-scenes-v2.component.scss'],
})
export class ComponentsScenesV2Component
  implements OnInit, OnDestroy, AfterContentChecked {
  // subscribe for observer
  private m_bSubscribe: boolean = true;

  // received from the prometheus
  private m_bReceived: boolean = false;

  // container for department scene folder item elements
  private m_Elements: Array<DepartmentSceneFolderItemElement>;

  private _scenes: Array<SceneBaseElement>;

  private _selecetedElements: Array<SceneBaseElement>;

  private _selectedDepartmentFolder: ISelectedDepartmentFolder;

  private _minHeight: number;

  elements: Array<DepartmentFolderNode>;

  get scenes(): Array<SceneBaseElement> {
    return this._scenes;
  }

  get isPossibleMenu(): boolean {
    return this._selecetedElements?.length == 1;
  }

  get isSelectedFolder(): boolean {
    return (
      undefined != this._selectedDepartmentFolder &&
      this._selectedDepartmentFolder?.folderId > 0
    );
  }

  get selectedSceneBaseItemCount(): number {
    return this._selecetedElements?.length;
  }

  get sceneId(): number {
    return this.isPossibleMenu ? this._selecetedElements[0].sceneId : 0;
  }

  get isReceived(): boolean {
    return this.m_bReceived;
  }

  isProcess: boolean;

  @Input()
  canCreate: boolean = true;

  @Output()
  selected: EventEmitter<Array<SceneBaseElement>> = new EventEmitter<
    Array<SceneBaseElement>
  >();

  @Input()
  set minHeight(height: number) {
    // height: calc(100vh - 138px);
    this._minHeight = height;

    if (this.continer && undefined != this._minHeight) {
      this.continer.nativeElement.style.height = `calc(100vh - ${this._minHeight}px)`;
    }
  }

  @ViewChild('CONTAINER', { static: false })
  continer: ElementRef<HTMLDivElement>;

  // SceneParamService provider in scenes.module
  // ScenesHeaderService provider in scenes.module
  constructor(
    private router: Router,
    private dialog: MatDialog,
    private service: ScenesService,
    private departmentSceneFolder: DepartmentSceneFolderService,
    private sceneFolderService: SceneFolderService
  ) {}
  ngAfterContentChecked(): void {
    if (this.continer && undefined != this._minHeight) {
      this.continer.nativeElement.style.height = `calc(100vh - ${this._minHeight}px)`;
    }
  }

  async ngOnInit(): Promise<any> {
    this.isProcess = true;

    // request scene folders
    await this.requestSceneFolders();

    // request element that is not alloctated scene base
    const commonSceneBaseElements = new Array<SceneBaseElement>();
    await this.requestGetExcludeScenes(commonSceneBaseElements);

    this._scenes = commonSceneBaseElements;

    this.isProcess = false;
  }

  ngOnDestroy(): void {
    this.m_bSubscribe = false;
  }

  private async requestSceneFolders(): Promise<boolean> {
    try {
      const response = await this.departmentSceneFolder
        .requestGetSceneFolders()
        .pipe(takeWhile(() => this.m_bSubscribe))
        .toPromise();

      this.m_bReceived = true;
      if (CommonExtensions.isSuccess(response.getCommon())) {
        this.m_Elements = response
          .getItemsList()
          .map((x) => DepartmentSceneFolderItemElement.fromMessage(x));

        this.makeNodes();

        return true;
      } else if (CommonExtensions.isPermission(response.getCommon())) {
        // TODO : required permission
        await ComponentsCommonDialogComponent.create(
          this.dialog,
          '권한 필요',
          DIALOG_KIND.DIALOG_KIND_ERROR,
          '권한이 필요합니다.',
          ['관리자에 문의해야 합니다.']
        )
          .afterClosed()
          .pipe(take(1))
          .toPromise();

        this.router.navigate(['/dashboard']);
      }
    } catch (error) {
      return false;
    }

    return false;
  }

  // output : created form app-component-department-folder-tree
  async onCreatedComponentsDepartmentFolderTree(
    selectedDepartmentFolder: ISelectedDepartmentFolder
  ) {
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

    const folderId = selectedDepartmentFolder.folderId;

    try {
      const response = await this.departmentSceneFolder
        .requestPostSceneFolder(departmentId, folderName, folderId)
        .pipe(take(1))
        .toPromise();

      if (CommonExtensions.isSuccess(response.getCommon())) {
        // create element
        const element = DepartmentSceneFolderElement.fromMessage(
          response.getDepartmentscenefolder()
        );

        // find department element
        const departmentElement = this.m_Elements.find(
          (x) => x.departmentBase?.id == element.departmentId
        );

        if (departmentElement != undefined) {
          // check sceneFolders then create sceneFolders container
          if (departmentElement.sceneFolders == undefined) {
            departmentElement.sceneFolders = new Array<DepartmentSceneFolderElement>();
          }

          // add element into sceneFolders
          departmentElement.sceneFolders.push(element);

          this.makeNodes();
        }
      } else if (CommonExtensions.isDuplicated(response.getCommon())) {
        ComponentsCommonDialogComponent.create(
          this.dialog,
          '중복된 이름이 있습니다',
          DIALOG_KIND.DIALOG_KIND_ERROR,
          `동일한 이름으로 변경할 수 없습니다.`,
          ['문제가 계속 된다면', '새로 고침 후 처리해야합니다.']
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

  /**
   * output change name from app-component-department-folder-tree
   * @param selectedDepartmentFolder IMovedDepartmentFolderItems from components-department-folder-tree.component.ts
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
    const departmentSceneFolderId = selectedDepartmentFolder.folderId;

    try {
      const response = await this.departmentSceneFolder
        .requestPatchSceneFolder(
          departmentId,
          departmentSceneFolderId,
          folderName
        )
        .pipe(take(1))
        .toPromise();

      if (CommonExtensions.isSuccess(response.getCommon())) {
        // create element

        if (response.hasDepartmentscenefolder()) {
          const departmentId = response
            .getDepartmentscenefolder()
            .getDepartmentid();
          const departmentFolderId = response
            .getDepartmentscenefolder()
            .getDepartmentfolderid();
        }

        // find department element
        const departmentElement = this.m_Elements.find(
          (x) => x.departmentBase?.id == departmentId
        );

        // check sceneFolders then create sceneFolders container
        if (
          undefined != departmentElement &&
          departmentElement.sceneFolders?.length > 0
        ) {
          // change element into sceneFolders
          const sceneFolder = departmentElement.sceneFolders.find(
            (x) => x.departmentSceneFolderId == departmentSceneFolderId
          );
          if (undefined != sceneFolder) {
            sceneFolder.fromMessage(response.getDepartmentscenefolder());
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

  /**
   * output : deleted from app-component-department-folder-tree
   * @param selectedDepartmentFolder IMovedDepartmentFolderItems from components-department-folder-tree.component.ts
   */
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

    if (true != bContinue) {
      return false;
    }

    this.isProcess = true;

    const departmentId = selectedDepartmentFolder.departmentId;
    const departmentResourceFolderId = selectedDepartmentFolder.folderId;

    try {
      // request to the prometheus
      const response = await this.departmentSceneFolder
        .requestDeleteSceneFolder(departmentId, departmentResourceFolderId)
        .pipe(take(1))
        .toPromise();

      if (CommonExtensions.isSuccess(response.getCommon())) {
        const departmentBase = this.m_Elements.find(
          (x) => x.departmentBase.id == departmentId
        );
        if (!CommonExtensions.isNullOrUndefined(departmentBase)) {
          // find exists sceneFolder
          const index = departmentBase.sceneFolders.findIndex(
            (x) => x.departmentSceneFolderId == departmentResourceFolderId
          );

          // remove sceneFolder
          if (-1 != index) {
            departmentBase.sceneFolders.splice(index, 1);

            // make nodes
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

  /**
   * // output : selected form app-component-department-folder-tree
   * @param selectedDepartmentFolder IMovedDepartmentFolderItems from components-department-folder-tree.component.ts
   */
  async onSelectedComponentsDepartmentFolderTree(
    selectedDepartmentFolder: ISelectedDepartmentFolder
  ) {
    this.isProcess = true;

    const elements = new Array<SceneBaseElement>();

    if (undefined == selectedDepartmentFolder) {
      await this.requestGetExcludeScenes(elements);
    } else {
      await this.requestGetSceneFolderScenes(
        selectedDepartmentFolder.folderId,
        elements
      );
    }

    this._selectedDepartmentFolder = selectedDepartmentFolder;

    this._scenes = elements;

    this._selecetedElements = undefined;

    this.selected.next(undefined);

    this.isProcess = false;
  }

  /**
   * output : moved from app-component-department-folder-tree
   * @param movedDepartmentFolderItems IMovedDepartmentFolderItems from components-department-folder-tree.component.ts
   */
  async onMovedComponentsDepartmentFolderTree(
    movedDepartmentFolderItems: IMovedDepartmentFolderItems
  ) {
    if (
      undefined == movedDepartmentFolderItems ||
      movedDepartmentFolderItems.items?.length <= 0
    ) {
      return;
    }

    this.isProcess = true;
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
      const response = await this.departmentSceneFolder
        .requestPutSceneFolder(departmentId, departmentFolderId, items)
        .pipe(take(1))
        .toPromise();

      if (CommonExtensions.isSuccess(response.getCommon())) {
        const elements = this.scenes;

        response.getSceneidsList().map((sceneId) => {
          const index = elements.findIndex((x) => x.sceneId == sceneId);
          if (-1 != index) {
            elements.splice(index, 1);
          }
        });

        this._scenes = elements;

        this.isProcess = false;
      }
    } catch (error) {
      this.isProcess = false;
    }
  }

  onSelectedComponentsScenesList(items: Array<SceneBaseElement>) {
    this._selecetedElements = items;

    this.selected.next(this._selecetedElements);
  }

  onClickedPreview() {
    const url = this.router.createUrlTree(['/scenes/scene', this.sceneId]);

    const URI = `#${url.toString()}`;

    window.open(URI, '_blank');
  }

  onClickedNavigation() {
    const url = this.router.createUrlTree([
      '/scenes/scene-navigation',
      this.sceneId,
    ]);

    const URI = `#${url.toString()}`;

    window.open(URI, '_blank');
  }

  // on clicked scene modified
  onClickedSceneModified() {
    if (!this.isPossibleMenu) {
      return;
    }
    const element = this._selecetedElements[0];
    if (undefined == element) {
      return;
    }

    this.router.navigate([`scenes/create`], {
      queryParams: { sceneId: element.sceneId, isDuplicated: false },
    });
  }

  // on clicked scene duplicate
  onClickedSceneDuplicate() {
    if (!this.isPossibleMenu) {
      return;
    }

    const element = this._selecetedElements[0];
    if (undefined == element) {
      return;
    }

    this.router.navigate([`scenes/create`], {
      queryParams: { sceneId: element.sceneId, isDuplicated: true },
    });
  }

  // [obsolete]
  // on clicked scene detail
  onClickedScenesDetail() {
    if (!this.isPossibleMenu) {
      return;
    }

    const element = this._selecetedElements[0];
    if (undefined == element) {
      return;
    }

    this.router.navigate([`scenes/item/${element.sceneId}`]);
  }

  // on clicked scene delete
  async onClickedScenesDelete() {
    if (!this.isPossibleMenu) {
      return;
    }

    const departmentId = this._selectedDepartmentFolder?.departmentId;
    if (undefined == departmentId || 0 >= departmentId) {
      return;
    }

    const folderId = this._selectedDepartmentFolder?.folderId;
    if (undefined == folderId || 0 >= folderId) {
      return;
    }

    const element = this._selecetedElements[0];
    if (undefined == element) {
      return;
    }

    const bContinue = await ComponentsCommonDialogComponent.create(
      this.dialog,
      '씬 삭제',
      DIALOG_KIND.DIALOG_KIND_WARNING,
      `${element.name} 씬을 삭제하시겠습니까?`,
      ['디바이스에서 사용 중인 씬은 삭제할 수 없습니다.'],
      true
    )
      .afterClosed()
      .toPromise();

    if (bContinue != true) {
      return;
    }

    const response = await this.service
      .requestDeleteSceneV2(departmentId, folderId, element.sceneId)
      .pipe(take(1))
      .toPromise();

    if (CommonExtensions.isSuccess(response.getCommon())) {
      const index = this._scenes.findIndex((x) => x.sceneId == element.sceneId);
      if (-1 !== index) {
        const scenes = new Array<SceneBaseElement>(...this._scenes);
        scenes.splice(index, 1);
        this._scenes = scenes;

        await ComponentsCommonDialogComponent.create(
          this.dialog,
          '씬 삭제',
          DIALOG_KIND.DIALOG_KIND_DEFAULT,
          `씬이 삭제되었습니다.`
        );
      }
    } else if (CommonExtensions.isDatabaseRestrict(response.getCommon())) {
      ComponentsCommonDialogComponent.create(
        this.dialog,
        '삭제 실패',
        DIALOG_KIND.DIALOG_KIND_ERROR,
        `사용 중인 씬을 삭제할 수 없습니다.`
      );
    }
  }

  /**
   * 임시 씬을 생성 한다.
   */
  async onClickedSceneCreateTemporyry() {
    if (!this.isSelectedFolder) {
      return;
    }
    // check selected department folder
    const departmentFolder = this._selectedDepartmentFolder;
    if (undefined == departmentFolder) {
      return;
    }

    // check department id
    const departmentId = departmentFolder?.departmentId;

    // check department scene folder id
    const folderId = departmentFolder?.folderId;

    if (
      undefined == departmentId ||
      departmentId <= 0 ||
      undefined == folderId ||
      folderId <= 0
    ) {
      return;
    }

    this.isProcess = true;

    let sceneName: string;
    try {
      // open dialog for create scene name
      sceneName = await ComponentsCommonNameDialogComponent.create(
        this.dialog,
        '임시 씬 이름',
        100,
        undefined,
        true
      )
        .afterClosed()
        .pipe(take(1))
        .toPromise();
    } catch (error) {
      console.error(error);
    }

    if (typeof sceneName !== 'string') {
      this.isProcess = false;
      return;
    }

    sceneName = sceneName.replace(/^\s+/, '').replace(/\s+$/, '');

    // check scene name
    if (undefined == sceneName || sceneName.length <= 0) {
      this.isProcess = false;
      return;
    }

    // create temporary scene
    await SceneExtensions.createSceneAsync(
      this.dialog,
      this.service,
      departmentId,
      folderId,
      sceneName,
      (element: SceneElement) => {
        const scenes = new Array<SceneBaseElement>(element);
        scenes.push(...this.scenes);
        this._scenes = scenes;
      },
      undefined,
      true
    );

    this.isProcess = false;
  }

  private makeNodes() {
    const items = new Array<DepartmentFolderNode>();

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
      if (x.sceneFolders.length > 0) {
        x.sceneFolders.forEach((sf) => {
          const folderNode = new DepartmentFolderNode();
          folderNode.kind = DEPARTMENT_FOLDER_ITEM_KIND.FOLDER;
          folderNode.item = SceneFolderNodeItem.from(sf);
          folderNode.name = sf.name;
          folderNode.children = new Array<DepartmentFolderNode>();

          items.push(folderNode);
        });
      }
      items.push(node);
    });

    const roots = new Array<DepartmentFolderNode>();

    // calculate root
    items.forEach((x) => {
      if (x.kind == DEPARTMENT_FOLDER_ITEM_KIND.DEPARTMENT) {
        // department
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
            roots.push(x);
          }
        } else {
          // It is root node
          roots.push(x);
        }
      } else if (x.kind == DEPARTMENT_FOLDER_ITEM_KIND.FOLDER) {
        // folder
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
    this.elements = roots;
  }

  private async requestGetSceneFolderScenes(
    departmentSceneFolderId: number,
    elements: Array<SceneBaseElement>
  ) {
    let fromIndex: number = 0;
    let size: number = 10;

    let itemCount: number = 0;
    try {
      do {
        // request
        const response = await this.sceneFolderService
          .requestGetScenes(departmentSceneFolderId, fromIndex, size)
          .pipe(take(1))
          .toPromise();
        if (CommonExtensions.isSuccess(response.getCommon())) {
          itemCount = response.getItemscount();
          elements.push(
            ...response
              .getScenebasesList()
              .map((x) => SceneBaseElement.fromMessageBase(x))
          );
        }
        fromIndex++;
      } while (elements.length < itemCount && this.m_bSubscribe);
    } catch (error) {
      console.error(error);
    }
  }

  private async requestGetExcludeScenes(elements: Array<SceneBaseElement>) {
    let fromIndex: number = 0;
    let size: number = 2;

    let itemCount: number = 0;
    try {
      do {
        //
        const response = await this.service
          .requsetGetExcludeScene(fromIndex, size)
          .pipe(take(1))
          .toPromise();

        if (CommonExtensions.isSuccess(response.getCommon())) {
          itemCount = response.getItemscount();
          elements.push(
            ...response
              .getScenebasesList()
              .map((x) => SceneBaseElement.fromMessageBase(x))
          );
        }
        fromIndex++;
      } while (elements.length < itemCount && this.m_bSubscribe);
    } catch (error) {}
  }
}
