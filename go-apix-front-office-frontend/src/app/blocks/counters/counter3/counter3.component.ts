import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'dc-counter3',
  templateUrl: './counter3.component.html',
  styleUrls: ['./counter3.component.scss']
})
export class Counter3Component implements OnInit {
  boxes = [
    {
      value: '954',
      valueCss: 'text-info',
      text: 'Users',
      class: 'mb-3 pr-3',
      bg: 'bg-contrast',
      icon: 'user',
      iconClass: 'stroke-secondary'
    },
    {
      value: '37',
      valueCss: 'text-info',
      text: 'Downloads',
      class: 'mb-3',
      bg: 'bg-contrast',
      icon: 'download-cloud',
      iconClass: 'stroke-secondary'
    },
    {
      value: '19',
      valueCss: 'text-info',
      text: 'Plugins',
      class: 'pr-3',
      bg: 'bg-contrast',
      icon: 'box',
      iconClass: 'stroke-secondary'
    },
    {
      value: '31',
      valueCss: '',
      text: 'Projects',
      bg: 'bg-primary text-contrast',
      icon: 'star',
      iconClass: 'stroke-contrast'
    }
  ];

  constructor() {}

  ngOnInit() {}
}
