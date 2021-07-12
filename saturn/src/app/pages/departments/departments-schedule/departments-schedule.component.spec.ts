import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DepartmentsScheduleComponent } from './departments-schedule.component';

describe('DepartmentsScheduleComponent', () => {
  let component: DepartmentsScheduleComponent;
  let fixture: ComponentFixture<DepartmentsScheduleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DepartmentsScheduleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DepartmentsScheduleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
