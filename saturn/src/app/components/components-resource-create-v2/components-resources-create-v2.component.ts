import {
  Component,
  OnInit,
  ViewChild,
  ElementRef,
  Output,
  EventEmitter,
  Input,
} from '@angular/core';
import { ResourceService } from 'src/app/services/resource.service';
import { ResourceAttachment } from 'src/app/common/resource-attachment';
import { content } from 'html2canvas/dist/types/css/property-descriptors/content';
import { ResourceElement } from 'src/app/models/resource-element';
import { ResourceExtensions } from 'src/app/commons/resource-extensions';

@Component({
  selector: 'components-resources-create-v2',
  templateUrl: './components-resources-create-v2.component.html',
  styleUrls: ['./components-resources-create-v2.component.scss'],
})
export class ComponentsResourcesCreateV2Component implements OnInit {
  @ViewChild('fileInput', { static: true })
  _inputElementRef: ElementRef;

  private _elements: Array<ResourceAttachment> = new Array<ResourceAttachment>();

  @Input()
  isProcess: boolean = false;

  @Output()
  upload: EventEmitter<Array<ResourceAttachment>> = new EventEmitter<
    Array<ResourceAttachment>
  >();

  get hasElements(): boolean {
    return this._elements?.length > 0;
  }

  get elements(): Array<ResourceAttachment> {
    return this._elements;
  }

  constructor(private resourceService: ResourceService) {}

  ngOnInit(): void {}

  /**
   * (event) : clicked
   * on clicked container-upload
   */
  onClickedUploadContainer() {
    if (this.isProcess) {
      return;
    }

    this._inputElementRef.nativeElement?.click();
  }

  /**
   *
   * @param file
   * @param index
   */
  public onClickedRemoveItem(element: ResourceAttachment, index: number) {
    this._elements.splice(index, 1);
  }

  /**
   * (event) : clicked
   * on clicked upload
   */
  async onClickedUploadToPrometheus() {
    if (this.isProcess) {
      return;
    }

    // this.isProcess = true;

    const elements = Array.from(this.elements);

    this.upload.next(elements);

    // setTimeout(() => (this.isProcess = false), 2000);
  }

  /**
   * (event) : change from input
   * @param files upload files
   */
  async onChangeInputHtmlElement(files: FileList) {
    if (this.isProcess) {
      return;
    }

    this.addFiles(files);
  }

  /**
   * (output) : dropped from componentsResourceCreateDragDrop directive
   * on dropped files
   * @param files
   */
  async onDropeedComponentsResourceCreateDragDropDirective(files: FileList) {
    if (this.isProcess) {
      return;
    }

    this.addFiles(files);
  }

  /**
   * output : (remove) from app-components-resource-create-element
   * @param resourceAttachment remove resource attachment
   */
  onRemoveComponentsResourceCreateElement(
    resourceAttachment: ResourceAttachment
  ) {
    const index = this._elements.findIndex(
      (x) => x.file == resourceAttachment.file
    );
    if (index != -1) {
      this._elements.splice(index, 1);
    }
  }

  private canUpload(file: File): boolean {
    if (0 >= file.size) {
      return false;
    }

    return ResourceExtensions.isSupportContentType(file.type);
  }

  private addFiles(files: FileList) {
    this.isProcess = true;

    if (undefined == files || files?.length <= 0) {
      this.isProcess = false;
      return;
    }

    // file list to array
    let items = Array.from(files);
    if (undefined == items || items?.length <= 0) {
      this.isProcess = false;
      return;
    }

    // filter can upload
    items = items.filter((x) => this.canUpload(x));
    if (items?.length <= 0) {
      this.isProcess = false;
      return;
    }

    // 중복된 이름은 제거해 준다.
    items = items.filter(
      (item) =>
        -1 ==
        this.elements.findIndex(
          (x) =>
            x.file.name.toLocaleLowerCase() === item.name.toLocaleLowerCase()
        )
    );

    this.elements.push(...items.map((x) => new ResourceAttachment(x)));

    this.isProcess = false;

    this._inputElementRef.nativeElement.value = '';
  }
}
