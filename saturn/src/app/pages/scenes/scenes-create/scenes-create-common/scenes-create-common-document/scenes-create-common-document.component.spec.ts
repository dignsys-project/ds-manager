import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ScenesCreateCommonDocumentComponent } from './scenes-create-common-document.component';

describe('ScenesCreateCommonDocumentComponent', () => {
  let component: ScenesCreateCommonDocumentComponent;
  let fixture: ComponentFixture<ScenesCreateCommonDocumentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ScenesCreateCommonDocumentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ScenesCreateCommonDocumentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
