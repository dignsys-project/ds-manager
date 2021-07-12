import { Component, OnInit, Input } from '@angular/core';
import { ResourceService } from 'src/app/services/resource.service';
import { ScenePartButtonElement } from 'src/app/models/scene-part-button-element';
import { Router } from '@angular/router';

@Component({
  selector: 'app-components-scene-common-button',
  templateUrl: './components-scene-common-button.component.html',
  styleUrls: ['./components-scene-common-button.component.scss'],
})
export class ComponentsSceneCommonButtonComponent implements OnInit {
  @Input()
  element: ScenePartButtonElement;

  @Input()
  isScene: boolean = false;

  constructor(
    private router: Router,
    private resourceService: ResourceService
  ) {}

  ngOnInit(): void {}

  getResourceAddress(): string {
    return this.resourceService.getResourceAddress(this.element.resource);
  }

  onClicked(): void {
    if (!this.isScene) {
      return;
    }

    if (undefined == this.element?.nextScene) {
      return;
    }

    this.router.navigate([`scenes/scene/${this.element.nextScene.sceneId}`]);
  }
}
