import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DepartmentsItemsComponent } from './departments-items.component';

describe('DepartmentsItemsComponent', () => {
  let component: DepartmentsItemsComponent;
  let fixture: ComponentFixture<DepartmentsItemsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DepartmentsItemsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DepartmentsItemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
