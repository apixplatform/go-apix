import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TestimonialSimpleSliderComponent } from './testimonial-simple-slider.component';

describe('TestimonialSimpleSliderComponent', () => {
  let component: TestimonialSimpleSliderComponent;
  let fixture: ComponentFixture<TestimonialSimpleSliderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [TestimonialSimpleSliderComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestimonialSimpleSliderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
