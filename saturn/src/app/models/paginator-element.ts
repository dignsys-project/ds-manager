import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { isNullOrUndefined } from 'util';
import { Paginator } from '../protocols/common_pb';

export class PaginatorElement {
  public index: number = 0; // current page index
  public count: number = 0; // page count
  public itemsCount: number; // items count

  constructor(public size: number) {}

  fromMessage(message: Paginator) {
    this.index = message.getPagesindex();
    this.count = message.getPagescount();
    this.itemsCount = message.getItemscount();
  }

  public get hasItems(): boolean {
    return this.index < this.count;
  }
}
