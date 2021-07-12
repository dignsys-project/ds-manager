import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ScenesCreateCommonSubtitleComponent } from './scenes-create-common-subtitle.component';

describe('ScenesCreateCommonSubtitleComponent', () => {
  let component: ScenesCreateCommonSubtitleComponent;
  let fixture: ComponentFixture<ScenesCreateCommonSubtitleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ScenesCreateCommonSubtitleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ScenesCreateCommonSubtitleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
