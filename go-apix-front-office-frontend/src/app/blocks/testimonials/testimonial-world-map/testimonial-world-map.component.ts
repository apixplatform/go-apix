import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'dc-testimonial-world-map',
  templateUrl: './testimonial-world-map.component.html',
  styleUrls: ['./testimonial-world-map.component.scss']
})
export class TestimonialWorldMapComponent implements OnInit {
  reviews = [
    { position: { left: 'calc(50% - 40px)', top: '75px' } },
    { position: { left: 0, top: '140px' } },
    { position: { left: 'calc(100% - 80px)', top: '300px' } },
    { position: { left: 'calc(100% - 80px)', top: '200px' } },
    { position: { left: '50%', top: '63%' } },
    { position: { left: '27%', top: '30%' } },
    { position: { left: '27%', top: '54%' } }
  ];

  currentSlide: number = 0;

  constructor() {}

  ngOnInit() {}

  updateSlider(currentSlide) {
    this.currentSlide = currentSlide;
    console.log('cs', currentSlide);
  }

  public onIndexChange(index: number): void {
    this.currentSlide = index;
  }
}
