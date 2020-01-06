import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'dc-business-solutions-start-business',
  templateUrl: './business-solutions-start-business.component.html',
  styleUrls: ['./business-solutions-start-business.component.scss']
})
export class BusinessSolutionsStartBusinessComponent implements OnInit {
  features = [
    {
      title: 'Perfect for modern and growing Apps & Startups',
      icon: 'arrow-right'
    },
    {
      title: 'Predesigned growing set of modern web components',
      icon: 'arrow-right'
    },
    {
      title: 'Modern & eye-catching design to enchant your visitors',
      icon: 'arrow-right'
    },
    {
      title: "Focus on your business, don't worry about your website",
      icon: 'arrow-right'
    }
  ];

  constructor() {}

  ngOnInit() {}
}
