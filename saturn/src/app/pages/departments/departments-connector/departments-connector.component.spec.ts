import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DepartmentsConnectorComponent } from './departments-connector.component';

describe('DepartmentsConnectorComponent', () => {
  let component: DepartmentsConnectorComponent;
  let fixture: ComponentFixture<DepartmentsConnectorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [DepartmentsConnectorComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DepartmentsConnectorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
