import { Component, OnInit } from '@angular/core';
import { faLongArrowAltRight } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'dc-home-heading',
  templateUrl: './home-heading.component.html',
  styleUrls: ['./home-heading.component.scss']
})
export class HomeHeadingComponent implements OnInit {
  fa: any = {
    longArrowAltRight: faLongArrowAltRight
  };
  constructor() {}

  ngOnInit() {}
}
