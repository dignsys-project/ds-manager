import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AccountsCommonComponent } from './accounts-common.component';

describe('AccountsCommonComponent', () => {
  let component: AccountsCommonComponent;
  let fixture: ComponentFixture<AccountsCommonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AccountsCommonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AccountsCommonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
