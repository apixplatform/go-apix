import { Component, OnInit } from '@angular/core';
import { faDesktop } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'dc-home-selection',
  templateUrl: './home-selection.component.html',
  styleUrls: ['./home-selection.component.scss']
})
export class HomeSelectionComponent implements OnInit {
  demos: object = [
    {
      title: 'Business Solutions',
      urls: [
        {
          link: 'business-solutions',
          icon: faDesktop,
          text: 'Demo'
        }
      ],
      cover: '12',
      btn: { class: 'warning' },
      new: true
    },
    {
      title: 'App Landing',
      urls: [
        {
          link: 'app-landing-2',
          icon: faDesktop,
          text: 'Demo'
        }
      ],
      cover: '10',
      btn: { class: 'warning' },
      new: true
    },
    {
      title: 'Integration',
      urls: [
        {
          link: 'integration',
          icon: faDesktop,
          text: 'Demo'
        }
      ],
      cover: '11',
      btn: { class: 'warning' },
      new: true
    },

    {
      title: 'Corporate',
      urls: [
        {
          link: 'corporate',
          icon: faDesktop,
          text: 'Demo'
        }
      ],
      cover: '1',
      btn: { class: 'warning' }
    },
    {
      title: 'Startup',
      urls: [
        {
          link: 'startup',
          icon: faDesktop,
          text: 'Demo'
        }
      ],
      cover: '2',
      btn: { class: 'warning' }
    },
    {
      title: 'Saas',
      urls: [
        {
          link: 'saas',
          icon: faDesktop,
          text: 'Demo'
        }
      ],
      cover: '3',
      btn: { class: 'warning' }
    },
    {
      title: 'Developer',
      urls: [
        {
          link: 'developers',
          icon: faDesktop,
          text: 'Demo'
        }
      ],
      cover: '4',
      btn: { class: 'warning' }
    },
    {
      title: 'Payment',
      urls: [
        {
          link: 'online-payment',
          icon: faDesktop,
          text: 'Demo'
        }
      ],
      cover: '6',
      btn: { class: 'warning' }
    },
    {
      title: 'Business',
      urls: [
        {
          link: 'smart-business',
          icon: faDesktop,
          text: 'Demo'
        }
      ],
      cover: '7',
      btn: { class: 'warning' }
    },
    {
      title: 'Marketing',
      urls: [
        {
          link: 'automate-social',
          icon: faDesktop,
          text: 'Demo'
        }
      ],
      cover: '8',
      btn: { class: 'warning' }
    },
    {
      title: 'Social',
      urls: [
        {
          link: 'social',
          icon: faDesktop,
          text: 'Demo'
        }
      ],
      cover: '5',
      btn: { class: 'warning' }
    },
    {
      title: 'App Landing',
      urls: [
        {
          link: 'app-landing',
          icon: faDesktop,
          text: 'Demo'
        }
      ],
      cover: '9',
      btn: { class: 'warning' }
    }
  ];

  constructor() {}

  ngOnInit() {}
}
