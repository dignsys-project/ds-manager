import { MatDialog } from '@angular/material/dialog';
import { take, takeWhile } from 'rxjs/operators';
import {
  ComponentsCommonDialogComponent,
  DIALOG_KIND,
} from '../components/components-common-dialog/components-common-dialog.component';
import { AbstractSceneCommon } from '../components/components-scene/abstract-scene-common';
import { ComponentsSceneCanvasComponent } from '../components/components-scene/components-scene-canvas/components-scene-canvas.component';
import { ComponentsSceneCommonV2Component } from '../components/components-scene/components-scene-common/components-scene-common-v2.component';
import { ComponentsTimelineComponent } from '../components/components-timeline/components-timeline.component';
import { FeedElement } from '../models/feed-element';
import { PreviewResourceElement } from '../models/preview-resource-element';
import { ResourceElement } from '../models/resource-element';
import { SceneBaseElement } from '../models/scene-base-element';
import { SceneElement } from '../models/scene-element';
import { ScenePartWeatherElement } from '../models/scene-part-weather-element';
import {
  SceneBlueprint,
  ScenePart,
  SCENE_COMPONENTS_KIND,
} from '../protocols/common_pb';
import { ScenesService } from '../services/scenes.service';
import { SubtitleService } from '../services/subtitle.service';
import { CommonExtensions } from './common-extensions';

export class SceneExtensions {
  /**
   * make component from scene blueprint parts
   * @param component created component
   * @param message scenePart message
   * @param container elements
   * @param sceneService sceneService
   */
  public static async makeComponentFromPartAsync(
    component: AbstractSceneCommon,
    message: ScenePart,
    container: Array<AbstractSceneCommon>,
    sceneService: ScenesService,
    subtitleService: SubtitleService,
    resources?: Array<ResourceElement>,
    sceneBases?: Array<SceneBaseElement>
  ) {
    const common = message.getCommon();
    component.fromMessage(common);
    component.makeElement(CommonExtensions.getScenePartKind(message));

    if (message.hasButton()) {
      // button component
      const buttonScenePart = message.getButton();
      component.buttonElement.fromMessage(buttonScenePart, null);

      if (undefined != resources) {
        // refresh newest resource
        const resourceId = component.buttonElement.resource?.resourceId;

        if (undefined != resourceId) {
          component.buttonElement.resource = resources.find(
            (x) => x.resourceId == resourceId
          );
        }
      }

      if (undefined != sceneBases) {
        // request next scene Id that button had.
        const sceneId = buttonScenePart.getSceneid();
        if (0 < sceneId) {
          component.buttonElement.nextScene = sceneBases.find(
            (x) => x.sceneId == sceneId
          );
        }
      }
    } else if (message.hasImage()) {
      // image component
      const imagePart = message.getImage();
      component.imageElement.fromMessage(imagePart);

      if (undefined != resources) {
        // refresh newest resource
        const resourceId = component.imageElement.resource?.resourceId;
        if (undefined != resourceId) {
          component.imageElement.resource = resources.find(
            (x) => x.resourceId == resourceId
          );
        }
      }
    } else if (message.hasVideo()) {
      // video component
      const videoPart = message.getVideo();
      component.videoElement.fromMessage(videoPart);

      if (undefined != resources) {
        // refresh newest resource
        const resourceId = component.videoElement.resource?.resourceId;
        if (undefined != resourceId) {
          component.videoElement.resource = resources.find(
            (x) => x.resourceId == resourceId
          );
        }
      }
    } else if (message.hasSubtitle()) {
      const subtitle = message.getSubtitle();
      component.subtitleElement.fromMessage(subtitle);
      const resourceId = component.subtitleElement.resource?.resourceId;

      if (undefined != resources) {
        // refresh newest resource
        if (undefined != resourceId) {
          component.subtitleElement.resource = resources.find(
            (x) => x.resourceId == resourceId
          );
        }
      }

      const rssElement = component.subtitleElement.rss;
      if (undefined != rssElement) {
        const response = await subtitleService
          .requestGetRss(rssElement.address)
          .pipe(take(1))
          .toPromise();
        if (CommonExtensions.isSuccess(response.getCommon())) {
          const feedElement = FeedElement.fromMessage(response.getFeed());
          component.subtitleElement.feedElement = feedElement;
          component.subtitleElement.setFeed(
            rssElement,
            feedElement,
            component.calculatedWidth(),
            component.subtitleElement.textElement.textSize
          );
        }
      } // :undefined != rssElement
    } else if (message.hasCoordinate()) {
      const coordinate = message.getCoordinate();

      // find owner scene part image
      const scenePartImage = container.find(
        (x) => x.id.toString() === coordinate.getScenepartimageid()
      );
      if (undefined == scenePartImage) {
        console.error(
          `scene-extenisons, can not find scenePartImage, image : ${coordinate.getScenepartimageid()}`
        );
      }

      // coordinate from message
      component.coordinateElement.fromMessage(coordinate, scenePartImage);

      // refresh newest resource
      if (undefined != resources) {
        const resourceId = component.coordinateElement.resource?.resourceId;
        if (undefined != resourceId) {
          component.coordinateElement.resource = resources.find(
            (x) => x.resourceId == resourceId
          );
        }

        // refresh newest coordinate resource
        const coordinateResourceId =
          component.coordinateElement.coordinateResource?.resourceId;
        if (undefined != coordinateResourceId) {
          component.coordinateElement.coordinateResource = resources.find(
            (x) => x.resourceId == coordinateResourceId
          );
        }

        // refresh newest source resource
        const sourceResourceId =
          component.coordinateElement.sourceResource?.resourceId;
        if (undefined != sourceResourceId) {
          component.coordinateElement.sourceResource = resources.find(
            (x) => x.resourceId == sourceResourceId
          );
        }

        // refresh newest destination resource
        const destnationResourceId =
          component.coordinateElement.destinationResource?.resourceId;
        if (undefined != destnationResourceId) {
          component.coordinateElement.destinationResource = resources.find(
            (x) => x.resourceId == destnationResourceId
          );
        }
      }

      // coordinate.hasSourceresource();
    } else if (message.hasWeather()) {
      component.weatherElement = ScenePartWeatherElement.fromMessage(
        message.getWeather()
      );
    } else if (message.hasDocument()) {
      const documentScenePart = message.getDocument();
      component.documentElement.fromMessage(documentScenePart);

      if (undefined != resources) {
        // referesh newest resource
        const resourceId = component.documentElement.resource?.resourceId;
        if (undefined != resourceId) {
          component.documentElement.resource = resources.find(
            (x) => x.resourceId == resourceId
          );
        }
      }
    } else if (message.hasWeb()) {
      const webScenePart = message.getWeb();
      component.webElement.fromMessage(webScenePart);
    } else if (message.hasClock()) {
      const clockScenePart = message.getClock();
      component.clockElement.fromMessage(clockScenePart);

      if (undefined != resources) {
        // refresh newest resource
        const resourceId = component.clockElement.resource?.resourceId;
        if (undefined != resourceId) {
          component.clockElement.resource = resources.find(
            (x) => x.resourceId == resourceId
          );
        }
      }
    } else if (message.hasSlideimage()) {
      const scenePartMessage = message.getSlideimage();
      component.slideImageElement.fromMessage(scenePartMessage);

      if (undefined != resources) {
        // refresh newest resource
        component.slideImageElement.elements.forEach((x) => {
          const resourceId = x.resource?.resourceId;
          if (undefined != resourceId) {
            x.resource = resources.find((x) => x.resourceId == resourceId);
          }
        });
      }
    }

    return component;
  }

  public static async updateSceneAsync(
    dialog: MatDialog,
    service: ScenesService,
    sceneId: number,
    sceneName: string,
    components: Array<AbstractSceneCommon>,
    previewElement: PreviewResourceElement,
    onSuccess?: (element: SceneElement) => void,
    onFailed?: () => void
  ) {
    // make scene blueprint
    let blueprint: SceneBlueprint;
    if (undefined != components) {
      blueprint = this.makeSceneBlueprint(sceneName, components);
    }

    try {
      const response = await service
        .requestPutSceneV2(sceneId, sceneName, blueprint, previewElement)
        .pipe(take(1))
        .toPromise();

      if (CommonExtensions.isSuccess(response.getCommon())) {
        await ComponentsCommonDialogComponent.create(
          dialog,
          '수정 성공',
          DIALOG_KIND.DIALOG_KIND_DEFAULT,
          '성공적으로 수정하였습니다.'
        )
          .afterClosed()
          .pipe(take(1))
          .toPromise();

        if (undefined != onSuccess) {
          onSuccess(SceneElement.fromMessage(response.getScene()));
        }
        return true;
      } else {
        await ComponentsCommonDialogComponent.create(
          dialog,
          '수정 실패',
          DIALOG_KIND.DIALOG_KIND_DEFAULT,
          '수정이 실패하였습니다.',
          ['잠시 후 다시 이용 부탁드립니다.']
        )
          .afterClosed()
          .pipe(take(1))
          .toPromise();

        if (undefined != onFailed) {
          onFailed();
        }
      }
    } catch (error) {
      console.error(error);
    }

    return false;
  }

  /**
   * 씬을 생성 요청 한다.
   * @param dialog MatDialog
   * @param service ScenesService
   * @param departmentId  department id
   * @param departmentSceneFolderId department scene folder id
   * @param sceneName scene name
   * @param onSuccess on success function
   * @param onOverwrite on overwrite function
   * @param isTemporary is temporary
   * @param components scene components
   * @param previewElement previewElement
   */
  public static async createSceneAsync(
    dialog: MatDialog,
    service: ScenesService,
    departmentId: number,
    departmentSceneFolderId: number,
    sceneName: string,
    onSuccess: (element: SceneElement) => void,
    onOverwrite: (element: SceneBaseElement) => void,
    isTemporary: boolean,
    components?: Array<AbstractSceneCommon>,
    previewElement?: PreviewResourceElement
  ): Promise<boolean> {
    // make scene blueprint
    let blueprint: SceneBlueprint;
    if (undefined != components) {
      blueprint = this.makeSceneBlueprint(sceneName, components);
    }

    // request POST scene/{DEPARTMENT_ID}/{DEPARTMENT_SCENE_FOLDER_ID}

    try {
      const response = await service
        .requestPostSceneV2(
          departmentId,
          departmentSceneFolderId,
          sceneName,
          blueprint,
          previewElement,
          isTemporary
        )
        .pipe(take(1))
        .toPromise();

      //
      const common = response.getCommon();
      if (CommonExtensions.isSuccess(common)) {
        await ComponentsCommonDialogComponent.create(
          dialog,
          '저장 성공',
          DIALOG_KIND.DIALOG_KIND_DEFAULT,
          '성공적으로 저장하였습니다.'
        )
          .afterClosed()
          .toPromise();

        if (undefined != onSuccess) {
          onSuccess(SceneElement.fromMessage(response.getScene()));
        }

        return true;
      } else if (CommonExtensions.isOverWrite(common)) {
        if (response.hasOverwritescene() && undefined != onOverwrite) {
          await onOverwrite(
            SceneBaseElement.fromMessageBase(response.getOverwritescene())
          );
        }
      } else if (CommonExtensions.isDuplicated(common)) {
        ComponentsCommonDialogComponent.create(
          dialog,
          '중복된 씬 이름이 있습니다',
          DIALOG_KIND.DIALOG_KIND_ERROR,
          `씬 이름이 기존과 동일 합니다.`,
          ['문제가 계속 된다면', '새로 고침 후 처리해야합니다.']
        );
      } else {
        ComponentsCommonDialogComponent.create(
          dialog,
          '저장 실패',
          DIALOG_KIND.DIALOG_KIND_DEFAULT,
          `저장이 실패하였습니다.`,
          [
            '잠시 후 다시 이용 부탁드립니다.',
            `Error code : ${response.getCommon().getStatus()}`,
          ]
        );
      }
    } catch (error) {
      console.error(error);
    }

    return false;
  }

  private static makeSceneBlueprint(
    name: string,
    components: Array<AbstractSceneCommon>
  ): SceneBlueprint {
    const message = new SceneBlueprint();
    message.setName(name);

    const canvas = components.find((x) => x.isCanvas());
    message.setCanvas(canvas.toCommonMessage());

    const dispatchSceneElement = canvas.dispatchSceneElement;
    if (undefined != dispatchSceneElement) {
      message.setDispatchscene(dispatchSceneElement.toMessage());
    }

    const items = components.filter((x) => x.isComponents() && !x.isGenerated);
    message.setPartsList(items.map((x) => x.toMessage()));

    return message;
  }
}
