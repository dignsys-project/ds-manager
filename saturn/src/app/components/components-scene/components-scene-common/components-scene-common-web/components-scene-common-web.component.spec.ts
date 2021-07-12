import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponentsSceneCommonWebComponent } from './components-scene-common-web.component';

describe('ComponentsSceneCommonWebComponent', () => {
  let component: ComponentsSceneCommonWebComponent;
  let fixture: ComponentFixture<ComponentsSceneCommonWebComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComponentsSceneCommonWebComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComponentsSceneCommonWebComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
