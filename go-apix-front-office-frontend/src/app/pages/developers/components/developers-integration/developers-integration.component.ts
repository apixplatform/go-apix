import { Component, OnInit } from '@angular/core';
import { faLongArrowAltRight } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'dc-developers-integration',
  templateUrl: './developers-integration.component.html',
  styleUrls: ['./developers-integration.component.scss']
})
export class DevelopersIntegrationComponent implements OnInit {
  longArrowAltRight = faLongArrowAltRight;

  blocks = [
    {
      title: 'Engagement API',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores, consequuntur.'
    },
    {
      title: 'Invoicing API',
      description:
        'Consequuntur fugit minima natus optio quisquam sint sunt? Earum harum in laudantium nobis obcaecati odio.'
    },
    {
      title: 'Reporting API',
      description:
        'Earum harum in laudantium nobis obcaecati odio, praesentium, quis sequi soluta vel veniam.'
    }
  ];

  constructor() {}

  ngOnInit() {}
}
