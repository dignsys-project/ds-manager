import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ScenesListV2Component } from './scenes-list-v2.component';

describe('ScenesListV2Component', () => {
  let component: ScenesListV2Component;
  let fixture: ComponentFixture<ScenesListV2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ScenesListV2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ScenesListV2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
