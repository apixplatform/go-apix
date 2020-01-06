import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'dc-badge',
  templateUrl: './badge.component.html',
  styleUrls: ['./badge.component.scss']
})
export class BadgeComponent implements OnInit {
  @Input() bg: string;
  @Input() text: string = 'contrast';
  @Input() small: boolean = true;

  constructor() {}

  ngOnInit() {}
}
