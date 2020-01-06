import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'dc-form-register-simple-inline',
  templateUrl: './form-register-simple-inline.component.html',
  styleUrls: ['./form-register-simple-inline.component.scss']
})
export class FormRegisterSimpleInlineComponent implements OnInit {
  @Input()
  label: string = 'Register';

  @Input()
  inputClass: string;

  constructor() {}

  ngOnInit() {}
}
