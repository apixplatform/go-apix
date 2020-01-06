import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'dc-app-landing-twin-phone-left-list',
  templateUrl: './app-landing-twin-phone-left-list.component.html',
  styleUrls: ['./app-landing-twin-phone-left-list.component.scss']
})
export class AppLandingTwinPhoneLeftListComponent implements OnInit {
  elements: object[] = [
    { icon: 'mail', title: 'Mail Management' },
    { icon: 'users', title: 'Customers Tracking' },
    { icon: 'bar-chart', title: 'Advanced Reporting' }
  ];
  constructor() {}

  ngOnInit() {}
}
