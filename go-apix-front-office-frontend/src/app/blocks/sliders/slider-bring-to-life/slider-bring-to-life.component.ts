import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'dc-slider-bring-to-life',
  templateUrl: './slider-bring-to-life.component.html',
  styleUrls: ['./slider-bring-to-life.component.scss']
})
export class SliderBringToLifeComponent implements OnInit {
  elements = [
    { label: 'Clean inbox UI design', img: 'inbox', icon: 'mail' },
    {
      label: 'Outstanding calendar UI design',
      img: 'calendar',
      icon: 'calendar'
    },
    {
      label: 'Draft purchases with the invoice feature',
      img: 'invoice',
      icon: 'file'
    }
  ];

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
