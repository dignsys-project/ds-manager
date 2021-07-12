import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponentsSceneCommonWeatherComponent } from './components-scene-common-weather.component';

describe('ComponentsSceneCommonWeatherComponent', () => {
  let component: ComponentsSceneCommonWeatherComponent;
  let fixture: ComponentFixture<ComponentsSceneCommonWeatherComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComponentsSceneCommonWeatherComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComponentsSceneCommonWeatherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
