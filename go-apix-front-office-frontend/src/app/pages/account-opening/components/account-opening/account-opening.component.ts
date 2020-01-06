import { Component, OnInit } from '@angular/core';
import { AppConfigService } from '@app/core/config/app-config.service';

@Component({
  selector: 'dc-account-opening',
  templateUrl: './account-opening.component.html',
  styleUrls: ['./account-opening.component.scss']
})
export class AccountOpeningComponent implements OnInit {
  private config: any = AppConfigService.apiConfig;
  
  accountNumber: number;
  personalId: string;
  accountDetails: any;
  accountName: string;
  accountScheme: string;
  secondaryIdentification: string;
  email: string;

  onlineBankingUrl = this.config.gobank.onlineBankingUrl;

  constructor() {}

  ngOnInit() {
    this.accountDetails = JSON.parse(localStorage.getItem('accountDetails'));
    if (this.accountDetails) {
      this.accountNumber = this.accountDetails.accountId;
      this.personalId = this.accountDetails.accountIdentification;
      this.accountName = this.accountDetails.accountName;
      this.accountScheme = this.accountDetails.schemeName;
      this.secondaryIdentification = this.accountDetails.secondaryIdentification;
      this.email = this.accountDetails.email;
    }
  }
}
