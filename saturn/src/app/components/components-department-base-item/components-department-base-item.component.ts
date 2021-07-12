import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { DepartmentBaseElement } from 'src/app/models/department-base-element';

@Component({
  selector: 'app-components-department-base-item',
  templateUrl: './components-department-base-item.component.html',
  styleUrls: ['./components-department-base-item.component.scss'],
})
export class ComponentsDepartmentBaseItemComponent implements OnInit {
  @Input()
  base: DepartmentBaseElement;

  @Input()
  disabled: boolean = true;

  @Output()
  selected: EventEmitter<DepartmentBaseElement> = new EventEmitter<
    DepartmentBaseElement
  >();

  constructor() {}

  ngOnInit(): void {}

  onClickedDepartmentBase() {
    if (this.disabled) {
      return;
    }
    this.selected.next(this.base);
  }
}
