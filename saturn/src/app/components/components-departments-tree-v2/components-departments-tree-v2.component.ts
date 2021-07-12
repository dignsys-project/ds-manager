import {
  Component,
  OnInit,
  OnDestroy,
  ElementRef,
  ViewChild,
  EventEmitter,
  Output,
} from '@angular/core';
import { FlatTreeControl } from '@angular/cdk/tree';
import {
  MatTreeFlattener,
  MatTreeFlatDataSource,
} from '@angular/material/tree';
import { BehaviorSubject, Observable, of } from 'rxjs';
import {
  ExpandTreeStatusKind,
  DepartmentsListService,
} from 'src/app/pages/departments/departments-list/departments-list.service';
import { takeWhile, filter, take } from 'rxjs/operators';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import {
  ComponentsCommonDialogComponent,
  DIALOG_KIND,
} from '../components-common-dialog/components-common-dialog.component';
import { DepartmentNodeElement } from 'src/app/models/department-node-element';
import { CommonExtensions } from 'src/app/commons/common-extensions';
import { DepartmentsService } from 'src/app/pages/departments/departments.service';
import { DepartmentBaseElement } from 'src/app/models/department-base-element';

enum ELEMENT_OVER_KIND {
  DEFAULT = 0,
  ABOVE,
  CENTER,
  BELOW,
}

class Node {
  constructor(public element: DepartmentNodeElement) {
    this.children = new Array<Node>();
  }

  public get id(): number {
    return this.element.id;
  }
  public get parentId(): number {
    return this.element.parentDepartmentNodeId;
  }

  children: Array<Node>;

  public name(): string {
    return this.element?.name();
  }
}

/** Flat node with expandable and level information */
class FlatNode {
  constructor(
    public id: number,
    public departmentNode: DepartmentNodeElement,
    public level: number,
    public expandable: boolean,
    public selected: boolean,
    public order: number
  ) {}

  public name(): string {
    return this.departmentNode?.name();
  }
}

@Component({
  selector: 'app-components-departments-tree-v2',
  templateUrl: './components-departments-tree-v2.component.html',
  styleUrls: ['./components-departments-tree-v2.component.scss'],
})
export class ComponentsDepartmentsTreeV2Component implements OnInit, OnDestroy {
  // All items
  elements: Array<DepartmentNodeElement> = new Array<DepartmentNodeElement>();
  nodes: Array<Node> = new Array<Node>();

  treeControl: FlatTreeControl<FlatNode>;
  treeFlattener: MatTreeFlattener<Node, FlatNode>;
  dataSource: MatTreeFlatDataSource<Node, FlatNode>;

  @Output()
  selected: EventEmitter<DepartmentBaseElement> = new EventEmitter<
    DepartmentBaseElement
  >();

  /* Drag and drop */
  private m_DragFlatNode: FlatNode | null = null;
  private m_OverFlatNode: FlatNode | null = null;
  private m_DragFlatNodeExpandOverTime: number = 0;
  private m_DragFlatNodeOverKind: ELEMENT_OVER_KIND = ELEMENT_OVER_KIND.DEFAULT;

  isEnableGoBack$: BehaviorSubject<boolean>;

  private isSubscribe: boolean = true;
  private m_ExpandedFlatNodes = new Set<FlatNode>();
  private isCompletedMoved: boolean = false;

  isProcess: boolean = false;

  lowersCount = (flatNode: FlatNode) =>
    flatNode?.departmentNode?.department?.departmentLowerBases?.length;

  memberCount = (flatNode: FlatNode) =>
    flatNode?.departmentNode?.department?.memberBases?.length;

  deviceCount = (flatNode: FlatNode) =>
    flatNode?.departmentNode?.department?.connectorBases?.length;

  hasChild = (_: number, flatNode: FlatNode) => flatNode.expandable;

  isOver = (flatNode: FlatNode) =>
    this.m_OverFlatNode === flatNode && this.m_DragFlatNode !== flatNode;

  isCenter = (flatNode: FlatNode) =>
    this.isOver(flatNode) &&
    this.m_DragFlatNodeOverKind === ELEMENT_OVER_KIND.CENTER;

  isAbove = (flatNode: FlatNode) =>
    this.isOver(flatNode) &&
    this.m_DragFlatNodeOverKind === ELEMENT_OVER_KIND.ABOVE;

  isBelow = (flatNode: FlatNode) =>
    this.isOver(flatNode) &&
    this.m_DragFlatNodeOverKind === ELEMENT_OVER_KIND.BELOW;

  isEdit = (flatNode: FlatNode) => this.m_DragFlatNode === flatNode;

  isSelected = (flatNode: FlatNode) => flatNode.selected;

  constructor(
    private departmentListService: DepartmentsListService,
    private service: DepartmentsService,
    private dialog: MatDialog
  ) {
    this.isEnableGoBack$ = this.departmentListService.enableGoBackItem$;

    this.treeFlattener = new MatTreeFlattener(
      this.transformer,
      this.nodeLevel,
      this.nodeExpandable,
      this.nodeChildren
    );
    this.treeControl = new FlatTreeControl<FlatNode>(
      this.nodeLevel,
      this.nodeExpandable
    );

    this.dataSource = new MatTreeFlatDataSource(
      this.treeControl,
      this.treeFlattener
    );

    this.departmentListService.elements$
      .pipe(takeWhile(() => this.isSubscribe))
      .subscribe((elements) => {
        this.elements = elements;
        this.rebuildNodes(this.makeNodes());

        this.treeControl.expandAll();
      });

    this.departmentListService.created$
      .pipe(takeWhile(() => this.isSubscribe))
      .pipe(filter((x) => !CommonExtensions.isNullOrUndefined(x)))
      .subscribe((createdElement) => {
        this.elements.push(createdElement);

        this.rebuildNodes(this.makeNodes());

        this.selectedNodeExpanded(createdElement);

        this.departmentListService.created$.next(null);
      });

    this.departmentListService.deleted$
      .pipe(takeWhile(() => this.isSubscribe))
      .pipe(filter((x) => !CommonExtensions.isNullOrUndefined(x)))
      .subscribe((deletedElement) => {
        const index = this.elements.findIndex(
          (element) => element.id === deletedElement.id
        );
        if (-1 !== index) {
          this.elements.splice(index, 1);
        }
        this.rebuildNodes(this.makeNodes());

        this.selectedNodeExpanded(deletedElement);

        this.departmentListService.deleted$.next(null);
      });

    // this.departmentListService.moved$
    //   .pipe(takeWhile(() => this.isSubscribe))
    //   .pipe(filter((element) => !CommonExtensions.isNullOrUndefined(element)))
    //   .subscribe((element) => {
    //     this.rebuildNodes(this.makeNodes());

    //     this.selectedNodeExpanded(element);

    //     this.departmentListService.deleted$.next(null);

    //     this.departmentListService.moved$.next(null);
    //   });

    this.departmentListService.expandStatus$
      .pipe(takeWhile(() => this.isSubscribe))
      .subscribe((status) => {
        switch (status) {
          case ExpandTreeStatusKind.Expanded:
            this.treeControl.expandAll();
            break;
          case ExpandTreeStatusKind.Collapsed:
            this.treeControl.collapseAll();
            break;
          default:
            break;
        }
      });
  }
  ngOnDestroy(): void {
    this.isSubscribe = false;
  }

  ngOnInit(): void {
    // 조직 관리 화면을 항상 펼치기를 해준다.
    // this.treeControl.expandAll();
  }
  ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  // events
  onDragStart(event: DragEvent, flatNode: FlatNode) {
    this.m_DragFlatNode = flatNode;

    this.treeControl.collapse(flatNode);
  }

  onDragOver(event: DragEvent, flatNode: FlatNode) {
    event.preventDefault();

    const current = new Date().getTime();

    if (flatNode !== this.m_OverFlatNode) {
      this.m_OverFlatNode = flatNode;
      this.m_DragFlatNodeExpandOverTime = current;
    }
    const element = event.target as HTMLElement;

    const percentY = event.offsetY / element.clientHeight;

    if (percentY < 0.25) {
      // this.m_DragFlatNodeOverKind = ELEMENT_OVER_KIND.ABOVE;
    } else {
      if (flatNode.expandable) {
        this.m_DragFlatNodeOverKind = ELEMENT_OVER_KIND.BELOW;
      } else {
        if (percentY > 0.7) {
          this.m_DragFlatNodeOverKind = ELEMENT_OVER_KIND.BELOW;
        } else {
          this.m_DragFlatNodeOverKind = ELEMENT_OVER_KIND.CENTER;
        }
      }
    }
  }

  async onDragEnd(event: any, flatNode: FlatNode) {
    if (this.isProcess) {
      await ComponentsCommonDialogComponent.create(
        this.dialog,
        '다른 작업 중',
        DIALOG_KIND.DIALOG_KIND_DEFAULT,
        `현재 조직 변경을 진행 중입니다.`
      )
        .afterClosed()
        .toPromise();

      return;
    }

    const toFlatNode = this.m_OverFlatNode;

    const element = this.elements.find((x) => x.id === flatNode.id);
    if (CommonExtensions.isNullOrUndefined(element)) {
      return;
    }

    if (!CommonExtensions.isNullOrUndefined(toFlatNode)) {
      const nodes = this.nodes;
      let parentNode: Node = null;

      if (!toFlatNode.expandable) {
        if (this.isBelow(toFlatNode)) {
          // 상위 조직 검색
          const toNode = nodes.find((x) => x.id === toFlatNode.id);
          if (!CommonExtensions.isNullOrUndefined(toNode)) {
            parentNode = nodes.find((x) => x.id === toNode.parentId);
          }
        } else if (this.isCenter(toFlatNode)) {
          // completed
          parentNode = nodes.find((x) => x.id === toFlatNode.id);
        }
      } else {
        if (this.treeControl.isExpanded(toFlatNode)) {
          parentNode = nodes.find((x) => x.id === toFlatNode.id);
        } else {
          const toNode = nodes.find((x) => x.id === toFlatNode.id);
          if (!CommonExtensions.isNullOrUndefined(toNode)) {
            parentNode = nodes.find((x) => x.id === toNode.parentId);
          }
        }
      }

      const myParentNode = this.nodes.find(
        (x) => x.id === element.parentDepartmentNodeId
      );
      if (myParentNode === parentNode) {
        this.clearDragNode();
        return;
      }

      var bSuccess: boolean = false;

      if (null == parentNode) {
        bSuccess = await ComponentsCommonDialogComponent.create(
          this.dialog,
          '조직 등급',
          DIALOG_KIND.DIALOG_KIND_DEFAULT,
          `[${flatNode.name()}]를 최상위 조직으로 변경하시겠습니까?`,
          null,
          true
        )
          .afterClosed()
          .toPromise();
      } else {
        bSuccess = await ComponentsCommonDialogComponent.create(
          this.dialog,
          '조직 변경',
          DIALOG_KIND.DIALOG_KIND_DEFAULT,
          `${flatNode.name()}를 ${parentNode.name()} 안으로 변경하시겠습니까?`,
          null,
          true
        )
          .afterClosed()
          .toPromise();
      }

      if (bSuccess) {
        await this.onMoveNode(
          element,
          CommonExtensions.isNullOrUndefined(parentNode)
            ? null
            : this.elements.find((x) => x.id === parentNode.id)
        );
      }

      this.clearDragNode();
    }
  }

  onClickedDepartmentNode(flatNode: FlatNode) {
    const selected = !flatNode.selected;
    flatNode.selected = selected;

    const selectedElement = this.elements.find((x) => x.id === flatNode.id);
    if (selected) {
      const node = this.nodes.find((x) => x.id == selectedElement.id);
      this.departmentListService.selected$.next({
        node: selectedElement,
        canDeleted: node.children?.length <= 0,
      });

      this.selected.next(selectedElement.department);
    } else {
      this.departmentListService.selected$.next(null);
      this.selected.next(undefined);
    }

    if (!flatNode.selected) {
      return;
    }

    this.treeControl.dataNodes
      .filter((x) => x.id !== flatNode.id)
      .forEach((x) => (x.selected = !selected));
  }

  private clearDragNode() {
    const flatNode = this.m_DragFlatNode;
    this.m_DragFlatNode = null;
    this.m_OverFlatNode = null;
    this.m_DragFlatNodeExpandOverTime = 0;
    this.m_DragFlatNodeOverKind = ELEMENT_OVER_KIND.DEFAULT;

    this.m_ExpandedFlatNodes.forEach((x) => this.treeControl.collapse(x));
    this.m_ExpandedFlatNodes.clear();

    if (
      !CommonExtensions.isNullOrUndefined(flatNode) &&
      this.isCompletedMoved
    ) {
      this.treeControl.expand(flatNode);
    }
  }

  private rebuildNodes(nodes: Array<Node>) {
    this.dataSource.data = nodes;
  }

  private transformer(node: Node, level: number) {
    return new FlatNode(
      node.element.id,
      node.element,
      level,
      node.children?.length > 0,
      false,
      node.element.order
    );
  }

  private nodeLevel(flatNode: FlatNode): number {
    return flatNode.level;
  }

  private nodeExpandable(flatNode: FlatNode): boolean {
    return flatNode.expandable;
  }

  private nodeChildren(node: Node): Observable<Node[]> {
    return of(node.children);
  }

  private makeNodes(): Array<Node> {
    const nodes = new Map<number, Node>();

    this.elements.forEach((x) => nodes.set(x.id, new Node(x)));

    this.nodes = Array.from(nodes.values());

    this.nodes
      .filter(
        (x) =>
          !CommonExtensions.isNullOrUndefined(x.element.parentDepartmentNodeId)
      )
      .forEach((x) => {
        const parentElement = nodes.get(x.element.parentDepartmentNodeId);
        if (!CommonExtensions.isNullOrUndefined(parentElement)) {
          parentElement.children.push(x);
        }
      });

    if (this.nodes?.length > 0) {
      this.ordering(0, this.nodes);
    }

    return Array.from(nodes.values()).filter(
      (x) => !x.element.parentDepartmentNodeId
    );
  }

  private ordering(level: number, container: Array<Node>) {
    container.forEach((x, index) => {
      if (!CommonExtensions.isNullOrUndefined(x.children)) {
        this.ordering(x.element.order * 100, x.children);
      }
      x.children.sort((lhs, rhs) =>
        lhs.name().toLowerCase().localeCompare(rhs.name().toLowerCase())
      );
    });
  }

  private selectedNodeExpanded(element: DepartmentNodeElement) {
    const node = this.nodes.find((x) => x.id === element.id);
    if (CommonExtensions.isNullOrUndefined(node)) {
      // deleted
      if (CommonExtensions.isNullOrUndefined(element.parentDepartmentNodeId)) {
        this.departmentListService.selected$.next(null);

        return;
      }

      const parentElement = this.elements.find(
        (x) => x.id === element.parentDepartmentNodeId
      );
      if (CommonExtensions.isNullOrUndefined(parentElement)) {
        return;
      }

      this.selectedNodeExpanded(parentElement);
    } else {
      // exists
      const flatNode = this.treeControl.dataNodes.find(
        (x) => x.id === element.id
      );
      if (!CommonExtensions.isNullOrUndefined(flatNode)) {
        this.onClickedDepartmentNode(flatNode);

        this.expandFlatNode(flatNode);
      }
    }
  }

  private expandFlatNode(flatNode: FlatNode) {
    const element = this.elements.find((x) => x.id === flatNode.id);
    if (CommonExtensions.isNullOrUndefined(element)) {
      return;
    }

    this.treeControl.expand(flatNode);

    if (CommonExtensions.isNullOrUndefined(element.parentDepartmentNodeId)) {
      return;
    }

    const parentFlatNode = this.treeControl.dataNodes.find(
      (x) => x.id === element.parentDepartmentNodeId
    );
    if (CommonExtensions.isNullOrUndefined(parentFlatNode)) {
      return;
    }

    this.expandFlatNode(parentFlatNode);
  }

  private async onMoveNode(
    element: DepartmentNodeElement,
    parentElement: DepartmentNodeElement
  ) {
    element.parentDepartmentNodeId = parentElement?.id;

    this.isProcess = true;

    try {
      const response = await this.service
        .requestPutDepartmentNode(element.id, parentElement)
        .pipe(take(1))
        .toPromise();

      if (CommonExtensions.isSuccess(response.getCommon())) {
        this.departmentListService.moved$.next(element);
      } else {
        ComponentsCommonDialogComponent.create(
          this.dialog,
          '조직 변경 실패',
          DIALOG_KIND.DIALOG_KIND_ERROR,
          '조직 변경이 실패하였습니다.',
          ['갱신 후 다시 시도 바랍니다.']
        );
      }

      this.isProcess = false;
    } catch (error) {
      this.isProcess = false;
    }
  }
}
