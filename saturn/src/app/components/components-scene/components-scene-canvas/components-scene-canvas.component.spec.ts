import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponentsSceneCanvasComponent } from './components-scene-canvas.component';

describe('ComponentsSceneCanvasComponent', () => {
  let component: ComponentsSceneCanvasComponent;
  let fixture: ComponentFixture<ComponentsSceneCanvasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComponentsSceneCanvasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComponentsSceneCanvasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
