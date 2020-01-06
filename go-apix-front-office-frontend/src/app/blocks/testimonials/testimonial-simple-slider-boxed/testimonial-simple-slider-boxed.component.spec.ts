import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TestimonialSimpleSliderBoxedComponent } from './testimonial-simple-slider-boxed.component';

describe('TestimonialSimpleSliderBoxedComponent', () => {
  let component: TestimonialSimpleSliderBoxedComponent;
  let fixture: ComponentFixture<TestimonialSimpleSliderBoxedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [TestimonialSimpleSliderBoxedComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestimonialSimpleSliderBoxedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
