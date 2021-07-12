import {
  Directive,
  EventEmitter,
  HostBinding,
  HostListener,
  Input,
  Output,
} from '@angular/core';

@Directive({
  selector: '[resourcesDragDrop]',
})
export class ResourcesDragDropDirective {
  @Output() dropped = new EventEmitter<FileList>();

  @Input()
  isProcess: boolean = false;

  @HostBinding('style.background-color')
  private _background = '#f5fcff';
  @HostBinding('style.opacity')
  private _opacity = '1';
  @HostBinding('style.outline-offset')
  private _outlineOffset = '0px';

  //Dragover listener
  @HostListener('dragover', ['$event']) onDragOver(evt) {
    evt.preventDefault();
    evt.stopPropagation();

    if (this.isProcess) {
      return;
    }

    this._background = '#FFFFFF';
    this._opacity = '1';
    this._outlineOffset = '-20px';
  }

  //Dragleave listener
  @HostListener('dragleave', ['$event']) public onDragLeave(evt) {
    evt.preventDefault();
    evt.stopPropagation();
    // this.background = '#f5fcff';
    this._opacity = '1';
    this._outlineOffset = '0px';

    if (this.isProcess) {
      return;
    }
  }

  //Drop listener
  @HostListener('drop', ['$event']) public ondrop(evt) {
    evt.preventDefault();
    evt.stopPropagation();

    if (this.isProcess) {
      return;
    }

    this._background = '#f5fcff';
    this._opacity = '1';
    this._outlineOffset = '0px';

    let files = evt.dataTransfer.files;
    if (files.length > 0) {
      this.dropped.emit(files);
    }
  }
}
