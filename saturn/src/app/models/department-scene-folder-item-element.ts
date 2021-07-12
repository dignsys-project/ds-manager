import { GetDepartmentSceneFolderResponse } from '../protocols/prometheus_pb';
import { DepartmentBaseElement } from './department-base-element';
import { DepartmentNodeBaseElement } from './department-node-element';
import { DepartmentSceneFolderElement } from './department-scene-folder-element';

export class DepartmentSceneFolderItemElement {
  departmentNodeBase: DepartmentNodeBaseElement;
  departmentBase: DepartmentBaseElement;
  sceneFolders: Array<DepartmentSceneFolderElement>;

  fromMessage(message: GetDepartmentSceneFolderResponse.Item) {
    // set department node base
    this.departmentNodeBase = DepartmentNodeBaseElement.fromMessageBase(
      message.getDepartmentnodebase()
    );

    // set department base
    this.departmentBase = DepartmentBaseElement.fromMessageBase(
      message.getDepartmentbase()
    );

    // set scene folder
    this.sceneFolders = message
      .getScenefoldersList()
      .map((x) => DepartmentSceneFolderElement.fromMessage(x));
  }

  public static fromMessage(
    message: GetDepartmentSceneFolderResponse.Item
  ): DepartmentSceneFolderItemElement {
    const element = new DepartmentSceneFolderItemElement();
    element.fromMessage(message);
    return element;
  }
}
