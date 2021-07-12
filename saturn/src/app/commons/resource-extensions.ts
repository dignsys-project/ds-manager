import { HttpClient } from '@angular/common/http';
import { take } from 'rxjs/operators';
import { ResourceElement } from '../models/resource-element';
import { ResourceService } from '../services/resource.service';
import {
  SCENE_RESOURCE_KIND,
  SCENE_RESOURCE_KINDMap,
} from '../protocols/common_pb';

export class ResourceExtensions {
  public static async parseFromSubtitleResourceAsync(
    resource: ResourceElement,
    resourceService: ResourceService,
    httpClient: HttpClient
  ): Promise<string> {
    const contents = new Array<string>();

    const address = resourceService.getResourceAddress(resource);

    try {
      return await httpClient
        .get(address, { responseType: 'text' })
        .pipe(take(1))
        .toPromise();
    } catch (error) {
      console.error(error);
    }

    return '';
  }

  public static isXmlGrammer(content: string): boolean {
    if (typeof content != 'string') {
      return false;
    }

    return content.startsWith('<?xml');
  }

  public static isSupportContentType(contentType: string): boolean {
    const container: Array<string> = new Array<string>(
      ...[
        'video/mp4',
        'image/png',
        'image/jpeg',
        'image/gif',
        'application/pdf',
        'text/plain',
        // 'text/xml',
      ]
    );
    return container.includes(contentType);
  }
  /**
   *
   * resource kind to icon name
   * @param kind
   */
  public static kind2IconName(
    kind: SCENE_RESOURCE_KINDMap[keyof SCENE_RESOURCE_KINDMap]
  ): string {
    switch (kind) {
      case SCENE_RESOURCE_KIND.SCENE_RESOURCE_KIND_IMAGE:
        return 'wallpaper';
      case SCENE_RESOURCE_KIND.SCENE_RESOURCE_KIND_VIDEO:
        return 'video_library';
      case SCENE_RESOURCE_KIND.SCENE_RESOURCE_KIND_PDF:
        return 'picture_as_pdf';
    }
    return '';
  }

  public static contentType2Kind(
    contentType: string
  ): SCENE_RESOURCE_KINDMap[keyof SCENE_RESOURCE_KINDMap] {
    if (contentType == 'video/mp4') {
      return SCENE_RESOURCE_KIND.SCENE_RESOURCE_KIND_VIDEO;
    } else if (contentType == 'application/pdf') {
      return SCENE_RESOURCE_KIND.SCENE_RESOURCE_KIND_PDF;
    } else if (contentType == 'text/plain' || contentType == 'text/xml') {
      return SCENE_RESOURCE_KIND.SCENE_RESOURCE_KIND_SUBTITLE;
    } else if (/image\/*/.test(contentType)) {
      return SCENE_RESOURCE_KIND.SCENE_RESOURCE_KIND_IMAGE;
    }

    return SCENE_RESOURCE_KIND.SCENE_RESOURCE_KIND_DEFAULT;
  }

  public static isKindHaveDefinedPreview(
    kind: SCENE_RESOURCE_KINDMap[keyof SCENE_RESOURCE_KINDMap]
  ): boolean {
    switch (kind) {
      case SCENE_RESOURCE_KIND.SCENE_RESOURCE_KIND_PDF:
      case SCENE_RESOURCE_KIND.SCENE_RESOURCE_KIND_SUBTITLE:
        return true;
    }

    return false;
  }

  public static kind2DefiendPreviewLocation(
    kind: SCENE_RESOURCE_KINDMap[keyof SCENE_RESOURCE_KINDMap]
  ): string {
    switch (kind) {
      case SCENE_RESOURCE_KIND.SCENE_RESOURCE_KIND_PDF:
        return 'assets/pdf-preview.svg';
      case SCENE_RESOURCE_KIND.SCENE_RESOURCE_KIND_SUBTITLE:
        return 'assets/subtitle-preview.svg';
    }
    return '';
  }

  public static b64toFile(dataURI: string): File {
    // convert the data URL to a byte string
    const byteString = atob(dataURI.split(',')[1]);

    // pull out the mime type from the data URL
    const mimeString = dataURI.split(',')[0].split(':')[1].split(';')[0];

    // Convert to byte array
    const ab = new ArrayBuffer(byteString.length);
    const ia = new Uint8Array(ab);
    for (let i = 0; i < byteString.length; i++) {
      ia[i] = byteString.charCodeAt(i);
    }

    // Create a blob that looks like a file.
    const blob = new Blob([ab], { type: mimeString });
    blob['lastModifiedDate'] = new Date().toISOString();
    blob['name'] = 'file';

    // Figure out what extension the file should have
    switch (blob.type) {
      case 'image/jpeg':
        blob['name'] += '.jpg';
        break;
      case 'image/png':
        blob['name'] += '.png';
        break;
    }
    // cast to a File
    return <File>blob;
  }
}
