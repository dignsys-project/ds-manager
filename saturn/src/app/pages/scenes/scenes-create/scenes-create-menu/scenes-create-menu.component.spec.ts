import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ScenesCreateMenuComponent } from './scenes-create-menu.component';

describe('ScenesCreateMenuComponent', () => {
  let component: ScenesCreateMenuComponent;
  let fixture: ComponentFixture<ScenesCreateMenuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ScenesCreateMenuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ScenesCreateMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
