import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponentsCommonDatePickerComponent } from './components-common-date-picker.component';

describe('ComponentsCommonDatePickerComponent', () => {
  let component: ComponentsCommonDatePickerComponent;
  let fixture: ComponentFixture<ComponentsCommonDatePickerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComponentsCommonDatePickerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComponentsCommonDatePickerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
