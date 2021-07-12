import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponentsMemberTableComponent } from './components-member-table.component';

describe('ComponentsMemberTableComponent', () => {
  let component: ComponentsMemberTableComponent;
  let fixture: ComponentFixture<ComponentsMemberTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComponentsMemberTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComponentsMemberTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
