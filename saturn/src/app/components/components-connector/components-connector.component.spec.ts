import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponentsConnectorComponent } from './components-connector.component';

describe('ComponentsConnectorComponent', () => {
  let component: ComponentsConnectorComponent;
  let fixture: ComponentFixture<ComponentsConnectorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ComponentsConnectorComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComponentsConnectorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
