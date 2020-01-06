import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'dc-automate-social-heading',
  templateUrl: './automate-social-heading.component.html',
  styleUrls: ['./automate-social-heading.component.scss']
})
export class AutomateSocialHeadingComponent implements OnInit {
  bubbles = [
    { icon: 'like' },
    { icon: 'smile' },
    { icon: 'heart' },
    { icon: 'heart' },
    { icon: 'smile' },
    { icon: 'like' },
    { icon: 'smile' },
    { icon: 'heart' },

    { icon: 'smile' },
    { icon: 'like' },
    { icon: 'like' },
    { icon: 'heart' },
    { icon: 'like' },
    { icon: 'heart' },
    { icon: 'smile' },
    { icon: 'like' }
  ];
  constructor() {}

  ngOnInit() {}
}
