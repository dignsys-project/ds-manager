import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DepartmentsConnectorsListComponent } from './departments-connectors-list.component';

describe('DepartmentsConnectorsListComponent', () => {
  let component: DepartmentsConnectorsListComponent;
  let fixture: ComponentFixture<DepartmentsConnectorsListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DepartmentsConnectorsListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DepartmentsConnectorsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
