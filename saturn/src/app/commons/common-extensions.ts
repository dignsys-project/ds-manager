import {
  CommonStatus,
  COMMON_STATUS_KIND,
  MEMBER_KIND,
  ScenePart,
  SCENE_COMPONENTS_KINDMap,
  SCENE_COMPONENTS_KIND,
} from '../protocols/common_pb';
import { isNullOrUndefined } from 'util';

export class CommonExtensions {
  protected static ab2str(array: Uint8Array): string {
    return String.fromCharCode.apply(null, array);
  }

  protected static str2ab(raw: string): Uint8Array {
    const bufView = new Uint8Array(raw.length);
    for (let i = 0, strLen = raw.length; i < strLen; i++) {
      bufView[i] = raw.charCodeAt(i);
    }

    return bufView;
  }

  public static serialize(array: Uint8Array): string {
    return btoa(CommonExtensions.ab2str(array));
  }

  public static deserialize(encoded: string): Uint8Array {
    return CommonExtensions.str2ab(atob(encoded));
  }

  public static isNoContent(common: CommonStatus): boolean {
    return (
      undefined != common &&
      common.getStatus() === COMMON_STATUS_KIND.COMMON_STATUS_KIND_NO_CONTENT
    );
  }

  public static isRouteButton(scenePart: ScenePart): boolean {
    return (
      scenePart?.getCommon()?.getKind() ==
      SCENE_COMPONENTS_KIND.SCENE_COMPONENTS_KIND_MAP
    );
  }

  public static isSuccess(common: CommonStatus): boolean {
    return (
      undefined != common &&
      common.getStatus() === COMMON_STATUS_KIND.COMMON_STATUS_KIND_SUCCESS
    );
  }

  public static isPermission(common: CommonStatus): boolean {
    return (
      !isNullOrUndefined(common) &&
      common.getStatus() ===
        COMMON_STATUS_KIND.COMMON_STATUS_KIND_FAILED_PERMISSION
    );
  }

  public static isDatabaseRestrict(common: CommonStatus): boolean {
    return (
      !isNullOrUndefined(common) &&
      common.getStatus() === COMMON_STATUS_KIND.COMMON_STATUS_KIND_DB_RESTRICT
    );
  }

  public static isOverWrite(common: CommonStatus): boolean {
    return (
      undefined != common &&
      common?.getStatus() ==
        COMMON_STATUS_KIND.COMMON_STATUS_KIND_FAILED_OVERWRITE
    );
  }

  public static isRefresh(common: CommonStatus): boolean {
    return (
      !isNullOrUndefined(common) &&
      common.getStatus() ===
        COMMON_STATUS_KIND.COMMON_STATUS_KIND_FAILED_REFRESH
    );
  }

  public static isNotSupported(common: CommonStatus): boolean {
    return (
      !isNullOrUndefined(common) &&
      common.getStatus() === COMMON_STATUS_KIND.COMMON_STATUS_KIND_UNSUPPORTED
    );
  }

  public static isDuplicated(common: CommonStatus): boolean {
    return (
      !isNullOrUndefined(common) &&
      common.getStatus() ===
        COMMON_STATUS_KIND.COMMON_STATUS_KIND_FAILED_DUPLICATED
    );
  }

  public static isUnAuthorized(common: CommonStatus): boolean {
    return (
      !isNullOrUndefined(common) &&
      common.getStatus() === COMMON_STATUS_KIND.COMMON_STATUS_KIND_UNAUTHORIZED
    );
  }

  public static MakeRandomToken(maxLength: number): string {
    return '_' + Math.random().toString(36).substr(2, maxLength);
  }

  public static utcSecondsToDate(utcSeconds: number): Date {
    const date = new Date(0);
    date.setSeconds(utcSeconds);
    return date;
  }

  public static isNullOrUndefined(value: any): boolean {
    return value == undefined || value == null;
  }

  public static getScenePartKind(
    part: ScenePart
  ): SCENE_COMPONENTS_KINDMap[keyof SCENE_COMPONENTS_KINDMap] {
    if (part.hasButton()) {
      return SCENE_COMPONENTS_KIND.SCENE_COMPONENTS_KIND_BUTTON;
    } else if (part.hasImage()) {
      return SCENE_COMPONENTS_KIND.SCENE_COMPONENTS_KIND_IMAGE;
    } else if (part.hasVideo()) {
      return SCENE_COMPONENTS_KIND.SCENE_COMPONENTS_KIND_VIDEO;
    } else if (part.hasSubtitle()) {
      return SCENE_COMPONENTS_KIND.SCENE_COMPONENTS_KIND_SUBTITLE;
    } else if (part.hasDocument()) {
      return SCENE_COMPONENTS_KIND.SCENE_COMPONENTS_KIND_PDF;
    } else if (part.hasCoordinate()) {
      return SCENE_COMPONENTS_KIND.SCENE_COMPONENTS_KIND_MAP;
    } else if (part.hasWeather()) {
      return SCENE_COMPONENTS_KIND.SCENE_COMPONENTS_KIND_WEATHER;
    } else if (part.hasWeb()) {
      return SCENE_COMPONENTS_KIND.SCENE_COMPONENTS_KIND_WEB;
    } else if (part.hasClock()) {
      return SCENE_COMPONENTS_KIND.SCENE_COMPONENTS_KIND_CLOCK;
    } else if (part.hasSlideimage()) {
      return SCENE_COMPONENTS_KIND.SCENE_COMPONENTS_KIND_SLIDE_IMAGE;
    }

    return SCENE_COMPONENTS_KIND.SCENE_COMPONENTS_KIND_DEFAULT;
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
