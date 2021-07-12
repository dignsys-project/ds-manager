import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponentsSceneComponentsSelectDialogComponent } from './components-scene-components-select-dialog.component';

describe('ComponentsSceneComponentsSelectDialogComponent', () => {
  let component: ComponentsSceneComponentsSelectDialogComponent;
  let fixture: ComponentFixture<ComponentsSceneComponentsSelectDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComponentsSceneComponentsSelectDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComponentsSceneComponentsSelectDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
