import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'dc-app-landing2-safety',
  templateUrl: './app-landing2-safety.component.html',
  styleUrls: ['./app-landing2-safety.component.scss']
})
export class AppLanding2SafetyComponent implements OnInit {
  items: object[] = [
    {
      icon: 'activity',
      title: 'Real time activity',
      description: "Get instant insight on what's happening in your business"
    },
    {
      icon: 'upload-cloud',
      title: 'Instant deploy',
      description: 'Deploy your project in a fraction of a second, no time!'
    }
  ];

  cards: object[] = [
    { class: 'mt-md-6' },
    { class: '' },
    { class: 'mt-md-6' },
    { class: 'mx-auto mt-md-4n' }
  ];
  constructor() {}

  ngOnInit() {}
}
