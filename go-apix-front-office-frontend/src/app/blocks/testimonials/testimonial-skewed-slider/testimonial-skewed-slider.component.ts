import { Component, OnInit } from '@angular/core';
import { SwiperConfigInterface } from 'ngx-swiper-wrapper';

@Component({
  selector: 'dc-testimonial-skewed-slider',
  templateUrl: './testimonial-skewed-slider.component.html',
  styleUrls: ['./testimonial-skewed-slider.component.scss']
})
export class TestimonialSkewedSliderComponent implements OnInit {
  testimonials = [
    {
      logo: 1,
      customer: { name: 'Jane Doe', picture: 3 },
      testimonial:
        'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Atque, quas sunt enim tempore minima tenetur voluptatem provident. Incidunt accusantium.'
    },
    {
      logo: 2,
      customer: { name: 'John Doe', picture: 2 },
      testimonial:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo harum eaque voluptatibus est obcaecati exercitationem maxime illo nihil voluptatem.'
    },
    {
      logo: 1,
      customer: { name: 'Mauro', picture: 5 },
      testimonial:
        'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Atque, quas sunt enim tempore minima tenetur voluptatem provident. Incidunt accusantium.'
    },
    {
      logo: 2,
      customer: { name: '5studios team', picture: 6 },
      testimonial:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo harum eaque voluptatibus est obcaecati exercitationem maxime illo nihil voluptatem.'
    }
  ];

  fadingConfig: SwiperConfigInterface = {
    effect: 'fade',
    slidesPerView: 1,
    spaceBetween: 0,
    autoplay: false,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev'
    },
    pagination: false
  };

  slidingConfig: SwiperConfigInterface = {
    slidesPerView: 1,
    spaceBetween: 0,
    autoplay: false,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev'
    },
    pagination: false
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
