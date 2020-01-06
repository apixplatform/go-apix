import { Component, OnInit } from '@angular/core';
import {
  faEnvelope,
  faChartLine,
  faCalendarAlt,
  faFileInvoice,
  faBullseye
} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'dc-social-services',
  templateUrl: './social-services.component.html',
  styleUrls: ['./social-services.component.scss']
})
export class SocialServicesComponent implements OnInit {
  cards = [
    {
      icon: { name: faEnvelope, class: 'text-info' },
      title: { text: 'Inbox', class: '' }
    },
    {
      icon: { name: faChartLine, class: '' },
      title: { text: 'Reports', class: '' },
      class: ' text-contrast shadow-lg bg-info'
    },
    {
      icon: { name: faCalendarAlt, class: 'text-danger' },
      title: { text: 'Calendar', class: '' }
    },

    {
      icon: { name: faFileInvoice, class: 'text-success' },
      title: { text: 'Invoices' }
    },
    {
      icon: { name: faBullseye, class: 'text-primary' },
      title: { text: 'Content' }
    }
  ];

  constructor() {}

  ngOnInit() {}
}
