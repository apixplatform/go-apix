import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'dc-about-customers',
  templateUrl: './about-customers.component.html',
  styleUrls: ['./about-customers.component.scss']
})
export class AboutCustomersComponent implements OnInit {
  images: object[] = [
    { image: 1, margin: 6, aos: 'fade-right' },
    { image: 2, margin: 4, aos: 'fade-down-right' },
    { image: 3, margin: 5, aos: 'fade-up-right' },
    { image: 4, margin: 6, aos: 'fade-up' },
    { image: 5, margin: 4, aos: 'fade-down-left' },
    { image: 1, margin: 5, aos: 'fade-up-left' },
    { image: 2, margin: 6, aos: 'fade-left' }
  ];

  constructor() {}

  ngOnInit() {}
}
