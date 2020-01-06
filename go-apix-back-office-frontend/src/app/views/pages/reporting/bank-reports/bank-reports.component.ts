import { Component, OnInit, NgZone } from '@angular/core';

import { BlockUI, NgBlockUI } from 'ng-block-ui';
import { VizorService } from '../services/vizor.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { NgxSpinnerService } from 'ngx-spinner';


@Component({
  selector: 'app-bank-reports',
  templateUrl: './bank-reports.component.html',
  styleUrls: ['./bank-reports.component.css']
})
export class BankReportsComponent implements OnInit {
  @BlockUI() blockUI: NgBlockUI;

  files: any[] = [];
  authorization: string;
  xAuthorization: string;
  return: any;
  failedRules: any;

  constructor(private vizorService: VizorService,private zone:NgZone,private modalService: NgbModal,private spinner: NgxSpinnerService) { }

  ngOnInit() {
    this.spinner.show();
    this.vizorService.getAPIXToken().subscribe(apixData => {
      console.log(apixData);
      this.xAuthorization = 'bearer ' + apixData.access_token;

      this.vizorService.getVizorToken().subscribe(vizorData => {
        console.log(vizorData);
        this.authorization = 'Bearer ' + vizorData.access_token;

        this.vizorService.retrieveAllReturns(this.authorization, this.xAuthorization).subscribe(returnData => {
          console.log('returnData', returnData);

          if (returnData) {
            const lastRevisionId = sessionStorage.getItem('lastSavedRevisionId');

            if (lastRevisionId) {
              sessionStorage.setItem('lastSavedRevisionId', undefined);
              sessionStorage.removeItem('lastSavedRevisionId');
            }

            returnData.data[0].revisions[0].dueDate
              = new Date(returnData.data[0].revisions[0].dueDate).toLocaleDateString();
            returnData.data[0].endDate = new Date(returnData.data[0].endDate).toLocaleDateString();
            this.zone.run(() => { // <== added
              this.return = returnData.data[0];
              this.spinner.hide();
          });
          } else {
            const lastRevisionId = sessionStorage.getItem('lastSavedRevisionId');

            if (lastRevisionId) {
              this.vizorService.retrieveReturn(this.authorization, this.xAuthorization, lastRevisionId).subscribe(lastReturnData => {
                lastReturnData.data.revisions[0].dueDate
                  = new Date(lastReturnData.data.revisions[0].dueDate).toLocaleDateString();
                lastReturnData.data.endDate = new Date(lastReturnData.data.endDate).toLocaleDateString();
                this.return = lastReturnData.data;
                this.spinner.hide();
              });
            }
          }
        });

      });

    });
  }

  /** Handle changes in file inputs. */
  onFileChange(event, index) {
    this.files[index] = event.target.files;
    if (event.target.files.length === 0) {
      this.files[index] = undefined;
    }
    console.log(event);

    if (index === 0 && this.return) {
      this.spinner.show();
      this.vizorService.postData(this.authorization,
        this.xAuthorization, this.files[index][0] as File, this.return.revisions[0].id).subscribe(data => {
          console.log(data);
          this.spinner.hide();
          setTimeout(() => { window.location.reload(); }, 3000);
        });
    }
  }

  /** Send a request to the vizorService's getValidation endpoint. */
  getValidation(revisionId: string): void {
    this.spinner.show();
    this.vizorService.getValidation(this.authorization, this.xAuthorization, revisionId).subscribe(validationData => {
      console.log(validationData);

      this.failedRules = validationData.data.failedRules;
      this.spinner.hide();
    });
  }

  openValidationModal(content,revisionId) {
    this.getValidation(revisionId);
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
    }, (reason) => {
    });
  }
}
