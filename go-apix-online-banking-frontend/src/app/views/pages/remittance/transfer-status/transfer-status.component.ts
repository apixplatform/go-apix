import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { RemitOnlineService } from '../_services/remit-online/remit-online.service';


@Component({
  selector: 'kt-remittance-status',
  templateUrl: './transfer-status.component.html',
  styleUrls: ['./transfer-status.component.scss']
})
export class TransferStatusComponent implements OnInit {

  remittanceDetails: any;

  constructor(
    private formBuilder: FormBuilder,
    private remitOnlineService: RemitOnlineService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit() {
    this.remittanceDetails = JSON.parse(localStorage.getItem('remittanceDetails'));
  }

  gotoDashboard(){
    localStorage.removeItem('remittanceDetails');
    this.router.navigate(['/dashboard'], {relativeTo: this.activatedRoute});
  }

}
