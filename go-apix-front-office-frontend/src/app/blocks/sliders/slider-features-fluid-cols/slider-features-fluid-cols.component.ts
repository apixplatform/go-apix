import { Component, OnInit } from '@angular/core';
import { faLongArrowAltRight } from '@fortawesome/free-solid-svg-icons';
import { SwiperConfigInterface } from 'ngx-swiper-wrapper';

@Component({
  selector: 'dc-slider-features-fluid-cols',
  templateUrl: './slider-features-fluid-cols.component.html',
  styleUrls: ['./slider-features-fluid-cols.component.scss']
})
export class SliderFeaturesFluidColsComponent implements OnInit {
  longArrowAltRight = faLongArrowAltRight;

  features = [
    { title: 'Dashboard', img: '4' },
    { title: 'Invoicing', img: 'invoice' },
    { title: 'Calendar', img: 'calendar' },
    { title: 'Inbox', img: 'inbox' }
  ];

  items = [
    {
      icon: 'activity',
      title: 'Real time activity',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ea expedita illo ipsum labore maxime molestias mollitia'
    },
    {
      icon: 'upload-cloud',
      title: 'Instant deploy',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur, cupiditate debitis dolorem error expedita'
    }
  ];

  slidingConfig: SwiperConfigInterface = {
    slidesPerView: 1,
    spaceBetween: 0,
    autoplay: false,
    navigation: false,
    pagination: {
      el: '.tools-pagination',
      clickable: true,
      dynamicBullets: false
    }
  };

  fadingConfig: SwiperConfigInterface = {
    effect: 'fade',
    slidesPerView: 1,
    spaceBetween: 0,
    autoplay: false,
    navigation: false
  };

  currentSlide: number = 0;

  constructor() {}

  ngOnInit() {}

  updateSlider(currentSlide) {
    this.currentSlide = currentSlide;
  }

  public onIndexChange(index: number): void {
    this.currentSlide = index;
  }
}
