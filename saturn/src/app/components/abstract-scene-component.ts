import { AbstractSceneCommon } from './components-scene/abstract-scene-common';

export abstract class AbstractSceneComponent extends AbstractSceneCommon {
  abstract get isShow(): boolean;

  abstract show(): void;
  abstract dontShow(): void;
}
