import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponentsSceneCommonButtonComponent } from './components-scene-common-button.component';

describe('ComponentsSceneCommonButtonComponent', () => {
  let component: ComponentsSceneCommonButtonComponent;
  let fixture: ComponentFixture<ComponentsSceneCommonButtonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComponentsSceneCommonButtonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComponentsSceneCommonButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
