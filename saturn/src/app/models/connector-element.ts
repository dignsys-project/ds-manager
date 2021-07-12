import { Connector } from '../protocols/common_pb';
import { SceneElement } from './scene-element';
import { ConnectorBaseElement } from './connector-base-element';
import { ConnectorScheduleSceneElement } from './connector-schedule-scene-element';
import { DepartmentBaseElement } from './department-base-element';

export class ConnectorElement extends ConnectorBaseElement {
  public departmentBase?: DepartmentBaseElement;
  public scene?: SceneElement;
  public schedules?: Array<ConnectorScheduleSceneElement>;

  public emergencyScene?: SceneElement;

  public get haveScene(): boolean {
    return undefined != this.scene;
  }
  public get haveDepartment(): boolean {
    return undefined != this.departmentBase;
  }

  public isDepartmentConnector(departmentId: number): boolean {
    if (undefined == this.departmentBase) {
      return false;
    }

    return this.departmentBase?.id == departmentId;
  }

  public fromMessage(message: Connector) {
    this.fromMessageBase(message.getBase());

    if (message.hasDepartmentbase()) {
      this.departmentBase = DepartmentBaseElement.fromMessageBase(
        message.getDepartmentbase()
      );
    }
    if (message.hasScene()) {
      this.scene = SceneElement.fromMessage(message.getScene());
    }

    this.schedules = message
      .getSchedulesList()
      .map((x) => ConnectorScheduleSceneElement.fromMessage(x));

    if (message.hasEmergencyscene()) {
      this.emergencyScene = SceneElement.fromMessage(
        message.getEmergencyscene()
      );
    }
  }

  public static fromMessage(message: Connector): ConnectorElement {
    const element = new ConnectorElement();
    element.fromMessage(message);
    return element;
  }
}
