import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConnectsConnectorsComponent } from './connects-connectors.component';

describe('ConnectsConnectorsComponent', () => {
  let component: ConnectsConnectorsComponent;
  let fixture: ComponentFixture<ConnectsConnectorsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConnectsConnectorsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConnectsConnectorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
