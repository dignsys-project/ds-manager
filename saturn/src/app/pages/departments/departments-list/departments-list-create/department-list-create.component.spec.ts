import { async, ComponentFixture, TestBed } from "@angular/core/testing";
import { DepartmentsListCreateComponent } from "./departments-list-create.component";

describe("DepartmentsListCreateComponent", () => {
  let component: DepartmentsListCreateComponent;
  let fixture: ComponentFixture<DepartmentsListCreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [DepartmentsListCreateComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DepartmentsListCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
