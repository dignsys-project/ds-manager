import { DepartmentResourceFolder } from '../protocols/common_pb';

export class DepartmentResourceFolderElement {
  public departmentFolderId: number;
  public name: string;
  public departmentId: number;
  public parentDepartmentResourceFolderId: number;

  public fromMessage(message: DepartmentResourceFolder) {
    this.departmentFolderId = message.getDepartmentfolderid();
    this.name = message.getName();
    this.departmentId = message.getDepartmentid();
    this.parentDepartmentResourceFolderId = message.getParentdepartmentresourcefolderid();
  }

  public static fromMessage(
    message: DepartmentResourceFolder
  ): DepartmentResourceFolderElement {
    const element = new DepartmentResourceFolderElement();
    element.fromMessage(message);
    return element;
  }
}
