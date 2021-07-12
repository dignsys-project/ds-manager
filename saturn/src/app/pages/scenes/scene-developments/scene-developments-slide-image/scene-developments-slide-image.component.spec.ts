import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SceneDevelopmentsSlideImageComponent } from './scene-developments-slide-image.component';

describe('SceneDevelopmentsSlideImageComponent', () => {
  let component: SceneDevelopmentsSlideImageComponent;
  let fixture: ComponentFixture<SceneDevelopmentsSlideImageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SceneDevelopmentsSlideImageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SceneDevelopmentsSlideImageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
