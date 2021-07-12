import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ScenesCreateCommonWebComponent } from './scenes-create-common-web.component';

describe('ScenesCreateCommonWebComponent', () => {
  let component: ScenesCreateCommonWebComponent;
  let fixture: ComponentFixture<ScenesCreateCommonWebComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ScenesCreateCommonWebComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ScenesCreateCommonWebComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
