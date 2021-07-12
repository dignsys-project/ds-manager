import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ConnectorDepartmentBaseElement } from 'src/app/models/connector-department-base-element';
import { SelectionElement } from 'src/app/models/selection-element';
import { MatTableDataSource } from '@angular/material/table';
import { MatCheckboxChange } from '@angular/material/checkbox';
import { BreakpointObserver } from '@angular/cdk/layout';
import { ConnectorBaseElement } from 'src/app/models/connector-base-element';
import { isNullOrUndefined } from 'util';

@Component({
  selector: 'app-components-connector-department-table',
  templateUrl: './components-connector-department-table.component.html',
  styleUrls: ['./components-connector-department-table.component.scss'],
})
export class ComponentsConnectorDepartmentTableComponent implements OnInit {
  @Input()
  set elements(elements: Array<ConnectorDepartmentBaseElement>) {
    this.selection.clear();

    this.dataSource.data = elements;

    if (undefined != elements) {
      const selectedElements = elements.filter(
        (x) => x.departmentBase.id == this.departmentId
      );

      // selectedElements.forEach((x) => this.selection.toggle(x));

      this.selected.next(selectedElements);
    }
  }

  @Input()
  departmentId: number;

  @Output()
  selected: EventEmitter<
    Array<ConnectorDepartmentBaseElement>
  > = new EventEmitter<Array<ConnectorDepartmentBaseElement>>();

  selection: SelectionElement<ConnectorDepartmentBaseElement>;

  displayedColumns: string[] = [
    'select',
    'connector_name',
    'department_name',
    'emergency',
  ];
  dataSource = new MatTableDataSource<ConnectorDepartmentBaseElement>([]);

  isSmallScreen: boolean = false;

  constructor(breakpointObserver: BreakpointObserver) {
    breakpointObserver.observe('(max-width: 599px)').subscribe((result) => {
      this.isSmallScreen = result.matches;
      if (result.matches) {
        this.displayedColumns = ['select', 'connector_name', 'emergency'];
      } else {
        this.displayedColumns = [
          'select',
          'connector_name',
          'department_name',
          'emergency',
        ];
      }
    });

    this.selection = new SelectionElement<ConnectorDepartmentBaseElement>(
      this.dataSource
    );
  }

  ngOnInit(): void {}

  onChangeCheckboxSelectAllItems(event: MatCheckboxChange) {
    this.selection.masterToggle();

    this.selected.next(this.selection.items());
  }

  onClickedCheckboxItem(event: any) {}

  onChangeCheckboxItem(element: ConnectorDepartmentBaseElement) {
    this.selection.toggle(element);

    this.selected.next(this.selection.items());
  }
}
