import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponentsPermissionDialogComponent } from './components-permission-dialog.component';

describe('ComponentsPermissionDialogComponent', () => {
  let component: ComponentsPermissionDialogComponent;
  let fixture: ComponentFixture<ComponentsPermissionDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComponentsPermissionDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComponentsPermissionDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
