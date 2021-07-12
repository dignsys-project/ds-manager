import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponentsResourcesCreateElementComponent } from './components-resources-create-element.component';

describe('ComponentsResourcesCreateElementComponent', () => {
  let component: ComponentsResourcesCreateElementComponent;
  let fixture: ComponentFixture<ComponentsResourcesCreateElementComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ComponentsResourcesCreateElementComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(
      ComponentsResourcesCreateElementComponent
    );
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
