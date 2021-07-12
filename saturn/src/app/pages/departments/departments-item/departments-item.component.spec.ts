import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DepartmentsItemComponent } from './departments-item.component';

describe('DepartmentsItemComponent', () => {
  let component: DepartmentsItemComponent;
  let fixture: ComponentFixture<DepartmentsItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DepartmentsItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DepartmentsItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
