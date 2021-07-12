import { animate, style, transition, trigger } from '@angular/animations';
import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ResourceElement } from 'src/app/models/resource-element';
import { SceneBaseElement } from 'src/app/models/scene-base-element';
import { ResourceService } from '../../../services/resource.service';

@Component({
  selector: 'app-scenes-navigation-item',
  templateUrl: './scenes-navigation-item.component.html',
  styleUrls: ['./scenes-navigation-item.component.scss'],
  animations: [
    trigger('inOutAnimation', [
      transition(':enter', [
        style({ opacity: 0 }),
        animate('1s ease', style({ opacity: 1 })),
      ]),
    ]),
  ],
})
export class ScenesNavigationItemComponent implements OnInit {
  private _isHover: boolean = false;

  @Input()
  element: SceneBaseElement;

  get isHover(): boolean {
    return this._isHover;
  }

  constructor(
    private resourceService: ResourceService,
    private router: Router
  ) {}

  ngOnInit(): void {}

  havePreview(item: SceneBaseElement): boolean {
    return undefined != item?.resource?.previewResource;
  }
  getPreviewResourceAddress(resource: ResourceElement): string {
    return this.resourceService.getPreviewResourceAddress(
      resource.previewResource
    );
  }

  onMouseEnter(event: MouseEvent) {
    this._isHover = true;
  }

  onMouseLeave(event: MouseEvent) {
    this._isHover = false;
  }

  onClickedPreviewScene(sceneId: number) {
    const url = this.router.createUrlTree(['/scenes/scene', sceneId]);

    const URI = `#${url.toString()}`;

    window.open(URI, '_blank');
  }

  onClickedNavigateScene(sceneId: number) {
    const url = this.router.createUrlTree([
      '/scenes/scene-navigation',
      sceneId,
    ]);

    const URI = `#${url.toString()}`;

    window.open(URI, '_blank');
  }

  // on clicked scene modified
  onClickedSceneModified(sceneId: number) {
    this.router.navigate([`scenes/create`], {
      queryParams: { sceneId: sceneId, isDuplicated: false },
    });
  }
}
