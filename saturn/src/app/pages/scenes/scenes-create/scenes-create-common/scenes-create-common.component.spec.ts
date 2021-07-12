import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ScenesCreateCommonComponent } from './scenes-create-common.component';

describe('ScenesCreateCommonComponent', () => {
  let component: ScenesCreateCommonComponent;
  let fixture: ComponentFixture<ScenesCreateCommonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ScenesCreateCommonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ScenesCreateCommonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
