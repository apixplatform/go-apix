import { Component, OnInit } from '@angular/core';
import { faCheck } from '@fortawesome/free-solid-svg-icons';
import { FaceMatchService } from '@app/core/loan-process/face-match/face-match.service';
import { ApixService } from '@app/core/loan-process/apix/apix.service';
import { HypervergeResponse } from '@app/core/loan-process/_models/kyc/hyperverge-response';
import { DataFornixService } from '@app/core/loan-process/data-fornix/data-fornix.service';

@Component({
  selector: 'dc-validate-id',
  templateUrl: './validate-id.component.html',
  styleUrls: ['./validate-id.component.scss']
})
export class ValidateIdComponent implements OnInit {
  check = faCheck;
  image1: any;
  image2: any;
  image1Base64textString: string;

  APIXToken: string;

  verified: Boolean = false;
  confidence: number;
  submitToVerify: Boolean = false;

  ocrVerified: Boolean = false;
  ocrLoading: Boolean = false

  idImage: string;
  selfieImage: string;

  loading: boolean;
  accountDetails:any = {};

  constructor(
    private faceMatchService: FaceMatchService,
    private dataFornixService: DataFornixService,
    private apixService: ApixService
  ) { }

  ngOnInit() {
    this.apixService.getAPIXToken().subscribe(data => {
      this.APIXToken = data.access_token;
      if (this.APIXToken.includes('Invalid')) {
        console.log('error Invalid Credentials');
      } else {
        console.log('Valid Credentials');
      }
    });
  }

  onFile1Selected(event) {
    this.image1 = event.target.files[0];
    this.loadImage(this.image1, 'idImage');
    this.loadBase64Image(this.image1);
  }

  onFile2Selected(event) {
    this.image2 = event.target.files[0];
    this.loadImage(this.image2, 'selfieImage');
  }

  loadImage(image: any, imgTagId: string) {
    const reader = new FileReader();

    const imgtag: any = document.getElementById(imgTagId);
    imgtag.title = image.name;

    reader.onload = event => {
      imgtag.src = (event.target as any).result as string;
    };

    reader.readAsDataURL(image);
  }

  loadBase64Image(image: any) {
    const reader = new FileReader();

    reader.onload = this.handleReaderLoaded.bind(this);
    reader.readAsBinaryString(image);
  }

  handleReaderLoaded(e) {
    this.image1Base64textString = 'data:image/png;base64,' + btoa(e.target.result);
  }

  verifyUser() {
    this.loading = true;
    this.ocrLoading = true;

    this.faceMatchService
      .verifyUser(this.APIXToken, this.image1, this.image2)
      .subscribe(
        data => {
          const receivedObject: HypervergeResponse = JSON.parse(
            JSON.stringify(data)
          );
          this.submitToVerify = true;

          if (receivedObject.result.match === 'yes') {
            this.verified = true;
            this.confidence = receivedObject.result.conf;
            this.loading = false;

            this.dataFornixService.createUserToken(this.APIXToken).subscribe(data => {
              var auth_token = data["auth_token"];
              this.dataFornixService.documentCapture(this.APIXToken, auth_token, this.image1Base64textString).subscribe(data => {
                console.log(JSON.stringify(data, undefined, 2));
                this.accountDetails.accountName = data.data.properties.name_front
                if (this.accountDetails.accountName){
                  localStorage.setItem(
                    'accountDetails',
                    JSON.stringify(this.accountDetails)
                  );
                  this.ocrVerified = true;
                } else {
                  this.ocrVerified = false;
                }
                this.ocrLoading = false;
              }, error => {
                console.log('DataFronix Document Capture Error:' + JSON.stringify(error, undefined, 2));
                this.ocrVerified = false;
                this.ocrLoading = false;
              })
            }, error => {
              console.log('DataFronix User Token Error:' + JSON.stringify(error, undefined, 2));
              this.ocrVerified = false;
              this.ocrLoading = false;
            })
          } else {
            this.verified = false;
            this.confidence = receivedObject.result.conf;
            this.loading = false;
          }

        },
        error => {
          this.loading = false;

          console.log(
            'error',
            'Error: FaceMatch',
            'Your images were rejected by the FaceMatch API. Please check the console for extra information.'
          );
          console.error(error);
        }
      );

      
  }


  cancel() {
    this.verified = false;
    this.image1 = this.image2 = this.confidence = undefined;
  }
}
