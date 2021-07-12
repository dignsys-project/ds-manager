import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponentsDepartmentFolderTreeComponent } from './components-department-folder-tree.component';

describe('ComponentsDepartmentFolderTreeComponent', () => {
  let component: ComponentsDepartmentFolderTreeComponent;
  let fixture: ComponentFixture<ComponentsDepartmentFolderTreeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComponentsDepartmentFolderTreeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComponentsDepartmentFolderTreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
