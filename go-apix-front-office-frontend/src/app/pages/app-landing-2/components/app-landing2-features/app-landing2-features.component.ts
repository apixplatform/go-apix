import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'dc-app-landing2-features',
  templateUrl: './app-landing2-features.component.html',
  styleUrls: ['./app-landing2-features.component.scss']
})
export class AppLanding2FeaturesComponent implements OnInit {
  features = [
    {
      icon: 'pen-tool',
      title: 'themes made easy',
      description:
        'Our astonishing style structure makes your customization process a breeze'
    },
    {
      icon: 'zap',
      title: 'powerful design',
      description:
        "With ready-to-use content you'll deploy your implementation in no time"
    },
    {
      icon: 'star',
      title: 'creative content',
      description:
        'Repetitive styles all across the web? Nevermind that! Shine with unique styles'
    }
  ];

  constructor() {}

  ngOnInit() {}
}
