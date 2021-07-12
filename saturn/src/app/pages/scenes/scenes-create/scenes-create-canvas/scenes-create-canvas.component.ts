import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSelectChange } from '@angular/material/select';
import { Guid } from 'guid-typescript';
import { filter, takeWhile } from 'rxjs/operators';
import { AbstractSceneCommon } from 'src/app/components/components-scene/abstract-scene-common';
import { ICanvasResolution } from 'src/app/common/canvas-resolution';
import { ComponentsSceneCanvasComponent } from 'src/app/components/components-scene/components-scene-canvas/components-scene-canvas.component';
import { SceneBaseElement } from 'src/app/models/scene-base-element';
import { SCENE_COMPONENTS_KIND } from 'src/app/protocols/common_pb';
import { ScenesCreateService } from '../../scenes-create.service';
import { ScenesCreateCommonCoordinateComponent } from '../scenes-create-common/scenes-create-common-coordinate/scenes-create-common-coordinate.component';
import { fromEvent } from 'rxjs';
import { ScenesCreateCopyPasteService } from '../scenes-create-copy-paste.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-scenes-create-canvas',
  templateUrl: './scenes-create-canvas.component.html',
  styleUrls: ['./scenes-create-canvas.component.scss'],
})
export class ScenesCreateCanvasComponent implements OnInit {
  private _bSubscribe: boolean = true;

  canvas: AbstractSceneCommon;

  resolutions: Array<ICanvasResolution> = new Array<ICanvasResolution>();
  resolutionForms: FormGroup;
  selectedResolutionId: Guid;

  dispatchSceneForms: FormGroup;

  get haveDispatchScene(): boolean {
    return undefined != this.canvas?.dispatchSceneElement?.scene;
  }

  get dispatchScene(): SceneBaseElement {
    return this.canvas?.dispatchSceneElement?.scene;
  }

  get isUseDispatch(): boolean {
    return (
      undefined != this.dispatchSceneForms &&
      true == (this.dispatchSceneForms.get('is_used').value as boolean)
    );
  }

  get createdDispatchSceneForms(): boolean {
    return undefined != this.dispatchSceneForms;
  }

  get haveCanvas(): boolean {
    return undefined != this.canvas;
  }

  constructor(
    private formBuilder: FormBuilder,
    private service: ScenesCreateService,
    private copyPasteService: ScenesCreateCopyPasteService
  ) {
    this.resolutions.push({
      width: 1280,
      height: 720,
      name: '720p',
      id: Guid.create(),
      fixed: true,
    });
    this.resolutions.push({
      width: 1920,
      height: 1080,
      name: '1080p',
      id: Guid.create(),
      fixed: true,
    });
    this.resolutions.push({
      width: 2560,
      height: 1440,
      name: '1440p (QHD)',
      id: Guid.create(),
      fixed: true,
    });
    this.resolutions.push({
      width: 3840,
      height: 2160,
      name: '2160p (UHD)',
      id: Guid.create(),
      fixed: true,
    });

    this.resolutions.push({
      width: 1920,
      height: 1080,
      name: '사용자 정의',
      id: Guid.create(),
      fixed: false,
    });

    this.resolutionForms = formBuilder.group({
      width: [0, Validators.required],
      height: [0, Validators.required],
    });

    this.resolutionForms.valueChanges
      .pipe(takeWhile(() => this._bSubscribe))
      .pipe(filter((x) => 0 < x.width && 0 < x.height))
      .subscribe((x) => {
        this.onResolutionFormsChanged(x.width, x.height);
      });

    this.service.selected$
      .pipe(takeWhile(() => this._bSubscribe))
      .pipe(filter((x) => undefined != x))
      .pipe(
        filter(
          (x) => x.kind === SCENE_COMPONENTS_KIND.SCENE_COMPONENTS_KIND_SCENE
        )
      )
      .subscribe((x) => this.onFoundCanvas(x));
  }

  ngOnInit(): void {
    fromEvent(window, 'keydown')
      .pipe(takeWhile(() => this._bSubscribe))
      .subscribe(async (event: KeyboardEvent) => {
        if (event.key.toLocaleLowerCase() == 'control') {
          if (!this.copyPasteService.isUse) {
            this.copyPasteService.isUse = true;
          }
        }
      });

    fromEvent(window, 'keyup')
      .pipe(takeWhile(() => this._bSubscribe))
      .subscribe(async (event: KeyboardEvent) => {
        if (event.key.toLocaleLowerCase() == 'control') {
          this.copyPasteService.isUse = false;
        } else if (event.key == 'v') {
          await this.copyPasteService.pasteSceneCommonAsync(this.canvas);
        }
      });
  }

  ngOnDestroy(): void {
    this._bSubscribe = false;
  }

  public onFoundCanvas(sceneCommon: AbstractSceneCommon) {
    this.canvas = sceneCommon;

    const canvas = sceneCommon as ComponentsSceneCanvasComponent;

    const canvasSize = sceneCommon.size;
    const resolution = this.resolutions.find(
      (x) => x.width === canvasSize.width && x.height === canvasSize.height
    );

    // 경로 이미지에 대한 정보들을 전부 안보이도록 해준다.
    ScenesCreateCommonCoordinateComponent.routes.map((x) => x.dontShow());

    if (undefined == resolution) {
      this.onChangedCanvasSize(canvasSize.width, canvasSize.height);
    } else {
      this.onChangedCanvasSize(resolution.width, resolution.height);
    }

    if (undefined != canvas.dispatchSceneElement) {
      this.dispatchSceneForms = this.formBuilder.group({
        is_used: [canvas.dispatchSceneElement.isUsed, [Validators.required]],
        is_touch: [
          canvas.dispatchSceneElement.isTouched,
          [Validators.required],
        ],
        seconds: [canvas.dispatchSceneElement.seconds, [Validators.required]],
        scene: [canvas.dispatchSceneElement.scene, [Validators.required]],
      });

      // dispatch scene

      this.dispatchSceneForms
        .get('is_used')
        .valueChanges.pipe(takeWhile(() => this._bSubscribe))
        .subscribe((isUsed) => {
          this.canvas.dispatchSceneElement.isUsed = isUsed;
        });

      this.dispatchSceneForms
        .get('is_touch')
        .valueChanges.pipe(takeWhile(() => this._bSubscribe))
        .subscribe((isTouched) => {
          this.canvas.dispatchSceneElement.isTouched = isTouched;
        });

      this.dispatchSceneForms
        .get('seconds')
        .valueChanges.pipe(takeWhile(() => this._bSubscribe))
        .subscribe((seconds) => {
          this.canvas.dispatchSceneElement.seconds = Math.round(seconds);
        });

      this.dispatchSceneForms
        .get('scene')
        .valueChanges.pipe(takeWhile(() => this._bSubscribe))
        .subscribe((scene: SceneBaseElement) => {
          if (undefined != scene) {
            this.canvas.dispatchSceneElement.sceneId = scene.sceneId;
            this.canvas.dispatchSceneElement.scene = scene;
          }
        });
    }
  }

  sceneName(): string {
    return '캔버스';
  }

  onResolutionFormsChanged(width: number, height: number) {
    const resolution = this.resolutions.find(
      (x) => x.width === width && x.height === height
    );

    if (undefined != resolution) {
      this.selectedResolutionId = resolution.id;
    } else {
      this.selectedResolutionId = this.resolutions.find(
        (x) => x.fixed === false
      ).id;
    }

    if (
      this.canvas.size.width === width &&
      this.canvas.size.height === height
    ) {
      return;
    }

    this.canvas.changeSize(width, height);
  }
  onResolutionSelectChanged(event: MatSelectChange) {
    const resolution = this.resolutions.find((x) =>
      x.id.equals(this.selectedResolutionId)
    );

    if (undefined == resolution) {
      return;
    }

    this.onChangedCanvasSize(resolution.width, resolution.height);
  }

  private onChangedCanvasSize(width: number, height: number) {
    this.resolutionForms.get('width').setValue(width);
    this.resolutionForms.get('height').setValue(height);
  }

  onChangedComponentsSceneItem(element: SceneBaseElement) {
    this.dispatchSceneForms.get('scene').setValue(element);
  }
}
