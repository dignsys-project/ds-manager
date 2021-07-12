import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponentsSceneCommonSubtitleComponent } from './components-scene-common-subtitle.component';

describe('ComponentsSceneCommonSubtitleComponent', () => {
  let component: ComponentsSceneCommonSubtitleComponent;
  let fixture: ComponentFixture<ComponentsSceneCommonSubtitleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComponentsSceneCommonSubtitleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComponentsSceneCommonSubtitleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
