import { ComponentRef } from '@angular/core';
import { Guid } from 'guid-typescript';
import { ResourceElement } from 'src/app/models/resource-element';
import { SceneBaseElement } from 'src/app/models/scene-base-element';
import {
  ScenePart,
  ScenePartCommon,
  SCENE_COMPONENTS_KIND,
  SCENE_COMPONENTS_KINDMap,
} from 'src/app/protocols/common_pb';
import { ScenesCreateService } from 'src/app/pages/scenes/scenes-create.service';
import { Observable, BehaviorSubject } from 'rxjs';
import { ScenePartVideoElement } from 'src/app/models/scene-part-video-element';
import { ScenePartTextElement } from 'src/app/models/scene-part-text-element';
import { ScenePartButtonElement } from 'src/app/models/scene-part-button-element';
import { ScenePartCoordinateElement } from 'src/app/models/scene-part-coordinate-element';
import { ScenePartWeatherElement } from 'src/app/models/scene-part-weather-element';
import { ScenePartClockElement } from 'src/app/models/scene-part-clock-element';
import { ScenePartSubtitleElement } from 'src/app/models/scene-part-subtitle-element';
import { ScenePartImageElement } from 'src/app/models/scene-part-image-element';
import { ScenePartDocumentElement } from 'src/app/models/scene-part-document-element';
import { ScenePartWebElement } from 'src/app/models/scene-part-web-element';
import { ComponentsSceneCommonV2Component } from './components-scene-common/components-scene-common-v2.component';
import { ScenePartSlideImageElement } from 'src/app/models/scene-part-slide-image-element';
import { DispatchSceneElement } from 'src/app/models/dispatch-scene-element';
import { IPosition } from 'src/app/common/position';
import { ISize } from 'src/app/common/size';

/**
 * 기본 추상 Scene Element
 * AbstractSceneCommon
 */
export abstract class AbstractSceneCommon {
  protected m_ChangedSize$: BehaviorSubject<ISize> = new BehaviorSubject<ISize>(
    null
  );

  protected _changedPosition$: BehaviorSubject<IPosition> = new BehaviorSubject<IPosition>(
    null
  );

  protected _changedIndex$: BehaviorSubject<number> = new BehaviorSubject<number>(
    0
  );

  public reference: ComponentRef<ComponentsSceneCommonV2Component>;

  // for database
  /**
   * @deprecated
   */
  protected m_DatabaseId: number;

  private m_Id: Guid;
  private m_Size: ISize;
  private m_Position: IPosition;
  private m_Kind: SCENE_COMPONENTS_KINDMap[keyof SCENE_COMPONENTS_KINDMap];

  public buttonElement: ScenePartButtonElement;
  public videoElement: ScenePartVideoElement;
  public imageElement: ScenePartImageElement;
  public documentElement: ScenePartDocumentElement;
  public subtitleElement: ScenePartSubtitleElement;
  public coordinateElement: ScenePartCoordinateElement;
  public weatherElement: ScenePartWeatherElement;
  public clockElement: ScenePartClockElement;
  public webElement: ScenePartWebElement;
  public slideImageElement: ScenePartSlideImageElement;
  public textElement: ScenePartTextElement;

  public dispatchSceneElement: DispatchSceneElement;

  public zIndex: number = 0;

  public name: string;

  public backgroundColor: string;

  public changedSize$: Observable<ISize>;
  public changedPosition$: Observable<IPosition>;

  public isGenerated: boolean = false;

  public isMoveable: boolean = true;

  public get id(): Guid {
    return this.m_Id;
  }

  public set id(value: Guid) {
    this.m_Id = value;
  }

  // getter setter position
  public get position(): IPosition {
    return this.m_Position;
  }

  public set position(value: IPosition) {
    this.m_Position = value;

    this._changedPosition$.next(value);
  }

  // getter setter size
  public get size(): ISize {
    return this.m_Size;
  }
  public set size(value: ISize) {
    this.m_Size.width = value.width;
    this.m_Size.height = value.height;

    this.m_ChangedSize$.next(value);
  }

  // getter setter kind
  public get kind(): SCENE_COMPONENTS_KINDMap[keyof SCENE_COMPONENTS_KINDMap] {
    return this.m_Kind;
  }
  public set kind(
    value: SCENE_COMPONENTS_KINDMap[keyof SCENE_COMPONENTS_KINDMap]
  ) {
    this.m_Kind = value;
  }

  constructor(
    protected service: ScenesCreateService,
    kind: SCENE_COMPONENTS_KINDMap[keyof SCENE_COMPONENTS_KINDMap]
  ) {
    this.m_Id = Guid.create();

    this.changedSize$ = this.m_ChangedSize$.asObservable();
    this.changedPosition$ = this._changedPosition$.asObservable();

    this.position = { x: 50, y: 50 };

    this.m_Size = { width: 480, height: 240 };
    this.m_Kind = kind;
  }

  public makeElement(
    kind: SCENE_COMPONENTS_KINDMap[keyof SCENE_COMPONENTS_KINDMap],
    isGenerated: boolean = false
  ) {
    this.isGenerated = isGenerated;
    if (this.isGenerated) {
      this.isMoveable = false;
    }

    switch (kind) {
      case SCENE_COMPONENTS_KIND.SCENE_COMPONENTS_KIND_BUTTON:
        if (undefined == this.buttonElement) {
          this.buttonElement = new ScenePartButtonElement();
        }
        this.videoElement = undefined;
        this.imageElement = undefined;
        this.documentElement = undefined;
        this.subtitleElement = undefined;
        this.coordinateElement = undefined;
        this.weatherElement = undefined;
        this.clockElement = undefined;
        this.webElement = undefined;
        this.slideImageElement = undefined;
        break;

      case SCENE_COMPONENTS_KIND.SCENE_COMPONENTS_KIND_VIDEO:
        this.buttonElement = undefined;
        if (undefined == this.videoElement) {
          this.videoElement = new ScenePartVideoElement();
        }
        this.imageElement = undefined;
        this.documentElement = undefined;
        this.subtitleElement = undefined;
        this.coordinateElement = undefined;
        this.weatherElement = undefined;
        this.clockElement = undefined;
        this.webElement = undefined;
        this.slideImageElement = undefined;
        break;

      case SCENE_COMPONENTS_KIND.SCENE_COMPONENTS_KIND_IMAGE:
        this.buttonElement = undefined;
        this.videoElement = undefined;
        if (undefined == this.imageElement) {
          this.imageElement = new ScenePartImageElement();
        }
        this.documentElement = undefined;
        this.subtitleElement = undefined;
        this.coordinateElement = undefined;
        this.weatherElement = undefined;
        this.clockElement = undefined;
        this.webElement = undefined;
        this.slideImageElement = undefined;
        break;
      case SCENE_COMPONENTS_KIND.SCENE_COMPONENTS_KIND_PDF:
        this.buttonElement = undefined;
        this.videoElement = undefined;
        if (undefined == this.documentElement) {
          this.documentElement = new ScenePartDocumentElement();
        }
        this.subtitleElement = undefined;
        this.coordinateElement = undefined;
        this.weatherElement = undefined;
        this.clockElement = undefined;
        this.webElement = undefined;
        this.slideImageElement = undefined;
        break;
      case SCENE_COMPONENTS_KIND.SCENE_COMPONENTS_KIND_SUBTITLE:
        this.buttonElement = undefined;
        this.imageElement = undefined;
        this.videoElement = undefined;
        this.documentElement = undefined;
        if (undefined == this.subtitleElement) {
          this.subtitleElement = new ScenePartSubtitleElement();
        }
        this.coordinateElement = undefined;
        this.weatherElement = undefined;
        this.clockElement = undefined;
        this.webElement = undefined;
        this.slideImageElement = undefined;
        break;
      case SCENE_COMPONENTS_KIND.SCENE_COMPONENTS_KIND_MAP:
        this.buttonElement = undefined;
        this.imageElement = undefined;
        this.videoElement = undefined;
        this.documentElement = undefined;
        this.subtitleElement = undefined;
        if (undefined == this.coordinateElement) {
          this.coordinateElement = new ScenePartCoordinateElement(this.id);
        }
        this.weatherElement = undefined;
        this.clockElement = undefined;
        this.webElement = undefined;
        this.slideImageElement = undefined;
        break;
      case SCENE_COMPONENTS_KIND.SCENE_COMPONENTS_KIND_WEATHER:
        this.buttonElement = undefined;
        this.imageElement = undefined;
        this.videoElement = undefined;
        this.documentElement = undefined;
        this.subtitleElement = undefined;
        this.coordinateElement = undefined;
        if (undefined == this.weatherElement) {
          this.weatherElement = new ScenePartWeatherElement();
        }
        this.clockElement = undefined;
        this.webElement = undefined;
        this.slideImageElement = undefined;
        break;
      case SCENE_COMPONENTS_KIND.SCENE_COMPONENTS_KIND_CLOCK:
        this.buttonElement = undefined;
        this.imageElement = undefined;
        this.videoElement = undefined;
        this.documentElement = undefined;
        this.subtitleElement = undefined;
        this.coordinateElement = undefined;
        this.weatherElement = undefined;
        if (undefined == this.clockElement) {
          this.clockElement = new ScenePartClockElement();
        }
        this.webElement = undefined;
        this.slideImageElement = undefined;
        break;
      case SCENE_COMPONENTS_KIND.SCENE_COMPONENTS_KIND_WEB:
        this.buttonElement = undefined;
        this.imageElement = undefined;
        this.videoElement = undefined;
        this.documentElement = undefined;
        this.subtitleElement = undefined;
        this.coordinateElement = undefined;
        this.weatherElement = undefined;
        this.clockElement = undefined;
        if (undefined == this.clockElement) {
          this.webElement = new ScenePartWebElement();
        }

        this.slideImageElement = undefined;
        break;
      case SCENE_COMPONENTS_KIND.SCENE_COMPONENTS_KIND_SLIDE_IMAGE:
        this.buttonElement = undefined;
        this.imageElement = undefined;
        this.videoElement = undefined;
        this.documentElement = undefined;
        this.subtitleElement = undefined;
        this.coordinateElement = undefined;
        this.weatherElement = undefined;
        this.clockElement = undefined;
        this.webElement = undefined;
        if (undefined == this.slideImageElement) {
          this.slideImageElement = new ScenePartSlideImageElement();
        }

        break;
    }

    this.m_Kind = kind;
  }

  public isCanvas(): boolean {
    return this.kind === SCENE_COMPONENTS_KIND.SCENE_COMPONENTS_KIND_SCENE;
  }

  public isComponents(): boolean {
    switch (this.kind) {
      case SCENE_COMPONENTS_KIND.SCENE_COMPONENTS_KIND_BUTTON:
      case SCENE_COMPONENTS_KIND.SCENE_COMPONENTS_KIND_VIDEO:
      case SCENE_COMPONENTS_KIND.SCENE_COMPONENTS_KIND_IMAGE:
      case SCENE_COMPONENTS_KIND.SCENE_COMPONENTS_KIND_SUBTITLE:
      case SCENE_COMPONENTS_KIND.SCENE_COMPONENTS_KIND_PDF:
      case SCENE_COMPONENTS_KIND.SCENE_COMPONENTS_KIND_MAP:
      case SCENE_COMPONENTS_KIND.SCENE_COMPONENTS_KIND_WEATHER:
      case SCENE_COMPONENTS_KIND.SCENE_COMPONENTS_KIND_CLOCK:
      case SCENE_COMPONENTS_KIND.SCENE_COMPONENTS_KIND_WEB:
      case SCENE_COMPONENTS_KIND.SCENE_COMPONENTS_KIND_SLIDE_IMAGE:
        return true;
      default:
        return false;
    }
  }

  public static getComponentsName(
    kind: SCENE_COMPONENTS_KINDMap[keyof SCENE_COMPONENTS_KINDMap]
  ): string {
    switch (kind) {
      case SCENE_COMPONENTS_KIND.SCENE_COMPONENTS_KIND_SCENE:
        return '씬';
      case SCENE_COMPONENTS_KIND.SCENE_COMPONENTS_KIND_BUTTON:
        return '버튼';
      case SCENE_COMPONENTS_KIND.SCENE_COMPONENTS_KIND_IMAGE:
        return '이미지 (지도 포함)';
      case SCENE_COMPONENTS_KIND.SCENE_COMPONENTS_KIND_VIDEO:
        return '비디오';
      case SCENE_COMPONENTS_KIND.SCENE_COMPONENTS_KIND_PDF:
        return 'PDF';
      case SCENE_COMPONENTS_KIND.SCENE_COMPONENTS_KIND_MAP:
        return '경로 버튼';
      case SCENE_COMPONENTS_KIND.SCENE_COMPONENTS_KIND_SUBTITLE:
        return '텍스트';
      case SCENE_COMPONENTS_KIND.SCENE_COMPONENTS_KIND_WEATHER:
        return '날씨';
      case SCENE_COMPONENTS_KIND.SCENE_COMPONENTS_KIND_CLOCK:
        return '시계';
      case SCENE_COMPONENTS_KIND.SCENE_COMPONENTS_KIND_WEB:
        return '웹 페이지';
      case SCENE_COMPONENTS_KIND.SCENE_COMPONENTS_KIND_SLIDE_IMAGE:
        return '이미지 슬라이드';
    }

    return '';
  }

  public getIconName(): string {
    return AbstractSceneCommon.getIconName(this.kind);
  }

  public static getIconName(
    kind: SCENE_COMPONENTS_KINDMap[keyof SCENE_COMPONENTS_KINDMap]
  ): string {
    switch (kind) {
      case SCENE_COMPONENTS_KIND.SCENE_COMPONENTS_KIND_SCENE:
        return 'layers';
      case SCENE_COMPONENTS_KIND.SCENE_COMPONENTS_KIND_BUTTON:
        return 'web';
      case SCENE_COMPONENTS_KIND.SCENE_COMPONENTS_KIND_IMAGE:
        return 'wallpaper';
      case SCENE_COMPONENTS_KIND.SCENE_COMPONENTS_KIND_VIDEO:
        return 'video_library';
      case SCENE_COMPONENTS_KIND.SCENE_COMPONENTS_KIND_PDF:
        return 'picture_as_pdf';
      case SCENE_COMPONENTS_KIND.SCENE_COMPONENTS_KIND_MAP:
        return 'explore';
      case SCENE_COMPONENTS_KIND.SCENE_COMPONENTS_KIND_SUBTITLE:
        return 'subtitles';
      case SCENE_COMPONENTS_KIND.SCENE_COMPONENTS_KIND_WEATHER:
        return 'wb_sunny';
      case SCENE_COMPONENTS_KIND.SCENE_COMPONENTS_KIND_CLOCK:
        return 'schedule';
      case SCENE_COMPONENTS_KIND.SCENE_COMPONENTS_KIND_WEB:
        return 'language';
      case SCENE_COMPONENTS_KIND.SCENE_COMPONENTS_KIND_SLIDE_IMAGE:
        return 'view_carousel';
    }

    return '';
  }

  toCommonMessage(): ScenePartCommon {
    const common = new ScenePartCommon();
    common.setId(this.m_Id.toString());

    common.setKind(this.m_Kind);

    const position = new ScenePartCommon.Position();
    position.setX(Math.round(this.position.x));
    position.setY(Math.round(this.position.y));
    common.setPosition(position);

    const size = new ScenePartCommon.Size();
    size.setWidth(Math.round(this.size.width));
    size.setHeight(Math.round(this.size.height));
    common.setSize(size);

    common.setBackground(this.backgroundColor);
    common.setZindex(this.zIndex);

    common.setName(this.name);

    return common;
  }

  toMessage(): ScenePart {
    const message = new ScenePart();
    message.setCommon(this.toCommonMessage());

    switch (this.kind) {
      case SCENE_COMPONENTS_KIND.SCENE_COMPONENTS_KIND_BUTTON:
        message.setButton(this.buttonElement.toMessage());
        break;
      case SCENE_COMPONENTS_KIND.SCENE_COMPONENTS_KIND_VIDEO:
        message.setVideo(this.videoElement.toMessage());
        break;
      case SCENE_COMPONENTS_KIND.SCENE_COMPONENTS_KIND_IMAGE:
        message.setImage(this.imageElement.toMessage());
        break;
      case SCENE_COMPONENTS_KIND.SCENE_COMPONENTS_KIND_PDF:
        message.setDocument(this.documentElement.toMessage());
        break;
      case SCENE_COMPONENTS_KIND.SCENE_COMPONENTS_KIND_SUBTITLE:
        message.setSubtitle(this.subtitleElement.toMessage());
        break;
      case SCENE_COMPONENTS_KIND.SCENE_COMPONENTS_KIND_MAP:
        message.setCoordinate(this.coordinateElement.toMessage());
        break;
      case SCENE_COMPONENTS_KIND.SCENE_COMPONENTS_KIND_WEATHER:
        message.setWeather(this.weatherElement.toMessage());
        break;
      case SCENE_COMPONENTS_KIND.SCENE_COMPONENTS_KIND_WEB:
        message.setWeb(this.webElement.toMessage());
        break;
      case SCENE_COMPONENTS_KIND.SCENE_COMPONENTS_KIND_CLOCK:
        message.setClock(this.clockElement.toMessage());
        break;
      case SCENE_COMPONENTS_KIND.SCENE_COMPONENTS_KIND_SLIDE_IMAGE:
        message.setSlideimage(this.slideImageElement.toMessage());
        break;

      default:
        break;
    }

    return message;
  }

  fromMessage(message: ScenePartCommon) {
    this.id = Guid.parse(message.getId());
    this.kind = message.getKind();

    const position = message.getPosition();
    this.changePosition(position.getX(), position.getY());

    const size = message.getSize();
    this.changeSize(size.getWidth(), size.getHeight());

    this.backgroundColor = message.getBackground();
    this.zIndex = message.getZindex();

    this.name = message.getName();
  }

  public isSelected(): boolean {
    const selectedId = this.service?.selectedId;
    return undefined != selectedId && this.id.equals(selectedId);
  }

  public changeSize(width: number, height: number) {
    this.m_Size.width = width;
    this.m_Size.height = height;
  }

  public changePosition(x: number, y: number) {
    this.m_Position.x = x;
    this.m_Position.y = y;
  }

  public changeZIndex(zIndex: number) {
    this.zIndex = zIndex;
    this._changedIndex$.next(zIndex);
  }

  public calculatedWidth(): number {
    return this.size.width;
  }

  public calculatedHeight(): number {
    return this.size.height;
  }
}
