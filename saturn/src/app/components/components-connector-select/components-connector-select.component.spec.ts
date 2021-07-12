import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponentsConnectorSelectComponent } from './components-connector-select.component';

describe('ComponentsConnectorSelectComponent', () => {
  let component: ComponentsConnectorSelectComponent;
  let fixture: ComponentFixture<ComponentsConnectorSelectComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComponentsConnectorSelectComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComponentsConnectorSelectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
