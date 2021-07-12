import { Component, OnInit, Input, EventEmitter } from '@angular/core';
import { isNullOrUndefined } from 'util';
import { ResourceService } from 'src/app/services/resource.service';
import { ScenePartImageElement } from 'src/app/models/scene-part-image-element';

@Component({
  selector: 'app-components-scene-common-image',
  templateUrl: './components-scene-common-image.component.html',
  styleUrls: ['./components-scene-common-image.component.scss'],
})
export class ComponentsSceneCommonImageComponent implements OnInit {
  @Input()
  element: ScenePartImageElement;

  get isSourceAnim(): boolean {
    return this.element?.animationKind == 'source';
  }

  get isCoordinateAnim(): boolean {
    return this.element?.animationKind == 'coordinate';
  }

  constructor(private resourceService: ResourceService) {}

  ngOnInit(): void {}

  get haveResource(): boolean {
    return (
      undefined != this.element?.resource &&
      this.element?.resource?.resourceId > 0
    );
  }

  getResourceLocation(): string {
    return this.resourceService.getResourceAddress(this.element.resource);
  }
}
