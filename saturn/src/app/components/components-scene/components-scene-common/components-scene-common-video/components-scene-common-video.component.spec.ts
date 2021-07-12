import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponentsSceneCommonVideoComponent } from './components-scene-common-video.component';

describe('ComponentsSceneCommonVideoComponent', () => {
  let component: ComponentsSceneCommonVideoComponent;
  let fixture: ComponentFixture<ComponentsSceneCommonVideoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComponentsSceneCommonVideoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComponentsSceneCommonVideoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
