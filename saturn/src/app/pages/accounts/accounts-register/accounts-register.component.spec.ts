import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AccountsRegisterComponent } from './accounts-register.component';

describe('AccountsRegisterComponent', () => {
  let component: AccountsRegisterComponent;
  let fixture: ComponentFixture<AccountsRegisterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AccountsRegisterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AccountsRegisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
