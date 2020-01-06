import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'dc-feather',
  templateUrl: './feather.component.html',
  styleUrls: ['./feather.component.scss']
})
export class FeatherComponent implements OnInit {
  @Input() name!: string;
  @Input() iconClass: string;
  @Input() size: number = 36;

  constructor() {}

  ngOnInit() {}
}
