import { SelectionModel } from '@angular/cdk/collections';
import { isNullOrUndefined } from 'util';
import { MatTableDataSource } from '@angular/material/table';

export class SelectionElement<T> {
  private dataSource: MatTableDataSource<T>;
  private selection = new SelectionModel<T>(true, []);

  constructor(dataSource: MatTableDataSource<T>) {
    this.dataSource = dataSource;
  }

  public items(): Array<T> {
    return this.selection.selected;
  }

  public clear() {
    this.selection.clear();
  }

  public selected(): boolean {
    return this.items().length > 0;
  }

  public hasValue(): boolean {
    return this.selection.hasValue();
  }

  public toggle(value: T) {
    this.selection.toggle(value);
  }

  public isSelected(value: T): boolean {
    return this.selection.isSelected(value);
  }

  /** Whether the number of selected elements matches the total number of rows. */
  public isAllSelected() {
    const numSelected = this.selection.selected.length;

    return numSelected === this.getRowsCount();
  }

  /** Selects all rows if they are not all selected; otherwise clear selection. */
  public masterToggle() {
    this.isAllSelected() ? this.clear() : this.selectRows();
  }

  private selectRows() {
    if (isNullOrUndefined(this.dataSource.paginator)) {
      this.dataSource.data.forEach((row) => this.selection.select(row));
    } else {
      const size = this.dataSource.paginator.pageSize;
      const current = this.dataSource.paginator.pageIndex;

      let numRows = (current + 1) * size;
      if (numRows > this.dataSource.data.length) {
        numRows = this.dataSource.data.length;
      }

      for (let index = current * size; index < numRows; index++) {
        this.selection.select(this.dataSource.data[index]);
      }
    }
  }

  private getRowsCount(): number {
    let numRows = this.dataSource.data.length;
    if (!isNullOrUndefined(this.dataSource.paginator)) {
      const current = this.dataSource.paginator.pageIndex;
      const size = this.dataSource.paginator.pageSize;

      if (numRows < (current + 1) * size) {
        numRows = numRows % size;
      } else {
        numRows = this.dataSource.paginator.pageSize;
      }
    }

    return numRows;
  }
}
