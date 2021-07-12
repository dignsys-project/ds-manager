import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SchedulesSchedulesComponent } from './schedules-schedules.component';

describe('SchedulesSchedulesComponent', () => {
  let component: SchedulesSchedulesComponent;
  let fixture: ComponentFixture<SchedulesSchedulesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SchedulesSchedulesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SchedulesSchedulesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
