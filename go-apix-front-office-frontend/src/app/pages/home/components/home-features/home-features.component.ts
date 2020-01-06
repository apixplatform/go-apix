import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'dc-home-features',
  templateUrl: './home-features.component.html',
  styleUrls: ['./home-features.component.scss']
})
export class HomeFeaturesComponent implements OnInit {
  blocks: object = [
    {
      title: 'Boostrap 4',
      description:
        'Powered with one of the most popular front-end CSS toolkits.',
      icon: 'bootstrap',
      class: 'bg-primary shadow-3'
    },
    {
      title: 'Angular',
      description:
        'One framework. Mobile & desktopModule Bundler for modern JavaScript applications.',
      icon: 'angular',
      class: 'gradient gradient-blue-purple shadow-4'
    },
    {
      title: 'jQuery',
      description: 'Flat HTML+jQuery old-fashion variations.',
      icon: 'jquery',
      class: 'bg-info shadow-4'
    }
  ];

  constructor() {}

  ngOnInit() {}
}
