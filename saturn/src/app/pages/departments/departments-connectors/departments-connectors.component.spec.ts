import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DepartmentsConnectorsComponent } from './departments-connectors.component';

describe('DepartmentsConnectorsComponent', () => {
  let component: DepartmentsConnectorsComponent;
  let fixture: ComponentFixture<DepartmentsConnectorsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [DepartmentsConnectorsComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DepartmentsConnectorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
