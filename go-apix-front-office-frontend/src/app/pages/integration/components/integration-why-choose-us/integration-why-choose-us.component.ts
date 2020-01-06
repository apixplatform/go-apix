import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'dc-integration-why-choose-us',
  templateUrl: './integration-why-choose-us.component.html',
  styleUrls: ['./integration-why-choose-us.component.scss']
})
export class IntegrationWhyChooseUsComponent implements OnInit {
  features = [
    {
      name: 'Integrations',
      icon: 'box',
      description:
        'We designed DashCore to be able to integrate with additional templates designed by our team'
    },
    {
      name: 'Components',
      icon: 'layers',
      description:
        'All its components share a core styling, this will allow to share multiple components where you need'
    }
  ];

  constructor() {}

  ngOnInit() {}
}
