import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ScenesReferenceComponent } from './scenes-reference.component';

describe('ScenesReferenceComponent', () => {
  let component: ScenesReferenceComponent;
  let fixture: ComponentFixture<ScenesReferenceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ScenesReferenceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ScenesReferenceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
