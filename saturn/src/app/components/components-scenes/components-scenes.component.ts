import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { SceneBaseElement } from 'src/app/models/scene-base-element';
import { ResourceService } from 'src/app/services/resource.service';
import { isNullOrUndefined } from 'util';
import { Router } from '@angular/router';

@Component({
  selector: 'app-components-scenes',
  templateUrl: './components-scenes.component.html',
  styleUrls: ['./components-scenes.component.scss'],
})
export class ComponentsScenesComponent implements OnInit {
  elements: Array<SceneBaseElement>;

  @Input()
  itemsCount: number = 0;

  @Output()
  selected: EventEmitter<SceneBaseElement> = new EventEmitter<SceneBaseElement>();

  @Output()
  next: EventEmitter<void> = new EventEmitter<void>();

  get hasElements(): boolean {
    return 0 < this.elements?.length;
  }

  private m_Selected: SceneBaseElement;

  constructor(
    private router: Router,
    private resourceService: ResourceService
  ) {}

  get haveNextResources(): boolean {
    return (
      !isNullOrUndefined(this.elements) &&
      this.elements.length < this.itemsCount
    );
  }

  ngOnInit(): void {}

  havePreview(element: SceneBaseElement): boolean {
    return !isNullOrUndefined(element.resource.previewResource);
  }
  getPreviewLocation(element: SceneBaseElement): string {
    return this.resourceService.getPreviewResourceAddress(
      element.resource.previewResource
    );
  }

  isSelected(element: SceneBaseElement): boolean {
    return this.m_Selected === element;
  }

  onClickedRemoveScene(element: SceneBaseElement, index: number) {}

  onClickedSelect(element: SceneBaseElement) {
    if (this.m_Selected === element) {
      this.m_Selected = null;
      this.selected.next(null);
      return;
    }
    this.m_Selected = element;
    this.selected.next(this.m_Selected);
  }

  onClickedSceneAdd() {
    this.router.navigate(['scenes/create']);
  }

  onClickedNextResource() {
    this.next.next();
  }
}
