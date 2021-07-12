import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ScenesCreateCommonButtonComponent } from './scenes-create-common-button.component';

describe('ScenesCreateCommonButtonComponent', () => {
  let component: ScenesCreateCommonButtonComponent;
  let fixture: ComponentFixture<ScenesCreateCommonButtonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ScenesCreateCommonButtonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ScenesCreateCommonButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
