import { MoonVersion } from '../protocols/common_pb';

export class AssemVersionElement {
  public name: string;
  public version: string;

  public fromMessage(message: MoonVersion.AssemVersion) {
    this.name = message.getName();
    this.version = message.getVersion();
  }

  public static fromMessage(
    message: MoonVersion.AssemVersion
  ): AssemVersionElement {
    const element = new AssemVersionElement();
    element.fromMessage(message);
    return element;
  }
}
export class MoonVersionElement {
  public serviceName: string;
  public os: string;
  public runtime: string;

  public assem: AssemVersionElement;
  public elapsed: number;

  get version(): string {
    return this.assem?.version;
  }

  get name(): string {
    return this.assem?.name;
  }

  public fromMesage(message: MoonVersion) {
    this.serviceName = message.getServicename();
    this.os = message.getOsversion();
    this.runtime = message.getRuntimeversion();

    this.assem = AssemVersionElement.fromMessage(message.getAssemversion());
    this.elapsed = message.getElapsedmilliseconds();
  }

  public static fromMessage(message: MoonVersion): MoonVersionElement {
    const element = new MoonVersionElement();
    element.fromMesage(message);
    return element;
  }
}
