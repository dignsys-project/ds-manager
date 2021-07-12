import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ScenesSceneComponentComponent } from './scenes-scene-component.component';

describe('ScenesSceneComponentComponent', () => {
  let component: ScenesSceneComponentComponent;
  let fixture: ComponentFixture<ScenesSceneComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ScenesSceneComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ScenesSceneComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
