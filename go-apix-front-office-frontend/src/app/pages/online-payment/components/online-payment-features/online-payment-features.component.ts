import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'dc-online-payment-features',
  templateUrl: './online-payment-features.component.html',
  styleUrls: ['./online-payment-features.component.scss']
})
export class OnlinePaymentFeaturesComponent implements OnInit {
  elements = [
    { icon: 'credit-card', title: 'seamless payment' },
    { icon: 'pie-chart', title: 'insightfull analytics' },
    { icon: 'book', title: 'online wallet' }
  ];

  constructor() {}

  ngOnInit() {}
}
