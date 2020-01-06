import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'dc-about-solutions',
  templateUrl: './about-solutions.component.html',
  styleUrls: ['./about-solutions.component.scss']
})
export class AboutSolutionsComponent implements OnInit {
  features: object[] = [
    {
      icon: 'box',
      title: 'Full Code',
      description:
        'DashCore comes with fully documented HTML, SASS, JS, PHP code, all in a well organized and structured way.'
    },
    {
      icon: 'settings',
      title: 'Free Updates',
      description:
        "You'll get lifetime free updates as we improve or add new features."
    },
    {
      icon: 'award',
      title: 'Premium Support',
      description:
        'In case you need it, We got you covered, with our premium quality fast support service.'
    }
  ];

  constructor() {}

  ngOnInit() {}
}
