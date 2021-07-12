import { Component, OnInit } from '@angular/core';
import { DepartmentsService } from '../departments.service';
import { FlatTreeControl } from '@angular/cdk/tree';
import {
  MatTreeFlattener,
  MatTreeFlatDataSource,
} from '@angular/material/tree';
import { take } from 'rxjs/operators';
import { CommonExtensions } from 'src/app/commons/common-extensions';
import { DepartmentElement } from 'src/app/models/department-element';
import { DepartmentNodeElement } from 'src/app/models/department-node-element';
import { Observable, of } from 'rxjs';
import { isNullOrUndefined } from 'util';
import { ConnectorBaseElement } from 'src/app/models/connector-base-element';
import { Router } from '@angular/router';
import { DepartmentsHeaderService } from '../departments-header.service';

enum NODE_KIND {
  NODE_KIND_NODE = 0,
  NODE_KIND_CONNECTOR = 1,
  NODE_KIND_MEMBER = 2,
}
/**
 * Department node with nested structure.
 * Each node has a name and an optional list of children.
 */

class Node {
  constructor(
    public element: DepartmentNodeElement,
    public name: string,
    public kind: NODE_KIND,
    public elementId: number
  ) {
    this.children = new Array<Node>();
  }
  public get id(): number {
    return this.element.id;
  }
  public get parentId(): number {
    return this.element.parentDepartmentNodeId;
  }

  public get departmentId(): number {
    return this.element.department.id;
  }

  children: Array<Node>;
}

/** Flat node with expandable and level information */
class FlatNode {
  constructor(
    public id: number,
    public departmentNode: DepartmentNodeElement,
    public level: number,
    public expandable: boolean,
    public selected: boolean,
    public order: number,
    public kind: NODE_KIND,
    public name: string,
    public elementId: number
  ) {}
}

@Component({
  selector: 'app-departments-items',
  templateUrl: './departments-items.component.html',
  styleUrls: ['./departments-items.component.scss'],
})
export class DepartmentsItemsComponent implements OnInit {
  // All items
  elements: Array<DepartmentNodeElement> = new Array<DepartmentNodeElement>();
  nodes: Array<Node> = new Array<Node>();

  treeControl: FlatTreeControl<FlatNode>;
  treeFlattener: MatTreeFlattener<Node, FlatNode>;
  dataSource: MatTreeFlatDataSource<Node, FlatNode>;

  hasChild = (_: number, flatNode: FlatNode) => flatNode.expandable;

  get hasItems(): boolean {
    return this.elements.length > 0;
  }

  constructor(
    private service: DepartmentsService,
    private departmentsHeaderService: DepartmentsHeaderService,
    private router: Router
  ) {
    this.departmentsHeaderService.title$.next('조직도');

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

    this.service
      .requestGetDepartmentNodes()
      .pipe(take(1))
      .subscribe((response) => {
        if (CommonExtensions.isSuccess(response.getCommon())) {
          this.elements = response
            .getNodesList()
            .map((x) => DepartmentNodeElement.fromMessage(x));

          this.rebuildNodes(this.makeNodes());
        }
      });
  }

  ngOnInit(): void {}

  isConnector(kind: NODE_KIND): boolean {
    return kind === NODE_KIND.NODE_KIND_CONNECTOR;
  }
  isMember(kind: NODE_KIND): boolean {
    return kind === NODE_KIND.NODE_KIND_MEMBER;
  }
  isDepartment(kind: NODE_KIND): boolean {
    return kind === NODE_KIND.NODE_KIND_NODE;
  }

  getIconName(kind: NODE_KIND) {
    switch (kind) {
      case NODE_KIND.NODE_KIND_CONNECTOR:
        return 'devices';
      case NODE_KIND.NODE_KIND_MEMBER:
        return 'person_outline';
    }
    return '';
  }

  getIconColor(kind: NODE_KIND): string {
    return kind === NODE_KIND.NODE_KIND_CONNECTOR ? 'accent' : 'primary';
  }

  onClickedExpandItems() {
    this.treeControl.expandAll();
  }

  onClickedCollapseItems() {
    this.treeControl.collapseAll();
  }

  onClickedElement(node: FlatNode) {
    const id = node.elementId;
    const kind = node.kind;

    switch (kind) {
      case NODE_KIND.NODE_KIND_MEMBER:
        this.router.navigate([`/departments/member/${id}`]);
        break;
      case NODE_KIND.NODE_KIND_CONNECTOR:
        this.router.navigate([`/departments/connector/${id}`]);
        break;
      case NODE_KIND.NODE_KIND_NODE:
        this.router.navigate([`/departments/item/${id}`]);
        break;
    }
  }

  private transformer(node: Node, level: number) {
    return new FlatNode(
      node.element.id,
      node.element,
      level,
      node.children?.length > 0,
      false,
      node.element.order,
      node.kind,
      node.name,
      node.elementId
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

  private rebuildNodes(nodes: Array<Node>) {
    this.dataSource.data = nodes;
    this.treeControl.expandAll();
  }

  private makeNodes(): Array<Node> {
    const nodes = new Map<number, Node>();

    this.elements.forEach((x) =>
      nodes.set(
        x.id,
        new Node(
          x,
          x.department.name,
          NODE_KIND.NODE_KIND_NODE,
          x.department?.id
        )
      )
    );

    this.nodes = Array.from(nodes.values());

    this.nodes
      .filter((x) => !isNullOrUndefined(x.element.parentDepartmentNodeId))
      .forEach((x) => {
        const parentElement = nodes.get(x.element.parentDepartmentNodeId);
        if (!isNullOrUndefined(parentElement)) {
          parentElement.children.push(x);
        }
      });

    for (const element of this.elements) {
      if (element.department.hasConnectors) {
        element.department.connectorBases.forEach((x) => {
          const node = nodes.get(element.id);
          node.children.push(
            new Node(
              element,
              x.name,
              NODE_KIND.NODE_KIND_CONNECTOR,
              x.connectorId
            )
          );
        });
      }

      if (element.department.hasMembers) {
        element.department.memberBases.forEach((x) => {
          const node = nodes.get(element.id);
          node.children.push(
            new Node(element, x.email, NODE_KIND.NODE_KIND_MEMBER, x.id)
          );
        });
      }
    }

    if (this.nodes?.length > 0) {
      this.ordering(0, this.nodes);
    }

    return Array.from(nodes.values()).filter(
      (x) => !x.element.parentDepartmentNodeId
    );
  }

  private ordering(level: number, container: Array<Node>) {
    container.forEach((x, index) => {
      if (!isNullOrUndefined(x.children)) {
        //  this.ordering(x.element.order * 100, x.children);
        x.children = x.children.sort((x) => x.kind);
      }
      x.children.sort(
        (lhs, rhs) =>
          lhs.kind > rhs.kind &&
          lhs.name.toLowerCase().localeCompare(rhs.name.toLowerCase())
      );
    });
  }
}
