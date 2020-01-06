import { Component, OnInit } from '@angular/core';
import {
  faLongArrowAltRight,
  faEnvelope
} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'dc-forgot',
  templateUrl: './forgot.component.html',
  styleUrls: ['./forgot.component.scss']
})
export class ForgotComponent implements OnInit {
  fa: any = {
    longArrowAltRight: faLongArrowAltRight,
    envelope: faEnvelope
  };

  constructor() {}

  ngOnInit() {}
}
