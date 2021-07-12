import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { SaturnNetwork } from '../commons/saturn-network';
import { PrometheusService } from './prometheus.service';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { CommonExtensions } from '../commons/common-extensions';
import {
  DeleteDepartmentSceneFolderResponse,
  GetDepartmentSceneFolderResponse,
  PatchDepartmentSceneFolderRequest,
  PatchDepartmentSceneFolderResponse,
  PostDepartmentSceneFolderRequest,
  PostDepartmentSceneFolderResponse,
  PutDepartmentSceneFolderRequest,
  PutDepartmentSceneFolderResponse,
} from '../protocols/prometheus_pb';
import { DepartmentSceneFolderItemElement } from '../models/department-scene-folder-item-element';
import {
  DepartmentFolderNode,
  DepartmentNodeItem,
  IDepartmentItem,
} from '../common/department-folder-node';
import { DEPARTMENT_FOLDER_ITEM_KIND } from '../common/DEPARTMENT_FOLDER_ITEM_KIND';
import { DepartmentSceneFolderElement } from '../models/department-scene-folder-element';

@Injectable({ providedIn: 'root' })
export class DepartmentSceneFolderService extends SaturnNetwork {
  constructor(httpClient: HttpClient, prometheusService: PrometheusService) {
    super(httpClient, prometheusService.address);
  }

  public makeNodes(
    elements: Array<DepartmentSceneFolderItemElement>,
    doCreated: (element: DepartmentSceneFolderElement) => IDepartmentItem
  ): Array<DepartmentFolderNode> {
    const items = new Array<DepartmentFolderNode>();

    // set all items

    elements.forEach((x) => {
      const node = new DepartmentFolderNode();
      node.name = x.departmentBase.name;
      node.kind = DEPARTMENT_FOLDER_ITEM_KIND.DEPARTMENT;
      node.children = new Array<DepartmentFolderNode>();

      node.item = new DepartmentNodeItem(
        x.departmentNodeBase.id,
        x.departmentBase.id,
        x.departmentBase.name,
        x.departmentNodeBase.parentDepartmentNodeId
      );
      if (x.sceneFolders.length > 0) {
        x.sceneFolders.forEach((sf) => {
          const folderNode = new DepartmentFolderNode();
          folderNode.kind = DEPARTMENT_FOLDER_ITEM_KIND.FOLDER;
          folderNode.item = doCreated(sf);
          folderNode.name = sf.name;
          folderNode.children = new Array<DepartmentFolderNode>();

          items.push(folderNode);
        });
      }
      items.push(node);
    });

    const roots = new Array<DepartmentFolderNode>();

    // calculate root
    items.forEach((x) => {
      if (x.kind == DEPARTMENT_FOLDER_ITEM_KIND.DEPARTMENT) {
        // department
        const departmentNodeItem = x.item as DepartmentNodeItem;

        const parentNodeId: number = departmentNodeItem.parentNodeId();

        // don`t have parent node
        if (
          !CommonExtensions.isNullOrUndefined(parentNodeId) &&
          0 != parentNodeId
        ) {
          // find department node
          const parentItem = items
            .filter((x) => x.kind == DEPARTMENT_FOLDER_ITEM_KIND.DEPARTMENT)
            .find(
              (x) => (x.item as DepartmentNodeItem).nodeId() == parentNodeId
            );
          if (!CommonExtensions.isNullOrUndefined(parentItem)) {
            parentItem.children.push(x);
          } else {
            roots.push(x);
          }
        } else {
          // It is root node
          roots.push(x);
        }
      } else if (x.kind == DEPARTMENT_FOLDER_ITEM_KIND.FOLDER) {
        // folder
        const item = x.item;

        const parentFolderId = item.parentId();
        if (0 < parentFolderId) {
          const parentFolder = items
            .filter((x) => x.kind == DEPARTMENT_FOLDER_ITEM_KIND.FOLDER)
            .find((x) => x.item.id() == parentFolderId);
          if (undefined != parentFolder) {
            parentFolder.children.push(x);
          }
        } else {
          const departmentId: number = item.departmentId();

          // don`t have parent node
          if (
            !CommonExtensions.isNullOrUndefined(departmentId) &&
            0 != departmentId
          ) {
            // find department node
            const parentDepartment = items
              .filter((x) => x.kind == DEPARTMENT_FOLDER_ITEM_KIND.DEPARTMENT)
              .find((x) => x.item.id() == departmentId);

            if (!CommonExtensions.isNullOrUndefined(parentDepartment)) {
              parentDepartment.children.push(x);
            }
          }
        }
      }
    });
    return roots;
  }

  public requestGetSceneFolders(): Observable<
    GetDepartmentSceneFolderResponse
  > {
    return this.sendGet('department/0/sf').pipe(
      map((bytes) => GetDepartmentSceneFolderResponse.deserializeBinary(bytes))
    );
  }

  public requestPutSceneFolder(
    departmentId: number,
    departmentSceneFolderId: number,
    sceneIds: Array<number>
  ): Observable<PutDepartmentSceneFolderResponse> {
    const message = new PutDepartmentSceneFolderRequest();
    message.setSceneidsList(sceneIds);

    return this.sendPut(
      `department/${departmentId}/sf/${departmentSceneFolderId}`,
      undefined,
      message
    ).pipe(
      map((bytes) => PutDepartmentSceneFolderResponse.deserializeBinary(bytes))
    );
  }

  public requestPatchSceneFolder(
    departmentId: number,
    departmentSceneFolderId: number,
    name: string
  ): Observable<PatchDepartmentSceneFolderResponse> {
    const message = new PatchDepartmentSceneFolderRequest();
    message.setName(name);

    return this.sendPatch(
      `department/${departmentId}/sf/${departmentSceneFolderId}`,
      undefined,
      message
    ).pipe(
      map((bytes) =>
        PatchDepartmentSceneFolderResponse.deserializeBinary(bytes)
      )
    );
  }

  public requestPostSceneFolder(
    departmentId: number,
    name: string,
    parentSceneFolderId?: number
  ): Observable<PostDepartmentSceneFolderResponse> {
    const message = new PostDepartmentSceneFolderRequest();
    message.setName(name);

    if (!CommonExtensions.isNullOrUndefined(parentSceneFolderId)) {
      message.setParentdepartmentscenefolderid(parentSceneFolderId);
    }

    return this.sendPost(`department/${departmentId}/sf`, null, message).pipe(
      map((bytes) => PostDepartmentSceneFolderResponse.deserializeBinary(bytes))
    );
  }

  public requestDeleteSceneFolder(
    departmentId: number,
    departmentSceneFolderId: number
  ): Observable<DeleteDepartmentSceneFolderResponse> {
    return this.sendDelete(
      `department/${departmentId}/sf/${departmentSceneFolderId}`
    ).pipe(
      map((bytes) =>
        DeleteDepartmentSceneFolderResponse.deserializeBinary(bytes)
      )
    );
  }
}
