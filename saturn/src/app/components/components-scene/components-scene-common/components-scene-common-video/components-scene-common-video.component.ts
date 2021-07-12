import { Component, OnInit, Input, ViewChild, ElementRef } from '@angular/core';
import { ResourceService } from 'src/app/services/resource.service';
import { isNullOrUndefined } from 'util';
import { ScenePartVideoElement } from 'src/app/models/scene-part-video-element';

@Component({
  selector: 'app-components-scene-common-video',
  templateUrl: './components-scene-common-video.component.html',
  styleUrls: ['./components-scene-common-video.component.scss'],
})
export class ComponentsSceneCommonVideoComponent implements OnInit {
  @Input()
  element: ScenePartVideoElement;

  @Input()
  isScene: boolean;

  @ViewChild('VIDEO_PLAYER', { static: true })
  videoElement: ElementRef<HTMLVideoElement>;

  constructor(private resourceService: ResourceService) {}

  ngOnInit(): void {
    if (!this.isScene) {
      this.videoElement.nativeElement.style.display = 'none';
    } else {
      this.videoElement.nativeElement.oncanplay = (event: Event) => {
        this.videoElement.nativeElement
          .play()
          .then((_) => {})
          .catch((error) => {
            console.error('can`t play auto play.');
          });
      };
      // 반복 적용
      this.videoElement.nativeElement.loop = true;
    }
  }

  get havePreviewResource(): boolean {
    return !isNullOrUndefined(this.element?.resource?.previewResource);
  }

  getPreviewLocation(): string {
    return this.resourceService.getPreviewResourceAddress(
      this.element.resource.previewResource
    );
  }

  getLocation(): string {
    return this.resourceService.getResourceAddress(this.element.resource);
  }
}
