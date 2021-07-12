import { SceneBase } from '../protocols/common_pb';
import { ResourceElement } from './resource-element';
import { CommonExtensions } from '../commons/common-extensions';

export class SceneBaseElement {
  public sceneId: number;
  public name: string;
  public resource: ResourceElement;
  public createdSeconds: Date;
  public width: number;
  public height: number;
  public departmentSceneFolderId?: number;

  public isValified: boolean;

  public updatedSeconds: number;
  public get updatedDate(): Date {
    return CommonExtensions.utcSecondsToDate(this.updatedSeconds);
  }

  get id(): number {
    return this.sceneId;
  }

  public get isValidate(): boolean {
    return this.sceneId > 0;
  }

  fromMessageBase(message: SceneBase) {
    this.sceneId = message.getSceneid();
    this.name = message.getName();
    if (message.hasResource()) {
      this.resource = ResourceElement.fromMessage(message.getResource());
    }
    this.createdSeconds = CommonExtensions.utcSecondsToDate(
      message.getCreatedseconds()
    );

    this.updatedSeconds = message.getUpdatedseconds();

    this.width = message.getWidth();
    this.height = message.getHeight();

    this.departmentSceneFolderId = message.getDepartmentscenefolderid();
    this.isValified = message.getIsvalified();
  }

  public static fromMessageBase(message: SceneBase): SceneBaseElement {
    const element = new SceneBaseElement();
    element.fromMessageBase(message);
    return element;
  }
}
