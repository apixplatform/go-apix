import { Component, OnInit } from '@angular/core';
import { AppConfigService } from '@app/core/config/app-config.service';

@Component({
  selector: 'dc-business-solutions-heading',
  templateUrl: './business-solutions-heading.component.html',
  styleUrls: ['./business-solutions-heading.component.scss']
})
export class BusinessSolutionsHeadingComponent implements OnInit {
  private config: any = AppConfigService.apiConfig;

  onlineBankingUrl = this.config.gobank.onlineBankingUrl;

  constructor() {}

  ngOnInit() {}
}
