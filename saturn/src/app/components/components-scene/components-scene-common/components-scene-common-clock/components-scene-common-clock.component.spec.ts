import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponentsSceneCommonClockComponent } from './components-scene-common-clock.component';

describe('ComponentsSceneCommonClockComponent', () => {
  let component: ComponentsSceneCommonClockComponent;
  let fixture: ComponentFixture<ComponentsSceneCommonClockComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComponentsSceneCommonClockComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComponentsSceneCommonClockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
