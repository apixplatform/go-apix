import { Component, OnInit } from '@angular/core';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'dc-faqs-sidebar',
  templateUrl: './faqs-sidebar.component.html',
  styleUrls: ['./faqs-sidebar.component.scss']
})
export class FaqsSidebarComponent implements OnInit {
  search = faSearch;

  constructor() {}

  ngOnInit() {}
}
