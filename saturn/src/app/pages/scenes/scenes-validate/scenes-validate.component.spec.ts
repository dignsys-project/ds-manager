import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ScenesValidateComponent } from './scenes-validate.component';

describe('ScenesValidateComponent', () => {
  let component: ScenesValidateComponent;
  let fixture: ComponentFixture<ScenesValidateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ScenesValidateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ScenesValidateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
