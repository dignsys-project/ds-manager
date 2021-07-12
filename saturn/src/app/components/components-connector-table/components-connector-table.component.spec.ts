import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponentsConnectorTableComponent } from './components-connector-table.component';

describe('ComponentsConnectorTableComponent', () => {
  let component: ComponentsConnectorTableComponent;
  let fixture: ComponentFixture<ComponentsConnectorTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComponentsConnectorTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComponentsConnectorTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
