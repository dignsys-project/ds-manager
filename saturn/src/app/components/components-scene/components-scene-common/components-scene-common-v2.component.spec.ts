import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponentsSceneCommonV2Component } from './components-scene-common-v2.component';

describe('ComponentsSceneCommonV2Component', () => {
  let component: ComponentsSceneCommonV2Component;
  let fixture: ComponentFixture<ComponentsSceneCommonV2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ComponentsSceneCommonV2Component],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComponentsSceneCommonV2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
