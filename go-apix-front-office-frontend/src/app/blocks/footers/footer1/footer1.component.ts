import { Component, OnInit } from '@angular/core';
import {
  faFacebook,
  faTwitter,
  faInstagram
} from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'dc-footer1',
  templateUrl: './footer1.component.html',
  styleUrls: ['./footer1.component.scss']
})
export class Footer1Component implements OnInit {
  fa = {
    faFacebook: faFacebook,
    faTwitter: faTwitter,
    faInstagram: faInstagram
  };

  constructor() {}

  ngOnInit() {}
}
