import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ScenesCreateComponent } from './scenes-create.component';

describe('ScenesCreateComponent', () => {
  let component: ScenesCreateComponent;
  let fixture: ComponentFixture<ScenesCreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ScenesCreateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ScenesCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
