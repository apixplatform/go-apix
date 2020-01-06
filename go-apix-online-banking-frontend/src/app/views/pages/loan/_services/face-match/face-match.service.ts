import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

// import * as config from 'api-config.json';
import { Observable } from 'rxjs';
import { AppConfigService } from '../../../../../core/_config/app-config.service';

@Injectable({
  providedIn: 'root'
})
export class FaceMatchService {
  private config: any = AppConfigService.apiConfig;
  
  httpOptions = {
    headers: new HttpHeaders({
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Headers': '*',
      appId: this.config.facematch.apiCredentials.appId,
      appKey: this.config.facematch.apiCredentials.appKey
    })
  };

  constructor(private http: HttpClient) { }

  verifyUser(APIXToken, image1, image2): Observable<any> {
    const headers: HttpHeaders = this.httpOptions.headers.set('X-Authorization', 'bearer ' + APIXToken);

    const formData: FormData = new FormData();
    formData.append('type', 'id')
    formData.append('image1', image1);
    formData.append('image2', image2);

    return this.http.post(this.config.facematch.verifyUrl, formData, { headers });
  }
}
