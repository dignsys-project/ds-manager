import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ScenesCreateCommonWeatherComponent } from './scenes-create-common-weather.component';

describe('ScenesCreateCommonWeatherComponent', () => {
  let component: ScenesCreateCommonWeatherComponent;
  let fixture: ComponentFixture<ScenesCreateCommonWeatherComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ScenesCreateCommonWeatherComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ScenesCreateCommonWeatherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
