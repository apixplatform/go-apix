import { Component, OnInit, Input } from '@angular/core';
import { SwiperConfigInterface } from 'ngx-swiper-wrapper';
import {
  faInfoCircle,
  faLongArrowAltRight
} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'dc-slider-card-projects',
  templateUrl: './slider-card-projects.component.html',
  styleUrls: ['./slider-card-projects.component.scss']
})
export class SliderCardProjectsComponent implements OnInit {
  infoCircle = faInfoCircle;
  longArrowAltRight = faLongArrowAltRight;

  @Input()
  liftUp: boolean = true;

  features = [
    {
      title: ['Social ', 'Integration'],
      description: 'Consequuntur ea sapiente ut',
      image: ''
    },
    {
      title: ['Design ', 'Strategy'],
      description: 'Alias eum expedita illo rem!',
      image: ''
    },
    {
      title: ['Save ', 'Money'],
      description: 'Consectetur adipisicing elit',
      image: ''
    },
    {
      title: ['Business ', 'Brain'],
      description: 'Rem repellendus rerum, vel!',
      image: ''
    },
    {
      title: ['Worldwide ', 'Support'],
      description: 'Consectetur adipisicing elit',
      image: ''
    },
    {
      title: ['Social ', 'Settings'],
      description: 'Facilis numquam odio sit amet.',
      image: ''
    },
    {
      title: ['Insightful', 'Statistics'],
      description: 'facere quasi rem suscipit!',
      image: ''
    }
  ];

  config: SwiperConfigInterface = {
    slidesPerView: 4,
    autoplay: {
      delay: 3500,
      disableOnInteraction: false
    },
    loop: true,
    breakpoints: {
      '1024': { slidesPerView: 4, spaceBetween: 40 },
      '992': { slidesPerView: 4, spaceBetween: 15 },
      '768': { slidesPerView: 4.5, spaceBetween: 15 },
      '576': { slidesPerView: 1.5, spaceBetween: 10 }
    },
    navigation: {
      nextEl: '.features-nav-next',
      prevEl: '.features-nav-prev'
    },
    pagination: false
  };

  constructor() {}

  ngOnInit() {}
}
