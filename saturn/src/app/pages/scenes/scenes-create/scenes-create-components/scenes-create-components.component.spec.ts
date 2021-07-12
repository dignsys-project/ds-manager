import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ScenesCreateComponentsComponent } from './scenes-create-components.component';

describe('ScenesCreateComponentsComponent', () => {
  let component: ScenesCreateComponentsComponent;
  let fixture: ComponentFixture<ScenesCreateComponentsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ScenesCreateComponentsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ScenesCreateComponentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
