import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'dc-app-landing2-popping-highlight',
  templateUrl: './app-landing2-popping-highlight.component.html',
  styleUrls: ['./app-landing2-popping-highlight.component.scss']
})
export class AppLanding2PoppingHighlightComponent implements OnInit {
  items = [
    {
      icon: 'mail',
      title: 'Mail Management',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet aut autem eum laudantium quas recusandae repellendus voluptate.'
    },
    {
      icon: 'map',
      title: 'Customers Tracking',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet aut autem eum laudantium quas recusandae repellendus voluptate.'
    },
    {
      icon: 'bar-chart',
      title: 'Advanced Reporting',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet aut autem eum laudantium quas recusandae repellendus voluptate.'
    }
  ];

  constructor() {}

  ngOnInit() {}
}
