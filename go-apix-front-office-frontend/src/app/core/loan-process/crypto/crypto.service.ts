import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';

import { Observable } from 'rxjs';

// import * as config from 'api-config.json';
import { AppConfigService } from '@app/core/config/app-config.service';

@Injectable({
  providedIn: 'root'
})
export class CryptoService {
  private config: any = AppConfigService.apiConfig;

  commonHeaders: HttpHeaders = new HttpHeaders({
    Accept: 'text/plain',
    'Content-Type': 'text/plain'
  });

  constructor(private http: HttpClient) {}

  encrypt(stringToEncrypt: string): Observable<any> {
    const headers = this.commonHeaders;

    let params: HttpParams = new HttpParams();
    params = params.append('text', stringToEncrypt);

    return this.http.get(this.config.encDecUtil.url.encryptEndpoint, {
      headers,
      params,
      responseType: 'text'
    });
  }

  decrypt(stringToDecrypt: string): Observable<any> {
    const headers = this.commonHeaders;

    let params: HttpParams = new HttpParams();
    params = params.append('text', stringToDecrypt);

    return this.http.get(this.config.encDecUtil.url.decryptEndpoint, {
      headers,
      params,
      responseType: 'text'
    });
  }
}
