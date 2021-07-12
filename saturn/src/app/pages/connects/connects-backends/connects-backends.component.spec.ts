import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConnectsBackendsComponent } from './connects-backends.component';

describe('ConnectsBackendsComponent', () => {
  let component: ConnectsBackendsComponent;
  let fixture: ComponentFixture<ConnectsBackendsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConnectsBackendsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConnectsBackendsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
