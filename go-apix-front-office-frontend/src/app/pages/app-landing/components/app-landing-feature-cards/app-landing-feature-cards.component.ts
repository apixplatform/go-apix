import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'dc-app-landing-feature-cards',
  templateUrl: './app-landing-feature-cards.component.html',
  styleUrls: ['./app-landing-feature-cards.component.scss']
})
export class AppLandingFeatureCardsComponent implements OnInit {
  elements: object[] = [
    {
      icon: 'star',
      title: 'Powerful Design',
      description:
        'Ab ad aliquam assumenda beatae commodi distinctio dolore dolorum earum error et, exercitationem'
    },
    {
      icon: 'camera',
      title: 'Professional Tools',
      description:
        'Blanditiis cumque, eius error est et exercitationem, explicabo hic natus nobis odit porro quia'
    },
    {
      icon: 'sun',
      title: 'Creative Content',
      description:
        'A animi aperiam cupiditate eum incidunt, magni mollitia nam nemo non officia omnis, quasi quisquam'
    }
  ];
  constructor() {}

  ngOnInit() {}
}
