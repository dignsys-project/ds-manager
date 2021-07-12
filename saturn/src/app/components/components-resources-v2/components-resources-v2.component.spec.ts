import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponentsResourcesV2Component } from './components-resources-v2.component';

describe('ComponentsResourcesV2Component', () => {
  let component: ComponentsResourcesV2Component;
  let fixture: ComponentFixture<ComponentsResourcesV2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComponentsResourcesV2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComponentsResourcesV2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
