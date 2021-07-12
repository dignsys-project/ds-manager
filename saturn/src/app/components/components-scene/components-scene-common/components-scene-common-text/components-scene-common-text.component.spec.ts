import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponentsSceneCommonTextComponent } from './components-scene-common-text.component';

describe('ComponentsSceneCommonTextComponent', () => {
  let component: ComponentsSceneCommonTextComponent;
  let fixture: ComponentFixture<ComponentsSceneCommonTextComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComponentsSceneCommonTextComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComponentsSceneCommonTextComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
