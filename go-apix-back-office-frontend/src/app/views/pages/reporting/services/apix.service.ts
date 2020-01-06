import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
// import * as hardcoded from '../../../../../assets/hardcoded-prod.json';
import { HttpClient } from '@angular/common/http/http';
import { AppConfigService } from '../../../../core/_config/app-config.service';
@Injectable({
  providedIn: 'root'
})
export class ApixService {

  private config: any = AppConfigService.apiConfig;
  
  constructor(private http: HttpClient) { }

  /** Get APIX Auth token. */
  getAPIXToken(): Observable<any> {
    // POST APIX username and password to auth endpoint
    return this.http.post(this.config.routes.APIXAuthUrl,
      { userName: this.config.APIXCredentials.username, password: this.config.APIXCredentials.password });
  }
}
