import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'dc-corporate-do-business',
  templateUrl: './corporate-do-business.component.html',
  styleUrls: ['./corporate-do-business.component.scss']
})
export class CorporateDoBusinessComponent implements OnInit {
  cards = [
    { img: 'time', title: 'Save time', animation: 'fade-up' },
    { img: 'done', title: 'Get things done', animation: 'fade-up' },
    { img: 'grow', title: 'Grow your business', animation: 'fade-up' },
    { img: 'goals', title: 'Accomplish your goals', animation: 'fade-up' }
  ];

  constructor() {}

  ngOnInit() {}
}
