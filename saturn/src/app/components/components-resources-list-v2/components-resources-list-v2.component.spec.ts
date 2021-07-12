import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ComponentsResourcesListV2Component } from './components-resources-list-v2.component';

describe('ComponentsResourcesListV2Component', () => {
  let component: ComponentsResourcesListV2Component;
  let fixture: ComponentFixture<ComponentsResourcesListV2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ComponentsResourcesListV2Component],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComponentsResourcesListV2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
