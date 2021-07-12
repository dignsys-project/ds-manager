import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ScenesResourceListV2Component } from './scenes-resource-list-v2.component';

describe('ScenesResourceListV2Component', () => {
  let component: ScenesResourceListV2Component;
  let fixture: ComponentFixture<ScenesResourceListV2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ScenesResourceListV2Component],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ScenesResourceListV2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
