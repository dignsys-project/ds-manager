import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConnectsComponentsConnectorComponent } from './connects-components-connector.component';

describe('ConnectsComponentsConnectorComponent', () => {
  let component: ConnectsComponentsConnectorComponent;
  let fixture: ComponentFixture<ConnectsComponentsConnectorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConnectsComponentsConnectorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConnectsComponentsConnectorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
