import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'dc-pricing-two-cards',
  templateUrl: './pricing-two-cards.component.html',
  styleUrls: ['./pricing-two-cards.component.scss']
})
export class PricingTwoCardsComponent implements OnInit {
  plans = [
    {
      icon: 'box',
      plan: {
        name: 'Standard',
        price: { monthly: 0.99, yearly: 0.78 },
        description:
          'Everything you can get from a professional solution to keep your business on its way to success'
      },
      features: [
        {
          name: 'Lorem ipsum dolor sit amet ipsa',
          icon: 'box'
        },
        {
          name: 'Ab architecto blanditiis consectetur',
          icon: 'airplay'
        },
        {
          name: 'Blanditiis dignissimos ipsa ipsam odio',
          icon: 'lock'
        },
        {
          name: 'Dolorem ducimus ea earum ipsam laborum',
          icon: 'repeat'
        }
      ]
    }
  ];

  xtras = [
    { icon: 'dollar-sign', title: 'Large Sales Volume', border: 'right' },
    { icon: 'bell', title: 'Custom Feature' },
    { icon: 'activity', title: 'Important Feature', border: 'right' },
    { icon: 'box', title: 'Unique Feature' }
  ];
  constructor() {}

  ngOnInit() {}
}
