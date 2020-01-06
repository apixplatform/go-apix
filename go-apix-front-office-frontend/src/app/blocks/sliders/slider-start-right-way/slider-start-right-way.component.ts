import { Component, OnInit } from '@angular/core';
import { faLongArrowAltRight } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'dc-slider-start-right-way',
  templateUrl: './slider-start-right-way.component.html',
  styleUrls: ['./slider-start-right-way.component.scss']
})
export class SliderStartRightWayComponent implements OnInit {
  elements = ['Inbox', 'Calendar', 'Invoicing', 'Reporting'];
  longArrowAltRight = faLongArrowAltRight;
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
