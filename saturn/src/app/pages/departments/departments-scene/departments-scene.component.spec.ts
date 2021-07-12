import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DepartmentsSceneComponent } from './departments-scene.component';

describe('DepartmentsSceneComponent', () => {
  let component: DepartmentsSceneComponent;
  let fixture: ComponentFixture<DepartmentsSceneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DepartmentsSceneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DepartmentsSceneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
