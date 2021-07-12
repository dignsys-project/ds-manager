import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DepartmentsScheduleSceneAddDialogComponent } from './departments-schedule-scene-add-dialog.component';

describe('DepartmentsScheduleSceneAddDialogComponent', () => {
  let component: DepartmentsScheduleSceneAddDialogComponent;
  let fixture: ComponentFixture<DepartmentsScheduleSceneAddDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DepartmentsScheduleSceneAddDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DepartmentsScheduleSceneAddDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
