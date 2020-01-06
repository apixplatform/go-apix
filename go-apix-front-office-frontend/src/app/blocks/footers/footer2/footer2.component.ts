import { Component, OnInit } from '@angular/core';
import {
  faFacebookF,
  faTwitter,
  faInstagram,
  faLinkedinIn
} from '@fortawesome/free-brands-svg-icons';
import { faRss } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'dc-footer2',
  templateUrl: './footer2.component.html',
  styleUrls: ['./footer2.component.scss']
})
export class Footer2Component implements OnInit {
  fa = {
    facebookF: faFacebookF,
    twitter: faTwitter,
    instagram: faInstagram,
    linkedinIn: faLinkedinIn,
    rss: faRss
  };

  constructor() {}

  ngOnInit() {}
}
