import { Component, OnInit } from '@angular/core';
import { ResourceExtensions } from 'src/app/commons/resource-extensions';
import { SubtitleExtensions } from 'src/app/commons/subtitle-extensions';
import { AbstractSceneCommon } from 'src/app/components/components-scene/abstract-scene-common';
import { ScenePartSubtitleElement } from 'src/app/models/scene-part-subtitle-element';
import {
  ScenePart,
  ScenePartSubtitle,
  SCENE_COMPONENTS_KIND,
  TEXT_ALIGN_KIND,
} from 'src/app/protocols/common_pb';

class TemporaryScenePart extends AbstractSceneCommon {
  constructor() {
    super(undefined, SCENE_COMPONENTS_KIND.SCENE_COMPONENTS_KIND_SUBTITLE);

    this.subtitleElement = new ScenePartSubtitleElement();

    const content = `가나다라마바사아자차카타파하`;

    this.subtitleElement.contents = content.split('.');
    this.subtitleElement.textElement.textColor = '#FDFDFD';
    this.subtitleElement.textElement.textSize = 50;
    this.subtitleElement.seconds = 5;

    this.subtitleElement.kind =
      ScenePartSubtitle.SUBTITLE_ANIMATION_KIND.SUBTITLE_ANIMATION_KIND_DEFAULT;
    this.subtitleElement.seconds = 5;

    this.subtitleElement.setContent(
      content,
      500,
      this.subtitleElement.textElement.textSize,
      this.subtitleElement.kind
    );
  }
}

@Component({
  selector: 'app-scene-developments-components-subtitle',
  templateUrl: './scene-developments-components-subtitle.component.html',
  styleUrls: ['./scene-developments-components-subtitle.component.scss'],
})
export class SceneDevelopmentsComponentsSubtitleComponent implements OnInit {
  common: TemporaryScenePart = new TemporaryScenePart();

  constructor() {}

  ngOnInit(): void {}

  onAddedScenesCreateCommonSlideImage() {}

  onClickedTest() {}
}
