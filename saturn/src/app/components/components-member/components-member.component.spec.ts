import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponentsMemberComponent } from './components-member.component';

describe('ComponentsMemberComponent', () => {
  let component: ComponentsMemberComponent;
  let fixture: ComponentFixture<ComponentsMemberComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComponentsMemberComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComponentsMemberComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
