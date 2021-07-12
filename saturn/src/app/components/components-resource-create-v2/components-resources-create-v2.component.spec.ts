import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ComponentsResourcesCreateV2Component } from './components-resources-create-v2.component';

describe('ComponentsResourcesCreateV2Component', () => {
  let component: ComponentsResourcesCreateV2Component;
  let fixture: ComponentFixture<ComponentsResourcesCreateV2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ComponentsResourcesCreateV2Component],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComponentsResourcesCreateV2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
