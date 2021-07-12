import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponentsScheduleItemComponent } from './components-schedule-item.component';

describe('ComponentsScheduleItemComponent', () => {
  let component: ComponentsScheduleItemComponent;
  let fixture: ComponentFixture<ComponentsScheduleItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComponentsScheduleItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComponentsScheduleItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
