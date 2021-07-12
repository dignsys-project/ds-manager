import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ScenesCreateModifiedComponent } from './scenes-create-modified.component';

describe('ScenesCreateModifiedComponent', () => {
  let component: ScenesCreateModifiedComponent;
  let fixture: ComponentFixture<ScenesCreateModifiedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ScenesCreateModifiedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ScenesCreateModifiedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
