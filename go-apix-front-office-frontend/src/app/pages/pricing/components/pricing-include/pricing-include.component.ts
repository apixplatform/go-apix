import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'dc-pricing-include',
  templateUrl: './pricing-include.component.html',
  styleUrls: ['./pricing-include.component.scss']
})
export class PricingIncludeComponent implements OnInit {
  features = [
    { icon: 'headphones', title: 'First class support' },
    { icon: 'box', title: 'Code snippets' },
    { icon: 'headphones', title: 'Full documentation' },
    { icon: 'lock', title: 'Total control of your code' },
    { icon: 'airplay', title: 'Responsive design' },
    { icon: 'monitor', title: 'Browser support' }
  ];

  constructor() {}

  ngOnInit() {}
}
