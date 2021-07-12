import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ComponentsScenePreviewComponent } from './components-scene-item.component';

describe('ComponentsScenePreviewComponent', () => {
  let component: ComponentsScenePreviewComponent;
  let fixture: ComponentFixture<ComponentsScenePreviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ComponentsScenePreviewComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComponentsScenePreviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
