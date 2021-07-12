import { DEPARTMENT_FOLDER_ITEM_KIND } from './DEPARTMENT_FOLDER_ITEM_KIND';

export interface IDepartmentItem {
  id(): number;

  parentId(): number;

  name(): string;

  departmentId(): number;
}

export class DepartmentNodeItem implements IDepartmentItem {
  constructor(
    private m_NodeId: number,
    private m_DepartmentId: number,
    private m_Name: string,
    private m_ParentNodeId: number,
    private m_ParentDepartmentId?: number
  ) {}
  id(): number {
    return this.m_DepartmentId;
  }

  departmentId(): number {
    return this.m_DepartmentId;
  }

  parentId(): number {
    return this.m_ParentDepartmentId;
  }
  name(): string {
    return this.m_Name;
  }

  nodeId(): number {
    return this.m_NodeId;
  }

  parentNodeId(): number {
    return this.m_ParentNodeId;
  }
}

export class DepartmentFolderNode {
  public name: string;
  public item: IDepartmentItem;
  public kind: DEPARTMENT_FOLDER_ITEM_KIND;
  public children: Array<DepartmentFolderNode>;
}
