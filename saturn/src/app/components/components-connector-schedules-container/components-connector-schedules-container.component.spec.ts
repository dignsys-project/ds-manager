import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponentsConnectorSchedulesContainerComponent } from './components-connector-schedules-container.component';

describe('ComponentsConnectorSchedulesContainerComponent', () => {
  let component: ComponentsConnectorSchedulesContainerComponent;
  let fixture: ComponentFixture<ComponentsConnectorSchedulesContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComponentsConnectorSchedulesContainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComponentsConnectorSchedulesContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
