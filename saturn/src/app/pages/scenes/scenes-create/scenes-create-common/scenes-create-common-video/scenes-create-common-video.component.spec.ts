import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ScenesCreateCommonVideoComponent } from './scenes-create-common-video.component';

describe('ScenesCreateCommonVideoComponent', () => {
  let component: ScenesCreateCommonVideoComponent;
  let fixture: ComponentFixture<ScenesCreateCommonVideoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ScenesCreateCommonVideoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ScenesCreateCommonVideoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
