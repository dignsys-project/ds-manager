import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ScenesCreateCommonImageComponent } from './scenes-create-common-image.component';

describe('ScenesCreateCommonImageComponent', () => {
  let component: ScenesCreateCommonImageComponent;
  let fixture: ComponentFixture<ScenesCreateCommonImageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ScenesCreateCommonImageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ScenesCreateCommonImageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
