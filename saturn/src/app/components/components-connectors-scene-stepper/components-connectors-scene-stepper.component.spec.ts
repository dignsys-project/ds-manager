import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponentsConnectorsSceneStepperComponent } from './components-connectors-scene-stepper.component';

describe('ComponentsConnectorsSceneStepperComponent', () => {
  let component: ComponentsConnectorsSceneStepperComponent;
  let fixture: ComponentFixture<ComponentsConnectorsSceneStepperComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComponentsConnectorsSceneStepperComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComponentsConnectorsSceneStepperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
