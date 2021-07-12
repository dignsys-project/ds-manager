import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponentsMemberKindComponent } from './components-member-kind.component';

describe('ComponentsMemberKindComponent', () => {
  let component: ComponentsMemberKindComponent;
  let fixture: ComponentFixture<ComponentsMemberKindComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComponentsMemberKindComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComponentsMemberKindComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
