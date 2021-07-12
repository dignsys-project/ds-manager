import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SceneDevelopmentsComponent } from './scene-developments.component';

describe('SceneDevelopmentsComponent', () => {
  let component: SceneDevelopmentsComponent;
  let fixture: ComponentFixture<SceneDevelopmentsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [SceneDevelopmentsComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SceneDevelopmentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
