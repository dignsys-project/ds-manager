import { Component, OnInit, Input } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { SCENE_RESOURCE_KIND } from 'src/app/protocols/common_pb';
import { ScenePartDocumentElement } from 'src/app/models/scene-part-document-element';
import { ResourceElement } from 'src/app/models/resource-element';
import { ComponentsResourcesDialogV2Component } from 'src/app/components/components-resources-dialog-v2/components-resources-dialog-v2.component';

@Component({
  selector: 'app-scenes-create-common-document',
  templateUrl: './scenes-create-common-document.component.html',
  styleUrls: ['./scenes-create-common-document.component.scss'],
})
export class ScenesCreateCommonDocumentComponent implements OnInit {
  @Input()
  element: ScenePartDocumentElement;

  get documentName(): string {
    return undefined != this.element?.resource
      ? this.element.resource.name
      : '';
  }
  get hasResource(): boolean {
    return undefined != this.element?.resource;
  }

  constructor(private dialog: MatDialog) {}

  ngOnInit(): void {}

  async onClickedSelectDocument() {
    let resourceElement: ResourceElement;
    const elements = await ComponentsResourcesDialogV2Component.create(
      this.dialog,
      SCENE_RESOURCE_KIND.SCENE_RESOURCE_KIND_PDF
    )
      .afterClosed()
      .toPromise();

    if (elements?.length > 0) {
      resourceElement = elements[0];
    } else {
      resourceElement = undefined;
    }

    this.element.resource = resourceElement;
  }

  onClickedRemoveDocument() {
    this.element.resource = null;
  }
}
