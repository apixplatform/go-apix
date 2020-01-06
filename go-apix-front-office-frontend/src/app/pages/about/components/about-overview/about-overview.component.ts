import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'dc-about-overview',
  templateUrl: './about-overview.component.html',
  styleUrls: ['./about-overview.component.scss']
})
export class AboutOverviewComponent implements OnInit {
  cards: object[] = [
    {
      icon: 'calendar',
      iconClass: 'stroke-primary',
      title: 'Calendar',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi at, cumque dolores dolorum est.',
      class: 'mt-6 ml-lg-auto',
      bg: '',
      animation: 'fade-up'
    },
    {
      icon: 'bar-chart',
      iconClass: 'wh36',
      title: 'Dashboard',
      description:
        'Cupiditate debitis delectus dolor dolore doloremque, doloribus eveniet illo in labore neque.',
      class: 'mr-lg-auto',
      bg: 'text-contrast bg-info-gradient',
      animation: 'fade-up'
    },
    {
      icon: 'mail',
      iconClass: 'stroke-primary',
      title: 'Inbox',
      description:
        'Amet aperiam cumque delectus eligendi, esse, modi nemo nisi officiis rem repellat sed ulla.',
      class: 'ml-lg-auto',
      bg: '',
      animation: 'fade-up'
    },
    {
      icon: 'clipboard',
      iconClass: 'stroke-primary',
      title: 'Invoicing',
      description:
        'Ad aliquam dicta, eaque eos iusto totam velit. Amet atque dolorum eaque ipsa sed. Aliquid cupiditate.',
      class: 'mt-6n mr-lg-auto',
      bg: '',
      animation: 'fade-up'
    }
  ];

  constructor() {}

  ngOnInit() {}
}
