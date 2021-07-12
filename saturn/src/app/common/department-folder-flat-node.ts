import { IDepartmentItem } from './department-folder-node';
import { DEPARTMENT_FOLDER_ITEM_KIND } from './DEPARTMENT_FOLDER_ITEM_KIND';

export class DepartmentFolderFlatNode {
  public id: number;
  public item: IDepartmentItem;
  public level: number;
  public isExpandable: boolean;
  public selected: boolean;
  public kind: DEPARTMENT_FOLDER_ITEM_KIND;
  public name: string;
  public databaseId: number;
  public parentId: number;
}
