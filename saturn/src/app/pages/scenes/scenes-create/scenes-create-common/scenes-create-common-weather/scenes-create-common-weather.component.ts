import { Component, OnInit, Input } from '@angular/core';
import { AbstractSceneCommon } from 'src/app/components/components-scene/abstract-scene-common';
import { ScenePartWeatherElement } from 'src/app/models/scene-part-weather-element';

@Component({
  selector: 'app-scenes-create-common-weather',
  templateUrl: './scenes-create-common-weather.component.html',
  styleUrls: ['./scenes-create-common-weather.component.scss'],
})
export class ScenesCreateCommonWeatherComponent implements OnInit {
  @Input()
  common: AbstractSceneCommon;

  get element(): ScenePartWeatherElement {
    return this.common?.weatherElement;
  }

  constructor() {}

  ngOnInit(): void {}
}
