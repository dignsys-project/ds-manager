import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { SaturnNetwork } from '../commons/saturn-network';
import { PrometheusService } from './prometheus.service';
import { Observable } from 'rxjs';
import {
  DeleteDepartmentResourceFolderResponse,
  GetDepartmentResourceFolderResponse,
  PatchDepartmentResourceFolderRequest,
  PatchDepartmentResourceFolderResponse,
  PostDepartmentResourceFolderRequest,
  PostDepartmentResourceFolderResponse,
  PutDepartmentResourceFolderRequest,
  PutDepartmentResourceFolderResponse,
  DeleteDepartmentResourceFolderResourceResponse,
} from '../protocols/prometheus_pb';
import { map } from 'rxjs/operators';

@Injectable({ providedIn: 'root' })
export class DepartmentResourceFolderService extends SaturnNetwork {
  constructor(httpClient: HttpClient, prometheusService: PrometheusService) {
    super(httpClient, prometheusService.address);
  }

  public requestGetResourceFolders(): Observable<
    GetDepartmentResourceFolderResponse
  > {
    return this.sendGet('department/0/rf').pipe(
      map((bytes) =>
        GetDepartmentResourceFolderResponse.deserializeBinary(bytes)
      )
    );
  }

  public requestPostResourceFolder(
    departmentId: number,
    name: string,
    parentResourceFolderId?: number
  ): Observable<PostDepartmentResourceFolderResponse> {
    const message = new PostDepartmentResourceFolderRequest();
    message.setName(name);

    if (undefined != parentResourceFolderId) {
      message.setParentdepartmentresourcefolderid(parentResourceFolderId);
    }

    return this.sendPost(`department/${departmentId}/rf`, null, message).pipe(
      map((bytes) =>
        PostDepartmentResourceFolderResponse.deserializeBinary(bytes)
      )
    );
  }

  public requestPutResourceFolder(
    departmentId: number,
    departmentResourceFolderId: number,
    resourceIds: Array<number>
  ): Observable<PutDepartmentResourceFolderResponse> {
    const message = new PutDepartmentResourceFolderRequest();
    message.setResourceidsList(resourceIds);

    return this.sendPut(
      `department/${departmentId}/rf/${departmentResourceFolderId}`,
      undefined,
      message
    ).pipe(
      map((bytes) =>
        PutDepartmentResourceFolderResponse.deserializeBinary(bytes)
      )
    );
  }

  public requestPatchResourceFolder(
    departmentId: number,
    departmentResourceFolderId: number,
    name: string
  ): Observable<PatchDepartmentResourceFolderResponse> {
    const message = new PatchDepartmentResourceFolderRequest();
    message.setName(name);

    return this.sendPatch(
      `department/${departmentId}/rf/${departmentResourceFolderId}`,
      undefined,
      message
    ).pipe(
      map((bytes) =>
        PatchDepartmentResourceFolderResponse.deserializeBinary(bytes)
      )
    );
  }

  public requestDeleteResourceFolder(
    departmentId: number,
    departmentResourceFolderId: number
  ): Observable<DeleteDepartmentResourceFolderResponse> {
    return this.sendDelete(
      `department/${departmentId}/rf/${departmentResourceFolderId}`
    ).pipe(
      map((bytes) =>
        DeleteDepartmentResourceFolderResponse.deserializeBinary(bytes)
      )
    );
  }

  /**
   * DELETE department/{DEPARTMENT_ID}/rf/{DEPARTMENT_RESOURCE_FOLDER_ID}/resource/{RESOURCE_ID}
   * request delete resource from department resource folder id
   * @param departmentResourceFolderId department resource folder id
   * @param resourceId resource id
   */
  public requestDeleteResourceFolderResource(
    departmentId: number,
    departmentResourceFolderId: number,
    resourceId: number
  ): Observable<DeleteDepartmentResourceFolderResourceResponse> {
    return this.sendDelete(
      `department/${departmentId}/rf/${departmentResourceFolderId}/resource/${resourceId}`
    ).pipe(
      map((bytes) =>
        DeleteDepartmentResourceFolderResourceResponse.deserializeBinary(bytes)
      )
    );
  }
}
