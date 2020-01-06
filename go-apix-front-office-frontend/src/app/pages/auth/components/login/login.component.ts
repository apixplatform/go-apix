import { Component, OnInit } from '@angular/core';
import {
  faLongArrowAltRight,
  faLock,
  faUser
} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'dc-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  fa: any = {
    longArrowAltRight: faLongArrowAltRight,
    lock: faLock,
    user: faUser
  };

  constructor() {}

  ngOnInit() {}
}
