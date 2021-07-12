import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DepartmentsEmergencyComponent } from './departments-emergency.component';

describe('DepartmentsEmergencyComponent', () => {
  let component: DepartmentsEmergencyComponent;
  let fixture: ComponentFixture<DepartmentsEmergencyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DepartmentsEmergencyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DepartmentsEmergencyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
