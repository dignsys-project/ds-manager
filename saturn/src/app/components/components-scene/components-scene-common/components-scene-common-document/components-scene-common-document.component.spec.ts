import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponentsSceneCommonDocumentComponent } from './components-scene-common-document.component';

describe('ComponentsSceneCommonDocumentComponent', () => {
  let component: ComponentsSceneCommonDocumentComponent;
  let fixture: ComponentFixture<ComponentsSceneCommonDocumentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComponentsSceneCommonDocumentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComponentsSceneCommonDocumentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
