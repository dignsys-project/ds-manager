import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { SceneDevelopmentsComponentsSubtitleComponent } from './scene-developments-components-subtitle.component';

describe('SceneDevelopmentsComponentsSubtitleComponent', () => {
  let component: SceneDevelopmentsComponentsSubtitleComponent;
  let fixture: ComponentFixture<SceneDevelopmentsComponentsSubtitleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [SceneDevelopmentsComponentsSubtitleComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(
      SceneDevelopmentsComponentsSubtitleComponent
    );
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
