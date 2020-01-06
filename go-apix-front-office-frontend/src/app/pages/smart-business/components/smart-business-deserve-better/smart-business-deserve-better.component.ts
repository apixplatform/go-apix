import { Component, OnInit } from '@angular/core';
import { faPaperPlane, faHeart } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'dc-smart-business-deserve-better',
  templateUrl: './smart-business-deserve-better.component.html',
  styleUrls: ['./smart-business-deserve-better.component.scss']
})
export class SmartBusinessDeserveBetterComponent implements OnInit {
  cards = [
    {
      icon: faPaperPlane,
      title: 'easy to integrate',
      description:
        'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium.'
    },
    {
      icon: faHeart,
      title: 'seamlessly solution',
      description:
        'Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis'
    }
  ];
  constructor() {}

  ngOnInit() {}
}
