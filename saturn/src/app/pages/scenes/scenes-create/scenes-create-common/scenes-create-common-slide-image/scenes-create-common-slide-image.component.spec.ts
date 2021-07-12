import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ScenesCreateCommonSlideImageComponent } from './scenes-create-common-slide-image.component';

describe('ScenesCreateCommonSlideImageComponent', () => {
  let component: ScenesCreateCommonSlideImageComponent;
  let fixture: ComponentFixture<ScenesCreateCommonSlideImageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ScenesCreateCommonSlideImageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ScenesCreateCommonSlideImageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
