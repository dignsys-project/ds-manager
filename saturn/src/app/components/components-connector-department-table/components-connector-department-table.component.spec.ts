import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponentsConnectorDepartmentTableComponent } from './components-connector-department-table.component';

describe('ComponentsConnectorDepartmentTableComponent', () => {
  let component: ComponentsConnectorDepartmentTableComponent;
  let fixture: ComponentFixture<ComponentsConnectorDepartmentTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComponentsConnectorDepartmentTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComponentsConnectorDepartmentTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
