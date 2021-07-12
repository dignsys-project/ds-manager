import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ScenesNavigationComponent } from './scenes-navigation.component';

describe('ScenesNavigationComponent', () => {
  let component: ScenesNavigationComponent;
  let fixture: ComponentFixture<ScenesNavigationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ScenesNavigationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ScenesNavigationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
