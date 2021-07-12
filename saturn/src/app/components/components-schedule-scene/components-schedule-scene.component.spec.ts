import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponentsScheduleSceneComponent } from './components-schedule-scene.component';

describe('ComponentsScheduleSceneComponent', () => {
  let component: ComponentsScheduleSceneComponent;
  let fixture: ComponentFixture<ComponentsScheduleSceneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComponentsScheduleSceneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComponentsScheduleSceneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
