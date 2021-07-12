import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SceneDevelopmentsSceneListComponent } from './scene-developments-scene-list.component';

describe('SceneDevelopmentsSceneListComponent', () => {
  let component: SceneDevelopmentsSceneListComponent;
  let fixture: ComponentFixture<SceneDevelopmentsSceneListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SceneDevelopmentsSceneListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SceneDevelopmentsSceneListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
