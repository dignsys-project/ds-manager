import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConnectsConnectorsV2Component } from './connects-connectors-v2.component';

describe('ConnectsConnectorsV2Component', () => {
  let component: ConnectsConnectorsV2Component;
  let fixture: ComponentFixture<ConnectsConnectorsV2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConnectsConnectorsV2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConnectsConnectorsV2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
