import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ScenesSceneComponent } from './scenes-scene.component';

describe('ScenesSceneComponent', () => {
  let component: ScenesSceneComponent;
  let fixture: ComponentFixture<ScenesSceneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ScenesSceneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ScenesSceneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
