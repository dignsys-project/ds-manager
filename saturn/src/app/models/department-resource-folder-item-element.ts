import { GetDepartmentResourceFolderResponse } from '../protocols/prometheus_pb';
import { DepartmentBaseElement } from './department-base-element';
import { DepartmentNodeBaseElement } from './department-node-element';
import { DepartmentResourceFolderElement } from './department-resource-folder-element';

export class DepartmentResourceFolderItemElement {
  departmentNodeBase: DepartmentNodeBaseElement;
  departmentBase: DepartmentBaseElement;
  resourceFolders: Array<DepartmentResourceFolderElement>;

  fromMessage(message: GetDepartmentResourceFolderResponse.Item) {
    // set department node base
    this.departmentNodeBase = DepartmentNodeBaseElement.fromMessageBase(
      message.getDepartmentnodebase()
    );

    // set department base
    this.departmentBase = DepartmentBaseElement.fromMessageBase(
      message.getDepartmentbase()
    );

    // set resource folder
    this.resourceFolders = message
      .getResourcefoldersList()
      .map((x) => DepartmentResourceFolderElement.fromMessage(x));
  }

  public static fromMessage(
    message: GetDepartmentResourceFolderResponse.Item
  ): DepartmentResourceFolderItemElement {
    const element = new DepartmentResourceFolderItemElement();
    element.fromMessage(message);
    return element;
  }
}
