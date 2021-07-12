import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DepartmentsMembersDetailComponent } from './departments-members-detail.component';

describe('DepartmentsMembersDetailComponent', () => {
  let component: DepartmentsMembersDetailComponent;
  let fixture: ComponentFixture<DepartmentsMembersDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DepartmentsMembersDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DepartmentsMembersDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
