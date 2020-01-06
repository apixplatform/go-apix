import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'dc-pricing-cards',
  templateUrl: './pricing-cards.component.html',
  styleUrls: ['./pricing-cards.component.scss']
})
export class PricingCardsComponent implements OnInit {
  plans = [
    {
      icon: 'box',
      plan: {
        name: 'Personal',
        price: 0.99,
        description:
          'Includes simple but powerful functionality for individuals and small teams. You can upgrade on the way'
      },
      features: [
        {
          name: 'Cras justo odio',
          class: 'strike-through'
        },
        {
          name: 'Dapibus ac facilisis in',
          class: 'strike-through'
        },
        {
          name: 'Morbi leo risus',
          class: 'strike-through'
        },
        {
          name: 'Porta ac consectetur ac'
        },
        {
          name: 'Vestibulum at eros'
        }
      ]
    },
    {
      icon: 'download-cloud',
      best: true,
      plan: {
        name: 'Business',
        price: 29.99,
        description:
          'For settle companies looking to stay competitive in the market and growing with the technology'
      },
      features: [
        {
          name: 'Cras justo odio',
          class: 'strike-through'
        },
        {
          name: 'Dapibus ac facilisis in',
          class: 'strike-through'
        },
        {
          name: 'Morbi leo risus'
        },
        {
          name: 'Porta ac consectetur ac'
        },
        {
          name: 'Vestibulum at eros'
        }
      ]
    },
    {
      icon: 'settings',
      plan: {
        name: 'Enterprise',
        price: 99.99,
        description:
          'Everything you can get from a professional solution to keep your business on its way to success'
      },
      features: [
        {
          name: 'Cras justo odio'
        },
        {
          name: 'Dapibus ac facilisis in'
        },
        {
          name: 'Morbi leo risus'
        },
        {
          name: 'Porta ac consectetur ac'
        },
        {
          name: 'Vestibulum at eros'
        }
      ]
    }
  ];

  constructor() {}

  ngOnInit() {}
}
