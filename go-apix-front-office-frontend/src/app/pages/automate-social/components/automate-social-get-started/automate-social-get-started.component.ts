import { Component, OnInit } from '@angular/core';
import { faPlay } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'dc-automate-social-get-started',
  templateUrl: './automate-social-get-started.component.html',
  styleUrls: ['./automate-social-get-started.component.scss']
})
export class AutomateSocialGetStartedComponent implements OnInit {
  play = faPlay;

  constructor() {}

  ngOnInit() {}
}
