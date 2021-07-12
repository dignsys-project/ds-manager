import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SchedulesScenesAddComponent } from './schedules-scenes-add.component';

describe('SchedulesScenesAddComponent', () => {
  let component: SchedulesScenesAddComponent;
  let fixture: ComponentFixture<SchedulesScenesAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SchedulesScenesAddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SchedulesScenesAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
