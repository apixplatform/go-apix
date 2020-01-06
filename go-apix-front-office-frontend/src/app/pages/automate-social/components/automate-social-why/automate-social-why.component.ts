import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'dc-automate-social-why',
  templateUrl: './automate-social-why.component.html',
  styleUrls: ['./automate-social-why.component.scss']
})
export class AutomateSocialWhyComponent implements OnInit {
  features = [
    {
      name: 'Integrations',
      icon: 'cloud',
      color: 'info',
      description: 'Aut debitis deserunt ea explicabo hic id incidunt, minus'
    },
    {
      name: 'Payments',
      icon: 'dollar-sign',
      color: 'success',
      description: 'Amet assumenda aut consequatur, corporis dolorum ea esse'
    },
    {
      name: 'Marketing',
      icon: 'thumbs-up',
      color: 'alternate',
      description: 'Aliquam amet assumenda debitis dicta distinctio eaque enim'
    },
    {
      name: 'Analytics',
      icon: 'pie-chart',
      color: 'danger',
      description: 'Accusantium consequuntur eaque eius itaque labore, neque'
    }
  ];

  constructor() {}

  ngOnInit() {}
}
