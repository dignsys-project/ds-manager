import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponentsConnectorSchedulesComponent } from './components-connector-schedules.component';

describe('ComponentsConnectorSchedulesComponent', () => {
  let component: ComponentsConnectorSchedulesComponent;
  let fixture: ComponentFixture<ComponentsConnectorSchedulesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComponentsConnectorSchedulesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComponentsConnectorSchedulesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
