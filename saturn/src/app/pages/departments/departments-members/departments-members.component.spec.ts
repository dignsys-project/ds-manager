import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DepartmentsMembersComponent } from './departments-members.component';

describe('DepartmentsMembersComponent', () => {
  let component: DepartmentsMembersComponent;
  let fixture: ComponentFixture<DepartmentsMembersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DepartmentsMembersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DepartmentsMembersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
