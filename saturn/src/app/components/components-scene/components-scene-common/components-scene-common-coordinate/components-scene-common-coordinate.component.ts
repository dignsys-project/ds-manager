import {
  Component,
  OnInit,
  Input,
  OnDestroy,
  Output,
  EventEmitter,
} from '@angular/core';
import { ResourceService } from 'src/app/services/resource.service';
import { ScenePartCoordinateElement } from 'src/app/models/scene-part-coordinate-element';

@Component({
  selector: 'app-components-scene-common-coordinate',
  templateUrl: './components-scene-common-coordinate.component.html',
  styleUrls: ['./components-scene-common-coordinate.component.scss'],
})
export class ComponentsSceneCommonCoordinateComponent
  implements OnInit, OnDestroy {
  private m_Element: ScenePartCoordinateElement;

  @Input()
  get element(): ScenePartCoordinateElement {
    return this.m_Element;
  }

  set element(element: ScenePartCoordinateElement) {
    this.m_Element = element;
  }

  @Input()
  isScene: boolean = false;

  @Output()
  clicked: EventEmitter<boolean> = new EventEmitter<boolean>();

  constructor(private resourceService: ResourceService) {}

  ngOnDestroy(): void {}

  ngOnInit(): void {}

  getResourceAddress(): string {
    return this.resourceService.getResourceAddress(this.element.resource);
  }

  onClickedRoute() {
    this.clicked.next();
  }
}
