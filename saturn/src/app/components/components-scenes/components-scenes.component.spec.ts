import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponentsScenesComponent } from './components-scenes.component';

describe('ComponentsScenesComponent', () => {
  let component: ComponentsScenesComponent;
  let fixture: ComponentFixture<ComponentsScenesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComponentsScenesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComponentsScenesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
