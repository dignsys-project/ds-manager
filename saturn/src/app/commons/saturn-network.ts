import {
  HttpClient,
  HttpEventType,
  HttpResponse,
  HttpHeaders,
  HttpParams,
} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { map, tap, filter, timeoutWith } from 'rxjs/operators';

import { CommonExtensions } from './common-extensions';
import { Message } from 'google-protobuf';
import { ResourceElement } from '../models/resource-element';

export abstract class SaturnNetwork {
  private readonly m_Address: string;

  protected get address() {
    return this.m_Address;
  }

  constructor(protected httpClient: HttpClient, address: string) {
    this.m_Address = address;
  }

  protected Get(route: string, queries?: Map<string, any>): Observable<string> {
    route = this.mergeFromQueries(route, queries);

    try {
      return this.httpClient.get(route).pipe(map((x: string) => x));
    } catch (error) {
      return throwError(error);
    }
  }

  protected sendGet(
    route: string,
    queries?: Map<string, any>,
    options?: {
      headers?:
        | HttpHeaders
        | {
            [header: string]: string | string[];
          };
      observe?: 'body';
      params?:
        | HttpParams
        | {
            [param: string]: string | string[];
          };
      reportProgress?: boolean;
      responseType?: 'json';
      withCredentials?: boolean;
    }
  ): Observable<Uint8Array> {
    route = this.mergeFromQueries(route, queries);
    try {
      return this.httpClient
        .get(route, options)
        .pipe(map((res: string) => CommonExtensions.deserialize(res)));
    } catch (error) {
      return throwError(error);
    }
  }

  protected sendDelete(
    route: string,
    queries?: Map<string, any>
  ): Observable<Uint8Array> {
    route = this.mergeFromQueries(route, queries);

    try {
      return this.httpClient
        .delete(route, {})
        .pipe(map((res: string) => CommonExtensions.deserialize(res)));
    } catch (error) {
      return throwError(error);
    }
    return null;
  }

  protected sendPut(
    route: string,
    queries?: Map<string, any>,
    message?: Message
  ): Observable<Uint8Array> {
    route = this.mergeFromQueries(route, queries);

    try {
      if (undefined != message) {
        const encoded = CommonExtensions.serialize(message.serializeBinary());
        return this.httpClient
          .put(route, encoded, {
            headers: { 'Content-Type': 'application/x-protobuf' },
          })
          .pipe(map((res: string) => CommonExtensions.deserialize(res)));
      } else {
        return this.httpClient
          .put(route, null)
          .pipe(map((res: string) => CommonExtensions.deserialize(res)));
      }
    } catch (error) {
      return throwError(error);
    }
  }

  protected sendPostWithObject(
    route: string,
    queries: Map<string, any>,
    bodyContent: object
  ): Observable<Uint8Array> {
    route = this.mergeFromQueries(route, queries);

    try {
      if (undefined != bodyContent) {
        return this.httpClient
          .post(route, bodyContent)
          .pipe(map((res: string) => CommonExtensions.deserialize(res)));
      } else {
        return this.httpClient
          .post(route, null)
          .pipe(map((res: string) => CommonExtensions.deserialize(res)));
      }
    } catch (error) {
      return throwError(error);
    }
  }

  protected sendPost(
    route: string,
    queries: Map<string, any>,
    message: Message
  ): Observable<Uint8Array> {
    route = this.mergeFromQueries(route, queries);

    try {
      if (undefined != message) {
        const encoded = CommonExtensions.serialize(message.serializeBinary());
        return this.httpClient
          .post(route, encoded, {
            headers: { 'Content-Type': 'application/x-protobuf' },
          })
          .pipe(map((res: string) => CommonExtensions.deserialize(res)));
      } else {
        return this.httpClient
          .post(route, null)
          .pipe(map((res: string) => CommonExtensions.deserialize(res)));
      }
    } catch (error) {
      return throwError(error);
    }
  }

  protected sendPatch(
    route: string,
    queries: Map<string, any>,
    message: Message
  ): Observable<Uint8Array> {
    route = this.mergeFromQueries(route, queries);

    try {
      if (undefined != message) {
        const encoded = CommonExtensions.serialize(message.serializeBinary());
        return this.httpClient
          .patch(route, encoded, {
            headers: { 'Content-Type': 'application/x-protobuf' },
          })
          .pipe(map((res: string) => CommonExtensions.deserialize(res)));
      } else {
        return this.httpClient
          .patch(route, null)
          .pipe(map((res: string) => CommonExtensions.deserialize(res)));
      }
    } catch (error) {
      return throwError(error);
    }
  }

  protected uploadPut(
    route: string,
    queries: Map<string, any>,
    onProgress: (current: number) => void,
    onCompleted: (res: string) => void,
    file: File
  ) {
    const formData = new FormData();
    formData.append(file.name, file);

    route = this.mergeFromQueries(route, queries);

    try {
      return this.httpClient
        .put(route, formData, {
          reportProgress: true,
          observe: 'events',
        })
        .pipe(timeoutWith(600000, throwError('timeout')))
        .pipe(
          filter((event) => {
            if (event.type === HttpEventType.UploadProgress) {
              const current = Math.round((100 * event.loaded) / event.total);
              if (undefined != onProgress) {
                onProgress(current);
              }

              return false;
            } else if (event.type === HttpEventType.Response) {
              if (undefined != onCompleted) {
                onCompleted(event.body as string);
              }

              return true;
            }
          })
        )
        .pipe(map((event: HttpResponse<any>) => event.body))
        .pipe(map((res) => CommonExtensions.deserialize(res)));
    } catch (error) {
      return throwError(error);
    }
  }

  protected upload(
    route: string,
    queries: Map<string, any>,
    onProgress: (current: number) => void,
    onCompleted: (res: string) => void,
    file: File
  ) {
    const formData = new FormData();
    formData.append(file.name, file);

    route = this.mergeFromQueries(route, queries);

    try {
      return this.httpClient
        .post(route, formData, {
          reportProgress: true,
          observe: 'events',
        })
        .pipe(timeoutWith(600000, throwError('timeout')))
        .pipe(
          filter((event) => {
            if (event.type === HttpEventType.UploadProgress) {
              const current = Math.round((100 * event.loaded) / event.total);
              if (undefined != onProgress) {
                onProgress(current);
              }

              return false;
            } else if (event.type === HttpEventType.Response) {
              if (undefined != onCompleted) {
                onCompleted(event.body as string);
              }

              return true;
            }
          })
        )
        .pipe(map((event: HttpResponse<any>) => event.body))
        .pipe(map((res) => CommonExtensions.deserialize(res)));
    } catch (error) {
      return throwError(error);
    }
  }

  private mergeFromQueries(route: string, queries?: Map<string, any>): string {
    route = SaturnNetwork.makeRoute(this.m_Address, route);

    if (undefined != queries) {
      let query = '?';
      let bStart = true;

      queries.forEach((value, key) => {
        if (!bStart) {
          query += '&';
        } else {
          bStart = false;
        }

        query += `${key}=${value}`;
      });

      route += query;
    }

    return route;
  }

  private static makeRoute(address: string, route: string): string {
    return undefined != route ? `${address}/${route}` : `${address}`;
  }
}
