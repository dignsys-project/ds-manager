import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponentsMemberItemComponent } from './components-member-item.component';

describe('ComponentsMemberItemComponent', () => {
  let component: ComponentsMemberItemComponent;
  let fixture: ComponentFixture<ComponentsMemberItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComponentsMemberItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComponentsMemberItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
