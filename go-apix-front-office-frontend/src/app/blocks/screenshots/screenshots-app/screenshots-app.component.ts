import { Component, OnInit } from '@angular/core';
import { SwiperConfigInterface } from 'ngx-swiper-wrapper';

@Component({
  selector: 'dc-screenshots-app',
  templateUrl: './screenshots-app.component.html',
  styleUrls: ['./screenshots-app.component.scss']
})
export class ScreenshotsAppComponent implements OnInit {
  public config: SwiperConfigInterface = {
    slidesPerView: 5,
    spaceBetween: 20,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false
    },
    centeredSlides: true,
    navigation: false,
    pagination: true,
    breakpoints: {
      '1200': { slidesPerView: 5, spaceBetween: 0 },
      '992': { slidesPerView: 3, spaceBetween: 0 },
      '576': { slidesPerView: 2, spaceBetween: 0 }
    }
  };

  constructor() {}

  ngOnInit() {}
}
