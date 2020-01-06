import { Component, OnInit } from '@angular/core';
import { faLongArrowAltRight } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'dc-faqs-other-channels',
  templateUrl: './faqs-other-channels.component.html',
  styleUrls: ['./faqs-other-channels.component.scss']
})
export class FaqsOtherChannelsComponent implements OnInit {
  longArrowAltRight = faLongArrowAltRight;

  constructor() {}

  ngOnInit() {}
}
