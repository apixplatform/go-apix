import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from '../../../../../../node_modules/rxjs';

// import * as this.config from '../../../../../assets/this.config-prod.json';
import { AppConfigService } from '../../../../core/_config/app-config.service';

@Injectable()
export class VizorService {

  private config: any = AppConfigService.apiConfig;
  
  constructor(private http: HttpClient) { }
  /** Get APIX Auth token. */
  getAPIXToken(): Observable<any> {
    // POST APIX username and password to auth endpoint
    return this.http.post(this.config.routes.APIXAuthUrl,
      { userName: this.config.APIXCredentials.username, password: this.config.APIXCredentials.password });
  }
  /** Get Vizor Auth token. */
  getVizorToken(): Observable<any> {
    // Create a query params object and append Vizor username and password
    const body: URLSearchParams = new URLSearchParams();
    body.append('grant_type', 'password');
    body.append('username', this.config.VizorCredentials.username);
    body.append('password', this.config.VizorCredentials.password);

    // POST the query params object to Vizor auth endpoint
    return this.http.post(this.config.routes.VizorAuthUrl,
      body.toString());
  }

  /** Get all available draft returns */
  retrieveAllReturns(authorization, xAuthorization): Observable<any> {
    // Create a headers object and append auth keys
    let postHeaders: HttpHeaders = new HttpHeaders();
    postHeaders = postHeaders.append('authorization', authorization);     // Vizor Auth key
    postHeaders = postHeaders.append('X-Authorization', xAuthorization);  // APIX Auth key
    const params = { headers: postHeaders };

    // GET all available returns from Vizor endpoint using the headers object as request headers
    return this.http.get(this.config.routes.VizorAPIBaseUrl, params);
  }

  /** Get a single available draft return. */
  retrieveReturn(authorization, xAuthorization, revisionId: string): Observable<any> {
    // Create a headers object and append auth keys
    let postHeaders: HttpHeaders = new HttpHeaders();
    postHeaders = postHeaders.append('authorization', authorization);     // Vizor Auth key
    postHeaders = postHeaders.append('X-Authorization', xAuthorization);  // APIX Auth key
    const params = { headers: postHeaders };

    // GET one return with revisionId from Vizor endpoint using the headers object as request headers
    return this.http.get(this.config.routes.VizorAPIBaseUrl + '/' + revisionId, params);
  }

  /** Get a list of errors and validation data for a specific revision ID */
  getValidation(authorization, xAuthorization, revisionId): Observable<any> {
    // Create a headers object and append auth keys
    let postHeaders: HttpHeaders = new HttpHeaders();
    postHeaders = postHeaders.append('authorization', authorization);     // Vizor Auth key
    postHeaders = postHeaders.append('X-Authorization', xAuthorization);  // APIX Auth key
    const params = { headers: postHeaders };

    // GET validation data from Vizor endpoint for specific revisionId
    return this.http.get(this.config.routes.VizorAPIBaseUrl + '/' + revisionId + '/getValidation', params);
  }

  /** Post a return to Vizor */
  postData(authorization, xAuthorization, data: File, revisionId: string): Observable<any> {
    // Create a headers object and append auth keys
    let postHeaders: HttpHeaders = new HttpHeaders();
    postHeaders = postHeaders.append('authorization', authorization);     // Vizor Auth key
    postHeaders = postHeaders.append('X-Authorization', xAuthorization);  // APIX Auth key
    const params = { headers: postHeaders };

    // Create a FormData object and append the file to upload
    const body: FormData = new FormData();
    body.append('file', data, data.name);

    // Save the revisionId in session storage to retrieve in case it cannot be retrieved from Vizor
    sessionStorage.setItem('lastSavedRevisionId', revisionId);

    // POST the file as FormData
    return this.http.post(
      this.config.routes.VizorAPIBaseUrl + '/' + revisionId + '/submit/'
      + this.config.return.returnTypeId + '/upload/true',
      body, params);
  }
}
