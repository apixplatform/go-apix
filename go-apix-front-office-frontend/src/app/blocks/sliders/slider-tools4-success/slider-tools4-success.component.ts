import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'dc-slider-tools4-success',
  templateUrl: './slider-tools4-success.component.html',
  styleUrls: ['./slider-tools4-success.component.scss']
})
export class SliderTools4SuccessComponent implements OnInit {
  currentSlide = 0;

  elements = [
    {
      title: 'Dashboard',
      description:
        'Adipisci atque, corporis dicta doloribus eius enim esse fugit iure non quaerat, quod.',
      img: '4'
    },
    {
      title: 'Inbox',
      description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
      img: '1'
    },
    {
      title: 'Calendar',
      description:
        'Aliquid aspernatur, assumenda cumque esse, excepturi magni mollitia.',
      img: '2'
    },
    {
      title: 'DataTables',
      description:
        'Accusamus cum debitis earum, ex illum impedit in incidunt ipsa.',
      img: 'datatables'
    }
  ];

  constructor() {}

  ngOnInit() {}

  updateSlider(currentSlide) {
    this.currentSlide = currentSlide;
  }

  public onIndexChange(index: number): void {
    this.currentSlide = index;
  }
}
