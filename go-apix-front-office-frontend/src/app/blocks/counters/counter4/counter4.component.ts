import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'dc-counter4',
  templateUrl: './counter4.component.html',
  styleUrls: ['./counter4.component.scss']
})
export class Counter4Component implements OnInit {
  counters = [
    { icon: 'box', value: 273, title: 'Components' },
    { icon: 'download-cloud', value: 654, title: 'Downloads' },
    { icon: 'settings', value: 7941, title: 'Followers' },
    { icon: 'award', value: 654, title: 'New users' }
  ];
  constructor() {}

  ngOnInit() {}
}
