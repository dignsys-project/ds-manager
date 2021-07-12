import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponentsTimelineComponent } from './components-timeline.component';

describe('ComponentsTimelineComponent', () => {
  let component: ComponentsTimelineComponent;
  let fixture: ComponentFixture<ComponentsTimelineComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComponentsTimelineComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComponentsTimelineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
