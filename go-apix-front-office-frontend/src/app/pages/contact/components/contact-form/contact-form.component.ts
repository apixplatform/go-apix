import { Component, OnInit } from '@angular/core';
import {
  faMapMarker,
  faPhone,
  faEnvelope
} from '@fortawesome/free-solid-svg-icons';
import {
  faFacebook,
  faTwitter,
  faInstagram
} from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'dc-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.scss']
})
export class ContactFormComponent implements OnInit {
  fa = {
    mapMarker: faMapMarker,
    phone: faPhone,
    envelope: faEnvelope,
    facebook: faFacebook,
    twitter: faTwitter,
    instagram: faInstagram
  };

  constructor() {}

  ngOnInit() {}
}
