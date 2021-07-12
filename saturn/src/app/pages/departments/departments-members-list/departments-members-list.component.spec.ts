import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DepartmentsMembersListComponent } from './departments-members-list.component';

describe('DepartmentsMembersListComponent', () => {
  let component: DepartmentsMembersListComponent;
  let fixture: ComponentFixture<DepartmentsMembersListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DepartmentsMembersListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DepartmentsMembersListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
