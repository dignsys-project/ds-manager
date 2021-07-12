import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponentsSceneSaveV2DialogComponent } from './components-scene-save-v2-dialog.component';

describe('ComponentsSceneSaveV2DialogComponent', () => {
  let component: ComponentsSceneSaveV2DialogComponent;
  let fixture: ComponentFixture<ComponentsSceneSaveV2DialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComponentsSceneSaveV2DialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComponentsSceneSaveV2DialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
