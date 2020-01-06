import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VizorService } from './services/vizor.service';
import { MasReportsComponent } from './mas-reports/mas-reports.component';
import { BankReportsComponent } from './bank-reports/bank-reports.component';
import { RouterModule, Routes } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgxSpinnerModule } from "ngx-spinner";
// tslint:disable-next-line:class-name
const routes: Routes = [
	{
		path: 'bank-reports',
    component: BankReportsComponent
  },
  {
		path: 'mas-reports',
    component: MasReportsComponent
  }
];

@NgModule({
  declarations: [MasReportsComponent,BankReportsComponent],
  imports: [
    CommonModule,
    NgbModule,
    NgxSpinnerModule,
    RouterModule.forChild(routes)
  ],
  providers:[VizorService],

})
export class ReportingModule { }
