import { Component, OnInit } from '@angular/core';
import { SwiperConfigInterface } from 'ngx-swiper-wrapper';

@Component({
  selector: 'dc-about-team',
  templateUrl: './about-team.component.html',
  styleUrls: ['./about-team.component.scss']
})
export class AboutTeamComponent implements OnInit {
  team: object[] = [
    {
      name: 'Rafael Freeman',
      position: 'Founder & CEO',
      quote: 'Long time ago, this guy started it all.'
    },
    {
      name: 'Aline De Souza',
      position: 'Marketing Director',
      quote: 'The girl that influences our products.'
    },
    {
      name: 'Jayden Gardner',
      position: 'Account Manager',
      quote: 'Keeps all the numbers in place.'
    },
    {
      name: 'Jacobi Edwards',
      position: 'VP of Sales',
      quote: 'The man that leads the Global Sales team.'
    },
    {
      name: 'Allison Fernandez',
      position: 'Client Support',
      quote: 'Need any assistance with the product?'
    },
    {
      name: 'Richard Smith',
      position: 'Lead Developer',
      quote: 'Geek, manager, and manager of geeks.'
    }
  ];

  public config: SwiperConfigInterface = {
    //a11y: true,
    //direction: 'horizontal',
    slidesPerView: 2,
    spaceBetween: 30,
    //keyboard: true,
    //mousewheel: true,
    //scrollbar: false,
    breakpoints: {
      '576': { slidesPerView: 1, spaceBetween: 10, slidesPerGroup: 1 }
    },
    navigation: true,
    pagination: false
  };

  constructor() {}

  ngOnInit() {}
}
