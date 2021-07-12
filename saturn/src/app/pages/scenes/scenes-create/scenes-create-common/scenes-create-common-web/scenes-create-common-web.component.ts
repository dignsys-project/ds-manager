import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { ScenePartWebElement } from 'src/app/models/scene-part-web-element';
import { AbstractSceneCommon } from 'src/app/components/components-scene/abstract-scene-common';
import { FormControl, Validators } from '@angular/forms';
import { takeWhile } from 'rxjs/operators';
import { isNullOrUndefined } from 'util';

@Component({
  selector: 'app-scenes-create-common-web',
  templateUrl: './scenes-create-common-web.component.html',
  styleUrls: ['./scenes-create-common-web.component.scss'],
})
export class ScenesCreateCommonWebComponent implements OnInit, OnDestroy {
  private m_bSubscribe: boolean = true;

  private m_Common: AbstractSceneCommon;

  @Input()
  set common(value: AbstractSceneCommon) {
    this.m_Common = value;

    if (!isNullOrUndefined(this.common?.webElement)) {
      this.formControl.setValue(this.common.webElement.url);
    }
  }
  get common(): AbstractSceneCommon {
    return this.m_Common;
  }

  get element(): ScenePartWebElement {
    return this.common?.webElement;
  }

  formControl: FormControl;

  webPreviewControl: FormControl;

  constructor() {
    this.formControl = new FormControl('', [Validators.required]);
    this.formControl.valueChanges
      .pipe(takeWhile(() => this.m_bSubscribe))
      .subscribe((x) => {
        this.element.url = x;
        this.element.urlChanged$.next(x);
      });

    this.webPreviewControl = new FormControl(this.element?.isShowWeb ?? false);
    this.webPreviewControl.valueChanges
      .pipe(takeWhile(() => this.m_bSubscribe))
      .subscribe((bChecked) => (this.element.isShowWeb = bChecked));
  }
  ngOnDestroy(): void {
    this.m_bSubscribe = false;
  }

  ngOnInit(): void {}
}
