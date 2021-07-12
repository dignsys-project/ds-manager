import {
  SCENE_RESOURCE_KIND,
  SCENE_RESOURCE_KINDMap,
} from 'src/app/protocols/common_pb';
import { ResourceExtensions } from '../commons/resource-extensions';

export enum PROCESS_KIND {
  PROCESS_KIND_DEFAULT = 0,
  PROCESS_KIND_COMPLETED = 1,
  PROCESS_KIND_FAILED = 2,
  PROCESS_KIND_PROCESS = 3,
}

export class ResourceAttachment {
  previewAttachment: ResourceAttachment;
  previewDataURI: string;
  size: number;
  width: number;
  height: number;
  duration: number;

  file: File;
  progress: number;

  public get name(): string {
    return this.file?.name;
  }

  public get haveResolution(): boolean {
    return undefined != this.width && undefined != this.height;
  }

  public get haveDuration(): boolean {
    return undefined != this.duration && this.duration > 0;
  }

  constructor(file: File) {
    this.file = file;
    this.progress = 0;
    if (undefined != file) {
      this.size = file.size;
    }
  }

  get getIconName(): string {
    return ResourceExtensions.kind2IconName(this.getResourceKind);
  }

  get getResourceKind(): SCENE_RESOURCE_KINDMap[keyof SCENE_RESOURCE_KINDMap] {
    const type = this.file.type;
    return ResourceExtensions.contentType2Kind(type);
  }

  get isDefinedPreview(): boolean {
    return ResourceExtensions.isKindHaveDefinedPreview(this.getResourceKind);
  }

  get getDefinedPreviewLocation(): string {
    return ResourceExtensions.kind2DefiendPreviewLocation(this.getResourceKind);
  }
}
