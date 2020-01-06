import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

// import * as config from 'api-config.json';
import { Observable } from 'rxjs';
import { AppConfigService } from '@app/core/config/app-config.service';

@Injectable({
  providedIn: 'root'
})
export class DataFornixService {
  private config: any = AppConfigService.apiConfig;

  httpOptions = {
    headers: new HttpHeaders({
      'api-token': this.config.datafornix.apiToken
    })
  };


  constructor(private http: HttpClient) {}

  createUserToken(APIXToken): Observable<any> {
    const headers: HttpHeaders = this.httpOptions.headers.set(
      'X-Authorization',
      'bearer ' + APIXToken
    );

    const request = {
      "user_token": "12345ab",
      "channel": "web",
      "reference_number": "web",
      "type_of_request": "aync"
    }

    return this.http.post(this.config.datafornix.tokenUrl, request, {
      headers
    });
  }


  documentCapture(APIXToken, accessToken, idImageBase64): Observable<any> {
    var httpOpt = {
      headers: new HttpHeaders({
        'api-token': this.config.datafornix.apiToken,
        'X-Authorization': 'bearer ' + APIXToken,
        'auth-token': accessToken
      })
    };
    

    const request = {  
      "document_type":"Passport",
      "channel":"web",
      "reference_number":"123",
      "type_of_request":"get OCR",
      "images":[
         {  
           "authority":"AE",
           "description":"Front",
           "image_string":idImageBase64
         }
      ]
   }
   

    return this.http.post(this.config.datafornix.documentCaptureUrl, request, httpOpt);
  }

  verifyUser(APIXToken, image1, image2): Observable<any> {
    const headers: HttpHeaders = this.httpOptions.headers.set(
      'X-Authorization',
      'bearer ' + APIXToken
    );

    const formData: FormData = new FormData();
    formData.append('type', 'id');
    formData.append('image1', image1);
    formData.append('image2', image2);

    return this.http.post(this.config.facematch.verifyUrl, formData, {
      headers
    });
  }
}
