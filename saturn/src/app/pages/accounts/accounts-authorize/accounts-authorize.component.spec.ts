import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AccountsAuthorizeComponent } from './accounts-authorize.component';

describe('AccountsAuthorizeComponent', () => {
  let component: AccountsAuthorizeComponent;
  let fixture: ComponentFixture<AccountsAuthorizeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AccountsAuthorizeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AccountsAuthorizeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
