import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { AccountsAdministratorComponent } from "./accounts-administrator.component";

describe("AccountsAdministratorComponent", () => {
  let component: AccountsAdministratorComponent;
  let fixture: ComponentFixture<AccountsAdministratorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [AccountsAdministratorComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AccountsAdministratorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
