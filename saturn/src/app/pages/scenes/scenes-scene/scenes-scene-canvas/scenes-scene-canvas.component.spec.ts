import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ScenesSceneCanvasComponent } from './scenes-scene-canvas.component';

describe('ScenesSceneCanvasComponent', () => {
  let component: ScenesSceneCanvasComponent;
  let fixture: ComponentFixture<ScenesSceneCanvasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ScenesSceneCanvasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ScenesSceneCanvasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
