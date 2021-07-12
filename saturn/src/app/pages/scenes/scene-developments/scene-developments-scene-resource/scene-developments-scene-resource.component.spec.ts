import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SceneDevelopmentsSceneResourceComponent } from './scene-developments-scene-resource.component';

describe('SceneDevelopmentsSceneResourceComponent', () => {
  let component: SceneDevelopmentsSceneResourceComponent;
  let fixture: ComponentFixture<SceneDevelopmentsSceneResourceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SceneDevelopmentsSceneResourceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SceneDevelopmentsSceneResourceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
