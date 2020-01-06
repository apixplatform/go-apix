import { Component, OnInit } from '@angular/core';
import {
  faUser,
  faUsersCog,
  faUserShield
} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'dc-online-payment-steps',
  templateUrl: './online-payment-steps.component.html',
  styleUrls: ['./online-payment-steps.component.scss']
})
export class OnlinePaymentStepsComponent implements OnInit {
  steps = [
    {
      icon: faUser,
      image: { name: 'register', class: 'w-50' },
      title: 'register free',
      button: { text: 'Sign Up Free' }
    },
    {
      icon: faUsersCog,
      image: { name: 'configure' },
      title: 'configure your sourcing',
      button: { text: 'Learn More' }
    },
    {
      icon: faUserShield,
      image: { name: 'receive' },
      title: 'start receiving payments',
      button: { text: 'Learn More' }
    }
  ];

  constructor() {}

  ngOnInit() {}
}
