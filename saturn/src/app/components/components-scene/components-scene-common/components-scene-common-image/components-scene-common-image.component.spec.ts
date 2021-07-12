import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponentsSceneCommonImageComponent } from './components-scene-common-image.component';

describe('ComponentsSceneCommonImageComponent', () => {
  let component: ComponentsSceneCommonImageComponent;
  let fixture: ComponentFixture<ComponentsSceneCommonImageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComponentsSceneCommonImageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComponentsSceneCommonImageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
