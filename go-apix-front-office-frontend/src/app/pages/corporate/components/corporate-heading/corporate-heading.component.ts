import { Component, OnInit } from '@angular/core';
import { faTag } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'dc-corporate-heading',
  templateUrl: './corporate-heading.component.html',
  styleUrls: ['./corporate-heading.component.scss']
})
export class CorporateHeadingComponent implements OnInit {
  tag = faTag;

  constructor() {}

  ngOnInit() {}
}
