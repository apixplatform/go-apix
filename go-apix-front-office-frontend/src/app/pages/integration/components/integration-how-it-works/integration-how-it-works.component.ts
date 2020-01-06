import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'dc-integration-how-it-works',
  templateUrl: './integration-how-it-works.component.html',
  styleUrls: ['./integration-how-it-works.component.scss']
})
export class IntegrationHowItWorksComponent implements OnInit {
  elements = [
    {
      icon: 'plan',
      title: 'Choose a plan',
      description:
        'Ab ad aliquam assumenda beatae commodi distinctio dolore dolorum earum error et, exercitationem'
    },
    {
      icon: 'payment',
      title: 'Payment method',
      description:
        'Blanditiis cumque, eius error est et exercitationem, explicabo hic natus nobis odit porro quia'
    },
    {
      icon: 'work',
      title: "Let's work",
      description:
        'A animi aperiam cupiditate eum incidunt, magni mollitia nam nemo non officia omnis, quasi quisquam'
    }
  ];
  constructor() {}

  ngOnInit() {}
}
