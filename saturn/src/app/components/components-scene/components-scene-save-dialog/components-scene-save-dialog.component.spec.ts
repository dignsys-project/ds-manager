import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponentsSceneSaveDialogComponent } from './components-scene-save-dialog.component';

describe('ComponentsSceneSaveDialogComponent', () => {
  let component: ComponentsSceneSaveDialogComponent;
  let fixture: ComponentFixture<ComponentsSceneSaveDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComponentsSceneSaveDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComponentsSceneSaveDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
