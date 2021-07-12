import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ScenesCreateCanvasComponent } from './scenes-create-canvas.component';

describe('ScenesCreateCanvasComponent', () => {
  let component: ScenesCreateCanvasComponent;
  let fixture: ComponentFixture<ScenesCreateCanvasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ScenesCreateCanvasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ScenesCreateCanvasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
