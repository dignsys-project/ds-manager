import { SCENE_RESOURCE_KINDMap } from '../protocols/common_pb';

export class ResourcePreviewElement {
  file: File;
  kind: SCENE_RESOURCE_KINDMap[keyof SCENE_RESOURCE_KINDMap];
  previewData: string;
}
