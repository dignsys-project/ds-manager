import { Component, OnInit } from '@angular/core';
import { AbstractSceneCommon } from 'src/app/components/components-scene/abstract-scene-common';
import { ScenePartSlideImageElement } from 'src/app/models/scene-part-slide-image-element';
import { SCENE_COMPONENTS_KIND } from 'src/app/protocols/common_pb';

class TemporaryScenePart extends AbstractSceneCommon {
  constructor() {
    super(undefined, SCENE_COMPONENTS_KIND.SCENE_COMPONENTS_KIND_SLIDE_IMAGE);

    this.slideImageElement = new ScenePartSlideImageElement();
  }
}

@Component({
  selector: 'app-scene-developments-slide-image',
  templateUrl: './scene-developments-slide-image.component.html',
  styleUrls: ['./scene-developments-slide-image.component.scss'],
})
export class SceneDevelopmentsSlideImageComponent implements OnInit {
  common: TemporaryScenePart = new TemporaryScenePart();

  constructor() {}

  ngOnInit(): void {}

  onAddedScenesCreateCommonSlideImage() {}
}
