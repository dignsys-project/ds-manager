import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import * as CRYPTO from 'crypto-js';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { SaturnNetwork } from 'src/app/commons/saturn-network';
import { MEMBER_KIND } from 'src/app/protocols/common_pb';
import {
  PostAccountRequest,
  PostAccountResponse,
  PutAccountRequest,
  PutAccountResponse,
  GetAccountResponse,
} from 'src/app/protocols/prometheus_pb';
import { PrometheusService } from 'src/app/services/prometheus.service';
import { environment } from 'src/environments/environment';

@Injectable({ providedIn: 'root' })
export class AccountsService extends SaturnNetwork {
  constructor(httpClient: HttpClient, prometheusService: PrometheusService) {
    super(httpClient, prometheusService.address);
  }

  /**
   * Request GET account
   * @param memberId member id
   */
  public requestGetAccount(memberId: number): Observable<GetAccountResponse> {
    return this.sendGet(`account/${memberId}`).pipe(
      map((bytes) => GetAccountResponse.deserializeBinary(bytes))
    );
  }

  /**
   * Request PUT account
   * @param email
   * @param password
   */
  public requestPutAccount(
    email: string,
    password: string
  ): Observable<PutAccountResponse> {
    const message = new PutAccountRequest();
    message.setEmail(email);

    message.setPassword(this._encryption(password, environment.secret));

    return this.sendPut('account', undefined, message).pipe(
      map((bytes) => PutAccountResponse.deserializeBinary(bytes))
    );
  }

  /**
   * Request POST account
   * @param email
   * @param password
   * @param kind
   */
  public requestPostAccount(
    email: string,
    password: string,
    kind: string | null = undefined
  ): Observable<PostAccountResponse> {
    const message = new PostAccountRequest();
    message.setEmail(email);
    message.setPassword(this._encryption(password, environment.secret));
    if (undefined != kind) {
      message.setMemberkind(MEMBER_KIND[kind]);
    }

    return this.sendPost('account', undefined, message).pipe(
      map((bytes) => PostAccountResponse.deserializeBinary(bytes))
    );
  }

  private _encryption(message: string, secret: string = 'secret'): string {
    const keySize = 256;
    var salt = CRYPTO.lib.WordArray.random(16);

    var key = CRYPTO.PBKDF2(secret, salt, {
      keySize: keySize / 32,
      iterations: 100,
    });

    var iv = CRYPTO.lib.WordArray.random(128 / 8);

    var encrypted = CRYPTO.AES.encrypt(message, key, { iv: iv });

    return CRYPTO.enc.Base64.stringify(
      salt.concat(iv).concat(encrypted.ciphertext)
    );
  }
}
