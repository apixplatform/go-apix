import { Component, OnInit } from '@angular/core';
import {
  faLongArrowAltRight,
  faLongArrowAltLeft,
  faQuoteLeft
} from '@fortawesome/free-solid-svg-icons';
import { SwiperConfigInterface } from 'ngx-swiper-wrapper';

@Component({
  selector: 'dc-testimonial-single-boxed',
  templateUrl: './testimonial-single-boxed.component.html',
  styleUrls: ['./testimonial-single-boxed.component.scss']
})
export class TestimonialSingleBoxedComponent implements OnInit {
  fa = {
    longArrowAltRight: faLongArrowAltRight,
    longArrowAltLeft: faLongArrowAltLeft,
    quoteLeft: faQuoteLeft
  };

  reviews = [
    {
      author: 'Jane Doe',
      title: ['Social ', 'Integration'],
      description: '',
      image: ''
    },
    {
      author: 'Lorem Team',
      title: ['Design ', 'Strategy'],
      description: '',
      image: ''
    },
    {
      author: 'Ipsum Team',
      title: ['Save ', 'Money'],
      description: '',
      image: ''
    },
    {
      author: 'Priscilla Campbell',
      title: ['Business ', 'Brain'],
      description: '',
      image: ''
    },
    {
      author: 'Edith Fisher',
      title: ['Worldwide ', 'Support'],
      description: '',
      image: ''
    },
    {
      author: 'Kenneth Reyes',
      title: ['Social ', 'Settings'],
      description: '',
      image: ''
    },
    {
      author: 'Daniel Hamilton',
      title: ['Insightful', 'Statistics'],
      description: '',
      image: ''
    }
  ];

  config: SwiperConfigInterface = {
    slidesPerView: 1,
    autoplay: false,
    navigation: {
      nextEl: '.reviews-nav-next',
      prevEl: '.reviews-nav-prev'
    },
    pagination: false
  };

  constructor() {}

  ngOnInit() {}
}
