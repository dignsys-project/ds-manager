import { Component, OnInit, Input } from '@angular/core';
import { isNullOrUndefined } from 'util';
import { ScenePartDocumentElement } from 'src/app/models/scene-part-document-element';
import { ResourceService } from 'src/app/services/resource.service';

@Component({
  selector: 'app-components-scene-common-document',
  templateUrl: './components-scene-common-document.component.html',
  styleUrls: ['./components-scene-common-document.component.scss'],
})
export class ComponentsSceneCommonDocumentComponent implements OnInit {
  @Input()
  element: ScenePartDocumentElement;

  @Input()
  isScene: boolean = false;

  get haveDocument(): boolean {
    return undefined != this.element?.resource;
  }

  get getDocumentName(): string {
    return this.haveDocument
      ? this.element.resource.name
      : 'PDF 파일을 선택해야 합니다.';
  }

  constructor(private resourceService: ResourceService) {}

  ngOnInit(): void {}

  getResourceLocation(): string {
    return this.resourceService.getResourceAddress(this.element.resource);
  }
}
