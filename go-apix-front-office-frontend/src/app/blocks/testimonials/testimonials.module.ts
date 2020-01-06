import { NgModule } from '@angular/core';
import { SwiperModule } from 'ngx-swiper-wrapper';
import { SharedModule } from '@app/shared';

import { TestimonialSimpleSliderComponent } from './testimonial-simple-slider/testimonial-simple-slider.component';
import { TestimonialSimpleSliderBoxedComponent } from './testimonial-simple-slider-boxed/testimonial-simple-slider-boxed.component';
import { TestimonialsSliderComponent } from './testimonials-slider/testimonials-slider.component';
import { TestimonialSimpleTextLeftComponent } from './testimonial-simple-text-left/testimonial-simple-text-left.component';
import { TestimonialSimpleTextRightComponent } from './testimonial-simple-text-right/testimonial-simple-text-right.component';
import { TestimonialWorldMapComponent } from './testimonial-world-map/testimonial-world-map.component';
import { TestimonialSingleBoxedComponent } from './testimonial-single-boxed/testimonial-single-boxed.component';
import { TestimonialSkewedSliderComponent } from './testimonial-skewed-slider/testimonial-skewed-slider.component';

@NgModule({
  declarations: [
    TestimonialSimpleSliderComponent,
    TestimonialSimpleSliderBoxedComponent,
    TestimonialsSliderComponent,
    TestimonialSimpleTextLeftComponent,
    TestimonialSimpleTextRightComponent,
    TestimonialWorldMapComponent,
    TestimonialSingleBoxedComponent,
    TestimonialSkewedSliderComponent
  ],
  imports: [SwiperModule, SharedModule],
  exports: [
    TestimonialSimpleSliderComponent,
    TestimonialSimpleSliderBoxedComponent,
    TestimonialSimpleTextLeftComponent,
    TestimonialSimpleTextRightComponent,
    TestimonialWorldMapComponent,
    TestimonialSingleBoxedComponent,
    TestimonialSkewedSliderComponent
  ]
})
export class TestimonialsModule {}
