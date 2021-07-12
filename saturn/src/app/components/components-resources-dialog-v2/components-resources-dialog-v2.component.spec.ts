import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponentsResourcesDialogV2Component } from './components-resources-dialog-v2.component';

describe('ComponentsResourcesDialogV2Component', () => {
  let component: ComponentsResourcesDialogV2Component;
  let fixture: ComponentFixture<ComponentsResourcesDialogV2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComponentsResourcesDialogV2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComponentsResourcesDialogV2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
