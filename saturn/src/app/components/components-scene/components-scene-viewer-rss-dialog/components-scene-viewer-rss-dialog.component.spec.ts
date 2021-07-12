import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponentsSceneViewerRssDialogComponent } from './components-scene-viewer-rss-dialog.component';

describe('ComponentsSceneViewerRssDialogComponent', () => {
  let component: ComponentsSceneViewerRssDialogComponent;
  let fixture: ComponentFixture<ComponentsSceneViewerRssDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComponentsSceneViewerRssDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComponentsSceneViewerRssDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
