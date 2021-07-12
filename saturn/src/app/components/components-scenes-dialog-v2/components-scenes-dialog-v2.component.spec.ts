import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponentsScenesDialogV2Component } from './components-scenes-dialog-v2.component';

describe('ComponentsScenesDialogV2Component', () => {
  let component: ComponentsScenesDialogV2Component;
  let fixture: ComponentFixture<ComponentsScenesDialogV2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComponentsScenesDialogV2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComponentsScenesDialogV2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
