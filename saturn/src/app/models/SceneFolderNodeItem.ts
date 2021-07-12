import { IDepartmentItem } from '../common/department-folder-node';
import { DepartmentSceneFolderElement } from './department-scene-folder-element';

export class SceneFolderNodeItem implements IDepartmentItem {
  constructor(
    private _sceneFolderId: number,
    private _departmentId: number,
    private _name: string,
    private _parentSceneFolderId: number
  ) {}
  id(): number {
    return this._sceneFolderId;
  }
  parentId(): number {
    return this._parentSceneFolderId;
  }
  name(): string {
    return this._name;
  }

  departmentId(): number {
    return this._departmentId;
  }

  public static from(
    element: DepartmentSceneFolderElement
  ): SceneFolderNodeItem {
    return new SceneFolderNodeItem(
      element.departmentSceneFolderId,
      element.departmentId,
      element.name,
      element.parentDepartmentSceneFolderId
    );
  }
}
