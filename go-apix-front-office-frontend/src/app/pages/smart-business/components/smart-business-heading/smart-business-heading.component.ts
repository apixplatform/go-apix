import { Component, OnInit } from '@angular/core';
import { faTag } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'dc-smart-business-heading',
  templateUrl: './smart-business-heading.component.html',
  styleUrls: ['./smart-business-heading.component.scss']
})
export class SmartBusinessHeadingComponent implements OnInit {
  tag = faTag;

  constructor() {}

  ngOnInit() {}
}
