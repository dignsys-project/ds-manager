import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponentsScheduleComponent } from './components-schedule.component';

describe('ComponentsScheduleComponent', () => {
  let component: ComponentsScheduleComponent;
  let fixture: ComponentFixture<ComponentsScheduleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComponentsScheduleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComponentsScheduleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
