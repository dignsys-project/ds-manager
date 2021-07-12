import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { DepartmentsListCommonComponent } from "./departments-list-common.component";

describe("DepartmentsListCommonComponent", () => {
  let component: DepartmentsListCommonComponent;
  let fixture: ComponentFixture<DepartmentsListCommonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [DepartmentsListCommonComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DepartmentsListCommonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
