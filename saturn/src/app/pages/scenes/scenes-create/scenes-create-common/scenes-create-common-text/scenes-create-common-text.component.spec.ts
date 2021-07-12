import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ScenesCreateCommonTextComponent } from './scenes-create-common-text.component';

describe('ScenesCreateCommonTextComponent', () => {
  let component: ScenesCreateCommonTextComponent;
  let fixture: ComponentFixture<ScenesCreateCommonTextComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ScenesCreateCommonTextComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ScenesCreateCommonTextComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
