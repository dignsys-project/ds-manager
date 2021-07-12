import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponentsMemberPermissionComponent } from './components-member-permission.component';

describe('ComponentsMemberPermissionComponent', () => {
  let component: ComponentsMemberPermissionComponent;
  let fixture: ComponentFixture<ComponentsMemberPermissionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComponentsMemberPermissionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComponentsMemberPermissionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
