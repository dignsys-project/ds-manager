// package: protocols.common
// file: common.proto

import * as jspb from "google-protobuf";

export class ScenePartCommon extends jspb.Message {
  getId(): string;
  setId(value: string): void;

  getKind(): SCENE_COMPONENTS_KINDMap[keyof SCENE_COMPONENTS_KINDMap];
  setKind(value: SCENE_COMPONENTS_KINDMap[keyof SCENE_COMPONENTS_KINDMap]): void;

  hasPosition(): boolean;
  clearPosition(): void;
  getPosition(): ScenePartCommon.Position | undefined;
  setPosition(value?: ScenePartCommon.Position): void;

  hasSize(): boolean;
  clearSize(): void;
  getSize(): ScenePartCommon.Size | undefined;
  setSize(value?: ScenePartCommon.Size): void;

  getBackground(): string;
  setBackground(value: string): void;

  getZindex(): number;
  setZindex(value: number): void;

  getName(): string;
  setName(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ScenePartCommon.AsObject;
  static toObject(includeInstance: boolean, msg: ScenePartCommon): ScenePartCommon.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ScenePartCommon, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ScenePartCommon;
  static deserializeBinaryFromReader(message: ScenePartCommon, reader: jspb.BinaryReader): ScenePartCommon;
}

export namespace ScenePartCommon {
  export type AsObject = {
    id: string,
    kind: SCENE_COMPONENTS_KINDMap[keyof SCENE_COMPONENTS_KINDMap],
    position?: ScenePartCommon.Position.AsObject,
    size?: ScenePartCommon.Size.AsObject,
    background: string,
    zindex: number,
    name: string,
  }

  export class Position extends jspb.Message {
    getX(): number;
    setX(value: number): void;

    getY(): number;
    setY(value: number): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Position.AsObject;
    static toObject(includeInstance: boolean, msg: Position): Position.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Position, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Position;
    static deserializeBinaryFromReader(message: Position, reader: jspb.BinaryReader): Position;
  }

  export namespace Position {
    export type AsObject = {
      x: number,
      y: number,
    }
  }

  export class Size extends jspb.Message {
    getWidth(): number;
    setWidth(value: number): void;

    getHeight(): number;
    setHeight(value: number): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Size.AsObject;
    static toObject(includeInstance: boolean, msg: Size): Size.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Size, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Size;
    static deserializeBinaryFromReader(message: Size, reader: jspb.BinaryReader): Size;
  }

  export namespace Size {
    export type AsObject = {
      width: number,
      height: number,
    }
  }
}

export class ScenePart extends jspb.Message {
  hasCommon(): boolean;
  clearCommon(): void;
  getCommon(): ScenePartCommon | undefined;
  setCommon(value?: ScenePartCommon): void;

  hasButton(): boolean;
  clearButton(): void;
  getButton(): ScenePartButton | undefined;
  setButton(value?: ScenePartButton): void;

  hasImage(): boolean;
  clearImage(): void;
  getImage(): ScenePartImage | undefined;
  setImage(value?: ScenePartImage): void;

  hasVideo(): boolean;
  clearVideo(): void;
  getVideo(): ScenePartVideo | undefined;
  setVideo(value?: ScenePartVideo): void;

  hasDocument(): boolean;
  clearDocument(): void;
  getDocument(): ScenePartDocument | undefined;
  setDocument(value?: ScenePartDocument): void;

  hasSubtitle(): boolean;
  clearSubtitle(): void;
  getSubtitle(): ScenePartSubtitle | undefined;
  setSubtitle(value?: ScenePartSubtitle): void;

  hasCoordinate(): boolean;
  clearCoordinate(): void;
  getCoordinate(): ScenePartCoordinate | undefined;
  setCoordinate(value?: ScenePartCoordinate): void;

  hasWeather(): boolean;
  clearWeather(): void;
  getWeather(): ScenePartWeather | undefined;
  setWeather(value?: ScenePartWeather): void;

  hasWeb(): boolean;
  clearWeb(): void;
  getWeb(): ScenePartWeb | undefined;
  setWeb(value?: ScenePartWeb): void;

  hasClock(): boolean;
  clearClock(): void;
  getClock(): ScenePartClock | undefined;
  setClock(value?: ScenePartClock): void;

  hasSlideimage(): boolean;
  clearSlideimage(): void;
  getSlideimage(): ScenePartSlideImage | undefined;
  setSlideimage(value?: ScenePartSlideImage): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ScenePart.AsObject;
  static toObject(includeInstance: boolean, msg: ScenePart): ScenePart.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ScenePart, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ScenePart;
  static deserializeBinaryFromReader(message: ScenePart, reader: jspb.BinaryReader): ScenePart;
}

export namespace ScenePart {
  export type AsObject = {
    common?: ScenePartCommon.AsObject,
    button?: ScenePartButton.AsObject,
    image?: ScenePartImage.AsObject,
    video?: ScenePartVideo.AsObject,
    document?: ScenePartDocument.AsObject,
    subtitle?: ScenePartSubtitle.AsObject,
    coordinate?: ScenePartCoordinate.AsObject,
    weather?: ScenePartWeather.AsObject,
    web?: ScenePartWeb.AsObject,
    clock?: ScenePartClock.AsObject,
    slideimage?: ScenePartSlideImage.AsObject,
  }
}

export class ScenePartText extends jspb.Message {
  getText(): string;
  setText(value: string): void;

  getTextcolor(): string;
  setTextcolor(value: string): void;

  getTextsize(): number;
  setTextsize(value: number): void;

  getBold(): boolean;
  setBold(value: boolean): void;

  getItalic(): boolean;
  setItalic(value: boolean): void;

  getVerticalkind(): TEXT_ALIGN_KINDMap[keyof TEXT_ALIGN_KINDMap];
  setVerticalkind(value: TEXT_ALIGN_KINDMap[keyof TEXT_ALIGN_KINDMap]): void;

  getHorizontalkind(): TEXT_ALIGN_KINDMap[keyof TEXT_ALIGN_KINDMap];
  setHorizontalkind(value: TEXT_ALIGN_KINDMap[keyof TEXT_ALIGN_KINDMap]): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ScenePartText.AsObject;
  static toObject(includeInstance: boolean, msg: ScenePartText): ScenePartText.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ScenePartText, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ScenePartText;
  static deserializeBinaryFromReader(message: ScenePartText, reader: jspb.BinaryReader): ScenePartText;
}

export namespace ScenePartText {
  export type AsObject = {
    text: string,
    textcolor: string,
    textsize: number,
    bold: boolean,
    italic: boolean,
    verticalkind: TEXT_ALIGN_KINDMap[keyof TEXT_ALIGN_KINDMap],
    horizontalkind: TEXT_ALIGN_KINDMap[keyof TEXT_ALIGN_KINDMap],
  }
}

export class ScenePartImage extends jspb.Message {
  hasResource(): boolean;
  clearResource(): void;
  getResource(): Resource | undefined;
  setResource(value?: Resource): void;

  hasText(): boolean;
  clearText(): void;
  getText(): ScenePartText | undefined;
  setText(value?: ScenePartText): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ScenePartImage.AsObject;
  static toObject(includeInstance: boolean, msg: ScenePartImage): ScenePartImage.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ScenePartImage, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ScenePartImage;
  static deserializeBinaryFromReader(message: ScenePartImage, reader: jspb.BinaryReader): ScenePartImage;
}

export namespace ScenePartImage {
  export type AsObject = {
    resource?: Resource.AsObject,
    text?: ScenePartText.AsObject,
  }
}

export class ScenePartButton extends jspb.Message {
  hasText(): boolean;
  clearText(): void;
  getText(): ScenePartText | undefined;
  setText(value?: ScenePartText): void;

  hasResource(): boolean;
  clearResource(): void;
  getResource(): Resource | undefined;
  setResource(value?: Resource): void;

  getSceneid(): number;
  setSceneid(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ScenePartButton.AsObject;
  static toObject(includeInstance: boolean, msg: ScenePartButton): ScenePartButton.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ScenePartButton, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ScenePartButton;
  static deserializeBinaryFromReader(message: ScenePartButton, reader: jspb.BinaryReader): ScenePartButton;
}

export namespace ScenePartButton {
  export type AsObject = {
    text?: ScenePartText.AsObject,
    resource?: Resource.AsObject,
    sceneid: number,
  }
}

export class ScenePartVideo extends jspb.Message {
  hasResource(): boolean;
  clearResource(): void;
  getResource(): Resource | undefined;
  setResource(value?: Resource): void;

  getRepeated(): boolean;
  setRepeated(value: boolean): void;

  getPlayed(): boolean;
  setPlayed(value: boolean): void;

  getSceneid(): number;
  setSceneid(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ScenePartVideo.AsObject;
  static toObject(includeInstance: boolean, msg: ScenePartVideo): ScenePartVideo.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ScenePartVideo, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ScenePartVideo;
  static deserializeBinaryFromReader(message: ScenePartVideo, reader: jspb.BinaryReader): ScenePartVideo;
}

export namespace ScenePartVideo {
  export type AsObject = {
    resource?: Resource.AsObject,
    repeated: boolean,
    played: boolean,
    sceneid: number,
  }
}

export class ScenePartDocument extends jspb.Message {
  hasResource(): boolean;
  clearResource(): void;
  getResource(): Resource | undefined;
  setResource(value?: Resource): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ScenePartDocument.AsObject;
  static toObject(includeInstance: boolean, msg: ScenePartDocument): ScenePartDocument.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ScenePartDocument, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ScenePartDocument;
  static deserializeBinaryFromReader(message: ScenePartDocument, reader: jspb.BinaryReader): ScenePartDocument;
}

export namespace ScenePartDocument {
  export type AsObject = {
    resource?: Resource.AsObject,
  }
}

export class ScenePartSubtitle extends jspb.Message {
  hasText(): boolean;
  clearText(): void;
  getText(): ScenePartText | undefined;
  setText(value?: ScenePartText): void;

  getSeconds(): number;
  setSeconds(value: number): void;

  hasResource(): boolean;
  clearResource(): void;
  getResource(): Resource | undefined;
  setResource(value?: Resource): void;

  getRepeated(): boolean;
  setRepeated(value: boolean): void;

  getAnimationkind(): ScenePartSubtitle.SUBTITLE_ANIMATION_KINDMap[keyof ScenePartSubtitle.SUBTITLE_ANIMATION_KINDMap];
  setAnimationkind(value: ScenePartSubtitle.SUBTITLE_ANIMATION_KINDMap[keyof ScenePartSubtitle.SUBTITLE_ANIMATION_KINDMap]): void;

  hasRss(): boolean;
  clearRss(): void;
  getRss(): ScenePartSubtitle.Rss | undefined;
  setRss(value?: ScenePartSubtitle.Rss): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ScenePartSubtitle.AsObject;
  static toObject(includeInstance: boolean, msg: ScenePartSubtitle): ScenePartSubtitle.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ScenePartSubtitle, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ScenePartSubtitle;
  static deserializeBinaryFromReader(message: ScenePartSubtitle, reader: jspb.BinaryReader): ScenePartSubtitle;
}

export namespace ScenePartSubtitle {
  export type AsObject = {
    text?: ScenePartText.AsObject,
    seconds: number,
    resource?: Resource.AsObject,
    repeated: boolean,
    animationkind: ScenePartSubtitle.SUBTITLE_ANIMATION_KINDMap[keyof ScenePartSubtitle.SUBTITLE_ANIMATION_KINDMap],
    rss?: ScenePartSubtitle.Rss.AsObject,
  }

  export class Rss extends jspb.Message {
    getAddress(): string;
    setAddress(value: string): void;

    clearContentkindsList(): void;
    getContentkindsList(): Array<ScenePartSubtitle.RSS_CONTENT_KINDMap[keyof ScenePartSubtitle.RSS_CONTENT_KINDMap]>;
    setContentkindsList(value: Array<ScenePartSubtitle.RSS_CONTENT_KINDMap[keyof ScenePartSubtitle.RSS_CONTENT_KINDMap]>): void;
    addContentkinds(value: ScenePartSubtitle.RSS_CONTENT_KINDMap[keyof ScenePartSubtitle.RSS_CONTENT_KINDMap], index?: number): ScenePartSubtitle.RSS_CONTENT_KINDMap[keyof ScenePartSubtitle.RSS_CONTENT_KINDMap];

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Rss.AsObject;
    static toObject(includeInstance: boolean, msg: Rss): Rss.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Rss, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Rss;
    static deserializeBinaryFromReader(message: Rss, reader: jspb.BinaryReader): Rss;
  }

  export namespace Rss {
    export type AsObject = {
      address: string,
      contentkindsList: Array<ScenePartSubtitle.RSS_CONTENT_KINDMap[keyof ScenePartSubtitle.RSS_CONTENT_KINDMap]>,
    }
  }

  export interface SUBTITLE_ANIMATION_KINDMap {
    SUBTITLE_ANIMATION_KIND_DEFAULT: 0;
    SUBTITLE_ANIMATION_KIND_LEFT_TO_RIGHT: 1;
    SUBTITLE_ANIMATION_KIND_RIGHT_TO_LEFT: 2;
    SUBTITLE_ANIMATION_KIND_WRAP: 3;
  }

  export const SUBTITLE_ANIMATION_KIND: SUBTITLE_ANIMATION_KINDMap;

  export interface RSS_CONTENT_KINDMap {
    RSS_CONTENT_KIND_DEFAULT: 0;
    RSS_CONTENT_KIND_TITLE: 1;
    RSS_CONTENT_KIND_DESCRIPTION: 2;
  }

  export const RSS_CONTENT_KIND: RSS_CONTENT_KINDMap;
}

export class ScenePartCoordinate extends jspb.Message {
  hasText(): boolean;
  clearText(): void;
  getText(): ScenePartText | undefined;
  setText(value?: ScenePartText): void;

  hasResource(): boolean;
  clearResource(): void;
  getResource(): Resource | undefined;
  setResource(value?: Resource): void;

  hasCoordinaterresource(): boolean;
  clearCoordinaterresource(): void;
  getCoordinaterresource(): Resource | undefined;
  setCoordinaterresource(value?: Resource): void;

  hasSourceresource(): boolean;
  clearSourceresource(): void;
  getSourceresource(): Resource | undefined;
  setSourceresource(value?: Resource): void;

  hasSourcesize(): boolean;
  clearSourcesize(): void;
  getSourcesize(): ScenePartCommon.Size | undefined;
  setSourcesize(value?: ScenePartCommon.Size): void;

  hasSourceposition(): boolean;
  clearSourceposition(): void;
  getSourceposition(): ScenePartCommon.Position | undefined;
  setSourceposition(value?: ScenePartCommon.Position): void;

  hasDestinationresource(): boolean;
  clearDestinationresource(): void;
  getDestinationresource(): Resource | undefined;
  setDestinationresource(value?: Resource): void;

  hasDestinationsize(): boolean;
  clearDestinationsize(): void;
  getDestinationsize(): ScenePartCommon.Size | undefined;
  setDestinationsize(value?: ScenePartCommon.Size): void;

  hasDestinationposition(): boolean;
  clearDestinationposition(): void;
  getDestinationposition(): ScenePartCommon.Position | undefined;
  setDestinationposition(value?: ScenePartCommon.Position): void;

  getScenepartimageid(): string;
  setScenepartimageid(value: string): void;

  getGroupid(): number;
  setGroupid(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ScenePartCoordinate.AsObject;
  static toObject(includeInstance: boolean, msg: ScenePartCoordinate): ScenePartCoordinate.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ScenePartCoordinate, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ScenePartCoordinate;
  static deserializeBinaryFromReader(message: ScenePartCoordinate, reader: jspb.BinaryReader): ScenePartCoordinate;
}

export namespace ScenePartCoordinate {
  export type AsObject = {
    text?: ScenePartText.AsObject,
    resource?: Resource.AsObject,
    coordinaterresource?: Resource.AsObject,
    sourceresource?: Resource.AsObject,
    sourcesize?: ScenePartCommon.Size.AsObject,
    sourceposition?: ScenePartCommon.Position.AsObject,
    destinationresource?: Resource.AsObject,
    destinationsize?: ScenePartCommon.Size.AsObject,
    destinationposition?: ScenePartCommon.Position.AsObject,
    scenepartimageid: string,
    groupid: number,
  }
}

export class ScenePartWeather extends jspb.Message {
  hasText(): boolean;
  clearText(): void;
  getText(): ScenePartText | undefined;
  setText(value?: ScenePartText): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ScenePartWeather.AsObject;
  static toObject(includeInstance: boolean, msg: ScenePartWeather): ScenePartWeather.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ScenePartWeather, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ScenePartWeather;
  static deserializeBinaryFromReader(message: ScenePartWeather, reader: jspb.BinaryReader): ScenePartWeather;
}

export namespace ScenePartWeather {
  export type AsObject = {
    text?: ScenePartText.AsObject,
  }
}

export class ScenePartClock extends jspb.Message {
  hasText(): boolean;
  clearText(): void;
  getText(): ScenePartText | undefined;
  setText(value?: ScenePartText): void;

  hasResource(): boolean;
  clearResource(): void;
  getResource(): Resource | undefined;
  setResource(value?: Resource): void;

  hasDatetext(): boolean;
  clearDatetext(): void;
  getDatetext(): ScenePartText | undefined;
  setDatetext(value?: ScenePartText): void;

  getDateformat(): string;
  setDateformat(value: string): void;

  getTextformat(): string;
  setTextformat(value: string): void;

  getUsedate(): boolean;
  setUsedate(value: boolean): void;

  getUseweek(): boolean;
  setUseweek(value: boolean): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ScenePartClock.AsObject;
  static toObject(includeInstance: boolean, msg: ScenePartClock): ScenePartClock.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ScenePartClock, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ScenePartClock;
  static deserializeBinaryFromReader(message: ScenePartClock, reader: jspb.BinaryReader): ScenePartClock;
}

export namespace ScenePartClock {
  export type AsObject = {
    text?: ScenePartText.AsObject,
    resource?: Resource.AsObject,
    datetext?: ScenePartText.AsObject,
    dateformat: string,
    textformat: string,
    usedate: boolean,
    useweek: boolean,
  }
}

export class ScenePartWeb extends jspb.Message {
  getUrl(): string;
  setUrl(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ScenePartWeb.AsObject;
  static toObject(includeInstance: boolean, msg: ScenePartWeb): ScenePartWeb.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ScenePartWeb, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ScenePartWeb;
  static deserializeBinaryFromReader(message: ScenePartWeb, reader: jspb.BinaryReader): ScenePartWeb;
}

export namespace ScenePartWeb {
  export type AsObject = {
    url: string,
  }
}

export class ScenePartSlideImage extends jspb.Message {
  clearSlideimagesList(): void;
  getSlideimagesList(): Array<ScenePartSlideImage.SlideImage>;
  setSlideimagesList(value: Array<ScenePartSlideImage.SlideImage>): void;
  addSlideimages(value?: ScenePartSlideImage.SlideImage, index?: number): ScenePartSlideImage.SlideImage;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ScenePartSlideImage.AsObject;
  static toObject(includeInstance: boolean, msg: ScenePartSlideImage): ScenePartSlideImage.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ScenePartSlideImage, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ScenePartSlideImage;
  static deserializeBinaryFromReader(message: ScenePartSlideImage, reader: jspb.BinaryReader): ScenePartSlideImage;
}

export namespace ScenePartSlideImage {
  export type AsObject = {
    slideimagesList: Array<ScenePartSlideImage.SlideImage.AsObject>,
  }

  export class SlideImage extends jspb.Message {
    hasResource(): boolean;
    clearResource(): void;
    getResource(): Resource | undefined;
    setResource(value?: Resource): void;

    getSeconds(): number;
    setSeconds(value: number): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): SlideImage.AsObject;
    static toObject(includeInstance: boolean, msg: SlideImage): SlideImage.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: SlideImage, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): SlideImage;
    static deserializeBinaryFromReader(message: SlideImage, reader: jspb.BinaryReader): SlideImage;
  }

  export namespace SlideImage {
    export type AsObject = {
      resource?: Resource.AsObject,
      seconds: number,
    }
  }
}

export class Resource extends jspb.Message {
  getResourceid(): number;
  setResourceid(value: number): void;

  getKind(): SCENE_RESOURCE_KINDMap[keyof SCENE_RESOURCE_KINDMap];
  setKind(value: SCENE_RESOURCE_KINDMap[keyof SCENE_RESOURCE_KINDMap]): void;

  getLocation(): string;
  setLocation(value: string): void;

  getFoldername(): string;
  setFoldername(value: string): void;

  getName(): string;
  setName(value: string): void;

  getHash(): string;
  setHash(value: string): void;

  getSize(): number;
  setSize(value: number): void;

  hasPreviewresource(): boolean;
  clearPreviewresource(): void;
  getPreviewresource(): PreviewResource | undefined;
  setPreviewresource(value?: PreviewResource): void;

  getDepartmentresourcefolderid(): number;
  setDepartmentresourcefolderid(value: number): void;

  getCreated(): number;
  setCreated(value: number): void;

  getUpdated(): number;
  setUpdated(value: number): void;

  getDuration(): number;
  setDuration(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Resource.AsObject;
  static toObject(includeInstance: boolean, msg: Resource): Resource.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Resource, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Resource;
  static deserializeBinaryFromReader(message: Resource, reader: jspb.BinaryReader): Resource;
}

export namespace Resource {
  export type AsObject = {
    resourceid: number,
    kind: SCENE_RESOURCE_KINDMap[keyof SCENE_RESOURCE_KINDMap],
    location: string,
    foldername: string,
    name: string,
    hash: string,
    size: number,
    previewresource?: PreviewResource.AsObject,
    departmentresourcefolderid: number,
    created: number,
    updated: number,
    duration: number,
  }
}

export class PreviewResource extends jspb.Message {
  getPreviewresourceid(): number;
  setPreviewresourceid(value: number): void;

  getLocation(): string;
  setLocation(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PreviewResource.AsObject;
  static toObject(includeInstance: boolean, msg: PreviewResource): PreviewResource.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: PreviewResource, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PreviewResource;
  static deserializeBinaryFromReader(message: PreviewResource, reader: jspb.BinaryReader): PreviewResource;
}

export namespace PreviewResource {
  export type AsObject = {
    previewresourceid: number,
    location: string,
  }
}

export class SceneBlueprint extends jspb.Message {
  getId(): number;
  setId(value: number): void;

  getName(): string;
  setName(value: string): void;

  hasCanvas(): boolean;
  clearCanvas(): void;
  getCanvas(): ScenePartCommon | undefined;
  setCanvas(value?: ScenePartCommon): void;

  clearPartsList(): void;
  getPartsList(): Array<ScenePart>;
  setPartsList(value: Array<ScenePart>): void;
  addParts(value?: ScenePart, index?: number): ScenePart;

  hasDispatchscene(): boolean;
  clearDispatchscene(): void;
  getDispatchscene(): DispatchScene | undefined;
  setDispatchscene(value?: DispatchScene): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SceneBlueprint.AsObject;
  static toObject(includeInstance: boolean, msg: SceneBlueprint): SceneBlueprint.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: SceneBlueprint, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SceneBlueprint;
  static deserializeBinaryFromReader(message: SceneBlueprint, reader: jspb.BinaryReader): SceneBlueprint;
}

export namespace SceneBlueprint {
  export type AsObject = {
    id: number,
    name: string,
    canvas?: ScenePartCommon.AsObject,
    partsList: Array<ScenePart.AsObject>,
    dispatchscene?: DispatchScene.AsObject,
  }
}

export class DispatchScene extends jspb.Message {
  getIsused(): boolean;
  setIsused(value: boolean): void;

  getIstouched(): boolean;
  setIstouched(value: boolean): void;

  getSeconds(): number;
  setSeconds(value: number): void;

  getSceneid(): number;
  setSceneid(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DispatchScene.AsObject;
  static toObject(includeInstance: boolean, msg: DispatchScene): DispatchScene.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DispatchScene, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DispatchScene;
  static deserializeBinaryFromReader(message: DispatchScene, reader: jspb.BinaryReader): DispatchScene;
}

export namespace DispatchScene {
  export type AsObject = {
    isused: boolean,
    istouched: boolean,
    seconds: number,
    sceneid: number,
  }
}

export class SceneBase extends jspb.Message {
  getSceneid(): number;
  setSceneid(value: number): void;

  getName(): string;
  setName(value: string): void;

  hasResource(): boolean;
  clearResource(): void;
  getResource(): Resource | undefined;
  setResource(value?: Resource): void;

  getCreatedseconds(): number;
  setCreatedseconds(value: number): void;

  getWidth(): number;
  setWidth(value: number): void;

  getHeight(): number;
  setHeight(value: number): void;

  getDepartmentscenefolderid(): number;
  setDepartmentscenefolderid(value: number): void;

  getIsvalified(): boolean;
  setIsvalified(value: boolean): void;

  getUpdatedseconds(): number;
  setUpdatedseconds(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SceneBase.AsObject;
  static toObject(includeInstance: boolean, msg: SceneBase): SceneBase.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: SceneBase, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SceneBase;
  static deserializeBinaryFromReader(message: SceneBase, reader: jspb.BinaryReader): SceneBase;
}

export namespace SceneBase {
  export type AsObject = {
    sceneid: number,
    name: string,
    resource?: Resource.AsObject,
    createdseconds: number,
    width: number,
    height: number,
    departmentscenefolderid: number,
    isvalified: boolean,
    updatedseconds: number,
  }
}

export class Scene extends jspb.Message {
  hasBase(): boolean;
  clearBase(): void;
  getBase(): SceneBase | undefined;
  setBase(value?: SceneBase): void;

  clearSceneresourcebasesList(): void;
  getSceneresourcebasesList(): Array<SceneResourceBase>;
  setSceneresourcebasesList(value: Array<SceneResourceBase>): void;
  addSceneresourcebases(value?: SceneResourceBase, index?: number): SceneResourceBase;

  clearSceneconnectionsList(): void;
  getSceneconnectionsList(): Array<SceneConnection>;
  setSceneconnectionsList(value: Array<SceneConnection>): void;
  addSceneconnections(value?: SceneConnection, index?: number): SceneConnection;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Scene.AsObject;
  static toObject(includeInstance: boolean, msg: Scene): Scene.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Scene, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Scene;
  static deserializeBinaryFromReader(message: Scene, reader: jspb.BinaryReader): Scene;
}

export namespace Scene {
  export type AsObject = {
    base?: SceneBase.AsObject,
    sceneresourcebasesList: Array<SceneResourceBase.AsObject>,
    sceneconnectionsList: Array<SceneConnection.AsObject>,
  }
}

export class SceneConnection extends jspb.Message {
  getSceneconnectionid(): number;
  setSceneconnectionid(value: number): void;

  getSceneid(): number;
  setSceneid(value: number): void;

  hasConnectedscenebase(): boolean;
  clearConnectedscenebase(): void;
  getConnectedscenebase(): SceneBase | undefined;
  setConnectedscenebase(value?: SceneBase): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SceneConnection.AsObject;
  static toObject(includeInstance: boolean, msg: SceneConnection): SceneConnection.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: SceneConnection, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SceneConnection;
  static deserializeBinaryFromReader(message: SceneConnection, reader: jspb.BinaryReader): SceneConnection;
}

export namespace SceneConnection {
  export type AsObject = {
    sceneconnectionid: number,
    sceneid: number,
    connectedscenebase?: SceneBase.AsObject,
  }
}

export class SceneResourceBase extends jspb.Message {
  getSceneresourceid(): number;
  setSceneresourceid(value: number): void;

  getSceneid(): number;
  setSceneid(value: number): void;

  hasResource(): boolean;
  clearResource(): void;
  getResource(): Resource | undefined;
  setResource(value?: Resource): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SceneResourceBase.AsObject;
  static toObject(includeInstance: boolean, msg: SceneResourceBase): SceneResourceBase.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: SceneResourceBase, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SceneResourceBase;
  static deserializeBinaryFromReader(message: SceneResourceBase, reader: jspb.BinaryReader): SceneResourceBase;
}

export namespace SceneResourceBase {
  export type AsObject = {
    sceneresourceid: number,
    sceneid: number,
    resource?: Resource.AsObject,
  }
}

export class SceneResource extends jspb.Message {
  hasBase(): boolean;
  clearBase(): void;
  getBase(): SceneResourceBase | undefined;
  setBase(value?: SceneResourceBase): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SceneResource.AsObject;
  static toObject(includeInstance: boolean, msg: SceneResource): SceneResource.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: SceneResource, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SceneResource;
  static deserializeBinaryFromReader(message: SceneResource, reader: jspb.BinaryReader): SceneResource;
}

export namespace SceneResource {
  export type AsObject = {
    base?: SceneResourceBase.AsObject,
  }
}

export class CommonStatus extends jspb.Message {
  getStatus(): COMMON_STATUS_KINDMap[keyof COMMON_STATUS_KINDMap];
  setStatus(value: COMMON_STATUS_KINDMap[keyof COMMON_STATUS_KINDMap]): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CommonStatus.AsObject;
  static toObject(includeInstance: boolean, msg: CommonStatus): CommonStatus.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CommonStatus, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CommonStatus;
  static deserializeBinaryFromReader(message: CommonStatus, reader: jspb.BinaryReader): CommonStatus;
}

export namespace CommonStatus {
  export type AsObject = {
    status: COMMON_STATUS_KINDMap[keyof COMMON_STATUS_KINDMap],
  }
}

export class MoonVersion extends jspb.Message {
  getServicename(): string;
  setServicename(value: string): void;

  getOsversion(): string;
  setOsversion(value: string): void;

  getRuntimeversion(): string;
  setRuntimeversion(value: string): void;

  hasAssemversion(): boolean;
  clearAssemversion(): void;
  getAssemversion(): MoonVersion.AssemVersion | undefined;
  setAssemversion(value?: MoonVersion.AssemVersion): void;

  getElapsedmilliseconds(): number;
  setElapsedmilliseconds(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MoonVersion.AsObject;
  static toObject(includeInstance: boolean, msg: MoonVersion): MoonVersion.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: MoonVersion, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MoonVersion;
  static deserializeBinaryFromReader(message: MoonVersion, reader: jspb.BinaryReader): MoonVersion;
}

export namespace MoonVersion {
  export type AsObject = {
    servicename: string,
    osversion: string,
    runtimeversion: string,
    assemversion?: MoonVersion.AssemVersion.AsObject,
    elapsedmilliseconds: number,
  }

  export class AssemVersion extends jspb.Message {
    getName(): string;
    setName(value: string): void;

    getVersion(): string;
    setVersion(value: string): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): AssemVersion.AsObject;
    static toObject(includeInstance: boolean, msg: AssemVersion): AssemVersion.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: AssemVersion, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): AssemVersion;
    static deserializeBinaryFromReader(message: AssemVersion, reader: jspb.BinaryReader): AssemVersion;
  }

  export namespace AssemVersion {
    export type AsObject = {
      name: string,
      version: string,
    }
  }
}

export class GetVersionResponse extends jspb.Message {
  hasCommon(): boolean;
  clearCommon(): void;
  getCommon(): CommonStatus | undefined;
  setCommon(value?: CommonStatus): void;

  clearVersionsList(): void;
  getVersionsList(): Array<MoonVersion>;
  setVersionsList(value: Array<MoonVersion>): void;
  addVersions(value?: MoonVersion, index?: number): MoonVersion;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetVersionResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetVersionResponse): GetVersionResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetVersionResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetVersionResponse;
  static deserializeBinaryFromReader(message: GetVersionResponse, reader: jspb.BinaryReader): GetVersionResponse;
}

export namespace GetVersionResponse {
  export type AsObject = {
    common?: CommonStatus.AsObject,
    versionsList: Array<MoonVersion.AsObject>,
  }
}

export class MemberBase extends jspb.Message {
  getId(): number;
  setId(value: number): void;

  getUuid(): string;
  setUuid(value: string): void;

  getEmail(): string;
  setEmail(value: string): void;

  getMemberkind(): MEMBER_KINDMap[keyof MEMBER_KINDMap];
  setMemberkind(value: MEMBER_KINDMap[keyof MEMBER_KINDMap]): void;

  getRegisterkind(): MEMBER_REGISTER_KINDMap[keyof MEMBER_REGISTER_KINDMap];
  setRegisterkind(value: MEMBER_REGISTER_KINDMap[keyof MEMBER_REGISTER_KINDMap]): void;

  getCreatedseconds(): number;
  setCreatedseconds(value: number): void;

  getLastconnectedseconds(): number;
  setLastconnectedseconds(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MemberBase.AsObject;
  static toObject(includeInstance: boolean, msg: MemberBase): MemberBase.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: MemberBase, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MemberBase;
  static deserializeBinaryFromReader(message: MemberBase, reader: jspb.BinaryReader): MemberBase;
}

export namespace MemberBase {
  export type AsObject = {
    id: number,
    uuid: string,
    email: string,
    memberkind: MEMBER_KINDMap[keyof MEMBER_KINDMap],
    registerkind: MEMBER_REGISTER_KINDMap[keyof MEMBER_REGISTER_KINDMap],
    createdseconds: number,
    lastconnectedseconds: number,
  }
}

export class Member extends jspb.Message {
  hasBase(): boolean;
  clearBase(): void;
  getBase(): MemberBase | undefined;
  setBase(value?: MemberBase): void;

  clearDepartmentbasesList(): void;
  getDepartmentbasesList(): Array<DepartmentBase>;
  setDepartmentbasesList(value: Array<DepartmentBase>): void;
  addDepartmentbases(value?: DepartmentBase, index?: number): DepartmentBase;

  clearPermissionsList(): void;
  getPermissionsList(): Array<MEMBER_PERMISSION_KINDMap[keyof MEMBER_PERMISSION_KINDMap]>;
  setPermissionsList(value: Array<MEMBER_PERMISSION_KINDMap[keyof MEMBER_PERMISSION_KINDMap]>): void;
  addPermissions(value: MEMBER_PERMISSION_KINDMap[keyof MEMBER_PERMISSION_KINDMap], index?: number): MEMBER_PERMISSION_KINDMap[keyof MEMBER_PERMISSION_KINDMap];

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Member.AsObject;
  static toObject(includeInstance: boolean, msg: Member): Member.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Member, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Member;
  static deserializeBinaryFromReader(message: Member, reader: jspb.BinaryReader): Member;
}

export namespace Member {
  export type AsObject = {
    base?: MemberBase.AsObject,
    departmentbasesList: Array<DepartmentBase.AsObject>,
    permissionsList: Array<MEMBER_PERMISSION_KINDMap[keyof MEMBER_PERMISSION_KINDMap]>,
  }
}

export class DepartmentBase extends jspb.Message {
  getId(): number;
  setId(value: number): void;

  getName(): string;
  setName(value: string): void;

  getCreatedseconds(): number;
  setCreatedseconds(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DepartmentBase.AsObject;
  static toObject(includeInstance: boolean, msg: DepartmentBase): DepartmentBase.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DepartmentBase, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DepartmentBase;
  static deserializeBinaryFromReader(message: DepartmentBase, reader: jspb.BinaryReader): DepartmentBase;
}

export namespace DepartmentBase {
  export type AsObject = {
    id: number,
    name: string,
    createdseconds: number,
  }
}

export class Department extends jspb.Message {
  hasBase(): boolean;
  clearBase(): void;
  getBase(): DepartmentBase | undefined;
  setBase(value?: DepartmentBase): void;

  clearMemberbasesList(): void;
  getMemberbasesList(): Array<MemberBase>;
  setMemberbasesList(value: Array<MemberBase>): void;
  addMemberbases(value?: MemberBase, index?: number): MemberBase;

  clearConnectorbasesList(): void;
  getConnectorbasesList(): Array<ConnectorBase>;
  setConnectorbasesList(value: Array<ConnectorBase>): void;
  addConnectorbases(value?: ConnectorBase, index?: number): ConnectorBase;

  clearDepartmentlowersList(): void;
  getDepartmentlowersList(): Array<DepartmentLowerBase>;
  setDepartmentlowersList(value: Array<DepartmentLowerBase>): void;
  addDepartmentlowers(value?: DepartmentLowerBase, index?: number): DepartmentLowerBase;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Department.AsObject;
  static toObject(includeInstance: boolean, msg: Department): Department.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Department, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Department;
  static deserializeBinaryFromReader(message: Department, reader: jspb.BinaryReader): Department;
}

export namespace Department {
  export type AsObject = {
    base?: DepartmentBase.AsObject,
    memberbasesList: Array<MemberBase.AsObject>,
    connectorbasesList: Array<ConnectorBase.AsObject>,
    departmentlowersList: Array<DepartmentLowerBase.AsObject>,
  }
}

export class DepartmentLowerBase extends jspb.Message {
  getId(): number;
  setId(value: number): void;

  hasLowerdepartmentbase(): boolean;
  clearLowerdepartmentbase(): void;
  getLowerdepartmentbase(): DepartmentBase | undefined;
  setLowerdepartmentbase(value?: DepartmentBase): void;

  getCreatedseconds(): number;
  setCreatedseconds(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DepartmentLowerBase.AsObject;
  static toObject(includeInstance: boolean, msg: DepartmentLowerBase): DepartmentLowerBase.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DepartmentLowerBase, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DepartmentLowerBase;
  static deserializeBinaryFromReader(message: DepartmentLowerBase, reader: jspb.BinaryReader): DepartmentLowerBase;
}

export namespace DepartmentLowerBase {
  export type AsObject = {
    id: number,
    lowerdepartmentbase?: DepartmentBase.AsObject,
    createdseconds: number,
  }
}

export class DepartmentNodeBase extends jspb.Message {
  getId(): number;
  setId(value: number): void;

  getOrder(): number;
  setOrder(value: number): void;

  getParentdepartmentnodeid(): number;
  setParentdepartmentnodeid(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DepartmentNodeBase.AsObject;
  static toObject(includeInstance: boolean, msg: DepartmentNodeBase): DepartmentNodeBase.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DepartmentNodeBase, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DepartmentNodeBase;
  static deserializeBinaryFromReader(message: DepartmentNodeBase, reader: jspb.BinaryReader): DepartmentNodeBase;
}

export namespace DepartmentNodeBase {
  export type AsObject = {
    id: number,
    order: number,
    parentdepartmentnodeid: number,
  }
}

export class DepartmentNode extends jspb.Message {
  hasBase(): boolean;
  clearBase(): void;
  getBase(): DepartmentNodeBase | undefined;
  setBase(value?: DepartmentNodeBase): void;

  hasDepartment(): boolean;
  clearDepartment(): void;
  getDepartment(): Department | undefined;
  setDepartment(value?: Department): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DepartmentNode.AsObject;
  static toObject(includeInstance: boolean, msg: DepartmentNode): DepartmentNode.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DepartmentNode, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DepartmentNode;
  static deserializeBinaryFromReader(message: DepartmentNode, reader: jspb.BinaryReader): DepartmentNode;
}

export namespace DepartmentNode {
  export type AsObject = {
    base?: DepartmentNodeBase.AsObject,
    department?: Department.AsObject,
  }
}

export class ConnectorBase extends jspb.Message {
  getConnectorid(): number;
  setConnectorid(value: number): void;

  getName(): string;
  setName(value: string): void;

  getDeviceid(): string;
  setDeviceid(value: string): void;

  getCreatedseconds(): number;
  setCreatedseconds(value: number): void;

  getKind(): CONNECTOR_REGISTER_KINDMap[keyof CONNECTOR_REGISTER_KINDMap];
  setKind(value: CONNECTOR_REGISTER_KINDMap[keyof CONNECTOR_REGISTER_KINDMap]): void;

  getUpdatedseconds(): number;
  setUpdatedseconds(value: number): void;

  hasResource(): boolean;
  clearResource(): void;
  getResource(): Resource | undefined;
  setResource(value?: Resource): void;

  getEmergencysceneid(): number;
  setEmergencysceneid(value: number): void;

  getIsemergency(): boolean;
  setIsemergency(value: boolean): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ConnectorBase.AsObject;
  static toObject(includeInstance: boolean, msg: ConnectorBase): ConnectorBase.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ConnectorBase, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ConnectorBase;
  static deserializeBinaryFromReader(message: ConnectorBase, reader: jspb.BinaryReader): ConnectorBase;
}

export namespace ConnectorBase {
  export type AsObject = {
    connectorid: number,
    name: string,
    deviceid: string,
    createdseconds: number,
    kind: CONNECTOR_REGISTER_KINDMap[keyof CONNECTOR_REGISTER_KINDMap],
    updatedseconds: number,
    resource?: Resource.AsObject,
    emergencysceneid: number,
    isemergency: boolean,
  }
}

export class Connector extends jspb.Message {
  hasBase(): boolean;
  clearBase(): void;
  getBase(): ConnectorBase | undefined;
  setBase(value?: ConnectorBase): void;

  hasDepartmentbase(): boolean;
  clearDepartmentbase(): void;
  getDepartmentbase(): DepartmentBase | undefined;
  setDepartmentbase(value?: DepartmentBase): void;

  hasScene(): boolean;
  clearScene(): void;
  getScene(): Scene | undefined;
  setScene(value?: Scene): void;

  clearSchedulesList(): void;
  getSchedulesList(): Array<ConnectorScheduleScene>;
  setSchedulesList(value: Array<ConnectorScheduleScene>): void;
  addSchedules(value?: ConnectorScheduleScene, index?: number): ConnectorScheduleScene;

  hasEmergencyscene(): boolean;
  clearEmergencyscene(): void;
  getEmergencyscene(): Scene | undefined;
  setEmergencyscene(value?: Scene): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Connector.AsObject;
  static toObject(includeInstance: boolean, msg: Connector): Connector.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Connector, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Connector;
  static deserializeBinaryFromReader(message: Connector, reader: jspb.BinaryReader): Connector;
}

export namespace Connector {
  export type AsObject = {
    base?: ConnectorBase.AsObject,
    departmentbase?: DepartmentBase.AsObject,
    scene?: Scene.AsObject,
    schedulesList: Array<ConnectorScheduleScene.AsObject>,
    emergencyscene?: Scene.AsObject,
  }
}

export class ConnectorDepartmentBase extends jspb.Message {
  hasConnectorbase(): boolean;
  clearConnectorbase(): void;
  getConnectorbase(): ConnectorBase | undefined;
  setConnectorbase(value?: ConnectorBase): void;

  hasDepartmentbase(): boolean;
  clearDepartmentbase(): void;
  getDepartmentbase(): DepartmentBase | undefined;
  setDepartmentbase(value?: DepartmentBase): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ConnectorDepartmentBase.AsObject;
  static toObject(includeInstance: boolean, msg: ConnectorDepartmentBase): ConnectorDepartmentBase.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ConnectorDepartmentBase, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ConnectorDepartmentBase;
  static deserializeBinaryFromReader(message: ConnectorDepartmentBase, reader: jspb.BinaryReader): ConnectorDepartmentBase;
}

export namespace ConnectorDepartmentBase {
  export type AsObject = {
    connectorbase?: ConnectorBase.AsObject,
    departmentbase?: DepartmentBase.AsObject,
  }
}

export class MemberPermission extends jspb.Message {
  getId(): number;
  setId(value: number): void;

  hasMemberbase(): boolean;
  clearMemberbase(): void;
  getMemberbase(): MemberBase | undefined;
  setMemberbase(value?: MemberBase): void;

  getPermission(): MEMBER_PERMISSION_KINDMap[keyof MEMBER_PERMISSION_KINDMap];
  setPermission(value: MEMBER_PERMISSION_KINDMap[keyof MEMBER_PERMISSION_KINDMap]): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MemberPermission.AsObject;
  static toObject(includeInstance: boolean, msg: MemberPermission): MemberPermission.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: MemberPermission, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MemberPermission;
  static deserializeBinaryFromReader(message: MemberPermission, reader: jspb.BinaryReader): MemberPermission;
}

export namespace MemberPermission {
  export type AsObject = {
    id: number,
    memberbase?: MemberBase.AsObject,
    permission: MEMBER_PERMISSION_KINDMap[keyof MEMBER_PERMISSION_KINDMap],
  }
}

export class MemberDepartment extends jspb.Message {
  getId(): number;
  setId(value: number): void;

  hasMemberbase(): boolean;
  clearMemberbase(): void;
  getMemberbase(): MemberBase | undefined;
  setMemberbase(value?: MemberBase): void;

  hasDepartmentbase(): boolean;
  clearDepartmentbase(): void;
  getDepartmentbase(): DepartmentBase | undefined;
  setDepartmentbase(value?: DepartmentBase): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MemberDepartment.AsObject;
  static toObject(includeInstance: boolean, msg: MemberDepartment): MemberDepartment.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: MemberDepartment, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MemberDepartment;
  static deserializeBinaryFromReader(message: MemberDepartment, reader: jspb.BinaryReader): MemberDepartment;
}

export namespace MemberDepartment {
  export type AsObject = {
    id: number,
    memberbase?: MemberBase.AsObject,
    departmentbase?: DepartmentBase.AsObject,
  }
}

export class MemberRecordBlueprint extends jspb.Message {
  getKind(): MEMBER_RECORD_KINDMap[keyof MEMBER_RECORD_KINDMap];
  setKind(value: MEMBER_RECORD_KINDMap[keyof MEMBER_RECORD_KINDMap]): void;

  hasScenerecord(): boolean;
  clearScenerecord(): void;
  getScenerecord(): MemberRecordBlueprint.MemberSceneRecord | undefined;
  setScenerecord(value?: MemberRecordBlueprint.MemberSceneRecord): void;

  hasConnectorrecord(): boolean;
  clearConnectorrecord(): void;
  getConnectorrecord(): MemberRecordBlueprint.MemberConnectorRecord | undefined;
  setConnectorrecord(value?: MemberRecordBlueprint.MemberConnectorRecord): void;

  hasConnectorschedulerecord(): boolean;
  clearConnectorschedulerecord(): void;
  getConnectorschedulerecord(): MemberRecordBlueprint.MemberConnectorScheduleRecord | undefined;
  setConnectorschedulerecord(value?: MemberRecordBlueprint.MemberConnectorScheduleRecord): void;

  hasConnectorkindrecord(): boolean;
  clearConnectorkindrecord(): void;
  getConnectorkindrecord(): MemberRecordBlueprint.MemberConnectorKindRecord | undefined;
  setConnectorkindrecord(value?: MemberRecordBlueprint.MemberConnectorKindRecord): void;

  hasConnectorscenerecord(): boolean;
  clearConnectorscenerecord(): void;
  getConnectorscenerecord(): MemberRecordBlueprint.MemberConnectorSceneRecord | undefined;
  setConnectorscenerecord(value?: MemberRecordBlueprint.MemberConnectorSceneRecord): void;

  hasConnectordepartmentrecord(): boolean;
  clearConnectordepartmentrecord(): void;
  getConnectordepartmentrecord(): MemberRecordBlueprint.MemberConnectorDepartmentRecord | undefined;
  setConnectordepartmentrecord(value?: MemberRecordBlueprint.MemberConnectorDepartmentRecord): void;

  hasSchedulereocrd(): boolean;
  clearSchedulereocrd(): void;
  getSchedulereocrd(): MemberRecordBlueprint.MemberScheduleRecord | undefined;
  setSchedulereocrd(value?: MemberRecordBlueprint.MemberScheduleRecord): void;

  hasSchedulescenerecord(): boolean;
  clearSchedulescenerecord(): void;
  getSchedulescenerecord(): MemberRecordBlueprint.MemberScheduleSceneRecord | undefined;
  setSchedulescenerecord(value?: MemberRecordBlueprint.MemberScheduleSceneRecord): void;

  hasDepartmentrecord(): boolean;
  clearDepartmentrecord(): void;
  getDepartmentrecord(): MemberRecordBlueprint.MemberDepartmentRecord | undefined;
  setDepartmentrecord(value?: MemberRecordBlueprint.MemberDepartmentRecord): void;

  hasDepartmentnoderecord(): boolean;
  clearDepartmentnoderecord(): void;
  getDepartmentnoderecord(): MemberRecordBlueprint.MemberDepartmentNodeRecord | undefined;
  setDepartmentnoderecord(value?: MemberRecordBlueprint.MemberDepartmentNodeRecord): void;

  hasDepartmentresourcefolderrecord(): boolean;
  clearDepartmentresourcefolderrecord(): void;
  getDepartmentresourcefolderrecord(): MemberRecordBlueprint.MemberDepartmentResourceFolderRecord | undefined;
  setDepartmentresourcefolderrecord(value?: MemberRecordBlueprint.MemberDepartmentResourceFolderRecord): void;

  hasDepartmentscenefolderrecord(): boolean;
  clearDepartmentscenefolderrecord(): void;
  getDepartmentscenefolderrecord(): MemberRecordBlueprint.MemberDepartmentSceneFolderRecord | undefined;
  setDepartmentscenefolderrecord(value?: MemberRecordBlueprint.MemberDepartmentSceneFolderRecord): void;

  hasConnectoremergencyrecord(): boolean;
  clearConnectoremergencyrecord(): void;
  getConnectoremergencyrecord(): MemberRecordBlueprint.MemberConnectorEmergencyRecord | undefined;
  setConnectoremergencyrecord(value?: MemberRecordBlueprint.MemberConnectorEmergencyRecord): void;

  hasConnectoremergencyscenerecord(): boolean;
  clearConnectoremergencyscenerecord(): void;
  getConnectoremergencyscenerecord(): MemberRecordBlueprint.MemberConnectorEmergencySceneRecord | undefined;
  setConnectoremergencyscenerecord(value?: MemberRecordBlueprint.MemberConnectorEmergencySceneRecord): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MemberRecordBlueprint.AsObject;
  static toObject(includeInstance: boolean, msg: MemberRecordBlueprint): MemberRecordBlueprint.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: MemberRecordBlueprint, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MemberRecordBlueprint;
  static deserializeBinaryFromReader(message: MemberRecordBlueprint, reader: jspb.BinaryReader): MemberRecordBlueprint;
}

export namespace MemberRecordBlueprint {
  export type AsObject = {
    kind: MEMBER_RECORD_KINDMap[keyof MEMBER_RECORD_KINDMap],
    scenerecord?: MemberRecordBlueprint.MemberSceneRecord.AsObject,
    connectorrecord?: MemberRecordBlueprint.MemberConnectorRecord.AsObject,
    connectorschedulerecord?: MemberRecordBlueprint.MemberConnectorScheduleRecord.AsObject,
    connectorkindrecord?: MemberRecordBlueprint.MemberConnectorKindRecord.AsObject,
    connectorscenerecord?: MemberRecordBlueprint.MemberConnectorSceneRecord.AsObject,
    connectordepartmentrecord?: MemberRecordBlueprint.MemberConnectorDepartmentRecord.AsObject,
    schedulereocrd?: MemberRecordBlueprint.MemberScheduleRecord.AsObject,
    schedulescenerecord?: MemberRecordBlueprint.MemberScheduleSceneRecord.AsObject,
    departmentrecord?: MemberRecordBlueprint.MemberDepartmentRecord.AsObject,
    departmentnoderecord?: MemberRecordBlueprint.MemberDepartmentNodeRecord.AsObject,
    departmentresourcefolderrecord?: MemberRecordBlueprint.MemberDepartmentResourceFolderRecord.AsObject,
    departmentscenefolderrecord?: MemberRecordBlueprint.MemberDepartmentSceneFolderRecord.AsObject,
    connectoremergencyrecord?: MemberRecordBlueprint.MemberConnectorEmergencyRecord.AsObject,
    connectoremergencyscenerecord?: MemberRecordBlueprint.MemberConnectorEmergencySceneRecord.AsObject,
  }

  export class MemberSceneRecord extends jspb.Message {
    getSceneid(): number;
    setSceneid(value: number): void;

    getScenename(): string;
    setScenename(value: string): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): MemberSceneRecord.AsObject;
    static toObject(includeInstance: boolean, msg: MemberSceneRecord): MemberSceneRecord.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: MemberSceneRecord, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): MemberSceneRecord;
    static deserializeBinaryFromReader(message: MemberSceneRecord, reader: jspb.BinaryReader): MemberSceneRecord;
  }

  export namespace MemberSceneRecord {
    export type AsObject = {
      sceneid: number,
      scenename: string,
    }
  }

  export class MemberScheduleRecord extends jspb.Message {
    getScheduleid(): number;
    setScheduleid(value: number): void;

    getSchedulename(): string;
    setSchedulename(value: string): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): MemberScheduleRecord.AsObject;
    static toObject(includeInstance: boolean, msg: MemberScheduleRecord): MemberScheduleRecord.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: MemberScheduleRecord, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): MemberScheduleRecord;
    static deserializeBinaryFromReader(message: MemberScheduleRecord, reader: jspb.BinaryReader): MemberScheduleRecord;
  }

  export namespace MemberScheduleRecord {
    export type AsObject = {
      scheduleid: number,
      schedulename: string,
    }
  }

  export class MemberScheduleSceneRecord extends jspb.Message {
    getSchedulesceneid(): number;
    setSchedulesceneid(value: number): void;

    getSchedulescenename(): string;
    setSchedulescenename(value: string): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): MemberScheduleSceneRecord.AsObject;
    static toObject(includeInstance: boolean, msg: MemberScheduleSceneRecord): MemberScheduleSceneRecord.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: MemberScheduleSceneRecord, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): MemberScheduleSceneRecord;
    static deserializeBinaryFromReader(message: MemberScheduleSceneRecord, reader: jspb.BinaryReader): MemberScheduleSceneRecord;
  }

  export namespace MemberScheduleSceneRecord {
    export type AsObject = {
      schedulesceneid: number,
      schedulescenename: string,
    }
  }

  export class MemberConnectorKindRecord extends jspb.Message {
    getConnectorid(): number;
    setConnectorid(value: number): void;

    getConnectorname(): string;
    setConnectorname(value: string): void;

    getOldkind(): CONNECTOR_REGISTER_KINDMap[keyof CONNECTOR_REGISTER_KINDMap];
    setOldkind(value: CONNECTOR_REGISTER_KINDMap[keyof CONNECTOR_REGISTER_KINDMap]): void;

    getKind(): CONNECTOR_REGISTER_KINDMap[keyof CONNECTOR_REGISTER_KINDMap];
    setKind(value: CONNECTOR_REGISTER_KINDMap[keyof CONNECTOR_REGISTER_KINDMap]): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): MemberConnectorKindRecord.AsObject;
    static toObject(includeInstance: boolean, msg: MemberConnectorKindRecord): MemberConnectorKindRecord.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: MemberConnectorKindRecord, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): MemberConnectorKindRecord;
    static deserializeBinaryFromReader(message: MemberConnectorKindRecord, reader: jspb.BinaryReader): MemberConnectorKindRecord;
  }

  export namespace MemberConnectorKindRecord {
    export type AsObject = {
      connectorid: number,
      connectorname: string,
      oldkind: CONNECTOR_REGISTER_KINDMap[keyof CONNECTOR_REGISTER_KINDMap],
      kind: CONNECTOR_REGISTER_KINDMap[keyof CONNECTOR_REGISTER_KINDMap],
    }
  }

  export class MemberConnectorRecord extends jspb.Message {
    getConnectorid(): number;
    setConnectorid(value: number): void;

    getConnectorname(): string;
    setConnectorname(value: string): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): MemberConnectorRecord.AsObject;
    static toObject(includeInstance: boolean, msg: MemberConnectorRecord): MemberConnectorRecord.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: MemberConnectorRecord, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): MemberConnectorRecord;
    static deserializeBinaryFromReader(message: MemberConnectorRecord, reader: jspb.BinaryReader): MemberConnectorRecord;
  }

  export namespace MemberConnectorRecord {
    export type AsObject = {
      connectorid: number,
      connectorname: string,
    }
  }

  export class MemberConnectorEmergencyRecord extends jspb.Message {
    getConnectorid(): number;
    setConnectorid(value: number): void;

    getConnectorname(): string;
    setConnectorname(value: string): void;

    getOldemergency(): boolean;
    setOldemergency(value: boolean): void;

    getNewemergency(): boolean;
    setNewemergency(value: boolean): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): MemberConnectorEmergencyRecord.AsObject;
    static toObject(includeInstance: boolean, msg: MemberConnectorEmergencyRecord): MemberConnectorEmergencyRecord.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: MemberConnectorEmergencyRecord, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): MemberConnectorEmergencyRecord;
    static deserializeBinaryFromReader(message: MemberConnectorEmergencyRecord, reader: jspb.BinaryReader): MemberConnectorEmergencyRecord;
  }

  export namespace MemberConnectorEmergencyRecord {
    export type AsObject = {
      connectorid: number,
      connectorname: string,
      oldemergency: boolean,
      newemergency: boolean,
    }
  }

  export class MemberConnectorScheduleRecord extends jspb.Message {
    getConnectorid(): number;
    setConnectorid(value: number): void;

    getConnectorname(): string;
    setConnectorname(value: string): void;

    getConnectorschedulesceneid(): number;
    setConnectorschedulesceneid(value: number): void;

    getSceneschedulename(): string;
    setSceneschedulename(value: string): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): MemberConnectorScheduleRecord.AsObject;
    static toObject(includeInstance: boolean, msg: MemberConnectorScheduleRecord): MemberConnectorScheduleRecord.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: MemberConnectorScheduleRecord, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): MemberConnectorScheduleRecord;
    static deserializeBinaryFromReader(message: MemberConnectorScheduleRecord, reader: jspb.BinaryReader): MemberConnectorScheduleRecord;
  }

  export namespace MemberConnectorScheduleRecord {
    export type AsObject = {
      connectorid: number,
      connectorname: string,
      connectorschedulesceneid: number,
      sceneschedulename: string,
    }
  }

  export class MemberConnectorSceneRecord extends jspb.Message {
    getConnectorid(): number;
    setConnectorid(value: number): void;

    getConnectorname(): string;
    setConnectorname(value: string): void;

    getSceneid(): number;
    setSceneid(value: number): void;

    getScenename(): string;
    setScenename(value: string): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): MemberConnectorSceneRecord.AsObject;
    static toObject(includeInstance: boolean, msg: MemberConnectorSceneRecord): MemberConnectorSceneRecord.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: MemberConnectorSceneRecord, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): MemberConnectorSceneRecord;
    static deserializeBinaryFromReader(message: MemberConnectorSceneRecord, reader: jspb.BinaryReader): MemberConnectorSceneRecord;
  }

  export namespace MemberConnectorSceneRecord {
    export type AsObject = {
      connectorid: number,
      connectorname: string,
      sceneid: number,
      scenename: string,
    }
  }

  export class MemberConnectorEmergencySceneRecord extends jspb.Message {
    getConnectorid(): number;
    setConnectorid(value: number): void;

    getConnectorname(): string;
    setConnectorname(value: string): void;

    getSceneid(): number;
    setSceneid(value: number): void;

    getScenename(): string;
    setScenename(value: string): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): MemberConnectorEmergencySceneRecord.AsObject;
    static toObject(includeInstance: boolean, msg: MemberConnectorEmergencySceneRecord): MemberConnectorEmergencySceneRecord.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: MemberConnectorEmergencySceneRecord, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): MemberConnectorEmergencySceneRecord;
    static deserializeBinaryFromReader(message: MemberConnectorEmergencySceneRecord, reader: jspb.BinaryReader): MemberConnectorEmergencySceneRecord;
  }

  export namespace MemberConnectorEmergencySceneRecord {
    export type AsObject = {
      connectorid: number,
      connectorname: string,
      sceneid: number,
      scenename: string,
    }
  }

  export class MemberConnectorDepartmentRecord extends jspb.Message {
    getConnectorid(): number;
    setConnectorid(value: number): void;

    getConnectorname(): string;
    setConnectorname(value: string): void;

    getDepartmentid(): number;
    setDepartmentid(value: number): void;

    getDepartmentname(): string;
    setDepartmentname(value: string): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): MemberConnectorDepartmentRecord.AsObject;
    static toObject(includeInstance: boolean, msg: MemberConnectorDepartmentRecord): MemberConnectorDepartmentRecord.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: MemberConnectorDepartmentRecord, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): MemberConnectorDepartmentRecord;
    static deserializeBinaryFromReader(message: MemberConnectorDepartmentRecord, reader: jspb.BinaryReader): MemberConnectorDepartmentRecord;
  }

  export namespace MemberConnectorDepartmentRecord {
    export type AsObject = {
      connectorid: number,
      connectorname: string,
      departmentid: number,
      departmentname: string,
    }
  }

  export class MemberDepartmentRecord extends jspb.Message {
    getDepartmentid(): number;
    setDepartmentid(value: number): void;

    getDepartmentname(): string;
    setDepartmentname(value: string): void;

    getNewdepartmentname(): string;
    setNewdepartmentname(value: string): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): MemberDepartmentRecord.AsObject;
    static toObject(includeInstance: boolean, msg: MemberDepartmentRecord): MemberDepartmentRecord.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: MemberDepartmentRecord, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): MemberDepartmentRecord;
    static deserializeBinaryFromReader(message: MemberDepartmentRecord, reader: jspb.BinaryReader): MemberDepartmentRecord;
  }

  export namespace MemberDepartmentRecord {
    export type AsObject = {
      departmentid: number,
      departmentname: string,
      newdepartmentname: string,
    }
  }

  export class MemberDepartmentNodeRecord extends jspb.Message {
    getParentdepartmentid(): number;
    setParentdepartmentid(value: number): void;

    getParentdepartmentname(): string;
    setParentdepartmentname(value: string): void;

    getNewparentdepartmentid(): number;
    setNewparentdepartmentid(value: number): void;

    getNewparentdepartmentname(): string;
    setNewparentdepartmentname(value: string): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): MemberDepartmentNodeRecord.AsObject;
    static toObject(includeInstance: boolean, msg: MemberDepartmentNodeRecord): MemberDepartmentNodeRecord.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: MemberDepartmentNodeRecord, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): MemberDepartmentNodeRecord;
    static deserializeBinaryFromReader(message: MemberDepartmentNodeRecord, reader: jspb.BinaryReader): MemberDepartmentNodeRecord;
  }

  export namespace MemberDepartmentNodeRecord {
    export type AsObject = {
      parentdepartmentid: number,
      parentdepartmentname: string,
      newparentdepartmentid: number,
      newparentdepartmentname: string,
    }
  }

  export class MemberDepartmentResourceFolderRecord extends jspb.Message {
    getDepartmentid(): number;
    setDepartmentid(value: number): void;

    getDepartmentname(): string;
    setDepartmentname(value: string): void;

    getDepartmentresourcefolderid(): number;
    setDepartmentresourcefolderid(value: number): void;

    getDepartmentresourcefoldername(): string;
    setDepartmentresourcefoldername(value: string): void;

    getNewdepartmentresourcefoldername(): string;
    setNewdepartmentresourcefoldername(value: string): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): MemberDepartmentResourceFolderRecord.AsObject;
    static toObject(includeInstance: boolean, msg: MemberDepartmentResourceFolderRecord): MemberDepartmentResourceFolderRecord.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: MemberDepartmentResourceFolderRecord, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): MemberDepartmentResourceFolderRecord;
    static deserializeBinaryFromReader(message: MemberDepartmentResourceFolderRecord, reader: jspb.BinaryReader): MemberDepartmentResourceFolderRecord;
  }

  export namespace MemberDepartmentResourceFolderRecord {
    export type AsObject = {
      departmentid: number,
      departmentname: string,
      departmentresourcefolderid: number,
      departmentresourcefoldername: string,
      newdepartmentresourcefoldername: string,
    }
  }

  export class MemberDepartmentSceneFolderRecord extends jspb.Message {
    getDepartmentid(): number;
    setDepartmentid(value: number): void;

    getDepartmentname(): string;
    setDepartmentname(value: string): void;

    getDepartmentscenefolderid(): number;
    setDepartmentscenefolderid(value: number): void;

    getDepartmentscenefoldername(): string;
    setDepartmentscenefoldername(value: string): void;

    getNewdepartmentscenefoldername(): string;
    setNewdepartmentscenefoldername(value: string): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): MemberDepartmentSceneFolderRecord.AsObject;
    static toObject(includeInstance: boolean, msg: MemberDepartmentSceneFolderRecord): MemberDepartmentSceneFolderRecord.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: MemberDepartmentSceneFolderRecord, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): MemberDepartmentSceneFolderRecord;
    static deserializeBinaryFromReader(message: MemberDepartmentSceneFolderRecord, reader: jspb.BinaryReader): MemberDepartmentSceneFolderRecord;
  }

  export namespace MemberDepartmentSceneFolderRecord {
    export type AsObject = {
      departmentid: number,
      departmentname: string,
      departmentscenefolderid: number,
      departmentscenefoldername: string,
      newdepartmentscenefoldername: string,
    }
  }
}

export class MemberRecord extends jspb.Message {
  getMemberrecordid(): number;
  setMemberrecordid(value: number): void;

  hasMemberbase(): boolean;
  clearMemberbase(): void;
  getMemberbase(): MemberBase | undefined;
  setMemberbase(value?: MemberBase): void;

  getKind(): MEMBER_RECORD_KINDMap[keyof MEMBER_RECORD_KINDMap];
  setKind(value: MEMBER_RECORD_KINDMap[keyof MEMBER_RECORD_KINDMap]): void;

  hasBlueprint(): boolean;
  clearBlueprint(): void;
  getBlueprint(): MemberRecordBlueprint | undefined;
  setBlueprint(value?: MemberRecordBlueprint): void;

  getBehaviorseconds(): number;
  setBehaviorseconds(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MemberRecord.AsObject;
  static toObject(includeInstance: boolean, msg: MemberRecord): MemberRecord.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: MemberRecord, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MemberRecord;
  static deserializeBinaryFromReader(message: MemberRecord, reader: jspb.BinaryReader): MemberRecord;
}

export namespace MemberRecord {
  export type AsObject = {
    memberrecordid: number,
    memberbase?: MemberBase.AsObject,
    kind: MEMBER_RECORD_KINDMap[keyof MEMBER_RECORD_KINDMap],
    blueprint?: MemberRecordBlueprint.AsObject,
    behaviorseconds: number,
  }
}

export class Schedule extends jspb.Message {
  getScheduleid(): number;
  setScheduleid(value: number): void;

  getName(): string;
  setName(value: string): void;

  getStartdateseconds(): number;
  setStartdateseconds(value: number): void;

  getEnddateseconds(): number;
  setEnddateseconds(value: number): void;

  getUsedate(): boolean;
  setUsedate(value: boolean): void;

  hasWeek(): boolean;
  clearWeek(): void;
  getWeek(): Schedule.Week | undefined;
  setWeek(value?: Schedule.Week): void;

  getCreatedseconds(): number;
  setCreatedseconds(value: number): void;

  getUpdatedseconds(): number;
  setUpdatedseconds(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Schedule.AsObject;
  static toObject(includeInstance: boolean, msg: Schedule): Schedule.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Schedule, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Schedule;
  static deserializeBinaryFromReader(message: Schedule, reader: jspb.BinaryReader): Schedule;
}

export namespace Schedule {
  export type AsObject = {
    scheduleid: number,
    name: string,
    startdateseconds: number,
    enddateseconds: number,
    usedate: boolean,
    week?: Schedule.Week.AsObject,
    createdseconds: number,
    updatedseconds: number,
  }

  export class DayOfWeek extends jspb.Message {
    getStarthour(): number;
    setStarthour(value: number): void;

    getStartminute(): number;
    setStartminute(value: number): void;

    getEndhour(): number;
    setEndhour(value: number): void;

    getEndminute(): number;
    setEndminute(value: number): void;

    getIsallday(): boolean;
    setIsallday(value: boolean): void;

    getDisabled(): boolean;
    setDisabled(value: boolean): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): DayOfWeek.AsObject;
    static toObject(includeInstance: boolean, msg: DayOfWeek): DayOfWeek.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: DayOfWeek, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): DayOfWeek;
    static deserializeBinaryFromReader(message: DayOfWeek, reader: jspb.BinaryReader): DayOfWeek;
  }

  export namespace DayOfWeek {
    export type AsObject = {
      starthour: number,
      startminute: number,
      endhour: number,
      endminute: number,
      isallday: boolean,
      disabled: boolean,
    }
  }

  export class Week extends jspb.Message {
    hasMon(): boolean;
    clearMon(): void;
    getMon(): Schedule.DayOfWeek | undefined;
    setMon(value?: Schedule.DayOfWeek): void;

    hasTue(): boolean;
    clearTue(): void;
    getTue(): Schedule.DayOfWeek | undefined;
    setTue(value?: Schedule.DayOfWeek): void;

    hasWed(): boolean;
    clearWed(): void;
    getWed(): Schedule.DayOfWeek | undefined;
    setWed(value?: Schedule.DayOfWeek): void;

    hasThu(): boolean;
    clearThu(): void;
    getThu(): Schedule.DayOfWeek | undefined;
    setThu(value?: Schedule.DayOfWeek): void;

    hasFri(): boolean;
    clearFri(): void;
    getFri(): Schedule.DayOfWeek | undefined;
    setFri(value?: Schedule.DayOfWeek): void;

    hasSat(): boolean;
    clearSat(): void;
    getSat(): Schedule.DayOfWeek | undefined;
    setSat(value?: Schedule.DayOfWeek): void;

    hasSun(): boolean;
    clearSun(): void;
    getSun(): Schedule.DayOfWeek | undefined;
    setSun(value?: Schedule.DayOfWeek): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Week.AsObject;
    static toObject(includeInstance: boolean, msg: Week): Week.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Week, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Week;
    static deserializeBinaryFromReader(message: Week, reader: jspb.BinaryReader): Week;
  }

  export namespace Week {
    export type AsObject = {
      mon?: Schedule.DayOfWeek.AsObject,
      tue?: Schedule.DayOfWeek.AsObject,
      wed?: Schedule.DayOfWeek.AsObject,
      thu?: Schedule.DayOfWeek.AsObject,
      fri?: Schedule.DayOfWeek.AsObject,
      sat?: Schedule.DayOfWeek.AsObject,
      sun?: Schedule.DayOfWeek.AsObject,
    }
  }
}

export class ScheduleScene extends jspb.Message {
  getSchedulesceneid(): number;
  setSchedulesceneid(value: number): void;

  getName(): string;
  setName(value: string): void;

  hasSchedule(): boolean;
  clearSchedule(): void;
  getSchedule(): Schedule | undefined;
  setSchedule(value?: Schedule): void;

  hasScenebase(): boolean;
  clearScenebase(): void;
  getScenebase(): SceneBase | undefined;
  setScenebase(value?: SceneBase): void;

  getCreated(): number;
  setCreated(value: number): void;

  getUpdated(): number;
  setUpdated(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ScheduleScene.AsObject;
  static toObject(includeInstance: boolean, msg: ScheduleScene): ScheduleScene.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ScheduleScene, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ScheduleScene;
  static deserializeBinaryFromReader(message: ScheduleScene, reader: jspb.BinaryReader): ScheduleScene;
}

export namespace ScheduleScene {
  export type AsObject = {
    schedulesceneid: number,
    name: string,
    schedule?: Schedule.AsObject,
    scenebase?: SceneBase.AsObject,
    created: number,
    updated: number,
  }
}

export class ConnectorScheduleScene extends jspb.Message {
  getConnectorschedulesceneid(): number;
  setConnectorschedulesceneid(value: number): void;

  hasSchedulescene(): boolean;
  clearSchedulescene(): void;
  getSchedulescene(): ScheduleScene | undefined;
  setSchedulescene(value?: ScheduleScene): void;

  getCreated(): number;
  setCreated(value: number): void;

  getUpdated(): number;
  setUpdated(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ConnectorScheduleScene.AsObject;
  static toObject(includeInstance: boolean, msg: ConnectorScheduleScene): ConnectorScheduleScene.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ConnectorScheduleScene, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ConnectorScheduleScene;
  static deserializeBinaryFromReader(message: ConnectorScheduleScene, reader: jspb.BinaryReader): ConnectorScheduleScene;
}

export namespace ConnectorScheduleScene {
  export type AsObject = {
    connectorschedulesceneid: number,
    schedulescene?: ScheduleScene.AsObject,
    created: number,
    updated: number,
  }
}

export class Paginator extends jspb.Message {
  getItemscount(): number;
  setItemscount(value: number): void;

  getPagescount(): number;
  setPagescount(value: number): void;

  getPagesindex(): number;
  setPagesindex(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Paginator.AsObject;
  static toObject(includeInstance: boolean, msg: Paginator): Paginator.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Paginator, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Paginator;
  static deserializeBinaryFromReader(message: Paginator, reader: jspb.BinaryReader): Paginator;
}

export namespace Paginator {
  export type AsObject = {
    itemscount: number,
    pagescount: number,
    pagesindex: number,
  }
}

export class Weather extends jspb.Message {
  getSkycode(): number;
  setSkycode(value: number): void;

  getPtycode(): number;
  setPtycode(value: number): void;

  getTemperature(): number;
  setTemperature(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Weather.AsObject;
  static toObject(includeInstance: boolean, msg: Weather): Weather.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Weather, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Weather;
  static deserializeBinaryFromReader(message: Weather, reader: jspb.BinaryReader): Weather;
}

export namespace Weather {
  export type AsObject = {
    skycode: number,
    ptycode: number,
    temperature: number,
  }
}

export class DepartmentResourceFolder extends jspb.Message {
  getDepartmentfolderid(): number;
  setDepartmentfolderid(value: number): void;

  getName(): string;
  setName(value: string): void;

  getDepartmentid(): number;
  setDepartmentid(value: number): void;

  getParentdepartmentresourcefolderid(): number;
  setParentdepartmentresourcefolderid(value: number): void;

  getCreatedseconds(): number;
  setCreatedseconds(value: number): void;

  getSize(): number;
  setSize(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DepartmentResourceFolder.AsObject;
  static toObject(includeInstance: boolean, msg: DepartmentResourceFolder): DepartmentResourceFolder.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DepartmentResourceFolder, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DepartmentResourceFolder;
  static deserializeBinaryFromReader(message: DepartmentResourceFolder, reader: jspb.BinaryReader): DepartmentResourceFolder;
}

export namespace DepartmentResourceFolder {
  export type AsObject = {
    departmentfolderid: number,
    name: string,
    departmentid: number,
    parentdepartmentresourcefolderid: number,
    createdseconds: number,
    size: number,
  }
}

export class DepartmentSceneFolder extends jspb.Message {
  getDepartmentfolderid(): number;
  setDepartmentfolderid(value: number): void;

  getName(): string;
  setName(value: string): void;

  getDepartmentid(): number;
  setDepartmentid(value: number): void;

  getParentdepartmentscenefolderid(): number;
  setParentdepartmentscenefolderid(value: number): void;

  getCreatedseconds(): number;
  setCreatedseconds(value: number): void;

  getSize(): number;
  setSize(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DepartmentSceneFolder.AsObject;
  static toObject(includeInstance: boolean, msg: DepartmentSceneFolder): DepartmentSceneFolder.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DepartmentSceneFolder, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DepartmentSceneFolder;
  static deserializeBinaryFromReader(message: DepartmentSceneFolder, reader: jspb.BinaryReader): DepartmentSceneFolder;
}

export namespace DepartmentSceneFolder {
  export type AsObject = {
    departmentfolderid: number,
    name: string,
    departmentid: number,
    parentdepartmentscenefolderid: number,
    createdseconds: number,
    size: number,
  }
}

export class Feed extends jspb.Message {
  getTitle(): string;
  setTitle(value: string): void;

  getLink(): string;
  setLink(value: string): void;

  getDescription(): string;
  setDescription(value: string): void;

  getLanguage(): string;
  setLanguage(value: string): void;

  getCopyright(): string;
  setCopyright(value: string): void;

  getLastbuilddateseconds(): number;
  setLastbuilddateseconds(value: number): void;

  clearItemsList(): void;
  getItemsList(): Array<Feed.FeedItem>;
  setItemsList(value: Array<Feed.FeedItem>): void;
  addItems(value?: Feed.FeedItem, index?: number): Feed.FeedItem;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Feed.AsObject;
  static toObject(includeInstance: boolean, msg: Feed): Feed.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Feed, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Feed;
  static deserializeBinaryFromReader(message: Feed, reader: jspb.BinaryReader): Feed;
}

export namespace Feed {
  export type AsObject = {
    title: string,
    link: string,
    description: string,
    language: string,
    copyright: string,
    lastbuilddateseconds: number,
    itemsList: Array<Feed.FeedItem.AsObject>,
  }

  export class FeedItem extends jspb.Message {
    getTitle(): string;
    setTitle(value: string): void;

    getDescription(): string;
    setDescription(value: string): void;

    getPubdateseconds(): number;
    setPubdateseconds(value: number): void;

    getLastupdateseconds(): number;
    setLastupdateseconds(value: number): void;

    getLink(): string;
    setLink(value: string): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): FeedItem.AsObject;
    static toObject(includeInstance: boolean, msg: FeedItem): FeedItem.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: FeedItem, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): FeedItem;
    static deserializeBinaryFromReader(message: FeedItem, reader: jspb.BinaryReader): FeedItem;
  }

  export namespace FeedItem {
    export type AsObject = {
      title: string,
      description: string,
      pubdateseconds: number,
      lastupdateseconds: number,
      link: string,
    }
  }
}

export interface COMMON_STATUS_KINDMap {
  COMMON_STATUS_KIND_DEFAULT: 0;
  COMMON_STATUS_KIND_FAILED: 1;
  COMMON_STATUS_KIND_FAILED_DATABASE: 2;
  COMMON_STATUS_KIND_FAILED_PROTOBUF: 3;
  COMMON_STATUS_KIND_FAILED_ENCELADUS: 4;
  COMMON_STATUS_KIND_FAILED_DUPLICATED: 5;
  COMMON_STATUS_KIND_FAILED_DEPRECATED: 6;
  COMMON_STATUS_KIND_FAILED_REFRESH: 7;
  COMMON_STATUS_KIND_FAILED_PERMISSION: 8;
  COMMON_STATUS_KIND_FAILED_OVERWRITE: 9;
  COMMON_STATUS_KIND_DB_RESTRICT: 100;
  COMMON_STATUS_KIND_SUCCESS: 200;
  COMMON_STATUS_KIND_NO_CONTENT: 204;
  COMMON_STATUS_KIND_UNAUTHORIZED: 401;
  COMMON_STATUS_KIND_UNSUPPORTED: 415;
}

export const COMMON_STATUS_KIND: COMMON_STATUS_KINDMap;

export interface MEMBER_KINDMap {
  MEMBER_KIND_DEFAULT: 0;
  MEMBER_KIND_NORMAL: 1;
  MEMBER_KIND_ADMIN: 2;
  MEMBER_KIND_MANAGER: 3;
  MEMBER_KIND_TEST: 4;
}

export const MEMBER_KIND: MEMBER_KINDMap;

export interface MEMBER_PERMISSION_KINDMap {
  MEMBER_PERMISSION_KIND_DEFAULT: 0;
  MEMBER_PERMISSION_KIND_SCENE_SELECT: 1;
  MEMBER_PERMISSION_KIND_SCENE_UPDATE: 2;
  MEMBER_PERMISSION_KIND_SCENE_DELETE: 3;
  MEMBER_PERMISSION_KIND_CONNECT_SELECT: 4;
  MEMBER_PERMISSION_KIND_CONNECT_UPDATE: 5;
  MEMBER_PERMISSION_KIND_CONNECT_DELETE: 6;
  MEMBER_PERMISSION_KIND_MEMBER_SELECT: 7;
  MEMBER_PERMISSION_KIND_MEMBER_UPDATE: 8;
  MEMBER_PERMISSION_KIND_MEMBER_DELETE: 9;
  MEMBER_PERMISSION_KIND_MONITOR: 10;
}

export const MEMBER_PERMISSION_KIND: MEMBER_PERMISSION_KINDMap;

export interface MEMBER_REGISTER_KINDMap {
  MEMBER_REGISTER_KIND_DEFAULT: 0;
  MEMBER_REGISTER_KIND_REGISTERED: 1;
  MEMBER_REGISTER_KIND_COMPLETED: 2;
  MEMBER_REGISTER_KIND_FAILED_DENY: 3;
  MEMBER_REGISTER_KIND_FAILED_WAIT: 4;
  MEMBER_REGISTER_KIND_RESET_PASSWORD: 5;
}

export const MEMBER_REGISTER_KIND: MEMBER_REGISTER_KINDMap;

export interface MEMBER_RECORD_KINDMap {
  MEMBER_RECORD_KIND_DEFAULT: 0;
  MEMBER_RECORD_KIND_MEMBER_CREATED: 10;
  MEMBER_RECORD_KIND_MEMBER_PERMISSION_UPDATED: 11;
  MEMBER_RECORD_KIND_DEPARTMENT_CREATED: 20;
  MEMBER_RECORD_KIND_DEPARTMENT_UPDATED: 21;
  MEMBER_RECORD_KIND_DEPARTMENT_DELETED: 22;
  MEMBER_RECORD_KIND_DEPARTMENT_NODE_UPDATED: 31;
  MEMBER_RECORD_KIND_SCENE_CREATED: 100;
  MEMBER_RECORD_KIND_SCENE_UPDATED: 101;
  MEMBER_RECORD_KIND_SCENE_DELETED: 102;
  MEMBER_RECORD_KIND_CONNECTOR_CONFIRM: 200;
  MEMBER_RECORD_KIND_CONNECTOR_DENY: 201;
  MEMBER_RECORD_KIND_CONNECTOR_DELETED: 202;
  MEMBER_RECORD_KIND_CONNECTOR_EMERGENCY_START: 203;
  MEMBER_RECORD_KIND_CONNECTOR_EMERGENCY_END: 204;
  MEMBER_RECORD_KIND_CONNECTOR_SCHEDULE_CREATED: 300;
  MEMBER_RECORD_KIND_CONNECTOR_SCHEDULE_DELETED: 302;
  MEMBER_RECORD_KIND_CONNECTOR_SCENE_ADDED: 310;
  MEMBER_RECORD_KIND_CONNECTOR_SCENE_DELETED: 311;
  MEMBER_RECORD_KIND_CONNECTOR_EMERGENCY_SCENE_CREATED: 312;
  MEMBER_RECORD_KIND_CONNECTOR_EMERGENCY_SCENE_DELETED: 313;
  MEMBER_RECORD_KIND_CONNECTOR_DEPARTMENT_ADDED: 321;
  MEMBER_RECORD_KIND_CONNECTOR_DEPARTMENT_DELETED: 322;
  MEMBER_RECORD_KIND_SCHEDULE_CREATED: 400;
  MEMBER_RECORD_KIND_SCHEDULE_UPDATED: 401;
  MEMBER_RECORD_KIND_SCHEDULE_DELETED: 402;
  MEMBER_RECORD_KIND_SCHEDULE_SCENE_CREATED: 410;
  MEMBER_RECORD_KIND_SCHEDULE_SCENE_UPDATED: 411;
  MEMBER_RECORD_KIND_SCHEDULE_SCENE_DELETED: 412;
  MEMBER_RECORD_KIND_RESOURCE_FOLDER_CREATED: 420;
  MEMBER_RECORD_KIND_RESOURCE_FOLDER_UPDATED: 421;
  MEMBER_RECORD_KIND_RESOURCE_FOLDER_DELETED: 422;
  MEMBER_RECORD_KIND_SCENE_FOLDER_CREATED: 430;
  MEMBER_RECORD_KIND_SCENE_FOLDER_UPDATED: 431;
  MEMBER_RECORD_KIND_SCENE_FOLDER_DELETED: 432;
}

export const MEMBER_RECORD_KIND: MEMBER_RECORD_KINDMap;

export interface SCENE_COMPONENTS_KINDMap {
  SCENE_COMPONENTS_KIND_DEFAULT: 0;
  SCENE_COMPONENTS_KIND_SCENE: 1;
  SCENE_COMPONENTS_KIND_COMMON: 2;
  SCENE_COMPONENTS_KIND_BUTTON: 3;
  SCENE_COMPONENTS_KIND_VIDEO: 4;
  SCENE_COMPONENTS_KIND_IMAGE: 5;
  SCENE_COMPONENTS_KIND_SUBTITLE: 6;
  SCENE_COMPONENTS_KIND_PDF: 7;
  SCENE_COMPONENTS_KIND_MAP: 8;
  SCENE_COMPONENTS_KIND_WEATHER: 9;
  SCENE_COMPONENTS_KIND_CLOCK: 10;
  SCENE_COMPONENTS_KIND_WEB: 11;
  SCENE_COMPONENTS_KIND_SLIDE_IMAGE: 12;
  SCENE_COMPONENTS_KIND_SLIDE_VIDEO: 13;
  SCENE_COMPONENTS_KIND_TEXT: 14;
}

export const SCENE_COMPONENTS_KIND: SCENE_COMPONENTS_KINDMap;

export interface SCENE_RESOURCE_KINDMap {
  SCENE_RESOURCE_KIND_DEFAULT: 0;
  SCENE_RESOURCE_KIND_IMAGE: 1;
  SCENE_RESOURCE_KIND_VIDEO: 2;
  SCENE_RESOURCE_KIND_SUBTITLE: 3;
  SCENE_RESOURCE_KIND_PDF: 4;
  SCENE_RESOURCE_KIND_MAP: 5;
  SCENE_RESOURCE_KIND_SCENE: 6;
  SCENE_RESOURCE_KIND_SCREENCAPTURE: 7;
}

export const SCENE_RESOURCE_KIND: SCENE_RESOURCE_KINDMap;

export interface CONNECTOR_REGISTER_KINDMap {
  CONNECTOR_REGISTER_KIND_DEFAULT: 0;
  CONNECTOR_REGISTER_KIND_REGISTERED: 1;
  CONNECTOR_REGISTER_KIND_COMFIRM: 2;
  CONNECTOR_REGISTER_KIND_DENY: 3;
}

export const CONNECTOR_REGISTER_KIND: CONNECTOR_REGISTER_KINDMap;

export interface DEPARTMENT_FOLDER_KINDMap {
  DEPARTMENT_FOLDER_KIND_DEFAULT: 0;
  DEPARTMENT_FOLDER_KIND_RESOURCE: 1;
  DEPARTMENT_FOLDER_KIND_SCENE: 2;
}

export const DEPARTMENT_FOLDER_KIND: DEPARTMENT_FOLDER_KINDMap;

export interface TEXT_ALIGN_KINDMap {
  TEXT_ALIGN_KIND_DEFAULT: 0;
  TEXT_ALIGN_KIND_VERTICAL_START: 1;
  TEXT_ALIGN_KIND_VERTICAL_CENTER: 2;
  TEXT_ALIGN_KIND_VERTICAL_END: 3;
  TEXT_ALIGN_KIND_HORIZONTAL_START: 4;
  TEXT_ALIGN_KIND_HORIZONTAL_CENTER: 5;
  TEXT_ALIGN_KIND_HORIZONTAL_END: 6;
}

export const TEXT_ALIGN_KIND: TEXT_ALIGN_KINDMap;

