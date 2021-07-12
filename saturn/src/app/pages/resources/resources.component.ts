import {
  Component,
  ElementRef,
  OnDestroy,
  OnInit,
  ViewChild,
} from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute } from '@angular/router';
import { take, takeWhile } from 'rxjs/operators';
import { AppService } from 'src/app/app.service';
import { ResourceAttachment } from 'src/app/common/resource-attachment';
import { CommonExtensions } from 'src/app/commons/common-extensions';
import { ResourceExtensions } from 'src/app/commons/resource-extensions';
import {
  ComponentsCommonDialogComponent,
  DIALOG_KIND,
} from 'src/app/components/components-common-dialog/components-common-dialog.component';
import { PreviewResourceElement } from 'src/app/models/preview-resource-element';
import { ResourceElement } from 'src/app/models/resource-element';
import { SceneBaseElement } from 'src/app/models/scene-base-element';
import { ResourceService } from 'src/app/services/resource.service';
import { ValidateService } from 'src/app/services/validate.service';

@Component({
  selector: 'app-resources',
  templateUrl: './resources.component.html',
  styleUrls: ['./resources.component.scss'],
})
export class ResourcesComponent implements OnInit, OnDestroy {
  @ViewChild('FILE_INPUT', { static: true })
  fileInputElementRef: ElementRef;

  private _subscribe: boolean = true;

  private _resourceId: number;
  private _departmentId: number;
  private _folderId: number;

  private _element: ResourceElement;

  private _sceneBaseElements: Array<SceneBaseElement>;

  private _attachmentElement: ResourceAttachment;

  private _isProcess: boolean = false;

  private _connectedSceneBases: Array<SceneBaseElement>;
  private _connectedSceneCount: number;

  private _processPercent: number = 0;

  isCreateResource: boolean = true;

  get isProcess(): boolean {
    return this._isProcess;
  }

  get isLoaded(): boolean {
    return undefined != this._element;
  }

  get resourceName(): string {
    return this._element?.name;
  }

  get element(): ResourceElement {
    return this._element;
  }

  get sceneBaseElements(): Array<SceneBaseElement> {
    return this._sceneBaseElements;
  }

  get resourceIcon(): string {
    return this._element?.getIconName;
  }

  get haveAttachment(): boolean {
    return undefined != this._attachmentElement;
  }

  get attachmentElement(): ResourceAttachment {
    return this._attachmentElement;
  }

  get connectedSceneBaseCount(): number {
    return this._connectedSceneCount;
  }

  constructor(
    private appService: AppService,
    private resourceService: ResourceService,
    private activatedRoute: ActivatedRoute,
    private validateService: ValidateService,
    private dialog: MatDialog,
    private snackbar: MatSnackBar
  ) {
    this.appService.changeHeaderSide(false);
    this.appService.changeHeader(false);

    this.activatedRoute.params
      .pipe(takeWhile(() => this._subscribe))
      .subscribe((params) => {
        try {
          this._departmentId = Number.parseInt(params.departmentId);
          this._folderId = Number.parseInt(params.folderId);
          this._resourceId = Number.parseInt(params.resourceId);
        } catch (error) {
          console.error(error);
        }
      });
  }

  ngOnDestroy(): void {
    this._subscribe = false;

    this.appService.changeHeaderSide(true);
    this.appService.changeHeader(true);
  }

  async ngOnInit(): Promise<void> {
    // request resource
    try {
      const response = await this.resourceService
        .requestGetResource(
          this._departmentId,
          this._folderId,
          this._resourceId
        )
        .pipe(take(1))
        .toPromise();

      if (CommonExtensions.isSuccess(response.getCommon())) {
        this._element = ResourceElement.fromMessage(response.getResource());
      }
    } catch (error) {
      console.error(error);

      return;
    }

    // request scene resource
    try {
      const response = await this.validateService
        .requestGetResourceByResourceId(this._resourceId, 0, 100)
        .pipe(take(1))
        .toPromise();

      if (CommonExtensions.isSuccess(response.getCommon())) {
        this._connectedSceneCount = response.getItemcount();
        this._sceneBaseElements = response
          .getScenebasesList()
          .map((x) => SceneBaseElement.fromMessageBase(x));
      }
    } catch (error) {}
  }

  // mark -
  public getResourcePreviewLocation(element: ResourceElement): string {
    return this.resourceService.getPreviewResourceAddress(
      element.previewResource
    );
  }

  onPressedResourceChange() {
    this.isCreateResource = !this.isCreateResource;
    if (!this.isCreateResource) {
      this._attachmentElement = undefined;
      this._processPercent = 0;
    }
  }

  onPressedModifiedContainer() {
    this.fileInputElementRef.nativeElement?.click();
  }

  onDroppedResourcesDragDropDirective(files: FileList) {
    this.addFiles(files);
  }

  onChangeInputHTMLElement(files: FileList) {
    this.addFiles(files);
  }

  onRemovedComponentsResourcesCreate(element: ResourceAttachment) {
    this._attachmentElement = undefined;
  }

  /**
   * Pressed: 리소스 변경 요청
   * resource/{DEPARTMENT_ID}/{FOLDER_ID}/{RESOURCE_ID}?previewResourceId={PREVIEW_RESOURCE_ID}
   */
  async onPressedResourceFetch() {
    const bContinue = await ComponentsCommonDialogComponent.create(
      this.dialog,
      '리소스 변경',
      DIALOG_KIND.DIALOG_KIND_WARNING,
      '해당 리소스를 새로운 리소스로 변경하시겠습니까?',
      [],
      true
    )
      .afterClosed()
      .toPromise();

    if (bContinue != true) {
      return;
    }

    let previewResourceId: number;

    const element = this._attachmentElement;
    if (undefined == element) {
      return;
    }

    this._isProcess = true;

    if (!element.isDefinedPreview && undefined != element.previewDataURI) {
      // create th resource

      try {
        const response = await this.resourceService
          .requestPostPreviewResource(
            ResourceExtensions.b64toFile(element.previewDataURI),
            (percent) => {},
            undefined
          )
          .pipe(take(1))
          .toPromise();

        if (CommonExtensions.isSuccess(response.getCommon())) {
          const previewResource = PreviewResourceElement.fromMessage(
            response.getPreviewresource()
          );
          previewResourceId = previewResource.previewResourceId;
        }
      } catch (error) {
        console.error(error);

        await ComponentsCommonDialogComponent.create(
          this.dialog,
          '썸네일 제작 실패',
          DIALOG_KIND.DIALOG_KIND_ERROR,
          '썸네일 제작이 실패되었습니다.'
        )
          .afterClosed()
          .toPromise();

        this._isProcess = false;
        return;
      }
    }

    try {
      const response = await this.resourceService
        .requestPutResource(
          this._departmentId,
          this._folderId,
          this._resourceId,
          this._attachmentElement.file,
          (current: number) => {
            this._processPercent = current;
          },
          (res: string) => {},
          previewResourceId
        )
        .pipe(take(1))
        .toPromise();

      if (CommonExtensions.isSuccess(response.getCommon())) {
        this._attachmentElement = undefined;
        this._processPercent = 0;
        this._element = ResourceElement.fromMessage(response.getResource());

        // open snackbar
        this.snackbar.open('리소스가 변경 되었습니다.', '확인', {
          duration: 2000,
          horizontalPosition: 'center',
          verticalPosition: 'top',
        });
      }
    } catch (error) {
      console.error(error);
    }

    this._isProcess = false;
  }

  private canUpload(file: File): boolean {
    if (0 >= file.size) {
      return false;
    }

    return ResourceExtensions.contentType2Kind(file.type) == this.element.kind;
  }

  private addFiles(files: FileList) {
    this._isProcess = true;

    if (undefined == files || files?.length <= 0) {
      this._isProcess = false;
      return;
    }

    // file list to array
    let items = Array.from(files);
    if (undefined == items || items?.length <= 0) {
      this._isProcess = false;
      return;
    }

    // filter can upload
    items = items.filter((x) => this.canUpload(x));
    if (items?.length <= 0) {
      this._isProcess = false;
      return;
    }

    if (items?.length <= 0) {
      this._isProcess = false;
      return;
    }

    const item = items[0];
    if (undefined == item) {
      this._isProcess = false;
      return;
    }

    if (0 >= item.size) {
      this._isProcess = false;
      return;
    }

    this._attachmentElement = new ResourceAttachment(item);

    this.fileInputElementRef.nativeElement.value = '';

    this._isProcess = false;
  }
}
