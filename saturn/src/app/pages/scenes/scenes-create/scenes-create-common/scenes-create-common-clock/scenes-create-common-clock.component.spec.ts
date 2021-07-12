import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ScenesCreateCommonClockComponent } from './scenes-create-common-clock.component';

describe('ScenesCreateCommonClockComponent', () => {
  let component: ScenesCreateCommonClockComponent;
  let fixture: ComponentFixture<ScenesCreateCommonClockComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ScenesCreateCommonClockComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ScenesCreateCommonClockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
