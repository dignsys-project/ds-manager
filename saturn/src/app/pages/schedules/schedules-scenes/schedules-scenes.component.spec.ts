import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SchedulesScenesComponent } from './schedules-scenes.component';

describe('SchedulesScenesComponent', () => {
  let component: SchedulesScenesComponent;
  let fixture: ComponentFixture<SchedulesScenesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SchedulesScenesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SchedulesScenesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
