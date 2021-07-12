import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponentsSceneCommonSlideImageComponent } from './components-scene-common-slide-image.component';

describe('ComponentsSceneCommonSlideImageComponent', () => {
  let component: ComponentsSceneCommonSlideImageComponent;
  let fixture: ComponentFixture<ComponentsSceneCommonSlideImageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComponentsSceneCommonSlideImageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComponentsSceneCommonSlideImageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
