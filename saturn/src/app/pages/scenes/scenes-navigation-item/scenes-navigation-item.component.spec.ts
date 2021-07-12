import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ScenesNavigationItemComponent } from './scenes-navigation-item.component';

describe('ScenesNavigationItemComponent', () => {
  let component: ScenesNavigationItemComponent;
  let fixture: ComponentFixture<ScenesNavigationItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ScenesNavigationItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ScenesNavigationItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
