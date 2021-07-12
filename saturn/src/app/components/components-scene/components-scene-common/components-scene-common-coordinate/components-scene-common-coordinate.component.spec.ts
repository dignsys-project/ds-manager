import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponentsSceneCommonCoordinateComponent } from './components-scene-common-coordinate.component';

describe('ComponentsSceneCommonCoordinateComponent', () => {
  let component: ComponentsSceneCommonCoordinateComponent;
  let fixture: ComponentFixture<ComponentsSceneCommonCoordinateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComponentsSceneCommonCoordinateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComponentsSceneCommonCoordinateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
