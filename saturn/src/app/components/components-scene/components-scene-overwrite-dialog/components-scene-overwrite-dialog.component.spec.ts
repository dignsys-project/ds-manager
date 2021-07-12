import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponentsSceneOverwriteDialogComponent } from './components-scene-overwrite-dialog.component';

describe('ComponentsSceneOverwriteDialogComponent', () => {
  let component: ComponentsSceneOverwriteDialogComponent;
  let fixture: ComponentFixture<ComponentsSceneOverwriteDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ComponentsSceneOverwriteDialogComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComponentsSceneOverwriteDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
