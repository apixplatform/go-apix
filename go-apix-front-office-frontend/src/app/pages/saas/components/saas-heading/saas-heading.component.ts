import { Component, OnInit } from '@angular/core';
import { faTag } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'dc-saas-heading',
  templateUrl: './saas-heading.component.html',
  styleUrls: ['./saas-heading.component.scss']
})
export class SaasHeadingComponent implements OnInit {
  tag = faTag;

  constructor() {}

  ngOnInit() {}
}
