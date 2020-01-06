import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'dc-app-landing-twin-phone-right-list',
  templateUrl: './app-landing-twin-phone-right-list.component.html',
  styleUrls: ['./app-landing-twin-phone-right-list.component.scss']
})
export class AppLandingTwinPhoneRightListComponent implements OnInit {
  boxes: object[] = [
    { icon: 'code', title: 'Development', description: '' },
    { icon: 'star', title: 'Web Design', description: '' },
    { icon: 'wind', title: 'Do Magic', description: '' },
    { icon: 'clock', title: 'Save Time', description: '' }
  ];
  constructor() {}

  ngOnInit() {}
}
