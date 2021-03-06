import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AppConfigService } from '@app/core/config/app-config.service';

// import * as config from 'api-config.json';

@Injectable({
  providedIn: 'root'
})
export class ApixService {
  private config: any = AppConfigService.apiConfig;

  constructor(private http: HttpClient) {}

  getAPIXToken(): Observable<any> {
    const apixOptions = {
      headers: new HttpHeaders({
        Accept: '*/*',
        'Content-Type': 'application/json'
      })
    };

    const body = JSON.stringify(this.config.apix.credentials);

    return this.http.post(this.config.apix.tokenUrl, body, apixOptions);
  }

  getDevAPIXToken(): Observable<any> {
    const body = {
      username: 'gayantha@clucentmeri.site',
      password: '1qaz2wsx@A'
    };

    return this.http.post(
      'https://services.dev.fintechmart.online/api-sandbox/application/token',
      body
    );
  }
}
