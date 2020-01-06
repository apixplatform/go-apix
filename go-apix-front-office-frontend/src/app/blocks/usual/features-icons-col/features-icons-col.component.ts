import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'dc-features-icons-col',
  templateUrl: './features-icons-col.component.html',
  styleUrls: ['./features-icons-col.component.scss']
})
export class FeaturesIconsColComponent implements OnInit {
  elements = [
    { icon: 'image', title: 'Easily theme-able' },
    { icon: 'sliders', title: 'Professional tools' },
    {
      icon: 'target',
      title: 'Ready-to-use content'
    }
  ];

  constructor() {}

  ngOnInit() {}
}
