import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'dc-trust-us',
  templateUrl: './trust-us.component.html',
  styleUrls: ['./trust-us.component.scss']
})
export class TrustUsComponent implements OnInit {
  @Input()
  title: string;

  @Input()
  containerClass: string;

  @Input()
  edge: string;

  @Input()
  background: string;

  constructor() {}

  ngOnInit() {}
}
