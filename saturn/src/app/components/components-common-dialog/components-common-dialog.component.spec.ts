import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponentsCommonDialogComponent } from './components-common-dialog.component';

describe('ComponentsCommonDialogComponent', () => {
  let component: ComponentsCommonDialogComponent;
  let fixture: ComponentFixture<ComponentsCommonDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComponentsCommonDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComponentsCommonDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
