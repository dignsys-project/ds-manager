import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SchedulesSchedulesAddComponent } from './schedules-schedules-add.component';

describe('SchedulesSchedulesAddComponent', () => {
  let component: SchedulesSchedulesAddComponent;
  let fixture: ComponentFixture<SchedulesSchedulesAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SchedulesSchedulesAddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SchedulesSchedulesAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
