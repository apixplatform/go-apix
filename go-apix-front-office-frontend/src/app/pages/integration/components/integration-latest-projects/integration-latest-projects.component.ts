import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'dc-integration-latest-projects',
  templateUrl: './integration-latest-projects.component.html',
  styleUrls: ['./integration-latest-projects.component.scss']
})
export class IntegrationLatestProjectsComponent implements OnInit {
  images = [
    { name: 'Image', class: ' rounded-top-left' },
    { name: 'Image' },
    { name: 'Image', class: ' rounded-top-right' },
    { name: 'Image', class: ' rounded-bottom-left' },
    { name: 'Image' },
    { name: 'Image', class: ' rounded-bottom-right' }
  ];
  constructor() {}

  ngOnInit() {}
}
