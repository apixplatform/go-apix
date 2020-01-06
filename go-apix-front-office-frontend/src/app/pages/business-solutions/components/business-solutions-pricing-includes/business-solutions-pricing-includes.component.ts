import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'dc-business-solutions-pricing-includes',
  templateUrl: './business-solutions-pricing-includes.component.html',
  styleUrls: ['./business-solutions-pricing-includes.component.scss']
})
export class BusinessSolutionsPricingIncludesComponent implements OnInit {
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
