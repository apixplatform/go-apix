import { Component, OnInit } from '@angular/core';
import {
  faFacebook,
  faTwitter,
  faLinkedinIn
} from '@fortawesome/free-brands-svg-icons';

import { environment } from '@env/environment';

@Component({
  selector: 'dc-auth-layout',
  templateUrl: './auth-layout.component.html',
  styleUrls: ['./auth-layout.component.scss']
})
export class AuthLayoutComponent implements OnInit {
  fa: any = {
    facebook: faFacebook,
    twitter: faTwitter,
    linkedin: faLinkedinIn
  };
  env: any = environment;

  constructor() {}

  ngOnInit() {}
}
