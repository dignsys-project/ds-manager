import { CdkDragDrop } from '@angular/cdk/drag-drop';
import { FlatTreeControl } from '@angular/cdk/tree';
import {
  Component,
  EventEmitter,
  Input,
  OnDestroy,
  OnInit,
  Output,
} from '@angular/core';
import {
  MatTreeFlattener,
  MatTreeFlatDataSource,
} from '@angular/material/tree';
import { takeWhile } from 'rxjs/operators';
import { DepartmentFolderFlatNode } from 'src/app/common/department-folder-flat-node';
import { DepartmentFolderNode } from 'src/app/common/department-folder-node';
import { DEPARTMENT_FOLDER_ITEM_KIND } from 'src/app/common/DEPARTMENT_FOLDER_ITEM_KIND';

export interface ISelectedDepartmentFolder {
  departmentId: number;
  name: string;
  folderId?: number;
  parentFolderId?: number;
}

export interface IMovedDepartmentFolderItems extends ISelectedDepartmentFolder {
  items: Array<number>;
}

@Component({
  selector: 'app-components-department-folder-tree',
  templateUrl: './components-department-folder-tree.component.html',
  styleUrls: ['./components-department-folder-tree.component.scss'],
})
export class ComponentsDepartmentFolderTreeComponent
  implements OnInit, OnDestroy {
  // container from department folder node

  private _isProcess: boolean = false;

  private _isNoContent: boolean;

  // selected folder infomation
  private m_SelectedFolderInfo: ISelectedDepartmentFolder;

  private _nodeId: number = 1;

  private _isSubscribe: boolean = true;

  // is selected department
  get isSelectedDepartment(): boolean {
    return 0 < this.m_SelectedFolderInfo?.departmentId;
  }

  // is selected folder
  get isSelectedFolder(): boolean {
    return 0 < this.m_SelectedFolderInfo?.folderId;
  }

  // for test
  get selectedDepartmentId(): number {
    return this.m_SelectedFolderInfo?.departmentId;
  }

  // has nodes
  get hasNodes(): boolean {
    return this.treeControl.dataNodes?.length > 0;
  }

  get isProcess(): boolean {
    return this._isProcess;
  }

  get isNoContent(): boolean {
    return this._isNoContent;
  }

  @Input()
  set elements(elements: Array<DepartmentFolderNode>) {
    if (elements?.length > 0) {
      this._isNoContent = false;

      this.dataSource.data = elements;

      this.m_SelectedFolderInfo = undefined;

      this.dataSource._flattenedData
        .pipe(takeWhile(() => this._isSubscribe))
        .subscribe((flatNodes) => {
          if (flatNodes?.length > 0) {
            flatNodes
              .filter((x) => x.level == 0)
              .forEach((x) => this.treeControl.expand(x));
          }
        });
    } else {
      this._isNoContent = true;
    }
  }

  @Input()
  set isProcess(isProcess: boolean) {
    this._isProcess = isProcess;
  }

  @Input()
  readonly: boolean = false;

  @Output()
  changed: EventEmitter<ISelectedDepartmentFolder> = new EventEmitter<
    ISelectedDepartmentFolder
  >();

  // request department folder create
  @Output()
  created: EventEmitter<ISelectedDepartmentFolder> = new EventEmitter<
    ISelectedDepartmentFolder
  >();

  @Output()
  deleted: EventEmitter<ISelectedDepartmentFolder> = new EventEmitter<
    ISelectedDepartmentFolder
  >();

  @Output() // number is folder id
  selected: EventEmitter<ISelectedDepartmentFolder> = new EventEmitter<
    ISelectedDepartmentFolder
  >();

  @Output()
  moved: EventEmitter<IMovedDepartmentFolderItems> = new EventEmitter<
    IMovedDepartmentFolderItems
  >();

  treeControl: FlatTreeControl<DepartmentFolderFlatNode>;

  treeFlattener: MatTreeFlattener<
    DepartmentFolderNode,
    DepartmentFolderFlatNode
  >;

  dataSource: MatTreeFlatDataSource<
    DepartmentFolderNode,
    DepartmentFolderFlatNode
  >;

  // lamda function
  hasChild = (_: number, node: DepartmentFolderFlatNode) => node.isExpandable;

  constructor() {
    // Create tree control
    this.treeControl = new FlatTreeControl<DepartmentFolderFlatNode>(
      (node) => node.level,
      (node) => node.isExpandable
    );

    // Create tree flattener
    this.treeFlattener = new MatTreeFlattener(
      this._transformer,
      (node) => node.level,
      (node) => node.isExpandable,
      (node) => node.children
    );

    // Create data source
    this.dataSource = new MatTreeFlatDataSource(
      this.treeControl,
      this.treeFlattener
    );
  }
  ngOnDestroy(): void {
    this._isSubscribe = false;
  }

  ngOnInit(): void {}

  getNodeIcon(node: DepartmentFolderFlatNode): string {
    switch (node.kind) {
      case DEPARTMENT_FOLDER_ITEM_KIND.DEPARTMENT:
        return 'business';
      case DEPARTMENT_FOLDER_ITEM_KIND.FOLDER:
        return 'folder_open';
    }
  }

  isNodeFolder(node: DepartmentFolderFlatNode): boolean {
    return node.kind == DEPARTMENT_FOLDER_ITEM_KIND.FOLDER;
  }

  isNodeSelected(node: DepartmentFolderFlatNode): boolean {
    return node.selected;
  }

  /**
   * on dropped from tree-node
   * @param node selected tree-node
   * @param event CdkDragDrop<number[]> :
   */
  onDropListDropped(
    node: DepartmentFolderFlatNode,
    event: CdkDragDrop<number[]>
  ) {
    const items = event.item.data as Array<number>;

    if (!this.isNodeFolder(node) || items?.length <= 0) {
      return;
    }

    this.moved.next(<IMovedDepartmentFolderItems>{
      departmentId: node.item.departmentId(),
      name: node.name,
      parentFolderId: node.parentId,
      folderId: node.databaseId,
      items: items,
    });
  }

  // on Clicked tree node
  onClickedTreeNode(node: DepartmentFolderFlatNode) {
    if (this.isProcess) {
      return;
    }
    node.selected = !node.selected;

    if (node.selected) {
      if (node.kind == DEPARTMENT_FOLDER_ITEM_KIND.DEPARTMENT) {
        this.m_SelectedFolderInfo = {
          departmentId: node.selected ? node.databaseId : 0,
          name: node.name,
        };

        this.selected.next(undefined);
      } else {
        this.m_SelectedFolderInfo = {
          departmentId: node.item.departmentId(),
          name: node.name,
          parentFolderId: node.parentId,
          folderId: node.databaseId,
        };

        this.selected.next(this.m_SelectedFolderInfo);
      }

      this.treeControl.dataNodes
        .filter((x) => x.id !== node.id)
        .forEach((x) => (x.selected = false));
    } else {
      this.m_SelectedFolderInfo = undefined;

      this.selected.next(undefined);
    }
  }

  onClickedChangeFolderName() {
    if (this.isProcess) {
      return;
    }

    if (
      undefined == this.m_SelectedFolderInfo.folderId ||
      this.m_SelectedFolderInfo.folderId <= 0
    ) {
      return;
    }

    const selectedFolderInfo = this.m_SelectedFolderInfo;
    this.changed.next(selectedFolderInfo);
  }

  // on clicked create folder request
  onClickedCreateFolder() {
    if (this.isProcess) {
      return;
    }

    const selectedFolderInfo = this.m_SelectedFolderInfo;
    this.created.next(selectedFolderInfo);
  }

  // on clicked delete folder request
  onClickedDeleteFolder() {
    if (this.isProcess) {
      return;
    }

    const selectedFolderInfo = this.m_SelectedFolderInfo;

    this.deleted.next(selectedFolderInfo);
  }

  // on clicked collapse nodes
  onClickedCollapseNodes() {
    if (this.isProcess) {
      return;
    }
    this.treeControl.collapseAll();
  }

  // on clicked expand nodes
  onClickedExpandNodes() {
    if (this.isProcess) {
      return;
    }
    this.treeControl.expandAll();
  }

  private _transformer = (node: DepartmentFolderNode, level: number) => {
    const flatNode = new DepartmentFolderFlatNode();
    flatNode.id = this._nodeId++;
    flatNode.databaseId = node.item.id();
    flatNode.kind = node.kind;
    flatNode.item = node.item;
    flatNode.name = node.name;
    flatNode.parentId = node.item.parentId();
    flatNode.level = level;
    flatNode.isExpandable = node.children?.length > 0;
    flatNode.selected = false;

    return flatNode;
  };
}
