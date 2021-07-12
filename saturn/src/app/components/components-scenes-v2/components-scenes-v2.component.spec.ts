import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponentsScenesV2Component } from './components-scenes-v2.component';

describe('ComponentsScenesV2Component', () => {
  let component: ComponentsScenesV2Component;
  let fixture: ComponentFixture<ComponentsScenesV2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComponentsScenesV2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComponentsScenesV2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
