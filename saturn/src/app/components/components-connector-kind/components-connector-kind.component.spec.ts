import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponentsConnectorKindComponent } from './components-connector-kind.component';

describe('ComponentsConnectorKindComponent', () => {
  let component: ComponentsConnectorKindComponent;
  let fixture: ComponentFixture<ComponentsConnectorKindComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComponentsConnectorKindComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComponentsConnectorKindComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
