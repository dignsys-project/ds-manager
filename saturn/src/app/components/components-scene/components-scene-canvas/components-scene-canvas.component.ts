import {
  Component,
  ComponentFactoryResolver,
  ComponentRef,
  ElementRef,
  OnInit,
  ViewChild,
  ViewContainerRef,
} from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { Guid } from 'guid-typescript';
import html2canvas from 'html2canvas';
import { fromEvent } from 'rxjs';
import { filter, take, takeWhile } from 'rxjs/operators';
import { CommonExtensions } from 'src/app/commons/common-extensions';
import { PreviewResourceElement } from 'src/app/models/preview-resource-element';
import { ScenesCreateService } from 'src/app/pages/scenes/scenes-create.service';
import { ResourceService } from 'src/app/services/resource.service';
import { ScenesService } from 'src/app/services/scenes.service';
import {
  SceneBlueprint,
  SCENE_COMPONENTS_KIND,
  SCENE_COMPONENTS_KINDMap,
} from 'src/app/protocols/common_pb';
import { AbstractSceneComponent } from '../../abstract-scene-component';
import {
  ComponentsCommonDialogComponent,
  DIALOG_KIND,
} from '../../components-common-dialog/components-common-dialog.component';
import { AbstractSceneCommon } from '../abstract-scene-common';
import { ComponentsSceneSaveDialogComponent } from '../components-scene-save-dialog/components-scene-save-dialog.component';
import { ComponentsSceneCommonV2Component } from '../components-scene-common/components-scene-common-v2.component';
import {
  ComponentsSceneSaveV2DialogComponent,
  IComponentsSceneSaveV2DialogOutput,
} from '../components-scene-save-v2-dialog/components-scene-save-v2-dialog.component';
import { SceneExtensions } from 'src/app/commons/scene-extensions';
import { SceneElement } from 'src/app/models/scene-element';
import { SceneBaseElement } from 'src/app/models/scene-base-element';
import { ComponentsSceneOverwriteDialogComponent } from '../components-scene-overwrite-dialog/components-scene-overwrite-dialog.component';
import { DispatchSceneElement } from 'src/app/models/dispatch-scene-element';
import { environment } from 'src/environments/environment';
import { CanvasExtensions } from 'src/app/commons/canvas-extensions';
import { IPosition } from 'src/app/common/position';
import { SubtitleService } from 'src/app/services/subtitle.service';
import { ResourceElement } from 'src/app/models/resource-element';

@Component({
  selector: 'app-components-scene-canvas',
  templateUrl: './components-scene-canvas.component.html',
  styleUrls: ['./components-scene-canvas.component.scss'],
})
export class ComponentsSceneCanvasComponent
  extends AbstractSceneCommon
  implements OnInit {
  @ViewChild('DYNAMIC', { static: true, read: ViewContainerRef })
  container: ViewContainerRef;

  @ViewChild('scene', { static: true })
  elementRef: ElementRef<HTMLElement>;

  private m_bSubscribe: boolean = true;

  public isProcess: boolean = false;

  private m_CopiedCommonId: Guid;

  private m_bUseFunction: boolean = false;

  private m_CurrentItem: AbstractSceneCommon;

  private m_SceneId: number;
  private m_SceneName: string;

  constructor(
    private dialog: MatDialog,
    private scenesCreateService: ScenesCreateService,
    private resolver: ComponentFactoryResolver,
    private resourceService: ResourceService,
    private sceneService: ScenesService,
    private subtitleService: SubtitleService,
    private router: Router
  ) {
    super(
      scenesCreateService,
      SCENE_COMPONENTS_KIND.SCENE_COMPONENTS_KIND_SCENE
    );

    this.dispatchSceneElement = new DispatchSceneElement();

    // default canvas size
    this.size = { width: 1920, height: 1080 };
    if (!environment.production) {
      this.size = { width: 1040, height: 730 };
    }

    this.name = '캔버스';

    this.scenesCreateService.selected$
      .pipe(takeWhile(() => this.m_bSubscribe))
      .subscribe((element) => {
        this.m_CurrentItem = element;
      });

    fromEvent(window, 'keyup')
      .pipe(takeWhile(() => this.m_bSubscribe))
      .subscribe((event: KeyboardEvent) => {
        if (event.key === 'Control') {
          this.m_bUseFunction = false;
        }
      });

    this.position = { x: 0, y: 0 };
    this.backgroundColor = '#FFFFFF';
  }

  ngOnInit(): void {
    this.scenesCreateService.elements.push(this);
    this.scenesCreateService.select(this);
  }

  private copy() {
    this.scenesCreateService.selected$
      .pipe(take(1))
      .pipe(
        filter(
          (x) =>
            undefined != x &&
            x.kind !== SCENE_COMPONENTS_KIND.SCENE_COMPONENTS_KIND_SCENE
        )
      )
      .subscribe((x) => {
        this.m_CopiedCommonId = x.id;
      });
  }

  private paste() {
    if (undefined == this.m_CopiedCommonId) {
      return;
    }

    const element = this.scenesCreateService.elements.find(
      (x) => x.id === this.m_CopiedCommonId
    );
    if (undefined == element) {
      return;
    }
  }

  public async saveSceneCanvas() {
    if (!this.verifyScene()) {
      console.error('verifyScenes');
      return;
    }

    if (this.isProcess) {
      console.error('isProcess');
      return;
    }

    this.isProcess = true;

    let departmentId: number = 0;
    let departmentSceneFolderId: number = 0;
    let sceneName: string;

    if (this.m_SceneId > 0) {
      // open dialog for scene save
      sceneName = await ComponentsSceneSaveDialogComponent.open(this.dialog, {
        isModified: true,
        sceneName: this.m_SceneName,
      }).toPromise();
    } else {
      // open dialog for select department folder id
      const output = await ComponentsSceneSaveV2DialogComponent.create(
        this.dialog,
        {
          sceneName: this.m_SceneName,
          isModified: this.m_SceneId > 0,
        }
      ).toPromise();

      if (output == undefined) {
        this.isProcess = false;
        return;
      }

      departmentId = output.departmentId;
      departmentSceneFolderId = output.departmentSceneFolderId;
      sceneName = output.sceneName;
    }

    if (undefined == sceneName || sceneName.length <= 0) {
      this.isProcess = false;
      return;
    }

    try {
      // capture screenshot
      const canvas = await html2canvas(this.elementRef.nativeElement);

      // scene image save
      const captured = canvas.toDataURL();
      const previewElement = await this.createPreviewResourceUploadUsingEncodedAsync(
        captured
      );

      if (undefined == previewElement) {
        this.isProcess = false;
        return;
      }

      // check components
      const components = this.scenesCreateService.elements;

      const sceneId = this.m_SceneId;
      if (sceneId > 0) {
        // update scene
        await SceneExtensions.updateSceneAsync(
          this.dialog,
          this.sceneService,
          sceneId,
          sceneName,
          components,
          previewElement,
          (element: SceneElement) => this.router.navigate(['scenes/list'])
        );
        this.isProcess = false;
      } else {
        // create scene
        await SceneExtensions.createSceneAsync(
          this.dialog,
          this.sceneService,
          departmentId,
          departmentSceneFolderId,
          sceneName,
          (element: SceneElement) => this.router.navigate(['scenes/list']),
          async (element: SceneBaseElement) => {
            const bContinue: boolean = await ComponentsSceneOverwriteDialogComponent.create(
              this.dialog,
              element
            ).toPromise();

            if (true != bContinue) {
              return;
            }

            // 덮어 쓰시겠습니까?
            await SceneExtensions.updateSceneAsync(
              this.dialog,
              this.sceneService,
              element.sceneId,
              element.name,
              components,
              previewElement,
              (element: SceneElement) => this.router.navigate(['scenes/list'])
            );
          },
          false,
          components,
          previewElement
        );

        this.isProcess = false;
      }
    } catch (error) {
      console.error(error);
    }

    this.isProcess = false;
  }

  // from scene blueprint
  public async makeScenefromBlueprintAsync(
    sceneId: number,
    sceneName: string,
    blueprint: SceneBlueprint,
    resources: Array<ResourceElement>,
    sceneBases: Array<SceneBaseElement>
  ) {
    this.m_SceneId = sceneId;
    this.m_SceneName = sceneName;

    if (undefined != blueprint) {
      const canvasBlueprint = blueprint.getCanvas();
      this.fromMessage(canvasBlueprint);

      // for dispatch scene
      if (blueprint.hasDispatchscene()) {
        this.dispatchSceneElement.fromMessage(blueprint.getDispatchscene());

        if (
          this.dispatchSceneElement.isUsed &&
          this.dispatchSceneElement.sceneId > 0
        ) {
          // find dispatch scene
          // 20.12.04 실시간으로 확인할 수 있도록 하는게 더 좋다고 판단.
          // this.dispatchSceneElement.scene = sceneBases.find(x => x.sceneId == this.dispatchSceneElement.sceneId);
          const response = await this.sceneService
            .requestGetScenebySceneId(this.dispatchSceneElement.sceneId)
            .pipe(take(1))
            .toPromise();

          if (CommonExtensions.isSuccess(response.getCommon())) {
            this.dispatchSceneElement.scene = SceneBaseElement.fromMessageBase(
              response.getScene().getBase()
            );
          }
        }
      }

      const sceneParts = blueprint.getPartsList();

      for (let part of sceneParts) {
        if (CommonExtensions.isRouteButton(part)) {
          continue;
        }
        const component = this.createComponent(true);
        await SceneExtensions.makeComponentFromPartAsync(
          component,
          part,
          this.scenesCreateService.elements,
          this.sceneService,
          this.subtitleService,
          resources,
          sceneBases
        );
      }

      for (let part of sceneParts) {
        if (!CommonExtensions.isRouteButton(part)) {
          continue;
        }

        const component = this.createComponent(true);
        await SceneExtensions.makeComponentFromPartAsync(
          component,
          part,
          this.scenesCreateService.elements,
          this.sceneService,
          this.subtitleService,
          resources,
          sceneBases
        );
      }
    }

    this.scenesCreateService.select(this);
  }

  private verifyScene(): boolean {
    const elements = this.scenesCreateService.elements;

    const canvas = elements.find((x) => x.isCanvas());
    if (undefined == canvas) {
      return false;
    }

    // elements.find(x => x.isComponents)

    return true;
  }

  // override changeSize from AbstractSceneCommon
  public changeSize(width: number, height: number) {
    this.size.width = width;
    this.size.height = height;
  }

  widthPixel(): number {
    return this.calculatedWidth();
  }
  heightPixel(): number {
    return this.calculatedHeight();
  }

  public removeComponent(component: AbstractSceneComponent) {
    component.reference.destroy();
    // remove component from sceneCreateService;
    this.scenesCreateService.remove(component);
  }

  public async copyComponentAsync(
    common: AbstractSceneCommon,
    position: IPosition
  ) {
    const factory = this.resolver.resolveComponentFactory(
      ComponentsSceneCommonV2Component
    );

    // create component reference
    const component = this.container.createComponent(factory);

    // set instance
    const instance = component.instance;

    instance.reference = component;

    instance.makeElement(common.kind);

    await SceneExtensions.makeComponentFromPartAsync(
      instance,
      common.toMessage(),
      this.scenesCreateService.elements,
      this.sceneService,
      this.subtitleService
    );

    // set new id
    instance.id = Guid.create();

    // set position
    instance.changePosition(position.x, position.y);

    const size = common.size;

    instance.changeSize(size.width, size.height);

    // set element name
    instance.name = `${common.name} 복사`;

    instance.canvas = this;

    this.scenesCreateService.add(instance);

    this.scenesCreateService.select(instance);
  }

  /**
   * component add to scene that create
   * @param bSelecte is selected
   * @param kind component kind
   */
  public createComponent(
    bSelecte: boolean,
    kind?: SCENE_COMPONENTS_KINDMap[keyof SCENE_COMPONENTS_KINDMap]
  ): ComponentsSceneCommonV2Component {
    const factory = this.resolver.resolveComponentFactory(
      ComponentsSceneCommonV2Component
    );

    // create component reference
    const component = this.container.createComponent(factory);

    // set instance
    const instance = component.instance;

    instance.reference = component;

    // set position
    instance.position.x = 0;
    instance.position.y = 0;

    if (undefined != kind) {
      instance.makeElement(kind);
    }

    const elements = this.scenesCreateService.elements;

    // set element name
    instance.name = `기본 컴포넌트 #${elements.length}`;
    if (undefined != kind) {
      instance.name = `${AbstractSceneCommon.getComponentsName(
        kind
      )} 컴포넌트 #${elements.length}`;
    }

    //
    instance.canvas = this;

    this.scenesCreateService.add(instance);

    instance.changeSize(
      Math.ceil(this.size.width / 4),
      Math.ceil(this.size.height / 4)
    );

    if (bSelecte) {
      this.scenesCreateService.select(instance);
    }

    return instance;
  }

  onClickedContainerScene(event: MouseEvent) {
    event.stopPropagation();
    this.scenesCreateService.select(this);
  }

  // upload preview using encoded
  private async createPreviewResourceUploadUsingEncodedAsync(
    encodedImage: string
  ): Promise<PreviewResourceElement> {
    try {
      const response = await this.resourceService
        .requestPostPreviewResource(
          CommonExtensions.b64toFile(encodedImage),
          null,
          null
        )
        .pipe(take(1))
        .toPromise();

      if (undefined == response) {
        return undefined;
      }

      if (!CommonExtensions.isSuccess(response.getCommon())) {
        return undefined;
      }

      return PreviewResourceElement.fromMessage(response.getPreviewresource());
    } catch (error) {
      console.error(error);
    }

    return undefined;
  }
}
