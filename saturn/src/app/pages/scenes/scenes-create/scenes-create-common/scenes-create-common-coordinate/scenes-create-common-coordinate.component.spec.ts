import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ScenesCreateCommonCoordinateComponent } from './scenes-create-common-coordinate.component';

describe('ScenesCreateCommonCoordinateComponent', () => {
  let component: ScenesCreateCommonCoordinateComponent;
  let fixture: ComponentFixture<ScenesCreateCommonCoordinateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ScenesCreateCommonCoordinateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ScenesCreateCommonCoordinateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
