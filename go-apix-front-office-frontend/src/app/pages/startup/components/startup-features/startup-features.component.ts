import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'dc-startup-features',
  templateUrl: './startup-features.component.html',
  styleUrls: ['./startup-features.component.scss']
})
export class StartupFeaturesComponent implements OnInit {
  elements = [
    { icon: 'lock', title: 'Security included' },
    { icon: 'wind', title: 'Easily theme-able' },
    { icon: 'box', title: 'Plugins included' },
    { icon: 'sliders', title: 'Professional tools' },
    { icon: 'target', title: 'Ready-to-use content' },
    { icon: 'bar-chart', title: 'Powerful analytics' }
  ];

  constructor() {}

  ngOnInit() {}
}
