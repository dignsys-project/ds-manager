import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { ComponentsDepartmentsTreeV2Component } from "./components-departments-tree-v2.component";

describe("ComponentsDepartmentsTreeComponent", () => {
  let component: ComponentsDepartmentsTreeV2Component;
  let fixture: ComponentFixture<ComponentsDepartmentsTreeV2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ComponentsDepartmentsTreeV2Component],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComponentsDepartmentsTreeV2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
