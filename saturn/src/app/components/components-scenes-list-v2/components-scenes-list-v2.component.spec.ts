import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponentsScenesListV2Component } from './components-scenes-list-v2.component';

describe('ComponentsScenesListV2Component', () => {
  let component: ComponentsScenesListV2Component;
  let fixture: ComponentFixture<ComponentsScenesListV2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComponentsScenesListV2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComponentsScenesListV2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
