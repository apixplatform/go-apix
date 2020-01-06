import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'dc-integration-built-tech',
  templateUrl: './integration-built-tech.component.html',
  styleUrls: ['./integration-built-tech.component.scss']
})
export class IntegrationBuiltTechComponent implements OnInit {
  stacks = [
    { name: 'Javascript', image: 'javascript' },
    { name: 'Javascript', image: 'es6' },
    { name: 'Styles', image: 'node-sass' }
  ];
  items = [
    { icon: 'activity', title: 'Activity', description: 'Get instant insight' },
    {
      icon: 'upload-cloud',
      title: 'Deploy',
      description: 'Deploy your project'
    },
    { icon: 'zap', title: 'Fast', description: 'Development lighting fast' },
    { icon: 'hexagon', title: 'Technology', description: 'Ultimate technology' }
  ];

  constructor() {}

  ngOnInit() {}
}
