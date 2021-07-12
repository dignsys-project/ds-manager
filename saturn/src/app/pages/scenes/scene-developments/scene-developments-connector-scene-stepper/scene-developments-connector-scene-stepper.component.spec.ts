import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SceneDevelopmentsConnectorSceneStepperComponent } from './scene-developments-connector-scene-stepper.component';

describe('SceneDevelopmentsConnectorSceneStepperComponent', () => {
  let component: SceneDevelopmentsConnectorSceneStepperComponent;
  let fixture: ComponentFixture<SceneDevelopmentsConnectorSceneStepperComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SceneDevelopmentsConnectorSceneStepperComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SceneDevelopmentsConnectorSceneStepperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
