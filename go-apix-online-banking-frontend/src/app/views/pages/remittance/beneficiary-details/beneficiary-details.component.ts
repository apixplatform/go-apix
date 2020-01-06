import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { RemitOnlineService } from '../_services/remit-online/remit-online.service';


@Component({
  selector: 'kt-remittance-beneficiary',
  templateUrl: './beneficiary-details.component.html',
  styleUrls: ['./beneficiary-details.component.scss']
})
export class BeneficiaryDetailsComponent implements OnInit {
  valid = true;
  formDetails: any;

  loading = false;
  errMsg: string;

  remittanceDetails: any;

  constructor(
    private formBuilder: FormBuilder,
    private remitOnlineService: RemitOnlineService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit() {
    let remittanceDetails: any = JSON.parse(localStorage.getItem('remittanceDetails'));
    this.formDetails = this.formBuilder.group({
      beneaccoholdername: remittanceDetails ? remittanceDetails.beneaccoholdername : '',
      beneaddress1: remittanceDetails ? remittanceDetails.beneaddress1 : '',
      benezipcode: remittanceDetails ? remittanceDetails.benezipcode : '',
      benemobileno: remittanceDetails ? remittanceDetails.benemobileno : '',
      beneemailid: remittanceDetails ? remittanceDetails.beneemailid : '',
      beneaccno: remittanceDetails ? remittanceDetails.beneaccno : '',
      beneifsc: remittanceDetails ? remittanceDetails.beneifsc : '',
    });
  }

  onSubmit(formData: any) {
    this.loading = true;
    console.log('Received Data', formData);

    if (!formData.beneaccoholdername || !formData.beneaddress1 || !formData.benezipcode || !formData.benemobileno || !formData.beneemailid || !formData.beneaccno || !formData.beneifsc) {
      this.valid = false;
      this.loading = false;
    } else {
      this.valid = true;

      if (this.remittanceDetails == undefined){
        this.remittanceDetails = {}
      }

      this.remittanceDetails.beneaccoholdername = formData.beneaccoholdername;
      this.remittanceDetails.beneaddress1 = formData.beneaddress1;
      this.remittanceDetails.benezipcode = formData.benezipcode;
      this.remittanceDetails.benemobileno = formData.benemobileno;
      this.remittanceDetails.beneemailid = formData.beneemailid;
      this.remittanceDetails.beneaccno = formData.beneaccno;
      this.remittanceDetails.beneifsc = formData.beneifsc;
      

      localStorage.setItem('remittanceDetails', JSON.stringify(this.remittanceDetails));
      this.router.navigate(['./remitter'], {relativeTo: this.activatedRoute});
    }
  }

}
