import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SceneDevelompentsComponentsRssComponent } from './scene-develompents-components-rss.component';

describe('SceneDevelompentsComponentsRssComponent', () => {
  let component: SceneDevelompentsComponentsRssComponent;
  let fixture: ComponentFixture<SceneDevelompentsComponentsRssComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SceneDevelompentsComponentsRssComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SceneDevelompentsComponentsRssComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
