import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponentsDepartmentBaseItemComponent } from './components-department-base-item.component';

describe('ComponentsDepartmentBaseItemComponent', () => {
  let component: ComponentsDepartmentBaseItemComponent;
  let fixture: ComponentFixture<ComponentsDepartmentBaseItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComponentsDepartmentBaseItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComponentsDepartmentBaseItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
