import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ResourceAttachment } from 'src/app/common/resource-attachment';
import { SCENE_RESOURCE_KIND } from 'src/app/protocols/common_pb';

@Component({
  selector: 'app-components-resources-create-element',
  templateUrl: './components-resources-create-element.component.html',
  styleUrls: ['./components-resources-create-element.component.scss'],
})
export class ComponentsResourcesCreateElementComponent implements OnInit {
  private _element: ResourceAttachment;

  dataUrl: string;

  @Input()
  isProcess: boolean = false;

  @Input()
  set element(element: ResourceAttachment) {
    this._element = element;

    if (undefined != this._element) {
      if (!this._element.isDefinedPreview) {
        this.isProcess = true;
        this.createThumbnail()
          .then((dataUrl) => {
            this.dataUrl = dataUrl;
            this._element.previewDataURI = dataUrl;

            this.isProcess = false;
          })
          .catch((x) => {
            console.error(x);
            this.isProcess = false;
          });
      }
    } else {
      this.dataUrl = undefined;
    }
  }

  @Output()
  remove: EventEmitter<ResourceAttachment> = new EventEmitter<
    ResourceAttachment
  >();

  get element(): ResourceAttachment {
    return this._element;
  }

  get haveUrl(): boolean {
    return this.dataUrl != undefined;
  }

  constructor() {}

  ngOnInit(): void {}

  calculateDuration(duration: number): string {
    let durationStr: string = '';

    if (duration > 60 * 60) {
      const hour = Math.floor(duration / (60 * 60));
      durationStr = `${hour} 시간`;
      duration = duration - hour * (60 * 60);
    }

    if (duration > 60) {
      const minute = Math.floor(duration / 60);
      durationStr += ` ${minute} 분`;
      duration = duration - minute * 60;
    }

    durationStr += ` ${Math.round(duration)} 초`;

    return durationStr;
  }

  // on clicked remove element
  onClickedRemoveElement() {
    this.remove.next(this.element);
  }

  // create thumbnail
  async createThumbnail(): Promise<string> {
    switch (this.element.getResourceKind) {
      case SCENE_RESOURCE_KIND.SCENE_RESOURCE_KIND_VIDEO:
        return await this.makeThumbnailFromVideo(this.element);
      case SCENE_RESOURCE_KIND.SCENE_RESOURCE_KIND_IMAGE:
        return await this.makeThumbnailFromImage(this.element);
    }
    return '';
  }

  private makeThumbnailFromImage(element: ResourceAttachment): Promise<string> {
    return new Promise<string>((resolve, reject) => {
      const imageBlob: Blob = element.file;

      const image = new Image();

      image.addEventListener('error', reject);
      image.addEventListener('load', (event) => {
        const canvas: HTMLCanvasElement = document.createElement('canvas');
        canvas.style.display = 'none';

        canvas.width = 960;
        canvas.height = 540;

        const context: CanvasRenderingContext2D = canvas.getContext('2d');
        canvas.addEventListener('error', reject);

        // set image width, height
        element.width = image.width;
        element.height = image.height;

        context.drawImage(image, 0, 0, canvas.width, canvas.height);

        resolve(canvas.toDataURL());

        canvas.remove();
        image.remove();
      });

      // image.style.display = 'none';
      image.src = window.URL.createObjectURL(imageBlob);
      // reader.readAsDataURL(element.file);
    });
  }

  private makeThumbnailFromVideo(element: ResourceAttachment): Promise<string> {
    const videoBlob: Blob = element.file;

    return new Promise<string>((resolve, reject) => {
      const video: HTMLVideoElement = document.createElement('video');
      video.style.display = 'none';

      video.addEventListener(
        'loadedmetadata',
        (event) => (video.currentTime = 2)
      );
      video.addEventListener('error', reject);
      video.addEventListener('canplay', (event) => {
        const canvas: HTMLCanvasElement = document.createElement('canvas');
        canvas.style.display = 'none';

        const context: CanvasRenderingContext2D = canvas.getContext('2d');
        canvas.addEventListener('error', reject);

        canvas.width = 960;
        canvas.height = 540;

        // set video width / height
        element.width = video.videoWidth;
        element.height = video.videoHeight;

        // set video duration
        element.duration = video.duration;

        context.drawImage(video, 0, 0, canvas.width, canvas.height);

        resolve(canvas.toDataURL());

        context.clearRect(0, 0, video.videoWidth, video.videoHeight);
        canvas.remove();
        video.remove();
      });

      if (videoBlob.type) {
        video.setAttribute('type', videoBlob.type);
      }

      video.preload = 'auto';
      video.src = window.URL.createObjectURL(videoBlob);
      video.load();
    });
  }
}
