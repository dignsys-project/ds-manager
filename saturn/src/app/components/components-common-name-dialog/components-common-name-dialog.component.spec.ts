import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponentsCommonNameDialogComponent } from './components-common-name-dialog.component';

describe('ComponentsCommonNameDialogComponent', () => {
  let component: ComponentsCommonNameDialogComponent;
  let fixture: ComponentFixture<ComponentsCommonNameDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComponentsCommonNameDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComponentsCommonNameDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
