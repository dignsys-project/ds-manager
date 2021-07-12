import { isPromise } from '@angular/compiler/src/util';
import { Component, OnInit, Provider } from '@angular/core';
import { MatCheckboxChange } from '@angular/material/checkbox';
import { Guid } from 'guid-typescript';
import { take } from 'rxjs/operators';
import { CommonExtensions } from 'src/app/commons/common-extensions';
import { SceneBaseElement } from 'src/app/models/scene-base-element';
import { SceneBase, SceneBlueprint } from 'src/app/protocols/common_pb';
import { ScenesService } from 'src/app/services/scenes.service';
import { ValidateService } from 'src/app/services/validate.service';
import { ScenesHeaderService } from '../scenes-header.service';

interface IProblem {
  doesnothaveScene: boolean;
  secondsZero: boolean;
}

interface IComponentProblem extends IProblem {
  uuid: Guid;
  name: string;
}

class SceneValidateElement {
  constructor(public element: SceneBaseElement) {}

  haveBlueprint: boolean;

  dispatchScene: IProblem;

  sceneButtons: Array<IComponentProblem>;

  completed: boolean = false;

  get name(): string {
    return this.element.name;
  }

  get haveProblem(): boolean {
    return (
      !this.haveBlueprint ||
      this.haveProblemDispatch ||
      0 < this.sceneButtons?.length
    );
  }

  get haveProblemDispatch(): boolean {
    return this.haveProblemDispatchScene || this.haveProblemDispatchSecond;
  }

  get haveProblemDispatchScene(): boolean {
    return true == this.dispatchScene?.doesnothaveScene;
  }
  get haveProblemDispatchSecond(): boolean {
    return true == this.dispatchScene?.secondsZero;
  }
}

@Component({
  selector: 'app-scenes-validate',
  templateUrl: './scenes-validate.component.html',
  styleUrls: ['./scenes-validate.component.scss'],
})
export class ScenesValidateComponent implements OnInit {
  private _elements: Array<SceneValidateElement>;

  private _bufferCount: number = 0;
  private _bufferCurrent: number = 0;

  private _progressCount: number = 0;
  private _progressCurrent: number = 0;

  showDispatch: boolean = true;
  showComponents: boolean = true;

  get bufferSize(): number {
    return this._bufferCount == 0
      ? 0
      : (this._bufferCurrent / this._bufferCount) * 100;
  }

  get progressSize(): number {
    return this._progressCount == 0
      ? 0
      : (this._progressCurrent / this._progressCount) * 100;
  }

  get elements(): Array<SceneValidateElement> {
    return this._elements?.filter((x) => x.completed && x.haveProblem);
  }

  get scenesCount(): number {
    return this._progressCurrent;
  }

  get validateScenesCount(): number {
    return this._bufferCurrent;
  }

  constructor(
    private validateService: ValidateService,
    private scenesService: ScenesService,
    headerService: ScenesHeaderService
  ) {
    headerService.title$.next('씬 검증');
  }

  async ngOnInit(): Promise<void> {
    this._elements = (await this.getScenesAsync()).map(
      (element) => new SceneValidateElement(element)
    );

    await this.validateBlueprint();
  }

  HaveBlueprint(item: SceneValidateElement): boolean {
    return !item?.haveBlueprint;
  }

  haveDispatch;

  onChangedShowChange(event: MatCheckboxChange) {
    this.showDispatch = event.checked;
  }

  onChangedShowComponents(event: MatCheckboxChange) {
    this.showComponents = event.checked;
  }

  private async getScenesAsync(): Promise<Array<SceneBaseElement>> {
    let index = 0;
    const size = 1;
    let itemCount = 0;

    const elements = new Array<SceneBaseElement>();

    try {
      do {
        const response = await this.validateService
          .requestGetScenes(index, size)
          .pipe(take(1))
          .toPromise();

        if (CommonExtensions.isSuccess(response.getCommon())) {
          itemCount = response.getItemscount();

          elements.push(
            ...response
              .getScenebasesList()
              .map((x) => SceneBaseElement.fromMessageBase(x))
          );

          this._bufferCurrent = elements.length;
          this._bufferCount = itemCount;
        }

        index++;
      } while (elements.length < itemCount);
    } catch (error) {
      console.error(error);
    }

    return elements;
  }

  private async validateBlueprint(): Promise<void> {
    if (undefined == this._elements) {
      return;
    }

    try {
      this._progressCount = this._elements.length;

      for (const element of this._elements) {
        const response = await this.scenesService
          .requestGetSceneBlueprintV2(element.element.sceneId)
          .pipe(take(1))
          .toPromise();

        if (CommonExtensions.isSuccess(response.getCommon())) {
          element.haveBlueprint = true;
          this.parseBlueprint(element, response.getBlueprint());
        } else {
          element.haveBlueprint = false;
        }
        element.completed = true;

        this._progressCurrent++;
      }
    } catch (error) {
      console.error(error);
    }
  }

  private parseBlueprint(
    element: SceneValidateElement,
    blueprint: SceneBlueprint
  ): SceneValidateElement {
    if (blueprint.hasDispatchscene()) {
      element.dispatchScene = <IProblem>{
        doesnothaveScene: false,
        secondsZero: false,
      };

      const dispatchScene = blueprint.getDispatchscene();
      if (dispatchScene.getIsused()) {
        const sceneId = dispatchScene.getSceneid();
        if (undefined == sceneId || 0 >= sceneId) {
          element.dispatchScene.doesnothaveScene = true;
        }

        const seconds = dispatchScene.getSeconds();
        if (undefined == seconds || 0 >= seconds) {
          element.dispatchScene.secondsZero = true;
        }
      }
    }

    element.sceneButtons = blueprint
      .getPartsList()
      .filter((x) => undefined != x.getButton())
      .map((x) => {
        const sceneButton = x.getButton();

        const sceneId = sceneButton.getSceneid();
        if (undefined == sceneId || 0 >= sceneId) {
          const common = x.getCommon();
          return <IComponentProblem>{
            uuid: Guid.parse(common.getId()),
            name: common.getName(),
            doesnothaveScene: true,
          };
        } else {
          return undefined;
        }
      })
      .filter((x) => undefined != x);

    return element;
  }
}
