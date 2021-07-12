import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ComponentsSceneItemComponent } from './components-scene-item.component';

describe('ComponentsSceneItemComponent', () => {
  let component: ComponentsSceneItemComponent;
  let fixture: ComponentFixture<ComponentsSceneItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ComponentsSceneItemComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComponentsSceneItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
