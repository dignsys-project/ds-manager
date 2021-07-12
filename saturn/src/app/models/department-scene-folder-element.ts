import { DepartmentSceneFolder } from '../protocols/common_pb';

export class DepartmentSceneFolderElement {
  constructor(
    public departmentSceneFolderId: number,
    public name: string,
    public departmentId: number,
    public createdSeconds: number,
    public parentDepartmentSceneFolderId?: number
  ) {}

  public fromMessage(message: DepartmentSceneFolder) {
    this.departmentSceneFolderId = message.getDepartmentfolderid();
    this.name = message.getName();
    this.departmentId = message.getDepartmentid();
    this.createdSeconds = message.getCreatedseconds();
    this.parentDepartmentSceneFolderId = message.getParentdepartmentscenefolderid();
  }

  public static fromMessage(
    message: DepartmentSceneFolder
  ): DepartmentSceneFolderElement {
    const element = new DepartmentSceneFolderElement(
      message.getDepartmentfolderid(),
      message.getName(),
      message.getDepartmentid(),
      message.getCreatedseconds(),
      message.getParentdepartmentscenefolderid()
    );

    return element;
  }
}
